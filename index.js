const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, 'apps');
const packagesDir = path.join(__dirname, 'packages');

const baseAppDir = path.join(packagesDir, 'base-app');

// Excluded files
const filesToExclude = [
  '.next',
  '.turbo',
  '.env',
  '.env.dev',
  '.env.tst',
  '.env.prd',
  '.gitignore',
  'package.json',
  'node_modules',
];

// Helper function to copy directory recursively
const copyDirectory = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

// Custom implementation of the copy function using fs-extra
const copy = (src, dest) => {
  if (fs.lstatSync(src).isDirectory()) {
    copyDirectory(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
};

// Iterate over each app
fs.readdirSync(appsDir).forEach((appName) => {
  const appPath = path.join(appsDir, appName);

  // Delete all files and folders within the app directory, except for the specified files to keep
  fs.readdirSync(appPath).forEach((file) => {
    const filePath = path.join(appPath, file);

    if (!filesToExclude.includes(file)) {
      fs.rmSync(filePath, { recursive: true, force: true });
    }
  });

  // Copy all files from the base app directory to the app directory, except for specified files to exclude
  fs.readdirSync(baseAppDir).forEach((file) => {
    if (!filesToExclude.includes(file)) {
      const filePath = path.join(baseAppDir, file);
      copy(filePath, path.join(appPath, file));
    }
  });

  // Read the package.json files for the current app and the base app
  const appPackageFilePath = path.join(appPath, 'package.json');
  const basePackageFilePath = path.join(baseAppDir, 'package.json');

  const { name, version, private } = JSON.parse(
    fs.readFileSync(appPackageFilePath, 'utf8')
  );
  const basePackageJson = JSON.parse(
    fs.readFileSync(basePackageFilePath, 'utf8')
  );

  // Merge the package.json fields, excluding name, version, and private
  const mergedPackageJson = { ...basePackageJson, name, version, private };

  // Write the merged package.json back to the app directory
  fs.writeFileSync(
    appPackageFilePath,
    JSON.stringify(mergedPackageJson, null, 2)
  );
});

console.log('Package.json update and directory copy complete.');

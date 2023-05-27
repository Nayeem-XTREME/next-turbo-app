const path = require('path');
const fs = require('fs-extra');
const dotenv = require('dotenv');

const appsDir = path.join(__dirname, 'apps');
const packagesDir = path.join(__dirname, 'packages');

const baseAppDir = path.join(packagesDir, 'base-app');

// Excluded files
const filesToExclude = [
  '.next',
  '.env',
  '.env.dev',
  '.env.tst',
  '.env.prd',
  '.gitignore',
  'node_modules',
];

// Iterate over each app
fs.readdirSync(appsDir).forEach((appName) => {
  const appPath = path.join(appsDir, appName);

  // Delete all files and folders within the app directory, except for the specified files to keep
  fs.readdirSync(appPath).forEach((file) => {
    const filePath = path.join(appPath, file);

    if (!filesToExclude.includes(file)) {
      fs.removeSync(filePath);
    }
  });

  // Copy all files from the base app directory to the app directory, except for specified files to exclude
  fs.readdirSync(baseAppDir).forEach((file) => {
    if (!filesToExclude.includes(file)) {
      const filePath = path.join(baseAppDir, file);
      fs.copySync(filePath, path.join(appPath, file));
    }
  });

  // Load the .env file for the current app
  const envFilePath = path.join(appPath, '.env.dev');
  const envConfig = dotenv.parse(fs.readFileSync(envFilePath));

  // Update the "name" field in the app's package.json with the value from .env
  const packageFilePath = path.join(appPath, 'package.json');
  const packageJson = fs.readJsonSync(packageFilePath);

  packageJson.name = envConfig.APP_NAME;

  fs.writeJsonSync(packageFilePath, packageJson, { spaces: 2 });
});

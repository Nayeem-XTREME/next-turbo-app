'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

type ImageComponentProps = ImageProps & {
  blur?: boolean;
};

/**
 * Renders an image component with optional blur transition and loading state.
 *
 * @param {ImageComponentProps} alt - The alternative text for the image.
 * @param {boolean} blur - If true, applies a blur transition effect on the image.
 * @param {string} className - The class name(s) to apply to the image component.
 * @param {...rest} rest - Any other valid props for the Image component.
 * @return {JSX.Element} The rendered image component.
 */

const ImageComponent = ({
  alt,
  blur,
  className,
  ...rest
}: ImageComponentProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const blurTransition =
    ' duration-500 ease-in-out' +
    (loading ? ' scale-110 blur-2xl' : ' scale-100 blur-0');

  return (
    <Image
      alt={alt}
      className={(className ? className : '') + (blur ? blurTransition : '')}
      {...(blur && {
        onLoadingComplete: () => setLoading(false),
      })}
      {...rest}
    />
  );
};

export default ImageComponent;

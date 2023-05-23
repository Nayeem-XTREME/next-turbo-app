import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  max-w-7xl 
  mx-auto 
  px-6
`;

export const FlexCentered = tw.div`
  flex
  justify-center
  items-center
`;

export const Centered = tw(FlexCentered)`
  w-full
`;

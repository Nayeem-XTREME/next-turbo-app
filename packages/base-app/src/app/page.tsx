import Image from 'next/image';
import Link from 'next/link';
import tw from 'tailwind-styled-components';

import { HomeTemplate } from '@/templates';

/* 
  Sometimes, it's messy to write tailwind classes inside the JSX, when class names are too long.
  Hence 'tailwind-styled-components', which helps to better organize the JSX, with the very familiar syntax of popular 'styled-components' library,
  while maintaing all the main features of tailwind css.
*/

const Main = tw.main`
  flex 
  min-h-screen 
  flex-col 
  items-center 
  justify-between 
  px-6
  py-20
  gap-8
  sm:px-16
  md:px-24
`;

const Container = tw.div`
  z-20 
  w-full 
  max-w-5xl 
  items-center 
  justify-between 
  font-mono 
  text-sm 
  lg:flex
`;

const Highlight = tw.p`
  fixed 
  left-0 
  top-0 
  flex 
  w-full 
  justify-center 
  border-b 
  border-gray-300 
  bg-gradient-to-b 
  from-zinc-200 
  pb-6 
  pt-8 
  backdrop-blur-2xl 
  dark:border-neutral-800 
  dark:bg-zinc-800/30 
  dark:from-inherit 
  lg:static 
  lg:w-auto 
  lg:rounded-xl
  lg:border
  lg:bg-gray-200
  lg:p-4
  lg:dark:bg-zinc-800/30
`;

const WrappedLogo = tw.div`
  fixed 
  bottom-0 
  left-0 
  h-48
  flex 
  w-full 
  items-end 
  justify-center 
  bg-gradient-to-t 
  from-white 
  via-white 
  dark:from-black 
  dark:via-black 
  lg:static 
  lg:h-auto 
  lg:w-auto 
  lg:bg-none
`;

const StyledLink: typeof Link = tw(Link)`
  pointer-events-none 
  flex 
  place-items-center 
  gap-2 
  p-8 
  lg:pointer-events-auto 
  lg:p-0
`;

const StyledSubLink: typeof Link = tw(Link)`
  group 
  rounded-lg 
  border 
  border-transparent 
  px-5 
  py-4 
  transition-colors 
  hover:border-gray-300 
  hover:bg-gray-100 
  hover:dark:border-neutral-700 
  hover:dark:bg-neutral-800/30
`;

const SubLinkText = tw.p`
  m-0 
  max-w-[30ch] 
  text-sm 
  opacity-50
`;

const NextGradiant = tw.div`
  relative 
  flex 
  place-items-center 
  before:absolute 
  before:h-[300px] 
  before:w-[480px] 
  before:-translate-x-1/2 
  before:rounded-full 
  before:bg-gradient-radial 
  before:from-white 
  before:to-transparent 
  before:blur-2xl 
  before:content-[''] 
  after:absolute 
  after:-z-20 
  after:h-[180px] 
  after:w-[240px] 
  after:translate-x-1/3 
  after:bg-gradient-conic 
  after:from-sky-200 
  after:via-blue-200 
  after:blur-2xl 
  after:content-[''] 
  before:dark:bg-gradient-to-br 
  before:dark:from-transparent 
  before:dark:to-blue-700 
  before:dark:opacity-10 
  after:dark:from-sky-900 
  after:dark:via-[#0141ff] 
  after:dark:opacity-40 
  before:lg:h-[360px]
`;

const Span = tw.span`
  inline-block 
  transition-transform 
  group-hover:translate-x-1 
  motion-reduce:transform-none
`;

const Home = () => {
  return (
    <Main>
      <Container>
        <Highlight>
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </Highlight>
        <WrappedLogo>
          <StyledLink
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </StyledLink>
        </WrappedLogo>
      </Container>

      <NextGradiant>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </NextGradiant>

      <HomeTemplate />

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <StyledSubLink
          href="https://beta.nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs <Span>-&gt;</Span>
          </h2>
          <SubLinkText>
            Find in-depth information about Next.js features and API.
          </SubLinkText>
        </StyledSubLink>

        <StyledSubLink
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn <Span>-&gt;</Span>
          </h2>
          <SubLinkText>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </SubLinkText>
        </StyledSubLink>

        <StyledSubLink
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates <Span>-&gt;</Span>
          </h2>
          <SubLinkText>Explore the Next.js 13 playground.</SubLinkText>
        </StyledSubLink>

        <StyledSubLink
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy <Span>-&gt;</Span>
          </h2>
          <SubLinkText>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </SubLinkText>
        </StyledSubLink>
      </div>
    </Main>
  );
};

export default Home;

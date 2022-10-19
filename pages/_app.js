import Link from "next/link";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import '../styles/global.css';

import { setup } from 'twind';
import {tw} from 'twind'
import twindConfig from '../twind.config';
import '@fontsource/inter';

import { repositoryName, linkResolver } from "../prismicio";
import { Heading } from "../components/Heading";



if (typeof window !== `undefined`) {
  setup(twindConfig);
}

const NextLinkShim = ({ href, children, locale, ...props }) => {
  return (
    <Link href={href} locale={locale}>
      <a {...props}>{children}</a>
    </Link>
  );
};

const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as="h2" size="3xl" className={tw(`mb-7 mt-12 first:mt-0 last:mb-0`)}>
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h3" size="2xl" className={tw(`mb-7 last:mb-0`)}>
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h4" size="xl" className={tw(`mb-7 last:mb-0`)}>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className={tw(`mb-7 last:mb-0`)}>{children}</p>,
  oList: ({ children }) => (
    <ol className={tw(`mb-7 pl-4 last:mb-0 md:pl-6`)}>{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className={tw(`mb-1 list-decimal pl-1 last:mb-0 md:pl-2`)}>{children}</li>
  ),
  list: ({ children }) => (
    <ul className={tw(`mb-7 pl-4 last:mb-0 md:pl-6`)}>{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className={tw(`mb-1 list-disc pl-1 last:mb-0 md:pl-2`)}>{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className={tw(`mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg`)}>
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className={tw(`font-semibold`)}>{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className={tw(`underline decoration-1 underline-offset-2`)}
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={NextLinkShim}
      richTextComponents={richTextComponents}
    >
    
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}

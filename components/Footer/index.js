import { tw } from 'twind';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Subscibe from './subscribe';

const Footer = () => {
  const [showCookieNotice, setShowCookieNotice] = useState(true);
  const [showDemoNotice, setShowDemoNotice] = useState(false);
  const router = useRouter();
  /* console.log(router); */
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookieNotice') === 'accepted';
    if (cookiesAccepted) {
      setShowCookieNotice(false);
    }
    if (cookiesAccepted) {
      setShowDemoNotice(true);
    }
  }, []);
  const handleCookieNotice = () => {
    setShowCookieNotice(false);
    setShowDemoNotice(true);
    localStorage.setItem('cookieNotice', 'accepted');
  };
  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      {showCookieNotice && (
        <div>
          <div
            className={tw(
              `fixed z-50 bg-dark-mode text-primary p-4 flex flex-col content-center rounded-lg bottom-0 left-0 border-muted border text-sm m-8 w-60 md:w-72`
            )}
          >
            This website uses cookies to ensure you receive the best possible experience.{' '}
            <Link href={'/privacy'}>
              <a onClick={handleCookieNotice} className={tw(`whitespace-nowrap underline pt-2`)}>
                Learn More
              </a>
            </Link>
            <div className={tw(`flex flex-row space-x-3 pt-3`)}>
              <button
                onClick={handleCookieNotice}
                className={tw(`bg-gray-900 rounded-full w-min whitespace-nowrap py-1.5 px-6 my-1.5 self-center`)}
              >
                Accept.
              </button>
              <button
                onClick={handleCookieNotice}
                className={tw(`bg-gray-900 rounded-full w-min whitespace-nowrap py-1.5 px-6 my-1.5 self-center`)}
              >
                Deny.
              </button>
            </div>
          </div>
        </div>
      )}
      {router.asPath !== '/privacy' &&
        (showDemoNotice ? (
          <div className={tw(`z-50 fixed bottom-4 right-6 w-min`)}>
            <div className={` flex border-2 bg-gray-900 rounded-lg content-center items-center w-full gap-2 px-6 `}>
              <Link href={'https://calendly.com/ricketh/invites'}>
                <a className={tw(`rounded-full w-min whitespace-nowrap py-1.5  my-1.5 self-center text-white`)}>
                  Book a demo
                </a>
              </Link>
              {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            className={tw(`w-6 h-6`)}
            viewBox='0 0 16 16'
            width='16'
            height='16'
            fill='#ffffff'
          >
            <path
              fillRule='evenodd'
              d='M1.592 2.712L2.38 7.25h4.87a.75.75 0 110 1.5H2.38l-.788 4.538L13.929 8 1.592 2.712zM.989 8L.064 2.68a1.341 1.341 0 011.85-1.462l13.402 5.744a1.13 1.13 0 010 2.076L1.913 14.782a1.341 1.341 0 01-1.85-1.463L.99 8z'
            ></path>
          </svg> */}
            </div>{' '}
          </div>
        ) : null)}

      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 xl:px-0 flex flex-wrap md:mx-24`)}>
        <div className={tw(`mb-14 flex items-center w-full`)}>
          <Image src='/logo.png' alt='OpenQ Logo' width='60%' height='60%' />
          <p className={tw(`text-4xl text-black font-bold pl-5`)}>OpenQ</p>
        </div>
        <div className={tw(`w-full flex lg:w-full flex-wrap xl:flex-nowrap`)}>
          <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3 pb-5`)}>
              <div>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Socials</h4>
                <ul>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/openqlabs'>
                      Twitter
                    </a>
                  </li>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/5HFZj6pUhf'>
                      Discord
                    </a>
                  </li>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://medium.com/openqdev'>
                      Medium
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3 pb-5`)}>
              <div>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Resources</h4>
                <ul>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a rel='noopener noreferrer' href='https://openq.dev/'>
                      Home
                    </a>
                  </li>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/OpenQDev/'>
                      Github
                    </a>
                  </li>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://docs.openq.dev/welcome/master'>
                      Docs
                    </a>
                  </li>
                  <li>
                    <a target='_blank' rel='noopener noreferrer' href='https://app.openq.dev/'>
                      <button className={tw(`text-gray-800 text-sm font-medium leading-6`)}>Launch App</button>
                    </a>
                  </li>
                  <li>
                    <a rel='noopener noreferrer' href='https://app.openq.dev/hackathon-launchpad'>
                      <button className={tw(`text-gray-800 text-left text-sm font-medium leading-6`)}>Hackathon Launchpad</button>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3 pb-5`)}>
              <div>
                <h4 className={tw(`text-gray-900   text-base font-bold mb-1`)}>About Us</h4>
                <ul>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                  <Link href='/terms-of-service'>
                    <a >Terms of Service</a>
                    </Link>
                  </li>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}> <Link href='/privacy'>
                    <a >Privacy Policy</a></Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <Subscibe />
        </div>
        {/*  <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe our newsletter</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div> */}
      </div>
    </footer>
  );
};

export default Footer;

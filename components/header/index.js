// @ts-nocheck

import { tw } from 'twind';
import TypingAnimation from './TypingAnimation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

/* const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 8000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.4,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.8,
            opacity_min: 0.2,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
); */

// this line prevent re rendering

const Header = ({ pageVersionHookInstance, contest }) => {
  const [scrollY, setScrollY] = useState(0);
  const [bountiesVisible, setBountiesVisible] = useState();
  const [internalMenu, setInternalMenu] = pageVersionHookInstance;
  const [contestPage] = useState(contest);

  const devData = {
    title: 'The dev community building the future.',
    typedText: 'Earn money while building your portfolio',
    subTitle: 'Peer-to-peer freelance marketplace tailored for software development.',
  };
  const orgData = {
    title: 'The dev community building the future.',
    typedText: 'Pull Requests as a Service',
    subTitle: 'Peer-to-peer freelance marketplace tailored for software development.',
  };

  const contestData = {
    title: 'The dev community building the future.',
    typedText: 'Virtual Hackathon as a Service',
    subTitle: 'Peer-to-peer hackathon launchpad tailored for web3.',
  };

  /* const contestDataDev = {
    title: 'The dev community building the future.',
    typedText: 'Learn something new and earn money with exciting challenges',
    subTitle: 'Peer-to-peer hackathon launchpad tailored for web3.',
  }; */
  const [headerData, setHeaderData] = useState(orgData);

  useEffect(() => {
    if (contest) {
      setHeaderData(contestData);
    } else if (internalMenu === 'org') {
      setHeaderData(orgData);
    } else if (internalMenu === 'dev') {
      setHeaderData(devData);
    }
  }, [internalMenu]);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (!bountiesVisible && window.scrollY > 50) {
        setBountiesVisible(true);
      }
    };

    handleScroll();

    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll)
    };
  }, []);

  return (
    <header className={tw(`w-full font-lobster bg-dark-mode relative`)}>
      <div className={tw(``)}>
        <div className={tw(`text-white flex justify-center`)}>
          <div className={tw(`bg-gray-900 gap-2 border border-gray-700 rounded-full p-0.5 xl:my-12 my-8 `)}>
            <button
              onClick={() => setInternalMenu('dev')}
              className={tw(
                `px-2 md:px-4 py-2 rounded-full focus:outline-none ${internalMenu === 'dev' && 'bg-gray-700'}`
              )}
            >
              <span className={tw(`hidden md:inline `)}>I{"'"}m a </span>Developer
            </button>
            <button
              onClick={() => setInternalMenu('org')}
              className={tw(
                `px-2 md:px-4 py-2 rounded-full focus:outline-none ${internalMenu === 'org' && 'bg-gray-700'}`
              )}
            >
              <span className={tw(`hidden md:inline`)}>I{"'"}m an </span>Organization
            </button>
          </div>
        </div>
      </div>
      <div className={tw(`xl:pb-64 lg:pb-72 md:pb-64 px-14 sm:px-6 lg:px-8`)}>
        <div className={tw(`text-center  ${scrollY > 600 ? `animate-fadeOut` : `animate-fadeIn`}`)}>
          <div className={tw(``)}>
            <div className={tw(`font-bold text-white text-left md:text-center text-4xl md:text-5xl lg:text-7xl`)}>
              {headerData.title}
            </div>
            <div className={tw(`font-bold text-5xl text-left md:text-center md:text-5xl lg:text-7xl text-white`)}>
              <div className={tw(`pt-5`)}>
                {contestPage ? (
                  <TypingAnimation text={contestData.typedText} />
                ) : internalMenu === 'org' ? (
                  <>
                    <> {/*DO NOT REMOVE DIV, DIV IS REQUIRED for react to dif and UNMOUNT TYPING ANIM */}</>
                    <div className={tw(`min-h-8`)}>
                      <TypingAnimation text={orgData.typedText} />
                    </div>
                  </>
                ) : (
                  <TypingAnimation text={devData.typedText} />
                )}
              </div>
            </div>
          </div>
          <p
            className={tw(
              `mt-10 md:-mt-5 max-w-5xl text-left md:text-center mx-auto text-gray-400 text-2xl lg:text-2xl`
            )}
          >
            {headerData.subTitle}{' '}
          </p>
          <div className={tw(`mt-10 flex flex-row items-center justify-left md:justify-center space-x-4 `)}>
            <div className={tw(`hover:scale-125`)}>
              <Link href='https://discord.gg/5HFZj6pUhf' passHref>
                <a target='_blank'>
                  <Image className={tw(``)} src='/discord.png' alt='D' width='40%' height='30%' />
                </a>
              </Link>
            </div>

            <div className={tw(`hover:scale-125 pb-1`)}>
              <Link href='https://github.com/OpenQDev' passHref>
                <a target='_blank'>
                  <Image className={tw(``)} src='/github-2.png' alt='D' width='25%' height='25%' />
                </a>
              </Link>
            </div>
            <div className={tw(`hover:scale-125 pb-1 pl-1`)}>
              <Link href='https://twitter.com/openqlabs' passHref>
                <a target='_blank'>
                  <Image className={tw(``)} src='/twitter-2.png' alt='D' width='30%' height='23%' />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

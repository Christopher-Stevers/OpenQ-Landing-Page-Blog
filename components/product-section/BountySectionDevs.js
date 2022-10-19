// @ts-nocheck

import { tw } from 'twind';
import Image from 'next/image';
import MintBountyMock from './MintBountyMock';
import MintContestMock from './MintContest';
import GitHubMessage from './GithubMessage';
import CreatePrMock from './CreatePrMock.js';
import Organizations from './Organizations';
import OnScroll from '../utils/OnScroll';

const BountySectionDevs = ({ scrollY, contest, internalMenu }) => {
  const isOrg = internalMenu === 'org';

  return (
    <>
      <div className={tw(`flex justify-center `)}>
        <div className={tw(`max-w-8xl w-full`)}>
          <div className={tw(`mb-8 mx-10 lg:mx-32 xl:mx-54 2xl:mx-64 mx-auto lg:mb-16`)}>
            <OnScroll internalMenu={internalMenu} fade='animate-fadeIn'>
              <div
                className={tw(
                  `text-4xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-500 to-purple-400`
                )}
              >
                How it <span className='text-black'>works:</span>
              </div>
            </OnScroll>
          </div>
          <section className={tw(`font-montserrat mx-10 lg:mx-32 xl:mx-54 2xl:mx-64  mx-auto`)}>
            <div className={tw(`flex flex-row space-x-3 items-center pb-3`)}>
              <div
                className={tw(
                  `border border-2 -ml-2 rounded-lg py-1 px-2 text-sm border-gray-500 font-mono text-gray-500`
                )}
              >
                $_
              </div>
              <h2 className={tw(`text-md font-mono pl-2 text-gray-500`)}>fund issue</h2>
            </div>
            <div className={tw(`flex flex-row space-x-3 items-center`)}>
              <div className={tw(`w-3 h-3 border rounded-full border-gray-400`)} />
              <div className={tw(`pl-5`)}>
                <div
                  className={tw(`flex flex-row items-center border rounded-2xl border-gray-500 py-2 px-4 space-x-1`)}
                >
                  <Image src='/ETH.svg' alt='OpenQ Logo' width='15%' height='25%' />
                  <p className={tw(`pl-2 text-md font-mono font-base text-left text-gray-500`)}>deposit erc-20</p>
                </div>
              </div>
            </div>
            <div className={tw(`pl-1 `)}>
              <div className={tw(`border-l border-gray-400 xl:grid xl:grid-cols-6 xl:gap-4 px-3 xl:pb-10 xl:pt-10`)}>
                <OnScroll internalMenu={internalMenu} fade='animate-fadeInRight' className='lg:col-span-3'>
                  <div
                    className={tw(
                      `pt-10 lg:pt-8 pb-2 pl-6 text-lg font-semibold text-left text-gray-500 pt-2 lg:text-3xl lg:mx-5 xl:mx-10 2xl:text-3xl`
                    )}
                  >
                    Find new tickets that match your requirements from our dashboard.
                    <span
                      className={tw(
                        `pt-2 pb-2 pl-2 font-semibold text-left text-gray-900 pt-2 text-lg lg:text-3xl 2xl:text-3xl`
                      )}
                    >
                      Each ticket has been assigned a value that is locked on-chain.{' '}
                    </span>
                  </div>
                </OnScroll>
                <div className={tw(`pt-6 pl-6 pb-10 lg:col-span-3 lg:-mt-10 lg:pt-20 xl:pt-10 2xl:pt-16`)}>
                  <OnScroll internalMenu={internalMenu} fade='animate-fadeInLeft' className='w-full'>
                    {isOrg ? (
                      contest ? (
                        <MintContestMock scrollY={scrollY} />
                      ) : (
                        <MintBountyMock scrollY={scrollY} />
                      )
                    ) : (
                      <Organizations />
                    )}
                  </OnScroll>{' '}
                </div>

                <div className={tw(`flex flex-row -ml-7 p-0.5 items-center col-span-2`)}>
                  <div className='bg-white '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='white'
                      height='22'
                      width='28'
                      aria-hidden='true'
                      className='home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1'
                    >
                      <path d='m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z' fill='#465061' />
                      <circle cx='14' cy='11' fill='white' r='5' stroke='#465061' strokeWidth='2' />
                    </svg>
                  </div>
                  <div className={tw(`flex flex-col`)}>
                    <p className={tw(`pl-2 text-md font-mono font-base text-left text-gray-500`)}>
                      Get payment security via OpenQ{"'"}s escrow system
                    </p>
                    <div className={tw(`pt-5 pb-2 pl-6 text-lg font-semibold text-gray-500 pt-10 lg:text-2xl`)}>
                      OpenQ{"'"}s smart contracts enable
                      <span className={tw(`pt-2 pb-2 pl-2 font-semibold text-left text-lg lg:text-2xl text-gray-900`)}>
                        payment security through an escrow system
                      </span>
                      {` `} <p>where the organisation has to deposit the project funds in advance.</p>
                    </div>
                  </div>
                </div>

                {!contest && (
                  <div className={tw(`lg: col-span-3 col-start-4`)}>
                    <OnScroll internalMenu={internalMenu} fade='animate-fadeInLeft' className='w-full '>
                      <GitHubMessage />
                    </OnScroll>
                  </div>
                )}
              </div>
            </div>
            <div className={tw(`border-l ml-1 border-gray-400 pb-9`)} />
            <div className={tw(`flex flex-row -ml-2 items-center`)}>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='white'
                  height='22'
                  width='28'
                  aria-hidden='true'
                  className='home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1'
                >
                  <path d='m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z' fill='#465061' />
                  <circle cx='14' cy='11' fill='white' r='5' stroke='#465061' strokeWidth='2' />
                </svg>
              </div>
              <p className={tw(`pl-2 text-md font-base font-mono text-left text-gray-500`)}>
                create PR to close ticket
              </p>
            </div>
            <div className={tw(`border-l ml-1 border-gray-400 pb-9`)}>
              <div className={tw(`pt-8 lg:grid lg:grid-cols-6 lg:gap-4 px-3 lg:pb-10 lg:pt-10`)}>
                <OnScroll internalMenu={internalMenu} fade='animate-fadeInRight' className='lg:col-span-4 '>
                  <div
                    className={tw(
                      `pt-5 pb-2 pl-6 text-lg font-semibold text-left text-gray-500 pt-2 lg:text-3xl lg:mx-10`
                    )}
                  >
                    Creating a pull request to close the issue is the last step to request the money deposited for the
                    ticket.
                    <span className={tw(`pt-2 pb-2 pl-2 font-semibold text-left text-lg lg:text-3xl text-gray-900`)}>
                      After the maintainer has merged the PR, you can claim the money directly.
                    </span>
                    {` `}
                  </div>
                </OnScroll>

                <OnScroll internalMenu={internalMenu} fade='animate-fadeInLeft' className='w-full  col-span-2'>
                  <CreatePrMock />
                </OnScroll>
              </div>
            </div>
            <div className={tw(`flex flex-row -ml-2 items-center`)}>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='white'
                  height='22'
                  width='28'
                  aria-hidden='true'
                  className='home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1'
                >
                  <path d='m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z' fill='#465061' />
                  <circle cx='14' cy='11' fill='white' r='5' stroke='#465061' strokeWidth='2' />
                </svg>
              </div>
              <p className={tw(`pl-2 text-md font-base font-mono text-left text-gray-500`)}>
                {contest ? 'contestants create pull requests' : 'dev creates pull request'}
              </p>
            </div>
            <div className={tw(`border-l ml-1 border-gray-400 pb-9`)} />{' '}
            <div className={tw(`flex flex-row -ml-2 items-center`)}>
              <div className='py-2'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
                  <path
                    fillRule='evenodd'
                    d='M4.75 3a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM1.5 4.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM4.75 17.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM1.5 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zm17.75-1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM16 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z'
                  ></path>
                  <path
                    fillRule='evenodd'
                    d='M4.75 7.25A.75.75 0 015.5 8v8A.75.75 0 014 16V8a.75.75 0 01.75-.75zm8.655-5.53a.75.75 0 010 1.06L12.185 4h4.065A3.75 3.75 0 0120 7.75v8.75a.75.75 0 01-1.5 0V7.75a2.25 2.25 0 00-2.25-2.25h-4.064l1.22 1.22a.75.75 0 01-1.061 1.06l-2.5-2.5a.75.75 0 010-1.06l2.5-2.5a.75.75 0 011.06 0z'
                  ></path>
                </svg>
              </div>
              <p className={tw(`pl-6 text-md font-base font-mono text-left text-gray-500`)}>
                maintainer merges pull request
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BountySectionDevs;

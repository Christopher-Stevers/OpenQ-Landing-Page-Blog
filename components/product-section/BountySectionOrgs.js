// @ts-nocheck

import { tw } from 'twind';
import { useRef } from 'react';
import Image from 'next/image';
import MintBountyMock from './MintBountyMock';
import MintContestMock from './MintContest';
import GitHubMessage from './GithubMessage';
import GithubPr from './GithubPr';
import FundBountyMock from './FundBountyMock';
import CreatePrMock from './CreatePrMock.js';
import MockClaimUi from './MockClaimUi.js';
import Organizations from './Organizations';
import OnScroll from '../utils/OnScroll';

const BountySectionOrgs = ({ scrollY, contest, internalMenu }) => {
  const thirdParagraph = useRef();
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
                    Connect GitHub issues with smart contracts to
                    <span
                      className={tw(
                        `pt-2 pb-2 pl-2 font-semibold text-left text-gray-900 pt-2 text-lg lg:text-3xl 2xl:text-3xl`
                      )}
                    >
                      create a new ticket.{' '}
                    </span>
                    Our developer community will either apply for the task, or directly get to work.
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
                  <p className={tw(`pl-2 text-md font-mono font-base text-left text-gray-500`)}>
                    deposit funds for the ticket with any ERC-20 on polygon
                  </p>
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
                find devs within OpenQ talent pools
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
                    To reduce counterparty risk for developers, OpenQ offers
                    <span className={tw(`pt-2 pb-2 pl-2 font-semibold text-left text-lg lg:text-3xl text-gray-900`)}>
                      {' '}
                      secure on-chain escrow{' '}
                    </span>
                    <p className={tw(`text-gray-500`)}>in advance of work.</p>
                  </div>
                </OnScroll>

                <OnScroll internalMenu={internalMenu} fade='animate-fadeInLeft' className='w-full  col-span-2'>
                  {isOrg ? <FundBountyMock contest={contest} scrollY={scrollY} /> : <CreatePrMock />}
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
            <div className={tw(`border-l ml-1 border-gray-400 pb-9`)}>
              <div className={tw(`pt-8 lg:grid lg:grid-cols-6 lg:gap-4 px-3 lg:pb-10 lg:pt-10`)}>
                <OnScroll internalMenu={internalMenu} fade='animate-fadeInRight' className='lg:col-span-4 '>
                  <div
                    className={tw(
                      `pt-5 pb-2 pl-6 text-lg font-semibold text-left text-gray-500 pt-2 lg:text-3xl lg:mx-10`
                    )}
                  >
                    After a few days you will receive a PR from one of our developers. After the code has been reviewed
                    and accepted, it can be directly merged, which
                    <span className={tw(`pt-2 pb-2 pl-2 font-semibold text-left text-lg lg:text-3xl text-gray-900`)}>
                      automatically leads to the developer{"'"}s payout.
                    </span>
                    {` `}
                  </div>
                </OnScroll>

                <OnScroll internalMenu={internalMenu} fade='animate-fadeInLeft' className='w-full  col-span-2'>
                  <CreatePrMock />
                </OnScroll>
              </div>
            </div>
            <div className={tw(`border-l ml-1 border-gray-400 pb-9`)} />{' '}
            <div ref={thirdParagraph} className={tw(` ml-1 pt-8 border-l border-gray-400`)}>
              <div className={tw(`flex flex-row bg-white -ml-2 justify-center items-center space-x-4`)}>
                {isOrg ? <GithubPr internalMenu={internalMenu} /> : <MockClaimUi contest={contest} />}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BountySectionOrgs;

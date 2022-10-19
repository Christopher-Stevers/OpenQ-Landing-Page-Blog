import { tw } from 'twind';
import { useState, useEffect } from 'react';
import ContestBounties from './ContestBounties';
import NormalBounties from './NormalBounties';

const MockBountyList = ({ contest }) => {
  const [bountiesVisible, setBountiesVisible] = useState();

  useEffect(() => {
    const handleScroll = () => {
      if (!bountiesVisible && window.scrollY > 50) {
        setBountiesVisible(true);
      }
    };

    handleScroll();

    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);
  return (
    <div
      className={tw(
        `relative -top-36 -mb-32 mx-4 md:-top-96 md:-mb-80 lg:-top-96 lg:-mb-80 xl:-top-96 xl:-mb-80 z-10  flex justify-center`
      )}
    >
      <div
        className={tw(
          ` sm:px-12 px-2 bg-app-bg rounded-md relative w-full max-w-screen-xl pt-3 pb-2 justify-center invisible ${bountiesVisible && 'animate-fadeIn visible'
          }`
        )}
      >
        <div className={tw(`flex gap-1 py-4`)}>
          <div className={tw(`bg-red-500 h-4 w-4 rounded-full`)}></div>
          <div className={tw(`bg-yellow-500 h-4 w-4 rounded-full`)}></div>
          <div className={tw(`bg-green-500 h-4 w-4 rounded-full`)}></div>
        </div>
        <div>
          {' '}
          <div
            className={tw(
              `lg:col-start-2 content-center flex flex-col text-left justify-self-center space-y-4 w-full pb-8 max-w-screen-xl mx-auto`
            )}
          >
            <div className={tw(`hidden md:flex  flex-wrap gap-4 w-full mx-auto items-center max-w-screen-lg`)}>
              <div
                type='text'
                className={tw(
                  `flex-1 lg:col-span-3 col-span-4 input-field-big rounded-lg w-full py-2 pl-8 pr-3 text-sm tracking-wider leading-tight h-min text-muted bg-transparent rounded-full outline-none border border-web-gray bg-subtle focus-within:border-blue-400`
                )}
                aria-label='search text'
                placeholder='Search Issue...'
              >
                Search Issue...
              </div>
              <div
                className={tw(
                  `lg:col-start-4 col-span-4 lg:col-span-1 whitespace-nowrap btn-primary bg-github-primary text-white rounded-lg py-2 flex flex-row space-x-3 items-center justify-center leading-tight h-min md:w-min px-3 w-full`
                )}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={tw(`h-5 w-5`)}
                  viewBox='0 0 24 24'
                  fill='transparent'
                  stroke='white'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  ></path>
                </svg>
                <div>New Contract</div>
              </div>
            </div>
            <div className={tw(`w-full rounded-lg hidden md:block max-w-screen-lg mx-auto`)}>
              <div className={tw(`flex flex-wrap gap-4  border-web-gray rounded-lg bg-githubMessageColor`)}>
                <div className={tw(`flex text-sm rounded-lg overflow-hidden w-fit text-primary `)}>
                  <div className={tw(`w-36 py-2 px-4 rounded-l-lg border whitespace-nowrap  border-web-gray`)}>
                    Ready for work
                  </div>
                  <div
                    className={tw(
                      `w-fit min-w-[80px] py-2 px-4 rounded-r-lg border whitespace-nowrap bg-secondary-btn border-secondary-btn`
                    )}
                  >
                    All issues
                  </div>
                </div>
                <div
                  className={tw(
                    `inline-flex justify-between w-36 rounded-l-sm border-border-default text-primary text-sm rounded-l-sm leading-2 py-2 px-4`
                  )}
                >
                  Sort Order
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={tw(`relative top-1`)}
                    fill='#8b949e'
                    stroke='#8b949e'
                    viewBox='0 0 16 16'
                    width='16'
                    height='16'
                  >
                    <path d='M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z'></path>
                  </svg>
                </div>
                <details className={tw(`max-h-8 whitespace-nowrap text-sm text-muted cursor-pointer`)}>
                  <summary
                    className={tw(
                      `inline-flex justify-between w-24 rounded-l-sm border-border-default text-primary rounded-l-sm leading-2 py-2 px-4`
                    )}
                  >
                    Labels
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className={tw(` relative top-1`)}
                      viewBox='0 0 16 16'
                      fill='#8b949e'
                      stroke='#8b949e'
                      width='16'
                      height='16'
                    >
                      <path d='M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z'></path>
                    </svg>
                  </summary>
                </details>
              </div>
            </div>

            <div className={tw(` md:border border-web-gray rounded-lg max-w-screen-lg w-full mx-auto`)}>
              {contest ? <ContestBounties /> : <NormalBounties />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MockBountyList;

import { tw } from 'twind';
import OnScroll from '../utils/OnScroll';

const MockClaimUi = ({contest, internalMenu}) => {
  return (
  <OnScroll internalMenu={internalMenu} fade="animate-fadeInLeft" className="w-full">
    <div className={tw(`w-full flex gap-5 relative`)}>
      <div className='w-9 h-9 flex-none py-2'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
          <path
            fillRule='evenodd'
            d='M16.168 2.924L4.51 13.061a.25.25 0 00.164.439h5.45a.75.75 0 01.692 1.041l-2.559 6.066 11.215-9.668a.25.25 0 00-.164-.439H14a.75.75 0 01-.687-1.05l2.855-6.526zm-.452-1.595a1.341 1.341 0 012.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.149 1.149 0 01-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6z'
          ></path>
        </svg>
      </div>
      <div className={tw(`flex flex-col space-y-2 items-center  rounded-sm  w-full`)}>
        <div
          className={tw(
            `pointer-events-none bg-gradient-to-br from-cyan-300 via-purple-500 to-purple-400 opacity-5 w-full h-max absolute inset-0 ml-8 rounded-lg`
          )}
        ></div>
        <div className={tw(`flex w-full text-3xl  justify-center px-12 py-4 md:border-b border-gray-700 rounded-t-sm`)}>
         {contest ? "Claim Your Winnings" : "Claim Your Rewards"}
        </div>
        <div className={tw(`flex flex-1 justify-center`)}>
          <div className={tw(`w-5/6 min-w-min`)}>
            <div className={tw(`flex flex-col gap-4 pt-4`)}>
             {contest ?              
              <div className={tw(`col-span-3 space-y-2 py-2 max-w-screen-sm`)}>
                <p>If the contests organizers chose your submission, they will merge it with one of the comments below, and you can claim your winnings <strong className='font-semibold'>immediately</strong>.</p>
                <div>
                  <div className={tw(`relative undefined`)}>
                    <div className={tw(`flex flex-row items-center space-x-4 md:space-x-1 w-fit`)}>
                      <div className={tw(`relative flex flex-col items-center group`)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className={tw(`h-6 w-6`)}
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                          ></path>
                        </svg>
                      </div>
                      <div className={tw(`px-1`)}>Closes #7870 OpenQ-Tier-3-Winner</div>
                    </div>
                    <div className={tw(`flex flex-row items-center space-x-4 md:space-x-1 w-fit`)}>
                      <div className={tw(`relative flex flex-col items-center group`)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className={tw(`h-6 w-6`)}
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                          ></path>
                        </svg>
                      </div>
                      <div className={tw(`px-1`)}>Closes #7870 OpenQ-Tier-3-Winner</div>
                    </div>
                    <div className={tw(`flex flex-row items-center space-x-4 md:space-x-1 w-fit`)}>
                      <div className={tw(`relative flex flex-col items-center group`)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className={tw(`h-6 w-6`)}
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                          ></path>
                        </svg>
                      </div>
                      <div className={tw(`px-1`)}>Closes #7870 OpenQ-Tier-3-Winner</div>
                    </div>
                    
                  </div>
                </div>
              </div>:
              <div className={tw(`col-span-3 space-y-2 py-2`)}>
                <p>Don{"'"}t forget to add a closer comment for this bounty on your pull request :-{')'}.</p>
                <div>
                  <div className={tw(`relative undefined`)}>
                    <div className={tw(`flex flex-row items-center space-x-4 md:space-x-1 w-fit`)}>
                      <div className={tw(`relative flex flex-col items-center group`)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className={tw(`h-6 w-6`)}
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                          ></path>
                        </svg>
                      </div>
                      <div className={tw(`px-1`)}>Closes #596</div>
                    </div>
                  </div>
                </div>
              </div>
              
              
              
              }
              <div className={tw(`flex flex-col space-y-5`)}>
                <div className={tw(`bg-github-primary text-white py-1 rounded-lg text-center w-full px-8`)}>Claim</div>
              </div>
              <div className={tw(`flex items-center col-span-3`)}>
                <div className={tw(`w-full justify-center`)}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </OnScroll>
  );
};

export default MockClaimUi;

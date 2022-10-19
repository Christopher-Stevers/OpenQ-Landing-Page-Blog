import { tw } from 'twind';
import SetTierMock from "./SetTierMock.js";

const MintContest = ({ scrollY }) => {
  return (
    <div className={tw(`w-full rounded-lg flex flex-col  z-11 space-y-1 lg:w-full md:w-2/3 relative `)}>
      <div
        className={tw(
          `pointer-events-none bg-gradient-to-br from-cyan-300 via-purple-500 to-purple-400 opacity-5 w-full h-max absolute inset-0 rounded-lg`
        )}
      ></div>

      <div className={tw(`w-full overflow-y-auto`)}>
        <div className={tw(`flex flex-col items-center justify-center p-5 pb-3 rounded-t`)}>
          <h3 className={tw(`text-3xl text-center font-semibold`)}>Deploy Contest</h3>
          <h3 className={tw(`text-2xl pt-2 w-5/6 text-center text-gray-600`)}>Create a Contest Contract to send funds to any GitHub issue</h3>
        </div>
        <div className={tw(`flex flex-col items-start pl-6 pr-6`)}>
          <div className={tw(`flex flex-col w-full  px-2 pt-5 md:w-2/3`)}>Enter GitHub Issue URL</div>

          <input
            className={tw(`bg-white border overflow-hidden w-full sm:w-3/4 md:w-1/2 rounded-md p-0.5 ml-2 whitespace-nowrap ${scrollY < 1700 && "text-muted"}`)}
            defaultValue={scrollY < 1700 ? 'Issue URL' : 'https://github.com/OpenQDev/OpenQContracts/issues/2'}
          />
        </div>
        <div className={tw(`flex flex-col items-center space-x-1 px-8`)}>
          {scrollY > 1720 ? (
            <div className={tw(`px-3 pt-5`)}>
              <div className={tw(`flex flex-row space-x-3 items-center`)}>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#2da44e'
                    viewBox='0 0 18 18'
                    width='18'
                    height='18'
                    className='w-4 h-4'
                  >
                    <path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                    <path
                      fillRule='evenodd'
                      d='M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                    />
                  </svg>
                </div>
                <p className={tw(`m-px`)}>This is an example issue</p>
              </div>
            </div>
          ) : null}
        </div>



        <div className={tw(`flex flex-col items-start pl-6 pr-6 pb-2`)}>
          <div className={tw(`flex flex-col`)}>
            <div className={tw(`flex flex-col w-full items-start p-2 py-1 gap-4 text-base`)}>
              <SetTierMock scrollY={scrollY} />


              <div
                className={tw(
                  `whitespace-nowrap self-center bg-github-primary sm:w-56 w-min border border-green-600 rounded-lg py-1.5 text-white flex flex-row space-x-3 items-center justify-center leading-tight h-min px-3 `
                )}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={tw(`h-5 w-5`)}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>

                {scrollY > 2050 && scrollY <= 2400 ? (
                  <div>
                    <div>
                      <svg
                        className={tw(`h-5 w-5 mr-3 animate-spin
                                    rounded-full
                                    h-6
                                    w-6
                                    border-t-2 border-b-2 border-white`)}
                        viewBox='0 0 24 24'
                      ></svg>
                    </div>
                  </div>
                ) : null}
                {scrollY > 2400 ? (
                  <div className={tw(`w-6 opacity-90`)}>
                    <svg id='emoji' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'>
                      <g id='color'>
                        <polygon
                          fill='#F1B31C'
                          stroke='none'
                          points='26.1808,20.1808 38.75,32.75 51.3192,45.3192 29.7894,54.2798 8.2597,63.2403 17.2202,41.7106'
                        />
                        <polygon
                          fill='#FCEA2B'
                          stroke='none'
                          points='40,35 25.6924,20.6692 16.3914,42.5394 7.0905,64.4095'
                        />
                        <polygon
                          fill='#EA5A47'
                          stroke='none'
                          points='15.2238,45.2849 26.2858,56.3469 20.7548,58.5984 12.9576,50.8012'
                        />
                        <polygon
                          fill='#D22F27'
                          stroke='none'
                          points='17.3429,55.2475 20.7548,58.5984 26.2858,56.3469 21.4849,51.546'
                        />
                        <polygon
                          fill='#EA5A47'
                          stroke='none'
                          points='20.8045,32.1625 27.5011,38.8591 39.2002,50.5583 32.9273,53.4217 24.7555,45.2498 18.1504,38.6447'
                        />
                        <polygon
                          fill='#D22F27'
                          stroke='none'
                          points='26.5369,47.0312 32.9273,53.4216 39.2003,50.5582 31.3616,42.7197'
                        />
                        <ellipse cx='30.2951' cy='14.4579' rx='2' ry='1.9708' fill='#8967aa' stroke='none' />
                        <path fill='#ea5a47' stroke='none' d='M23,37' />
                        <ellipse cx='60.2951' cy='18.4579' rx='2' ry='1.9708' fill='#f1b31c' stroke='none' />
                        <ellipse cx='57.2951' cy='39.4579' rx='2' ry='1.9708' fill='#d22f27' stroke='none' />
                      </g>
                      <g id='hair' />
                      <g id='skin' />
                      <g id='skin-shadow' />
                      <g id='line'>
                        <polyline
                          fill='none'
                          stroke='#000000'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit='10'
                          strokeWidth='2'
                          points='50.6626,45.6395 50.8308,45.8076 28.9606,55.1086 7.0904,64.4096 16.3914,42.5394 25.6923,20.6692'
                        />
                        <polyline
                          fill='none'
                          stroke='#000000'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit='10'
                          strokeWidth='2'
                          points='25.801,20.7779 38.2616,33.2384 50.6626,45.6395'
                        />
                        <line
                          x1='25.6923'
                          x2='25.801'
                          y1='20.6692'
                          y2='20.7779'
                          fill='none'
                          stroke='#000000'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit='10'
                          strokeWidth='2'
                        />
                        <path
                          fill='none'
                          stroke='#000000'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit='10'
                          strokeWidth='2'
                          d='M46.4905,7.3671c0.2347,0.4487,0.4027,0.943,0.4897,1.473c0.451,2.7473-1.447,5.4141-4.2392,5.9565'
                        />
                        <path
                          fill='none'
                          stroke='#000000'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit='10'
                          strokeWidth='2'
                          d='M42.9327,14.7763c-0.5049,0.0384-1.0133,0.1573-1.509,0.364c-2.5697,1.0713-3.828,4.093-2.8105,6.7492'
                        />
                        <path
                          fill='none'
                          stroke='#000000'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit='10'
                          strokeWidth='2'
                          d='M61.7928,26.7168c-0.0987,0.4967-0.2778,0.987-0.5425,1.4544c-1.372,2.4225-4.5229,3.309-7.0378,1.98'
                        />
                        <path
                          fill='none'
                          stroke='#000000'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit='10'
                          strokeWidth='2'
                          d='M54.3745,30.2558c-0.4173-0.2868-0.8878-0.513-1.4036-0.663c-2.6733-0.7775-5.5486,0.7867-6.4223,3.4936'
                        />
                      </g>
                    </svg>
                  </div>
                ) : null}
                {scrollY < 2050 ? <p>Deploy</p> : null}
                {scrollY <= 2400 && scrollY > 2049 ? <p>Minting</p> : null}
                {scrollY > 2400 ? <p>Success</p> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MintContest;

import { tw } from 'twind';
import Image from 'next/image';

const FundBountyMock = ({ scrollY, contest }) => {

  return (
    <div className={tw(`flex flex-col space-y-5 pb-4 relative items-center rounded-lg `)}>
      <div
        className={tw(
          `pointer-events-none bg-gradient-to-br from-cyan-300 via-purple-500 to-purple-400 opacity-5 w-full h-max absolute inset-0 rounded-lg`
        )}
      ></div>
      <div className={tw(`flex text-3xl text-dark-mode justify-center px-16 py-4  rounded-t-lg`)}>
        <div>
          <span className='font-semibold'>Escrow</span> {''} <span> Funds in {contest ? "Contest" : "Fixed Price Contract"}</span>
        </div>
      </div>
      <div className={tw(`flex flex-col space-y-5 w-5/6 pt-2`)}>
        <div className={tw(`sm:flex gap-4 justify-between`)}>
          <div
            className={tw(
              `flex w-full flex-row justify-between items-center px-4  pl-8 pr-3 tracking-wider leading-tight h-min placeholder:text-muted rounded-lg outline-none border border-border-gray bg-menu-bg focus-within:border-blue-400`
            )}
          >
            <div className={tw(``)}>
              <div className={tw(`font-semibold number outline-none  text-primary w-full`)} />
              {scrollY < 2640 ? '' : scrollY < 2650 ? '1' : scrollY < 2660 ? '10' : scrollY < 2670 ? '100' : '1000'}
            </div>
          </div>
          <div className={tw(`self-end`)}>
            <div className={tw(`flex flex-row sm:justify-end w-32`)}>
              <div className={tw(`flex border rounded-full`)}>
                <div className={tw(`flex pl-2 pr-1 py-1 text-dark-mode`)}>USDC</div>
                <Image width={16} className=' h-4 w-4 flex-1' height={24} src={'/USDC.svg'} />
                <div className={tw(`flex`)}>
                  <svg xmlns='http://www.w3.org/2000/svg' className={tw(`h-8 w-4`)} viewBox='0 0 20 20' fill='black'>
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={tw(`flex flex-wrap w-full content-center items-center justify-between`)}>
          <span>Deposit Locked Period</span>
          <div
            className={tw(
              `flex rounded-full h-10 rounded-lg w-40 pl-8 pr-3 text-[0.75rem] tracking-wider leading-[20px] h-min placeholder:text-muted outline-none border border-border-gray bg-menu-bg focus-within:border-blue-400`
            )}
          >
            <div className={tw(`text-dark-mode py-2 text-right number outline-none w-full flex-1`)}>
              {scrollY < 2690 ? '' : scrollY < 2700 ? '3' : '30'}
            </div>
          </div>
        </div>
        <div
          className={tw(
            `flex flex-row w-full justify-center space-x-5 items-center bg-github-primary text-white rounded-lg h-8 ${scrollY < 3300 && scrollY < 2640 && 'ing'
            }`
          )}
        >
          <div>Fund{scrollY < 2900 && scrollY > 2640 ? 'ing' : scrollY >= 2900 && 'ed'}</div>
          {scrollY < 2900 && scrollY > 2640 ? (
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
        </div>
      </div>
    </div>
  );
};
export default FundBountyMock;

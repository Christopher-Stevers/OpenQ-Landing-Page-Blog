import Image from 'next/image';
import { tw } from 'twind';

const MockContest = ({ days, repo, title, avatarUrl, budget, noBorder, isContestPage }) => {
  return (
    <div className={tw(`flex flex-col px-2 md:px-4 py-4 border-web-gray ${!noBorder ? 'border-b' : null} `)}>
      <div
        className={tw(
          `flex flex-row flex-wrap sm:flex-nowrap justify-between sm:pt-0 ${isContestPage ? 'text-gray-200' : 'text-gray-900'
          }`
        )}
      >
        <div className={tw(`w-3/4 sm:w-1/2`)}>
          <div className={tw(`flex flex-grow flex-row items-center md:space-x-2 sm:pb-0 w-full`)}>
            <div className={tw(`hidden md:block`)}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='green' viewBox='0 0 18 18' width='18' height='18'>
                <path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                <path
                  fillRule='evenodd'
                  d='M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                ></path>
              </svg>
            </div>
            <div className={tw(`break-word text-xl text-link-colour inline gap-1 pb-1`)}>
              <span data-testid='repo'>{repo}</span>
              <span></span>
            </div>
          </div>
          <div className={tw(`font-bold text-lg`)}>{title}</div>
          <div className={tw(`flex flex-row items-center space-x-4 w-full`)}>
            <div className={tw(`font-light text-sm w-full`)}>Deployed: {days} days ago.</div>
          </div>
          <div className={tw(`pt-1`)}>
            <ul className={tw(`flex flex-wrap w-full flex-row gap-1 py-px`)}>
              <div className={tw(`pt-5`)}></div>
            </ul>
          </div>
        </div>
        <div className={tw(`flex flex-col justify-between items-end leading-tight `)}>
          <div className={tw(`hidden sm:block`)}>
            <Image className={tw('rounded-full')} width={50} height={50} src={avatarUrl} />
          </div>
          <div className={tw(`flex gap-4 content-center items-center justify-between `)}>
            <span className={tw(`font-semibold flex flex-end items-center content-center gap-1 w-max`)}>
              <svg
                aria-hidden='true'
                role='img'
                className={tw(`octicon octicon-people`)}
                viewBox='0 0 16 16'
                width='16'
                height='16'
                fill='currentColor'
                style={{
                  display: 'inline-block',
                  userSelect: 'none',
                  verticalAlign: 'textBottom',
                  overflow: 'visible',
                }}
              >
                <path
                  fillRule='evenodd'
                  d='M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z'
                ></path>
              </svg>
              <div className={tw(`whitespace-nowrap`)}>Contest</div>
            </span>
            <div className={tw(`flex flex-row space-x-1 items-center`)}>
              <div className={tw(`pr-2 pt-1 hidden lg:block`)}>
                <Image width={16} height={24} src='/ETH.svg' />
              </div>
              <div className={tw(`font-semibold `)}>TVL</div>
              <div className=''>{budget}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MockContest;

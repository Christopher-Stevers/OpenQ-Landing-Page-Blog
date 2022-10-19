import Link from 'next/link';
import { tw } from 'twind';

const MockPr = ({ title, description, url, styles, price }) => {
  return (
    <>
      <Link href={url}>
        <a>
          <>
            <div className={tw(`pt-6 pb-2 p-2 w-full flex flex-wrap justify-between text-xl font-semibold`)}>
              <h1 className={tw(`text-2xl font-semibold flex-1 leading-tight min-w-[240px]`)}>
                <span>{title} </span>
              </h1> <span className={tw(`text-black`)}>${price}.00</span>

            </div>
            <div
              className={tw(
                `w-full flex flex-wrap justify-start items-center w-full pb-4 border-b ${styles} border-web-gray gap-4 px-2`
              )}
            >
              <div className={tw(` bg-purple-500 py-2 font-light rounded-full px-4 flex gap-1  items-center w-fit`)}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='white'>
                  <path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                  <path
                    fillRule='evenodd'
                    d='M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                  ></path>
                </svg>
                <span className={tw(`leading-none text-white`)}>Closed</span>

              </div>

              <span>{description}</span>
            </div>
          </>
        </a>
      </Link>
    </>
  );
};

export default MockPr;

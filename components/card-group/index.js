import Card from './Card';
import OnScroll from '../utils/OnScroll';
import { tw } from 'twind';
import Link from 'next/link';

const CardGroup = ({ data, internalMenu, contest }) => {
  return (
    <OnScroll internalMenu={internalMenu} fade='animate-fadeIn'>
      {contest ? (
        <div className={tw(`flex justify-center`)}>
          <div className={tw(`flex flex-col text-center w-1/2`)}>
            <span className={tw(`pt-12 font-bold text-gray-900 text-3xl`)}>
              {internalMenu === 'org'
                ? 'A hackathon launchpad that is defining the future'
                : 'A hackathon launchpad that is defining the future'}
            </span>
            <p className={tw(`pt-4  text-gray-900 text-lg font-normal`)}>
              {internalMenu === 'org'
                ? ' Launch contests that get discovered by hundreds of developers and engage with your community to test your products.'
                : ' Earn money while learning new skills, participate in fun contests, engage with new protocols that shape the future.'}
            </p>
          </div>
        </div>
      ) : (
        <div className={tw(`flex justify-center`)}>
          <div className={tw(`flex flex-col text-center w-full  sm:w-3/4 md:w-2/3 lg:w-1/2`)}>
            <span className={tw(`pt-12 font-bold text-gray-900 text-3xl`)}>
              {internalMenu === 'org'
                ? 'A freelance marketplace made by developers for developers.'
                : 'A freelance marketplace made by developers for developers.'}
            </span>
            <p className={tw(`pt-4  text-gray-900 text-lg font-normal`)}>
              {internalMenu === 'org'
                ? ' Create tickets for the OpenQ community with very low administrative effort and management intervention.'
                : ' Solve open tickets that organisations post on our dashboard, learn new skills and earn money without having to worry about anything other than programming.'}
            </p>
          </div>
        </div>
      )}
      {contest ? (
        <div className={tw(`flex flex-row justify-center pb-32 space-x-3 pt-10 -mb-32`)}>
          <button
            className={tw(
              `text-gray-100 text-md border border-purple-800 bg-purple-400 rounded-md font-semibold p-2 w-max`
            )}
          >
            <Link href='https://docs.openq.dev/contest-contracts/mint-a-contest-contract'>
              <a>How it works</a>
            </Link>
          </button>
          <button className={tw(`text-purple-800 text-md border border-purple-800 rounded-md font-semibold p-2 w-max`)}>
            <Link href='https://app.openq.dev/contests'>
              <a>{internalMenu === 'org' ? 'Launch Now' : 'Explore Contests'}</a>
            </Link>
          </button>
        </div>
      ) : null}
      <div className={tw(`flex justify-center`)}>
        <div
          className={tw(
            `flex flex-col lg:flex-row lg:space-x-10 justify-center pt-16 mx-auto 2xl:mx-80 lg:mx-20 text-left max-w-7xl             
          `
          )}
        >
          {data.map((cardData, index) => {
            return <Card key={index} title={cardData.title} SVG={cardData.SVG} body={cardData.body} />;
          })}
        </div>
      </div>
    </OnScroll>
  );
};
export default CardGroup;

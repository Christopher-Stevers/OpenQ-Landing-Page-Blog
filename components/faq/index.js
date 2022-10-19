// @ts-nocheck

import { tw } from 'twind';
import { useState } from 'react';

const listItems = [
  {
    title: `How do I deploy a ticket?`,
    description: `Head to https://app.openq.dev/ and click on "New Contract." Paste in any GitHub Issue URL of an open repo (we plan to support private repos later on), then click on "Mint Contract" That's it! Just make sure you're using the Polygon network. `,
  },
  {
    title: `How do I claim the money for a ticket?`,
    description: `To claim your money, head to the dedicated issue page, which you can find by searching the issue. Go to the claim page and connect your GitHub account. Next, connect your wallet and click the claim button. If your PR got merged and the issue got automatically closed, you should successfully be able to claim it. `,
  },
  {
    title: `How do I refund an escrow?`,
    description: `Head to the dedicated issue page, which you can find by searching the issue. Go to the refund page and connect your wallet. You should be able to get your money back if the deposit period has exceeded the lock-up period you set.`,
  },
  {
    title: `How many days is a ticket that I funded locked?`,
    description: `That depends how many days you want to lock the escrow. We recommend between 30-50 days`,
  },
  {
    title: `What if the maintainer steals my code and claims back the escrow?`,
    description: `So far, we've never experienced an instance when a maintainer collects the code without paying it. However, we are working on a plagiarism algorithm that detects such cases and reports them to the smart contract, so the contributor receives payment. We plan to be transparent about this and report organizations that do not treat their contributors fairly.  We are also working on a dispute resolution system to avoid these cases altogether.`,
  },
  {
    title: `What if the maintainer doesn't accept my code or wants to change it?`,
    description: `We know that cooperation can sometimes be difficult, especially for small tasks, and that sometimes what is required is not justified. We are working on an evaluation system to deal with this transparently. Please let us know if this should be the case so that we can draw attention to it in the community. In the future, we are planning a decentralized dispute resolution system via kleros courts to activate independent mediators.`,
  },
  {
    title: `Do you support project management tools other than Github?`,
    description: `Currently, we only support bounty creation from GitHub issues. Of course, you can also layout copywriting or design tasks via Github issues. Still, we don't want to complicate this unnecessarily and offer teams unopinionated solutions. We are open to adding additional platforms if we see enough demand. Let us know which software you would like to have connected to our escrow system, and we will work on it next!`,
  },
  {
    title: `On which chain are your smart contracts deployed?`,
    description: `We deployed our contracts on the polygon network but plan to support multi-chain soon.`,
  },
];

const FAQ = () => {
  const [clicked, setClicked] = useState([]);

  const changeItemStatus = (index) => {
    if (clicked[index]) {
      const old = clicked;
      old[index] = false;
      setClicked([...old]);
    } else {
      const old = clicked;
      old[index] = true;
      setClicked([...old]);
    }
  };

  return (
    <div>
      <section className={tw(`font-montserrat pt-28 pb-16`)}>
        <h1 className={tw(`text-center font-bold text-2xl pb-24`)}>Frequently Asked Questions</h1>
        {listItems.map((item, index) => {
          return (
            <div key={index} className={tw(`-mt-14 pb-5 px-6 lg:px-32 xl:px-64 pb-20`)}>
              <div onClick={() => changeItemStatus(index)} className={tw(`border-b border-gray-800 lg:px-20`)}>
                <div className={tw(`flex flex-row justify-between items-center`)}>
                  <h2 className={tw(`p-3 text-left font-semibold text-gray-700 text-xl pb-8`)}>{item.title}</h2>
                  {clicked[index] ? (
                    <button className={tw(`pb-5`)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={tw(`w-6 h-6`)}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                      </svg>
                    </button>
                  ) : (
                    <button className={tw(`pb-5`)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={tw(`w-6 h-6`)}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
                      </svg>
                    </button>
                  )}
                </div>
                {!clicked[index] ? null : (
                  <p className={tw(`p-3 -pt-5 pb-10 text-left text-gray-700 text-md`)}>{item.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FAQ;

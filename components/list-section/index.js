// @ts-nocheck

import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Permissionless Bounties`,
    description: `Pull requests are a much better mental model for decentralized communities. Our permissionless bounty system integrates directly with GitHub. Once a PR is closed, the developer automatically is eligable to withdraw the escrow.`,
  },
  {
    title: `Token Streams`,
    description: `Bounties are good for making initial connections and getting involved in projects. After that, you want to create stability. Streams enable decentralized payroll systems that are directly integrated into our accounting layer. .`,
  },
  {
    title: `Collaboration Pools`,
    description: `Building trust within a working group when it comes to fair distribution is difficult. Our decentralized escrow system creates trust and makes it possible to settle disputes via kleros courts.`,
  },
];

const ListSection = () => (
  <div>
    <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-16 text-left`)}>
          <h2 className={tw(`text-base text-purple-700 font-semibold tracking-wide uppercase`)}>Products</h2>
          <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900`)}>
            The Future of Work Stack
          </p>
        </div>
        <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
          <div className={tw(`w-full lg:w-1/2 px-8`)}>
            <ul className={tw(`space-y-12`)}>
              {listItems.map((item, index) => (
                <li className={tw(`flex -mx-4`)} key={item.title}>
                  <div className={tw(`px-4`)}>
                    <span
                      className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-purple-700`)}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className={tw(`px-4`)}>
                    <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                    <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={tw(`w-full lg:w-1/2 px-8`)}>
            <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
              <FeatureSvg width='100%' height='100%' />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ListSection;

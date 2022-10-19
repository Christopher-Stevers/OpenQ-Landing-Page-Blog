// @ts-nocheck

import { tw } from 'twind';
/* import Particles from 'react-particles-js'; */
import Image from 'next/image';
import Arrow from '@/constants/svg/arrow.svg';
import Link from 'next/link';

/* const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
); */

const articles = [
  {
    title: `The Legend of the Code Vending Machine`,
    link: `https://medium.com/openqdev/the-legend-of-the-code-vending-machine-b30d3d573c4f`,
    desc: `Why no code is still a no go`,
    image: `/images/no-code.jpeg`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Trust me bro`,
    link: `https://medium.com/openqdev/trust-me-bro-8fd8cf0a0e11`,
    desc: `How to get along with people you’ve never met`,
    image: `/images/trust-me.jpeg`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Web 2.0 DAO — Part I`,
    link: `https://medium.com/openqdev/web-2-0-dao-part-i-4cec53dd0ec3`,
    desc: `How I’d (Fail) To Build a DAO in 2010`,
    image: `/images/no-dao.jpeg`,
    alt: `Proident pariatur est.`,
  },
];

const CasesSection = () => (
  <section>
    <div className={tw(`bg-dark-mode pb-12`)}>
      <div className={tw(`pt-20`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Read more about us</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          We are about to change the way people work together
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`flex flex-col 2xl:flex-row justify-center items-center space-x-4`)}>
            {articles.map((article) => (
              <div key={article.title} className={tw(`mb-8 cursor-pointer hover:scale-105`)}>
                <div className={tw(`w-max text-center`)}>
                  <Link href={article.link} passHref>
                    <a target='_blank'>
                      <Image
                        src={article.image}
                        alt={article.alt}
                        className={tw(`rounded-t-2xl`)}
                        width={450}
                        height={300}
                      />
                    </a>
                  </Link>
                  <div className={tw(`p-4 w-fit shadow-lg -mt-2 bg-white rounded-b-2xl`)}>
                    <p className={tw(`uppercase text-sm font-bold text-gray-700 pb-1`)}>{article.title}</p>
                    <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={tw(`flex justify-center`)}>
            <Link href='https://medium.com/openqdev'>
              <a
                target='_blank'
                className={tw(
                  `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-white cursor-pointer z-30 hover:text-purple-600`
                )}
              >
                See all articles
                <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;

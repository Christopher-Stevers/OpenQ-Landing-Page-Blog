// @ts-nocheck
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { tw } from 'twind';
import Header from '../components/header';
import ProductSection from '../components/product-section';
import CardGroup from '../components/card-group';
import Footer from '../components/footer';
import Wave from 'react-wavify';
import Navigation from '../components/navigation';
import { useState, useEffect } from 'react';
import Tool from '../components/svg/tool';
import Payout from '../components/svg/payout';
import Account from '../components/svg/account';
import MockBountyList from '../components/header/MockBountyList';
import Reputation from '../components/svg/reputation';
import Diversity from '../components/svg/diversity';
import Boot from '../components/svg/boot';

export default function Home() {
  const [internalMenu, setInternalMenu] = useState('org');
  const [contestPage] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const prs = [
    {
      url: 'https://github.com/OpenQDev/OpenQ-Frontend/pull/454',
      title: 'Super fluid #454',
      description: 'FlacoJones merged 20 commits in from Johnny-V:master',
      scrollY,
      fade: '',
      price: '500',
    },
    {
      url: 'https://github.com/snapshot-labs/stamp/pull/12',
      title: 'Fetches ENS Avatar URL from on-chain using ethers.js ENS methods #12',
      description: 'bonustrack merged 7 commits into snapshot-labs:master from FlacoJones:master',
      scrollY,
      fade: '',
      price: '300',
    },
    {
      url: 'https://github.com/snapshot-labs/stamp/pull/20',
      title: 'feat: add Jazzicon resolver #20',
      description: 'bonustrack merged 5 commits into master from sekhmet/jazzicon',
      scrollY,
      fade: '',
      price: '300',
    },
    {
      url: 'https://github.com/snapshot-labs/stamp/pull/18',
      title: 'feat: add SelfID resolver #18',
      description: 'bonustrack merged 3 commits into master from sekhmet/selfid',
      scrollY,
      fade: '',
      price: '300',
    },
    {
      url: 'https://github.com/honey-labs/honey-frontend/pull/162',
      title: 'Add TPS banner #162',
      description: 'BowTiedHeron merged 2 commits into honey-labs:development from eborrallo:development',
      scrollY,
      fade: '',
      price: '200',
    },
    {
      url: 'https://github.com/OpenQDev/OpenQ-Frontend/pull/376',
      title: 'wallet connect buttons centered #376',
      description: 'FlacoJones merged 1 commit into OpenQDev:development from ArcAnya:development',
      scrollY,
      fade: '',
      price: '20',
    },
    {
      url: 'https://github.com/OpenQDev/OpenQ-Frontend/pull/54',
      title: 'Adds Jazzicon. Close #19 #54',
      description: 'FlacoJones merged 1 commit into OpenQDev:development from ArcAnya:development',
      scrollY,
      fade: '',
      price: '90',
    },
    {
      url: 'https://github.com/OpenQDev/OpenQ-Frontend/pull/67',
      title: 'First visit #67',
      description:
        'FlacoJones merged 2 commits into OpenQDev:development from Christopher-Stevers:first-visit on Feb 28',
      scrollY,
      fade: '',
      price: '90',
    },
    {
      url: 'https://github.com/OpenQDev/OpenQ-Frontend/pull/691',
      title: 'Fixed claim text and pagination. #691',
      description: 'FlacoJones merged 6 commits into OpenQDev:staging from Christopher-Stevers:WIP-categories',
      scrollY,
      fade: '',
      price: '250',
    },
    {
      url: 'https://github.com/OpenQDev/OpenQ-Frontend/pull/592',
      title: 'Contest PayoutSchedule, Contract Wizard #592',
      description: 'Christopher-Stevers merged 23 commits into OpenQDev:staging from ArcAnya:tierVolume',
      scrollY,
      fade: '',
      price: '250',
    },
    {
      url: 'https://github.com/OpenQDev/OpenQ-Frontend/pull/779',
      title: 'Added emojis to TVL and Current Target Budget closes #774 #779 ',
      description: 'FlacoJones merged 3 commits into OpenQDev:staging from Vinitvh:production',
      scrollY,
      fade: '',
      price: '10',
    },
  ];
  const cardSectionDataOrg = [
    {
      title: 'Programmable payouts',
      SVG: Payout,
      body:
        'Customize your contest blueprint and reward structure. Developers get paid automatically once you merge their submission on Github. ',
    },
    {
      title: 'Hackathon tooling services',
      SVG: Tool,
      body:
        "Fair submissions are important to us. We'll keep an eye out for things like plagiarism and version control, so you don't have to ",
    },
    {
      title: 'Accounting included',
      SVG: Account,
      body:
        '(Coming soon) Our accounting system will make and send you an invoice for each disbursement automatically. No need to ask devs for one.',
    },
  ];
  const cardSectionDataDev = [
    {
      title: 'Variety that inspires',
      SVG: Diversity,
      body:
        'We curate contests that light up your soul or find new exciting tasks that take you to the next level as a software developer.',
    },
    {
      title: 'Enhance your reputation',
      SVG: Reputation,
      body:
        'Every contest you enter, win or not, adds on-chain attestations to your profile that open up new opportunities.',
    },
    {
      title: 'Boostrap with OpenQ',
      SVG: Boot,
      body: "We'll share your project with our network and will keep our community updated on your progress.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);
  return (
    <div>
      <Head>
        <link rel='icon' href='/logo.png' />
      </Head>
      <NextSeo title='OpenQ' description='' />

      <main>
        <Navigation />
        <Header pageVersionHookInstance={[internalMenu, setInternalMenu]} contest={contestPage} />
        <div className={tw(`w-full rotate-180 -mt-2`)}>
          <Wave
            fill='#121212'
            paused={false}
            options={{
              height: 30,
              amplitude: 80,
              speed: 0.1,
              points: 3,
            }}
          />
        </div>
        <MockBountyList internalMenu={internalMenu} contest={true} />
        <div className={tw(`flex justify-center`)}>
          <div className={tw(`max-w-8xl w-full px-4`)}>
            <CardGroup
              internalMenu={internalMenu}
              contest={contestPage}
              data={internalMenu === 'org' ? cardSectionDataOrg : cardSectionDataDev}
            />
            <ProductSection prs={prs} internalMenu={internalMenu} contest={true} />
            <div className={tw(`py-16`)}></div>
            {/* <FAQ /> */}
          </div>
        </div>

        {/*<ListSection />*/}
        {/*<FeatureSection /> */}
        {/*         <SocialProof /> */}
      </main>
      <Footer />
    </div>
  );
}

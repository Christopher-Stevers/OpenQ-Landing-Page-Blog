// @ts-nocheck
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { tw } from 'twind';
import Header from '../components/header';
import ProductSection from '../components/product-section';
import CardGroup from '../components/card-group';
import Footer from '../components/Footer';
import FAQ from '../components/faq';
import Wave from 'react-wavify';
import Navigation from '../components/navigation';
import Add from '../components/svg/add';
import IssueOpened from '../components/svg/issueOpened';
import MarkGithub from '../components/svg/markGithub';
import ScaleTeam from '../components/svg/scaleTeam';
import DevFirst from '../components/svg/devFirst';
import Permissionless from '../components/svg/permissionless';
import { useState, useEffect } from 'react';
import StreamSection from '../components/product-section/StreamSection';
import AccountingSection from '../components/product-section/AccountingSection';
import MockBountyList from '../components/header/MockBountyList';
export default function Home() {
  const [internalMenu, setInternalMenu] = useState('org');
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
  const cardSectionDataDev = [
    {
      title: 'Permissionless escrows',
      SVG: Permissionless,
      body:
        'Never worry again about not getting paid in time. Every ticket that has an escrow assigned is insuring payment after the job is completed.',
    },
    {
      title: 'Designed for devs',
      SVG: DevFirst,
      body:
        'Being GitHub integrated, we deal with everything else aside from coding. Never worry again about invoicing, taxation and finding new clients.',
    },
    {
      title: 'Portable reputation',
      SVG: Add,
      body:
        'Boost your reputation in the ecosystem with demonstrable on-chain projects, history and skill analysis. Your CVs will never lie because we can prove it.',
    },
  ];

  const cardSectionDataOrg = [
    {
      title: 'Dynamically scale your team to meet your changing needs',
      SVG: ScaleTeam,
      body:
        "Assign tickets to developers without any strings attached. After the job is completed, it's up to you if you want to continue.",
    },
    {
      title: 'OpenQ works where you work - on GitHub',
      SVG: MarkGithub,
      body: "OpenQ's seamless Github integrations let you merge your recruiting, payroll and DevOps all into one.",
    },
    {
      title: 'Developers for everyday problems',
      SVG: IssueOpened,
      body:
        'OpenQ automatically broadcasts your task to multiple engineers with the perfect skillset to get the job done.',
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
        <Header pageVersionHookInstance={[internalMenu, setInternalMenu]} contest={false} />
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
        <MockBountyList bountiesVisible={true} />
        <div className={tw(`flex justify-center`)}>
          <div className={tw(`max-w-8xl w-full px-4`)}>
            <CardGroup
              internalMenu={internalMenu}
              data={internalMenu === 'org' ? cardSectionDataOrg : cardSectionDataDev}
            />
            {<ProductSection prs={prs} internalMenu={internalMenu} />}
            <div className={tw(`py-16`)}></div>
            <StreamSection internalMenu={internalMenu} scrollY={scrollY} />
            <AccountingSection internalMenu={internalMenu} scrollY={scrollY} />
            <FAQ />
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

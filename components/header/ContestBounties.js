import React from 'react';
import MockContest from '../../components/product-section/MockContest';
import { tw } from 'twind';

const ContestsBounties = () => {
  const scrollY = 10;

  return (
    <>
      <MockContest
        repo={'honey-labs/honey-frontend'}
        title={'100X Lending Crypto Contest'}
        budget={'$7000'}
        avatarUrl={'https://avatars.githubusercontent.com/u/92924948?s=60&v=4'}
        days={10}
        scrollY={scrollY}
        isContestPage={true}
      />
      <MockContest
        repo={'openqdev/openq-frontend'}
        title={'🌳 OpenQ [dys/u]topia Hackathon'}
        budget={'$10,000'}
        url={'https://github.com/openqdev/openq-frontend'}
        avatarUrl={'https://avatars.githubusercontent.com/u/77402538?s=200&v=4'}
        days={4}
        scrollY={scrollY}
        isContestPage={true}
      />
      <div className={tw(`hidden md:block`)}>
        <MockContest
          repo={'snapshot-labs/snapshot'}
          title={'Hackathon for Governance Tools that Shape the Future'}
          budget={'$8000'}
          url={'https://github.com/snapshot-labs/snapshot'}
          avatarUrl={'https://avatars.githubusercontent.com/u/72904068?s=200&v=4'}
          days={17}
          scrollY={scrollY}
          noBorder={true}
          isContestPage={true}
        />
      </div>
    </>
  );
};
export default ContestsBounties;

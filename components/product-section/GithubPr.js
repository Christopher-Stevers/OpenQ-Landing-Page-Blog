import { tw } from 'twind';
import OnScroll from '../utils/OnScroll';
import styles from './GithubMessage.module.css';

const GithubPr = ({internalMenu}) => {

  return (
    <OnScroll internalMenu={internalMenu} fade="animate-fadeInLeft" className="w-full">
      <div  className={tw(`w-full flex relative`)}>
        <div className='w-9 h-9 flex-none'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
            <path
              fillRule='evenodd'
              d='M4.75 3a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM1.5 4.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM4.75 17.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM1.5 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zm17.75-1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM16 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z'
            ></path>
            <path
              fillRule='evenodd'
              d='M4.75 7.25A.75.75 0 015.5 8v8A.75.75 0 014 16V8a.75.75 0 01.75-.75zm8.655-5.53a.75.75 0 010 1.06L12.185 4h4.065A3.75 3.75 0 0120 7.75v8.75a.75.75 0 01-1.5 0V7.75a2.25 2.25 0 00-2.25-2.25h-4.064l1.22 1.22a.75.75 0 01-1.061 1.06l-2.5-2.5a.75.75 0 010-1.06l2.5-2.5a.75.75 0 011.06 0z'
            ></path>
          </svg>
        </div>
        <div
          className={
            styles.productSectionGithubMessage +
            ' ' +
            styles.light +
            ' ' +
            ' ' +
            tw(
              `w-full rounded-lg  ml-4 border-github-primary border  relative border`
            )
          }
        >
          <div className={tw(`w-full pl-3 text-left  py-2 pl-4 text-sm`)}>
            <div className='flex items-center gap-4'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='#32a057' viewBox='0 0 24 24' width='24' height='24'>
                <path
                  fillRule='evenodd'
                  d='M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.28-2.72a.75.75 0 00-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l6.5-6.5z'
                ></path>
              </svg>

              <div>
                <div className={tw(`font-semibold`)}>This branch has no conflicts with the base branch. </div>
                <div className={tw(``)}>Merging can be performed automatically.</div>
              </div>
            </div>
          </div>
          <div className={tw(`w-full p-4 border-github-primary border-t rounded-b-lg text-left`)}>
            <div className={tw(`bg-github-primary text-white rounded-lg px-2 py-1 w-48 text-center`)}>
              Merge Pull Request
            </div>
          </div>
        </div>
      </div>
    </OnScroll>
  );
};

export default GithubPr;

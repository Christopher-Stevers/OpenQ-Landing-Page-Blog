import Image from 'next/image';
import { tw } from 'twind';
import styles from './CreatePrMock.module.css';

const CreatePrMock = () => {
  return (
    <div className={tw(`w-full pt-4 flex justify-between relative lg:w-80 xl:w-96 w-full `)}>
      <div className='w-9 h-9 top-0 right-0 flex-0'>
        <Image className='rounded-full' height={36} width={36} src={'/githubAvatar.jpg'} />
      </div>

      <div
        className={
          styles.productSectionGithubMessage +
          ' ' +
          tw(`text-black rounded-lg  left-4 border-gray-500 flex-1 border relative border`)
        }
      >
        <div className={tw(` p-2`)}>
          <div className={tw(`border border-muted w-full p-2 rounded-md font-semibold bg-white`)}>
            Fixed integration issues with new crypto payment feature
          </div>
        </div>
        <div className={tw(` border-muted border-t pt-2 rounded-b-lg`)}>
          <div className={tw(`flex px-4 text-sm`)}>
            <div className={tw(`px-4 py-2`)}>Write</div>
            <div className={tw(`px-4 py-2 border-x border-t rounded-t border-muted`)}>Preview</div>
          </div>
          <div className={tw(`border-muted p-3 border-t text-sm `)}>
            <div>
              {' '}
              Closes <span className={tw(`text-link-colour pb-1`)}>#554</span>
              <div className={tw(`pt-2`)}>
                <div className={tw(`bg-gray-300 text-gray-300 rounded-lg`)}>uses ens when on</div>
              </div>
              <div className={tw(`pt-2 pb-3`)}>
                <div className={tw(`bg-gray-300 text-gray-300 rounded-lg mr-20`)}>uses ens when on</div>
              </div>
            </div>
            <div className={tw(`bg-github-primary text-white p-1 w-40 text-center rounded-md float-right my-2`)}>
              {' '}
              Create Pull Request
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePrMock;

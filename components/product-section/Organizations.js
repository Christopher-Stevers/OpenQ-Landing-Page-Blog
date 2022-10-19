import { tw } from 'twind';
import Image from 'next/image';

const Organizations = () => {
  return (
    <div className={tw(`pl-8 pt-8 lg:-mt-10 lg:col-span-2`)}>
      <div className={tw(`border border-gray-900 rounded-xl`)}>
        <div className={tw(`flex py-5 justify-center text-center items-center space-x-3`)}>
          <div className={tw(``)}>
            <Image src='/logo.png' alt='OpenQ Logo' width='60%' height='60%' />
            <div className={tw(`font-bold text-2xl`)}>OpenQ</div>
            <div className={tw(`pt-2 font-semibold text-gray-500`)}>5 open tickets</div>
          </div>
        </div>
      </div>
      <div className={tw(`pt-5 lg:-mt-10 lg:ml-20 lg:bg-white`)}>
        <div className={tw(`border border-gray-900 rounded-xl `)}>
          <div className={tw(`flex py-5 justify-center text-center items-center space-x-3`)}>
            <div className={tw(``)}>
              <Image src='/snapshot.png' alt='OpenQ Logo' width='65%' height='65%' />
              <div className={tw(`font-bold text-2xl`)}>Snapshot</div>
              <div className={tw(`pt-2 font-semibold text-gray-500`)}>4 open tickets</div>
            </div>
          </div>
        </div>
      </div>
      <div className={tw(`pt-5 lg:-mt-10 lg:ml-32 lg:bg-white`)}>
        <div className={tw(`border border-gray-900 rounded-xl`)}>
          <div className={tw(`flex py-5 justify-center text-center items-center space-x-3`)}>
            <div className={tw(``)}>
              <Image src='/honey.png' alt='OpenQ Logo' width='75%' height='75%' />
              <div className={tw(`font-bold text-2xl`)}>Honey</div>
              <div className={tw(`pt-2 font-semibold text-gray-500`)}>2 open tickets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;

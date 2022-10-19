// @ts-nocheck

import { tw } from 'twind';
import CasesSection from '../components/cases-section';

const ProductFooter = () => (
  <div className={tw(``)}>
    <div className={tw(`bg-dark-mode -mt-1 lg:mx-20 lg:rounded-b-2xl`)}>
      <section className={tw(`font-montserrat mx-10 mx-auto lg:mx-60`)}>
        <CasesSection />
      </section>
    </div>
  </div>
);

export default ProductFooter;

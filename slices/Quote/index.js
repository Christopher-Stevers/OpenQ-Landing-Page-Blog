import * as prismicH from "@prismicio/helpers";
import { PrismicText } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";
import {tw} from 'twind'

const Quote = ({ slice }) => {
  return (
    <Bounded as="section" size="wide">
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <div className={tw(`font-serif text-3xl italic leading-relaxed`)}>
          &ldquo;
          <PrismicText field={slice.primary.quote} />
          &rdquo;
          {prismicH.isFilled.keyText(slice.primary.source) && (
            <> &mdash; {slice.primary.source}</>
          )}
        </div>
      )}
    </Bounded>
  );
};

export default Quote;

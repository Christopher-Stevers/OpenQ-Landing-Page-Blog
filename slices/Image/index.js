import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import {tw} from 'twind'

import { Bounded } from "../../components/Bounded";

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" size={slice.variation === "wide" ? "widest" : "base"}>
      <figure className={tw(`grid grid-cols-1 gap-4`)}>
        {prismicH.isFilled.image(image) && (
          <div className={tw(`bg-gray-100`)}>
            <PrismicNextImage field={image} layout="responsive" />
          </div>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption className={tw(`text-center font-serif italic tracking-tight text-slate-500`)}>
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </figure>
    </Bounded>
  );
};

export default Image;

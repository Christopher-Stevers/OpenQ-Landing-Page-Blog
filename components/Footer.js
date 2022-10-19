import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { tw } from 'twind';

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";
import { useState } from "react";

const SignUpForm = ({ settings }) => {

  const [email, setEmail] = useState("");
  const subscribe = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("api_key", "JlUKxDNJAmbFF44byOHTNQ");
      formData.append("email", email);
      const response = await fetch('https://api.convertkit.com/v3/forms/3697685/subscribe', {
        method: "POST",
        body: formData
      });
      const subscribeJson = await response.json();
      if (subscribeJson) {
        setEmail("");
      }
    }
    catch (err) {
      console.log(err);

    }
  };
  return (
    <div className={tw(`px-4`)}>
      <form
        method="post"
        className={tw(`grid w-full max-w-xl grid-cols-1 gap-6`)}
      >
        {prismicH.isFilled.richText(settings.data.newsletterDisclaimer) && (
          <div className={tw(`text-center font-serif tracking-tight text-slate-500`)}>
            <PrismicRichText
              field={settings.data.newsletterDescription}
              components={{
                heading1: ({ children }) => (
                  <Heading as="h2" className={tw(`mb-4 last:mb-0`)}>
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }) => (
                  <p className={tw(`mb-4 italic last:mb-0`)}>{children}</p>
                ),
              }}
            />
          </div>
        )}
        <div className={tw(`grid grid-cols-1 gap-2`)}>
          <div className={tw(`relative`)}>
            <label>
              <span className={tw(`sr-only`)}>Email address</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                required={true}
                className={tw(`w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-10 text-slate-800 placeholder-slate-400`)}
              />
            </label>
            <button
              onClick={subscribe}
              type="submit"
              className={tw(`absolute top-0 right-0 bottom-0 flex items-center justify-center px-3 text-2xl text-slate-400`)}
            >
              <span className={tw(`sr-only`)}>Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div>
          {prismicH.isFilled.richText(settings.data.newsletterDisclaimer) && (
            <p className={tw(`text-center text-xs tracking-tight text-slate-500`)}>
              <PrismicText field={settings.data.newsletterDisclaimer} />
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export const Footer = ({ withSignUpForm = true, settings }) => {
  return (
    <Bounded as="footer">
      <div className={tw(`grid grid-cols-1 justify-items-center gap-24`)}>
        <HorizontalDivider />
        {withSignUpForm && <SignUpForm settings={settings} />}
        <div className={tw(`mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500`)}>
          Proudly published using{" "}
          <PrismicLink href="https://prismic.io" className={tw(`text-slate-700`)}>
            Prismic
          </PrismicLink>
        </div>
      </div>
    </Bounded>
  );
};

import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import {tw} from 'twind'

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";

const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className={tw(`px-4`)}>
      <div className={tw(`grid max-w-lg grid-cols-1 justify-items-center gap-8`)}>
        <PrismicLink href="/" tabIndex="-1">
          <div className={tw(`relative h-40 w-40 overflow-hidden rounded-full bg-slate-300`)}>
            {prismicH.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={profilePicture}
                layout="fill"
                className={tw(`object-cover`)}
              />
            )}
          </div>
        </PrismicLink>
        {(prismicH.isFilled.richText(name) ||
          prismicH.isFilled.richText(description)) && (
          <div className={tw(`grid grid-cols-1 gap-2 text-center`)}>
            {prismicH.isFilled.richText(name) && (
              <Heading>
                <PrismicLink href="/">
                  <PrismicText field={name} />
                </PrismicLink>
              </Heading>
            )}
            {prismicH.isFilled.richText(description) && (
              <p className={tw(`font-serif text-2xl italic leading-normal tracking-tight text-slate-500`)}>
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const NavItem = ({ children }) => {
  return (
    <li className={tw(`font-semibold tracking-tight text-slate-800`)}>{children}</li>
  );
};

export const Header = ({
  withDivider = true,
  withProfile = true,
  navigation,
  settings,
}) => {
  return (
    <Bounded as="header">
      <div className={tw(`grid grid-cols-1 justify-items-center gap-20`)}>
        <nav>
          <ul className={tw(`flex flex-wrap justify-center gap-10`)}>
            <NavItem>
              <PrismicLink href="/blog">
                <PrismicText field={navigation.data.homepageLabel} />
              </PrismicLink>
            </NavItem>
            {navigation.data?.links.map((item) => (
              <NavItem key={prismicH.asText(item.label)}>
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </NavItem>
            ))}
          </ul>
        </nav>
        {withProfile && (
          <Profile
            name={settings.data.name}
            description={settings.data.description}
            profilePicture={settings.data.profilePicture}
          />
        )}
        {withDivider && <HorizontalDivider />}
      </div>
    </Bounded>
  );
};

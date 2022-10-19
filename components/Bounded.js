import {tw} from "twind";

export const Bounded = ({
  as: Comp = "div",
  size = "base",
  children,
}) => {
  return (
    <Comp className={tw("px-4 py-8 md:py-10 md:px-6 lg:py-12")}>
      <div
        className={tw(
          "mx-auto w-full",
          size === "small" && "max-w-xl",
          size === "base" && "max-w-3xl",
          size === "wide" && "max-w-4xl",
          size === "widest" && "max-w-6xl"
        )}
      >
        {children}
      </div>
    </Comp>
  );
};

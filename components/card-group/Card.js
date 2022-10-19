import { tw } from 'twind';

const Card = ({ SVG, title, body }) => {
  return (
    <div className={tw(`flex justify-center`)}>
      <div className={tw(`flex flex-col pt-10 md:pt-0 text-center`)}>
        <div className={tw(`mx-auto p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 w-min`)}>
          <SVG />
        </div>
        <h2 className={tw(`pt-3 font-semibold text-xl lg:text-2xl w-full`)}>{title}</h2>
        <div className={tw(`text-gray-400 text-xl pt-2`)}>{body}</div>
      </div>
    </div>
  );
};

export default Card;

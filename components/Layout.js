
import Footer from '../components/Footer';
import { tw } from 'twind';
import Navigation from "./navigation";

export const Layout = ({
  settings,
  withSignUpForm,
  children,
}) => {
  return (
    <div className={tw(`text-slate-700`)}>
      <Navigation lightTheme={true} />
      <main>{children}</main>
      <Footer withSignUpForm={withSignUpForm} settings={settings} />
    </div>
  );
};

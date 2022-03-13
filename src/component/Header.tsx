import ViteLogo from "../vite-logo.svg";
import ReactLogo from "../react-logo.svg";
import TailwindcssLogo from "../tailwindcss-logo.svg";

const Header = () => {
  return (
    <header className="flex flex-col items-center absolute top-24">
      <h2 className="italic text-5xl uppercase">The Stack</h2>
      <div className="flex space-x-3 mt-2">
        <img className="h-20 " src={ReactLogo} alt="" />
        <img className="h-20 " src={TailwindcssLogo} alt="" />
        <img className="h-20 " src={ViteLogo} alt="" />
      </div>
    </header>
  );
};

export default Header;

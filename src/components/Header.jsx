import { InfoPane, SearchBar } from "./index.js";

const Header = () => {
  return (
    <section className="bg-mobile md:bg-desktop bg-no-repeat bg-cover h-[35vh] md:h-[25vh] relative py-5">
      <h1 className="text-white font-semiBold text-center text-heading">
        IP Address Tracker
      </h1>
      <SearchBar />
      <InfoPane />
    </section>
  );
};

export default Header;

import Arrow from "../images/icon-arrow.svg";
import { TrackerContext } from "../context/TrackerProvider";
import { useContext } from "react";

const SearchBar = () => {
  const { input, setAddress } = useContext(TrackerContext);
  const handleClick = () => {
    setAddress(input.current.value);
  };
  return (
    <section className="flex flex-row justify-center w-[80%] md:w-[35%] mx-auto h-[2.75rem] my-5">
      <input
        aria-label="search bar"
        type="text"
        className="w-full h-full rounded-l-lg text-input font-medium text-gray-600 outline-0 border-0 pl-4"
        ref={input}
      />

      <button
        aria-label="search ip address button"
        className="search bg-black h-full w-[3rem] flex items-center justify-center rounded-r-lg"
        onClick={handleClick}
      >
        <img src={Arrow} alt="Search button" />
      </button>
    </section>
  );
};

export default SearchBar;

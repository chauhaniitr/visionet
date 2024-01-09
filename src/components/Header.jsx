import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className=" gap-28 bg-slate-200 shadow-inner ">
        <div className=" grid grid-cols-6 gap-4 justify-center">
          <Link to="/">
            <h1
              className="ml-4 flex col-span-2 text-sm sm:text-4xl justify-content-center
  align-items-center "
            >
              {" "}
              <span className="text-red-600 font-bold ">V</span>
              <span className="text-blue-600 font-medium ">isonet</span>
            </h1>
          </Link>
          <form
            className="col-start-3 col-end-5 mt-2 mx-auto justify-content-center
  align-items-center bg-slate-100 p-3 rounded-lg flex items-center  focus:outline-none"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-24 sm:w-64 bg-transparent focus:outline-none "
            />
            <FaSearch className="text-slate-500" />
          </form>
          <div className="col-span-2 mt-2">
            <ul className="flex gap-6 justify-center">
              <Link to="/">
                <li className="hidden sm:inline"> Home</li>
              </Link>
              <Link to="/about">
                <li className="hidden sm:inline"> About</li>
              </Link>
              <Link to="/sign-in">
                <li className=""> Sign in</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

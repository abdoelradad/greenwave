import { BiCoffeeTogo } from "react-icons/bi";
import Logo from "../Logo/Logo";
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-60 border-t border-gray-700 py-10 text-center sm:justify-between ">
      <div className="max-w-6xl mx-auto flex items-center justify-center flex-col gap-5">
        <div className="flex items-center justify-center gap-x-1">
          <Logo />
        </div>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-6 md:gap-x-8">
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-primary"
            >
              About Us
            </div>
          </li>
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-primary"
            >
              License
            </div>
          </li>
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-primary"
            >
              Contact Us
            </div>
          </li>
        </ul>

       <div className="text-sm text-gray-400">
        &copy; All rights reserved
        </div> 
      </div>
    </footer>
  );
}
export default Footer;

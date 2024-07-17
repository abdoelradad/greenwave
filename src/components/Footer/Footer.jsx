import { BiCoffeeTogo } from "react-icons/bi";
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-60 border-t border-blue-gray-50 p-6 text-center sm:justify-between ">
      <div>
        <div className="absolute  -translate-x-1/2 -translate-y-1/2 flex  gap-x-1 font-bold  sm:pl-44 ">
          &copy; DEATH
          <span>
            <BiCoffeeTogo className=" text-primary pt-1 text-xl md:text-2xl" />
          </span>
          COFFEE
        </div>
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
    </footer>
  );
}
export default Footer;


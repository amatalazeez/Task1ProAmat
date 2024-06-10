import { Sidebar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineCube ,

} from "react-icons/hi";

import { motion } from "framer-motion";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
function SideBar({ isOpen, setIsOpen }) {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className={
        "fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 " +
        (isOpen ? "block" : "hidden")
      }
    >
      <button
        className="w-5 h-5  rounded-full absolute -right-[2.5px] top-15 flex items-center justify-center "
        onClick={() => setIsOpen(false)}
      >
        <span className="font-semibold text-white sm:hidden ">X</span>
      </button>
      <div className=" bg-[#513252] flex flex-col h-[198px] overflow-y-hidden items-center justify-center ">
     
        <div className="flex space-x-6  text-white items-center -mt-4 justify-center ">
         
          <h1>Mosnad logo</h1>
        </div>
      </div>
      <Sidebar className="">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="space-y-2 ">

            <Sidebar.Item icon={HiOutlineCube}>
              <Link to={"/"}>Product</Link>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </motion.div>
  );
}

export default SideBar;

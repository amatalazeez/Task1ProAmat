import React from "react";
import Header from "../Components/Partials/Header";
import SideBar from "../Components/Partials/SideBar";
import { useState } from "react";

function AppLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen w-full flex bg-gray-100 dark:bg-gray-900 ">
      {/* <!-- ===== Sidebar Start ===== --> */}
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <!-- ===== Sidebar End ===== --> */}

      {/* <!-- ===== Content Area Start ===== --> */}
      <div
        className={
          "w-full flex flex-col items-center  " + (isOpen ? "sm:ml-64 " : " ")
        }
      >
        {/* <!-- ===== Header Start ===== --> */}
        <Header setIsOpen={setIsOpen} />
        {/* <!-- ===== Header End ===== --> */}

        {/* <!-- ===== Main Content Start ===== --> */}
        <main className="w-full  ">
          <div className="p-4  ">{children}</div>
        </main>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      {/* <!-- ===== Content Area End ===== --> */}
    </div>
  );
}

export default AppLayout;

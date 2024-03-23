import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { LogOut } from "lucide-react";

function Layout({children}) {
  return ( 
    <div className="flex h-screen flex-row overflow-hidden">
      <div className="w-64 flex-none">

        <div className="flex h-full flex-col px-2 py-4">

          <div className="flex grow flex-col space-x-0 space-y-2 justify-between">
            <NavLinks />
            <div className="h-auto w-full grow rounded-md bg-gray-50"></div>
            <form>
              <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                {/* <PowerIcon className="w-6" /> */}
                <LogOut />
                <div className="block">Sign Out</div>
              </button>
            </form>
          </div>
        </div>

      </div>
      <div className="flex-grow p-6 overflow-y-auto">
        {children}
      </div>
    </div>
   );
}

export default Layout;
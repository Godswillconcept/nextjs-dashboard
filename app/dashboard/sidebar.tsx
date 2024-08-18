import {
    ArrowRightIcon,
  CogIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  PowerIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import AcmeLogo from "../ui/acme-logo";
import Link from "next/link";
import NavLinks from "./nav-links";

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="flex flex-grow flex-col gap-2 mt-2"> 
        <NavLinks />
      </div>
    </div>
  );
}

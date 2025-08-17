"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SignInButton, SignedOut, UserButton, SignedIn } from "@clerk/nextjs";

// Navitems
const Navitems = [
  { link: "/", label: "Home" },
  { link: "/companions", label: "Learning Companions" },
  { link: "/my-journey", label: "My Journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 md:gap-8">
      {Navitems.map((nav) => (
        <Link
          key={nav.label}
          href={nav.link}
          className={cn(pathname === nav.link && "text-primary font-semibold")}
        >
          {nav.label}
        </Link>
      ))}

      <div className="flex items-center gap-8">
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavItems;

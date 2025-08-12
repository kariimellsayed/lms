import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

export const Header = () => {
  return (
    <header className="navbar">
      {/* Logo  */}
      <Link href={"/"}>
        <div className="flex items-center cursor-pointer">
          <Image src="/images/logo.svg" alt="converso" width={46} height={44} />
        </div>
      </Link>

      {/* Links */}
      <NavItems />
    </header>
  );
};

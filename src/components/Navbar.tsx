import Link from "next/link";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="bg-blue-600 px-6 py-4">
      <nav className="flex justify-between ">
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About </Link>
          <Link href="/product">Product</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <Link href="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

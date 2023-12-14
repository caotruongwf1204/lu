import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import NextImage from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import "@/app/css/header.css";

export default function Header() {
  return (
    <header className="header flex items-center justify-center pt-3">
      <div className="header-container container flex items-center justify-between">
        <Link className="link logo" href={"/"}>
          <NextImage
            width={170}
            height={100}
            className="w-full h-auto object-cover"
            alt="logo"
            src="/logo.webp"
          />
        </Link>

        <div className="header-search">
          <form className="search-form">
            <input
              className="search-input"
              type="text"
              placeholder="Tìm kiếm..."
            />
            <button className="search-btn" type="submit">
              <CiSearch />
            </button>
          </form>
        </div>

        <div className="header-icons flex gap-3 text-2xl">
          <Link href={""}>
            <FaRegUserCircle />
          </Link>

          <Link href={""}>
            <BsBagCheck />
          </Link>
        </div>
      </div>
    </header>
  );
}

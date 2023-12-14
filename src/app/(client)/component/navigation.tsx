import React from "react";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import NextImage from "next/image";
import { GoChevronDown } from "react-icons/go";
import "@/app/css/navigation.css";

export default function Navigation() {
  return (
    <main className="navbar flex items-center justify-center">
      <div className="container">
        <div className="row flex items-center justify-center main-menu">
          <div className="nav-logo">
            <Link className="link logo" href={"/"}>
              <NextImage
                width={170}
                height={100}
                className="w-full h-auto object-cover"
                alt="logo"
                src="/logo.webp"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              className="navigation flex items-center justify-center gap-2 h-12"
              color="foreground"
              href="/collection"
            >
              ĐỒNG HỒ <GoChevronDown />
              <ul className="submenu">
                <li>Bee</li>
                <li>wonderland</li>
                <li>Classic</li>
                <li>Celestial</li>
                <li>Rainbow</li>
                <li>Floral</li>
                <li>Sports Luxe</li>
              </ul>
            </Link>

            <Link
              className="navigation flex items-center justify-center gap-2 h-12"
              href="/accessory"
              aria-current="page"
            >
              PHỤ KIỆN <GoChevronDown />
              <ul className="submenu">
                <li>Apple Watch Strap</li>
              </ul>
            </Link>

            <Link
              className="flex items-center justify-center gap-2 h-12"
              color="foreground"
              href="/collection"
            >
              BÀI VIẾT <GoChevronDown />
            </Link>
          </div>
          <div className="nav-icons flex gap-3">
            <Link href={""}>
              <FaRegUserCircle />
            </Link>

            <Link href={""}>
              <IoIosHeartEmpty />
            </Link>

            <Link href={""}>
              <BsBagCheck />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

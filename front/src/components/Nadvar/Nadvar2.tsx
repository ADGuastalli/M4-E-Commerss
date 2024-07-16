"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/userContex";

function CustomNav() {
  const { isLogged } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(isLogged);

  useEffect(() => {
    setLoggedIn(isLogged);
  }, [isLogged]);

  return (
    <Navbar fluid rounded className="bg-transparent">
      <NavbarBrand as="div">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <div className="relative object-contain w-10 h-10 mr-2">
              <Image
                src="/iconostore.jpg"
                alt="Flowbite React Logo"
                className="rounded-full"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
              />
            </div>
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
              Apple Zone
            </span>
          </div>
        </Link>
      </NavbarBrand>
      <NavbarToggle />

      <NavbarCollapse>
        <li>
          <Link href="/home">
            <button className="self-center whitespace-nowrap text-xl font-semibold text-white ml-5">
              Home
            </button>
          </Link>

          <Link href="/about">
            <button className="self-center whitespace-nowrap text-xl font-semibold text-white ml-5">
              About Us
            </button>
          </Link>

          {loggedIn ? (
            <Link href="/carrito">
              <button className="self-center whitespace-nowrap text-xl font-semibold text-white ml-5">
                My Shopping Cart
              </button>
            </Link>
          ) : null}
          {!loggedIn ? (
            <Link href="/register-login">
              <button className="self-center whitespace-nowrap text-xl font-semibold text-white ml-5">
                Register - Log In
              </button>
            </Link>
          ) : (
            <Link href="/dashboard">
              <button className="self-center whitespace-nowrap text-xl font-semibold text-white ml-5">
                My Profile
              </button>
            </Link>
          )}
        </li>
      </NavbarCollapse>
    </Navbar>
  );
}

export default CustomNav;

"use client";
import fonts from "@/lib/utils/fonts";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import React from "react";

const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const RoutingNavbar = () => {
  const iterateableLinks = [
    { name: "Home", linkablePage: "/", iconLeft: "" },
    { name: "About", linkablePage: "/", iconLeft: "" },
    { name: "Health awareness", linkablePage: "/", iconLeft: "" },
    { name: "Programme", linkablePage: "/", iconLeft: "" },
    { name: "Any emergency.?", linkablePage: "/", iconLeft: "" },
    { name: "Check off.", linkablePage: "/", iconLeft: "" },
  ];
  return (
    <main className=" m-auto mt-4 absolute top-0 left-0 w-full h-auto">
      <Navbar className="shadow-small rounded-full w-[80%] m-auto border-gray-200 border-1 ">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit text-sm">MEDBLOOMBERG</p>
        </NavbarBrand>

        <NavbarContent
          className="hidden m-auto  text-center items-center justify-center   xl:flex gap-4"
          justify="center"
        >
          {iterateableLinks.map((link, index) => (
            <NavbarItem key={index}>
              <Link
                className={`${fonts.manrope.className} flex gap-1 font-medium text-sm items-center`}
                color="foreground"
                href={link.linkablePage}
              >
                {link.iconLeft}
                {link.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent as="div" justify="end">
          <Button size="sm" color="success" className="text-white max-xl:hidden" radius="sm">Register now</Button>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </main>
  );
};

export default RoutingNavbar;

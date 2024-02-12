import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { Navbar } from "flowbite-react";

export default function Index() {
  return (
    <div>
      <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand href="https://flowbite.com/">
            <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link
            href="/"
            active={true}
            >
            Home
            </Navbar.Link>
            <Navbar.Link href="/nosotros">
            Nosotros
            </Navbar.Link>
            <Navbar.Link href="/contacto">
            Contacto
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}


import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png";
const Navbar = () => {
    const navigation = [
        { name: "Home", to: "/home", current: true },
        { name: "Shop", to: "/shop", current: false },
        { name: "Offers", to: "/offers", current: false },
        { name: "About Us", to: "/home#about", current: false },
        { name: "Contact Us", to: "/home#contact", current: false },
    ];
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    return (
        <Disclosure as="nav" className="bg-gray-200">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto "
                                        src={logo}
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto "
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className={classNames(
                                                    item.current
                                                        ? " hover:bg-gray-300"
                                                        : "hover:bg-gray-300",
                                                    "px-3 py-2 rounded-md text-sm font-medium"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>


                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Link
                                    to="/login"
                                    type="button"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-2 focus:ring-gray-500 ring-gray-500 ring-2 "
                                >
                                    <span className="sr-only">View notifications</span>
                                    Sign In
                                </Link>
                                <Link
                                    to="/login"
                                    type="button"
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    <span className="sr-only">View notifications</span>
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.to}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, ExclamationIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/logo.png";
import useAuth from './../../../Hooks/useAuth';
import ErrorModal from './../ErrorModal/ErrorModal';
const Navbar = () => {
    const { user, signOutUser, error } = useAuth();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const cancelButtonRef = useRef(null);
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
        <div>
            <Transition.Root show={showLogoutModal} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    onClose={setShowLogoutModal}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationIcon
                                                className="h-6 w-6 text-red-600"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg leading-6 font-medium text-gray-900"
                                            >
                                                LogOut from account
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Are you sure you want to Log Out?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => {
                                            signOutUser()
                                            setShowLogoutModal(false)
                                        }}
                                    >
                                        LogOut
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setShowLogoutModal(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
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


                                {user.uid ? <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="dark:bg-gray-800 p-1 rounded-full dark:text-gray-400 dark:hover:text-white hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 dark:focus:ring-white"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={user.photoURL}
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-max rounded-md shadow-lg py-1 dark:bg-gray-700 bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ">
                                                <Menu.Item>
                                                    <div className="flex flex-col justify-center align-middle items-center px-6 py-4">
                                                        <img
                                                            className=" h-16 w-1h-16 rounded-full ring-2 ring-white bg-orange-500"
                                                            src={user.photoURL}
                                                            alt=""
                                                        />
                                                        <p className="text-2xl font-semibold text-gray-700 dark:text-white">
                                                            {user.displayName}
                                                        </p>
                                                        <p className="text-base text-gray-600 dark:text-white">
                                                            {user.email}
                                                        </p>
                                                    </div>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 dark:hover:bg-gray-600"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-600 dark:text-white hover:bg-white"
                                                            )}
                                                        >
                                                            Manage Your Profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/dashboard"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 dark:hover:bg-gray-600"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-white"
                                                            )}
                                                        >
                                                            DashBoard
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 dark:hover:bg-gray-600"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-white"
                                                            )}
                                                        >
                                                            Your Bookings
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <div>
                                                        <button
                                                            onClick={() => setShowLogoutModal(true)}
                                                            className="hover:bg-white
                                inline py-4 px-4 text-sm text-gray-700 w-full dark:text-white dark:hover:bg-gray-600 text-left"
                                                        >
                                                            Sign out
                                                        </button>
                                                    </div>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div> : <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <Link
                                        to="/login"
                                        type="button"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/register"
                                        type="button"
                                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    >
                                        Sign Up
                                    </Link>
                                </div>}
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
            {error ? <ErrorModal /> : ""}
        </div>

    );
};

export default Navbar;
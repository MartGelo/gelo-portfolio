'use client'
import clsx from 'clsx'
import React, { useMemo } from 'react'
import { Disclosure } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { ThemeToggleBtn } from '../common/ThemeToggleBtn'

export const Navbar = (props) => {
    const isActive = (href) => {
        return pathname === href
    }

    const navigations = useMemo(
        () => [
            { name: 'Home', href: '/' },
            { name: 'About Me', href: '/about' },
            { name: 'Qualification', href: '/qualification' },
            { name: 'Project', href: '/project' }
        ],
        []
    )

    const pathname = usePathname()

    return (
        <Disclosure as="nav" className="w-full z-10">
            {({ open }) => (
                <>
                    <div className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0 z-10">
                        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                            <span className="flex items-center space-x-2 text-xl  text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
                                @mrtglo
                            </span>

                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <ThemeToggleBtn />
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        {open && (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                            />
                                        )}
                                    </svg>
                                </Disclosure.Button>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigations.map((navigation) => (
                                            <a
                                                key={navigation.name}
                                                href={navigation.href}
                                                className={clsx(
                                                    'hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 ',
                                                    {
                                                        'bg-indigo-300 text-white':
                                                            isActive(
                                                                navigation.href
                                                            )
                                                    },
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={
                                                    isActive(navigation.href)
                                                        ? 'page'
                                                        : undefined
                                                }>
                                                {navigation.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigations.map((navigation) => (
                                <Disclosure.Button
                                    key={navigation.name}
                                    as="a"
                                    href={navigation.href}
                                    className={clsx(
                                        {
                                            'bg-gray-900 text-white':
                                                navigation.current,
                                            'text-gray-300 hover:bg-gray-700 hover:text-white':
                                                !navigation.current
                                        },
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={
                                        navigation.current ? 'page' : undefined
                                    }>
                                    {navigation.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default React.memo(Navbar)

import { login, register, dashboard } from "@/routes";
import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import React, { useState } from "react";
import AppearanceTabs from "./appearance-tabs";

interface NavHomeProps {
  active: string;
  onChange: (section: string) => void;
}

export default function NavHome({ active, onChange }: NavHomeProps) {
    const { auth } = usePage<SharedData>().props;

    const activeLink = ' border border-blue-300 bg-[#0071e3] dark:bg-[#d0d0d0] dark:text-black dark:border-blue-300 text-white'
    const headlink = "rounded-none text-lg lg:rounded-lg px-5 py-1.5 border-b-1 border-[#d0d0d0] lg:border lg:border-[#d0d0d0] dark:[border-color:var(--color-border) dark:border-white-300 cursor-pointer leading-normal text-[#1b1b18] hover:border-b-[#19140035] dark:text-[#d0d0d0] dark:hover:border-[#3E3E3A] font-medium"

    const [open, setOpen] = useState(false);

    const links = [
        { id: 'welcome', label:'Promo Mechanics'},
        { id: 'branch', label:'Participating Branch'},
        { id: 'prizes', label:'Prizes'},
        { id: 'winners', label:'Winners'}
    ]

    return (
        <div>
            {/* Landing Page Navbar */}
                <nav className="flex w-full items-center justify-between gap-2 lg:gap-4 py-1 lg:py-3 lg:px-6 bg-[#d0d0d0] dark:bg-[#000000] border-b-1 dark:border-white-300">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-expanded="false"
                            aria-label="open menu"
                            className='lg:hidden pl-4'
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    <div 
                    className={`flex justify-start gap-0 2xl:gap-10 absolute 
                    ${open ? 'flex' : 'hidden'}
                    lg:static lg:flex lg:flex-row lg:w-auto lg:p-0 
                    flex-col gap-4 p-4 mt-92 lg:mt-0 dark:bg-[#000000] bg-[#d0d0d0] w-full`}>
                        {links.map(link => (
                            <a
                            key={link.id}
                            className={`${headlink} ${active === link.id ? activeLink : ''} `}
                            onClick={() => onChange(link.id)}
                            >
                                {link.label}
                            </a>
                        ))}
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-none md:rounded-md border-b-1 lg:border border-[#19140035] px-5 py-1.5 text-lg leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className={headlink}
                                    onClick={() => onChange('welcome')}                                >
                                    Log in
                                </Link>
                            </>
                        )}
                    </div>
                    <div className='gap-4 flex flex-cols'>
                            <div className="space-y-6 self-center">
                                <AppearanceTabs />
                            </div>
                        <img src="whiteHaus_black.png" alt="" className='h-[60px] max-w-[300px] block dark:hidden pr-0  xl:pr-4 object-contain w-full' />
                        <img src="whiteHaus_white.png" alt="" className='h-[60px] max-w-[250px] sm:max-w-[300px] hidden dark:block pr-3 xl:pr-4 object-contain w-full' />
                    </div>
                </nav>
        </div>
    )
}
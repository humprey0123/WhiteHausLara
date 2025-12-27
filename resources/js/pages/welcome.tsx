import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import React, { Children, ReactNode } from 'react';
import HomeLayout from '@/layouts/home-layout';

export default function Welcome({
    canRegister = true,
    children,
}: {
    canRegister?: boolean;
    children: ReactNode;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <HomeLayout></HomeLayout>
        </>
    );
}

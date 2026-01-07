import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const breadcrumbs = [
    {
        title: 'Serials',
        href: '/serials',
    }
]
export default function Serials() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Serials" />
            <div>
                a
            </div>
        </AppLayout>
    )
}
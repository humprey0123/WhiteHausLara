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
            <div className='m-5'>
                <table className='w-1/3'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serial Code</th>
                            <th>Date Bought</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ABC123XYZ</td>
                            <td>12-26-2025</td>
                            <td>Active/Taken</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AppLayout>
    )
}
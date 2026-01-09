import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Children, useState } from 'react';
import { Button } from '@/components/ui/button';
import AddSerial from '@/components/add-serial-modal';

const breadcrumbs = [
    {
        title: 'Serials',
        href: '/serials',
    }
]

export default function Serials() {

    const [open, setIsModalOpen] = useState(false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Serials" />
            <div className='m-5 relative'>
                <Button className="absolute top-0 right-0" onClick={() => setIsModalOpen(true)}>Add Serial</Button>
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
                <AddSerial open={open} onClose={() => setIsModalOpen(false)} />
            </div>
        </AppLayout>
    )
}
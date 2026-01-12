import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Children, useState } from 'react';
import { Button } from '@/components/ui/button';
import AddSerial from '@/components/add-serial-modal';
import { usePage } from '@inertiajs/react';


interface Serial {
    id: number;
    company_serial: string;
    date_bought: string;
}

const breadcrumbs = [
    {
        title: 'Serials',
        href: '/serials',
    }
]

export default function Serials() {

    const [open, setIsModalOpen] = useState(false);

    const pageProps = usePage().props as unknown as { companySerials: Serial[] };
    const { companySerials } = pageProps;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Serials" />
            <div className='m-5 relative'>
                <Button className="absolute top-0 right-0" onClick={() => setIsModalOpen(true)}>Add Serial</Button>
                <table className='w-1/4'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serial Code</th>
                            <th>Date Bought</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companySerials.map((serial) => (
                            <tr key={serial.id} className='text-center'>
                                <td>{serial.id}</td>
                                <td>{serial.company_serial}</td>
                                <td>{serial.date_bought}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AddSerial open={open} onClose={() => setIsModalOpen(false)} />
            </div>
        </AppLayout>
    )
}
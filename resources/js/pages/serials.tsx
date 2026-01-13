import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Children, useState } from 'react';
import { Button } from '@/components/ui/button';
import AddSerial from '@/components/add-serial-modal';
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';


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


    const [editingId, setEditingId] = useState<number | null>(null);
    const [companySerial, setCompanySerial] = useState('');
    const [dateBought, setDateBought] = useState('');

    const [open, setIsModalOpen] = useState(false);

    const pageProps = usePage().props as unknown as { companySerials: Serial[] };
    const { companySerials } = pageProps;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Serials" />
            <div className='m-5 relative'>
                <table className='w-1/4'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serial Code</th>
                            <th>Date Bought</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companySerials.map((serial) => (
                            <tr key={serial.id} className="text-center">
                                <td>{serial.id}</td>

                                <td>
                                    {editingId === serial.id ? (
                                        <input
                                            value={companySerial}
                                            onChange={(e) => setCompanySerial(e.target.value)}
                                            className="border-none text-center font-bold"
                                        />
                                    ) : (
                                        serial.company_serial
                                    )}
                                </td>

                                <td>
                                    {editingId === serial.id ? (
                                        <input
                                            type="date"
                                            value={dateBought}
                                            onChange={(e) => setDateBought(e.target.value)}
                                            className="border"
                                        />
                                    ) : (
                                        serial.date_bought
                                    )}
                                </td>

                                <td>
                                    {editingId === serial.id ? (
                                        <Button
                                            onClick={() => 
                                                router.put(`/serials/${serial.id}`, {
                                                    company_serial: companySerial,
                                                    date_bought: dateBought,
                                                    },
                                                    {
                                                        onSuccess: () => setEditingId(null)
                                                    }
                                                )
                                            }
                                        >
                                            Update
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() => {
                                                setEditingId(serial.id);
                                                setCompanySerial(serial.company_serial);
                                                setDateBought(serial.date_bought);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AddSerial open={open} onClose={() => setIsModalOpen(false)} />
            </div>
        </AppLayout>
    )
}
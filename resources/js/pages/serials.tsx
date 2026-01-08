import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import Modal from '@/components/modal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const breadcrumbs = [
    {
        title: 'Serials',
        href: '/serials',
    }
]

export default function Serials() {

    const [isOpen, setIsModalOpen] = useState(false);

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
                <Modal isOpen={isOpen} onClose={() => setIsModalOpen(false)}>
                    <div className='relative'>
                        <Button onClick={() => setIsModalOpen(false)} className='absolute right-0'>X</Button>
                        <h3 className='text-center'>Serial</h3>
                        <form className='block' action="">
                            <legend>Serial Number:</legend>
                            <input type="text" name='serial' placeholder='Serial Number' className='w-full'/>
                            <legend>Date</legend>
                            <input type="date" name='datebought' className='w-full' />
                            <Button type='submit' className='mt-3 justify-center'>Add Serial</Button>
                        </form>
                    </div>
                </Modal>
            </div>
        </AppLayout>
    )
}
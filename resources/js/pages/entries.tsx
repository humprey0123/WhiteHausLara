import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { type BreadcrumbItem } from "@/types";
import {RaffleEntry} from "./dashboard";
import { usePage } from "@inertiajs/react";

const breadcrumbs : BreadcrumbItem[] = [
    {
        title: 'Raffle Entries',
        href: '/Entries',
    },
];

export default function Entries() {
    const pageProps = usePage().props as unknown as { raffleEntries: RaffleEntry[] };
    const { raffleEntries } = pageProps;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Entries"/>
                <div className="relative max-h-[500px] w-full overflow-y-auto rounded-sm border border-sidebar-border/70 dark:border-sidebar-border">
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Address</th>
                                <th>Branch</th>
                                <th>Purchase Date</th>
                                <th>Invoice</th>
                                <th>Amount</th>
                                <th>Receipt</th>
                                <th>Registration Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {raffleEntries.map((entry) => (
                                <tr key={entry.id}>
                                    <td className='1/4'>{`${entry.first_name} `}
                                        {entry.middle_initial && `${entry.middle_initial}. `}
                                        {entry.last_name}</td>
                                    <td>{entry.email}</td>
                                    <td>{entry.contact_num}</td>
                                    <td>{entry.address}</td>
                                    <td>{entry.branch}</td>
                                    <td>{entry.purchase_date}</td>
                                    <td>{entry.invoice}</td>
                                    <td>{entry.receipt_amount}</td>
                                    <td>
                                        {entry.receipt_img && (
                                            <a href={`/storage/${entry.receipt_img}`} target='_blank' rel='noopenre noreferrer'>
                                                Reciept {entry.id}
                                            </a>
                                        )}
                                    </td>
                                    <td>{entry.created_at}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
        </AppLayout>
    )
}
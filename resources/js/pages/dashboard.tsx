import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export interface RaffleEntry {
    id: number;
    first_name: string;
    middle_initial: string;
    last_name: string;
    email: string;
    contact_num: string;
    address: string;
    branch: string;
    purchase_date: string;
    invoice: string;
    receipt_amount: string;
    receipt_img: string;
    created_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {

    const pageProps = usePage().props as unknown as { raffleEntries: RaffleEntry[] };
    const { raffleEntries } = pageProps;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border content-center">
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                        <h4 className='text-center'>Total Entries: <h1 className='mt-3'>{raffleEntries.length}</h1></h4>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        <h1></h1>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative w-full max-h-[500px] overflow-y-auto rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                </div>
                <div className="relative max-h-[500px] w-full overflow-y-auto rounded-sm border border-sidebar-border/70 dark:border-sidebar-border">
                    <table className='w-full rounded-xl'>
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
                                <tr className='text-center' key={entry.id}>
                                    <td className='1/4'>{`${entry.first_name} `}
                                        {entry.middle_initial && `${entry.middle_initial}. `}
                                        {entry.last_name}</td>
                                    <td>{entry.email}</td>
                                    <td>{entry.contact_num}</td>
                                    <td className="text-start">{entry.address}</td>
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
            </div>
        </AppLayout>
    );
}

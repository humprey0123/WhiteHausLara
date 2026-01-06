import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { type BreadcrumbItem } from "@/types";
import { usePage } from "@inertiajs/react";
import { tickets } from "@/routes";

interface Ticket {
    id: number;
    full_name: string;
    raffle_code: string;
}

const breadcrumbs : BreadcrumbItem[] = [
    {
        title: 'Tickets',
        href: tickets().url,
    },
]

export default function Tickets() {
    const pageProps = usePage().props as unknown as { raffleTickets: Ticket[] };
    const { raffleTickets } = pageProps;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tickets"/>
            <div className="p-4">
                <h4>Tickets Page</h4>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Full Name</th>
                                <th>Raffle Code</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {raffleTickets.map((ticket) => (
                                <tr key={ticket.id}>
                                    <td>{ticket.id}</td>
                                    <td>{ticket.full_name}</td>
                                    <td>{ticket.raffle_code}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    )
}
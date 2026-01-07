import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { verification } from "@/routes";

const breadcrumbs = [
    {
        title: 'Verification',
        href: verification().url,
    }
]

export default function Verification() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Verification'/>
            <div className="p-4">
                <table className="">
                    <tr>
                        <th>ID</th>
                    </tr>
                    <tr>
                        <td>1</td>
                    </tr>
                </table>
            </div>
        </AppLayout>
    )
}
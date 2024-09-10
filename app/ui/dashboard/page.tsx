import { fetchInvoices } from '@/app/lib/data';
import Invoices from '@/app/ui/dashboard/invoices';

export default async function Users() {
    const invoices = await fetchInvoices();

    return (
        <>
            <Invoices Invoices={invoices} />
        </>
    )
}
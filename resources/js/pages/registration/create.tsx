import { Button } from "@/components/ui/button";

    interface CreateProps {
        onAccept: () => void;
    }

export default function Create({ onAccept }: CreateProps) {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch ('/raffle-entry', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                onAccept();
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form', error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    }

    return(
        <div className="modal-container">
            <div className="flex flex-col items-center gap-0 md:gap-6 flex-col-reverse md:flex-row justify-center mb-3 rounded-t-md bg-[#d0d0d0] px-4 pt-2">
                <h3 className="text-black"><span className="text-blue-600">E-Raffle</span> Entry Registration</h3>
                <img src="whitehaus_black.png" alt="" className="block w-[300px] md:w-1/3 object-contain" />
                <img src="whitehaus_white.png" alt="" className="hidden w-1/3 md:w-1/4 " />
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="modal-content">
                <input
                    type="hidden"
                    name="_token"
                    value={document
                        .querySelector('meta[name="csrf-token"]')
                        ?.getAttribute('content') ?? ''}
                />
                <fieldset className="full-name">
                    <label>Full Name:</label>
                    <input required type="text" name="first_name" placeholder="First Name" defaultValue="Ian" />
                    <input type="text" name="middle_initial" placeholder="MI" maxLength={1} defaultValue="A" />
                    <input required type="text" name="last_name" placeholder="Last Name" defaultValue="Coronado"/>
                </fieldset>
                <fieldset className="create-field">
                    <label>Email: </label>
                    <input required type="email" name="email" placeholder="Email Address" defaultValue="ian@gmail.com" />
                </fieldset>
                <fieldset className="create-field">
                    <label>Contact Number: </label>
                    <input required type="tel" name="contact_num" placeholder="Contact Number:" defaultValue="09123456789" />
                </fieldset>
                <fieldset className="create-field">
                    <label>Home Address: </label>
                    <input required type="text" name="address" placeholder="Address" defaultValue="123 Main Street" />
                </fieldset>
                <fieldset className="create-field">
                    <label>Store/Branch of Purchase: </label>
                    <input required type="text" name="branch" placeholder="Choose a Branch" defaultValue="Website" />
                </fieldset>
                <fieldset className="create-field">
                    <label>Purchase Date: </label>
                    <input required type="date" name="purchase_date" placeholder="mm/dd/yyyy" defaultValue="2024-01-01" />
                </fieldset>
                <fieldset className="create-field">
                    <label>Invoice Number: </label>
                    <input required type="text" name="invoice" placeholder="Receipt Number" defaultValue="INV-123456789" />
                </fieldset>
                <fieldset className="create-field">
                    <label>Receipt Amount: </label>
                    <input required type="text" name="receipt_amount" placeholder="Receipt Amount" defaultValue="1000" />
                </fieldset>
                <fieldset className="create-field">
                    <label>Photo or scanned copy of the official receipt (2mb) </label>
                        <input required type="file" name="receipt_img" placeholder="No file chosen" className="w-1/2"/>
                </fieldset>
                <fieldset className="flex">
                    <input required type="checkbox" />By ticking this box I have read and agree to the terms and conditions *
                </fieldset>
                <Button type="submit" className="w-full" variant={"secondary"}>Register</Button>
            </form>
        </div>
    )
}

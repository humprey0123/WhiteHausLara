import { Button } from "./ui/button";
import Modal from "./ui/modal";

interface CreateSerialProps {
    open: boolean;
    onClose: () => void;
}

export default function AddSerial({ open, onClose }: CreateSerialProps) {
  const addSerialCss = 'w-full rounded border px-3 mt-1 py-2'
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/add-serial', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute('content') || '',
        },
        body: formData,
      });
      if (response.ok) {
        alert('Serial added successfully!');
        onClose(); // close the modal
      } else {
        const data = await response.json();
        alert('Failed: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('An error occured.')
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg self-center font-semibold">Create User</h2>
        <Button onClick={onClose} className="cursor-pointer">✕</Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 block">
        <input 
          type="hidden" 
          name="_token"
          value={document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute('content') ?? ''}
          />
        <label>Serial Number</label>
          <input
            type="text"
            placeholder="Serial Number"
            className={addSerialCss}
            name="company_serial"
            defaultValue="BS45DAS6D54"
            required
          />
          <label>Date Bought</label>
          <input
            type="date"
            placeholder="Date Bought"
            className={addSerialCss}
            name="date_bought"
            defaultValue="2025-12-28"
            required
          />

        <fieldset className="mb-0 flex justify-center">
          <Button type="submit" className="w-1/3">
              Save
          </Button>
        </fieldset>
      </form>
    </Modal>
  );
}

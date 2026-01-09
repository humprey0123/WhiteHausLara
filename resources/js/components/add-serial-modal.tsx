import { Button } from "./ui/button";
import Modal from "./ui/modal";

interface CreateSerialProps {
    open: boolean;
    onClose: () => void;
}

export default function AddSerial({ open, onClose }: CreateSerialProps) {
  const addSerialCss = 'w-full rounded border px-3 mt-1 py-2'

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg self-center font-semibold">Create User</h2>
        <Button onClick={onClose} className="cursor-pointer">✕</Button>
      </div>

      <form className="space-y-6 block">
        <label>Serial Number</label>
          <input
            type="text"
            placeholder="Serial Number"
            className={addSerialCss}
          />
          <label>Date Bought</label>
          <input
            type="date"
            placeholder="Date Bought"
            className={addSerialCss}
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
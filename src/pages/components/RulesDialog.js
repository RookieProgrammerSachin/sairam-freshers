import React from "react";
import { Dialog } from "@headlessui/react";

const RulesDialog = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      className="relative z-50"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 w-screen bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 w-screen flex items-center justify-center p-4">
        <Dialog.Panel className="flex flex-col gap-4 items-center justify-center top-0 left-0 w-[80%] min-w-sm p-6 max-w-screen-xl mx-auto rounded-lg border border-silver bg-primary-light">
          <Dialog.Title className="font-medium font-sans text-2xl">
            Rules
          </Dialog.Title>
          <Dialog.Description>
            Sample rules
          </Dialog.Description>

          <button className="bg-sky-600 outline-none border-none rounded-full md:w-fit w-full text-center text-primary px-4 py-2" onClick={() => setIsOpen(false)}>Proceed</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default RulesDialog;

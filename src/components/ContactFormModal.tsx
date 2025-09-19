import React from "react";
import Modal from "./Modal";
import { ContactFormContent } from "./ContactFormContent";

type PlanData = {
  id: string;
  label: string;
  price: number;
  segment: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: PlanData | null;
};

export default function ContactFormModal({ isOpen, onClose, selectedPlan }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} ariaLabel="Get Your Business Address">
      <ContactFormContent onClose={onClose} selectedPlan={selectedPlan} />
    </Modal>
  );
}
"use client";

import { useState, useCallback } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StrategyCallModal from "@/components/modals/StrategyCallModal";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <main className="flex-1 pt-[100px]">{children}</main>
      <Footer />
      <StrategyCallModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}

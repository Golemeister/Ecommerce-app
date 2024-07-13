"use client";

import { useEffect } from "react";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      {/* <UserButton afterSwitchSessionUrl="/" /> */}
      Root page
    </div>
  );
};

export default SetupPage;

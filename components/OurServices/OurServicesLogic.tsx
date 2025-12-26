"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ServiceGridMobile from "./btnDisplay/mobile";
import ServiceGridDesktop from "./btnDisplay/desktop";
import ModalWrapper from "./modalWrapper";

export default function OurServicesLogic() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const popupVisible = searchParams.get("service");

  const handleOnClose = () => {
    router.push(pathname, {scroll: false});
  };

  return (
    <>
      <ServiceGridMobile />
      <ServiceGridDesktop />
      <ModalWrapper popupVisible={popupVisible} onClose={handleOnClose} />
    </>
  );
}

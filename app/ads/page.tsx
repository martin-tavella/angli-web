import AdsOurClients from "@/components/ClientShowcase/ads";
import Form from "@/components/Form";
import AdsHero from "@/components/Hero/ads";
import AdsOurServices from "@/components/OurServices/ads";
import AdsOurWork from "@/components/OurWork/ads";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Ads() {
  return (
    <>
     
      <AdsHero />
      <AdsOurWork />
      <AdsOurServices />
      <AdsOurClients />
      <Form />
    </>
  );
}

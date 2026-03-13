import AdsOurClients from "@/components/ClientShowcase/ads";
import Form from "@/components/Form";
import AdsHero from "@/components/Hero/ads";
import AdsOurServices from "@/components/OurServices/ads";
import AdsOurWork from "@/components/OurWork/ads";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Ads() {
  const GTM = process.env.NEXT_PUBLIC_GTM_ADS;

  return (
    <>
      <GoogleTagManager gtmId={GTM!} />
      <AdsHero />
      <AdsOurWork />
      <AdsOurServices />
      <AdsOurClients />
      <Form />
    </>
  );
}

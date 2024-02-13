// components
import PickupDropoffDetails from "@/components/modules/PickupDropoffDetails/PickupDropoffDetails";
import Banner from "@/components/templates/Index/Banner";

export default function Home() {
  return (
    <div className="px-6 md:px-16 py-8">
      <Banner />
      <PickupDropoffDetails />
    </div>
  );
}

import DistrictCard from "@/components/site/DistrictCard";
import { districts } from "@/data/districts";

export default function DistrictsGrid() {
  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {districts.map((d, i) => (
        <DistrictCard key={d.id} d={d} index={i} />
      ))}
    </div>
  );
}

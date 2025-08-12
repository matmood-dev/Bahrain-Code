import DefaultLayout from "../../layouts/DefaultLayout";
import CareersHero from "./CareersComponents/CareersHero";
import OpenRoles from "./CareersComponents/OpenRoles";
import Benefits from "./CareersComponents/Benefits";
import HiringProcess from "./CareersComponents/HiringProcess";
import CareersCTA from "./CareersComponents/CareersCTA";

export default function Careers({ t }: TProp) {
  return (
    <DefaultLayout>
      <CareersHero t={t} />
      <OpenRoles t={t} />
      <Benefits t={t} />
      <HiringProcess t={t} />
      <CareersCTA t={t} />
    </DefaultLayout>
  );
}

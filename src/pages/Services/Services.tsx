import DefaultLayout from "../../layouts/DefaultLayout";
import ServicesHero from "./ServicesComponents/ServicesHero";
import ServicesList from "./ServicesComponents/ServicesList";
import Process from "./ServicesComponents/Process";
import Engagement from "./ServicesComponents/Engagement";
import ServicesCTA from "./ServicesComponents/ServicesCTA";

export default function Services({ t }: TProp) {
  return (
    <DefaultLayout>
      <ServicesHero t={t} />
      <ServicesList t={t} />
      <Process t={t} />
      <Engagement t={t} />
      <ServicesCTA t={t} />
    </DefaultLayout>
  );
}

import DefaultLayout from "../layouts/DefaultLayout";

import Hero from "./HomeComponents/Hero";
import Services from "./HomeComponents/Services";
import Work from "./HomeComponents/Work";

export default function Home({ t }) {
  return (
    <DefaultLayout>
      <Hero t={t} />
      <Services t={t} />
      <Work t={t} />
    </DefaultLayout>
  );
}

import DefaultLayout from "../../layouts/DefaultLayout";

import AboutHero from "./AboutComponents/AboutHero";
import AboutStory from "./AboutComponents/AboutStory";
import AboutCapabilities from "./AboutComponents/AboutCapabilities";
import AboutValues from "./AboutComponents/AboutValues";
import AboutTimeline from "./AboutComponents/AboutTimeline";
import AboutStats from "./AboutComponents/AboutStats";
import AboutCTA from "./AboutComponents/AboutCTA";

export default function About({ t }: TProp) {
  return (
    <DefaultLayout>
      <AboutHero t={t} />
      <AboutStory t={t} />
      <AboutCapabilities t={t} />
      <AboutValues t={t} />
      <AboutTimeline t={t} />
      <AboutStats t={t} />
      <AboutCTA t={t} />
    </DefaultLayout>
  );
}
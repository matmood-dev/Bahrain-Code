export type Role = {
  id: string;
  titleKey: string;
  deptKey: string;
  locationKey: string; // careers.roles.location.*
  typeKey: string;     // careers.roles.type.*
  summaryKey: string;
  tags: string[];
  applyUrl?: string;   // external ATS/mailto; if absent we'll route to /apply
  responsibilities?: string[]; // array of i18n keys
  requirements?: string[];     // array of i18n keys
};

export const ROLES: Role[] = [
  {
    id: "fe-web",
    titleKey: "careers.roles.fe.title",
    deptKey: "careers.roles.fe.dept",
    locationKey: "careers.roles.location.remote",
    typeKey: "careers.roles.type.fulltime",
    summaryKey: "careers.roles.fe.summary",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    applyUrl: "mailto:careers@bahraincode.com?subject=Frontend Engineer",
    responsibilities: [
      "careers.details.common.resp.ownUI",
      "careers.details.common.resp.collabDesign",
      "careers.details.common.resp.testShip",
    ],
    requirements: [
      "careers.details.fe.req.reactTs",
      "careers.details.fe.req.accessibility",
      "careers.details.common.req.gitCi",
    ],
  },
  {
    id: "rn-mobile",
    titleKey: "careers.roles.rn.title",
    deptKey: "careers.roles.rn.dept",
    locationKey: "careers.roles.location.manama",
    typeKey: "careers.roles.type.fulltime",
    summaryKey: "careers.roles.rn.summary",
    tags: ["React Native", "Expo", "RTL", "App Store"],
    responsibilities: [
      "careers.details.rn.resp.features",
      "careers.details.rn.resp.performance",
      "careers.details.common.resp.collabDesign",
    ],
    requirements: [
      "careers.details.rn.req.rnExpo",
      "careers.details.rn.req.nativeBasics",
      "careers.details.common.req.gitCi",
    ],
  },
  {
    id: "be-nest",
    titleKey: "careers.roles.be.title",
    deptKey: "careers.roles.be.dept",
    locationKey: "careers.roles.location.remote",
    typeKey: "careers.roles.type.fulltime",
    summaryKey: "careers.roles.be.summary",
    tags: ["NestJS", "Postgres", "Auth", "CI/CD"],
    responsibilities: [
      "careers.details.be.resp.apis",
      "careers.details.be.resp.security",
      "careers.details.be.resp.observability",
    ],
    requirements: [
      "careers.details.be.req.nestNode",
      "careers.details.be.req.sql",
      "careers.details.common.req.gitCi",
    ],
  },
  {
    id: "pm",
    titleKey: "careers.roles.pm.title",
    deptKey: "careers.roles.pm.dept",
    locationKey: "careers.roles.location.hybrid",
    typeKey: "careers.roles.type.contract",
    summaryKey: "careers.roles.pm.summary",
    tags: ["Agile", "Roadmaps", "Stakeholders"],
    responsibilities: [
      "careers.details.pm.resp.discovery",
      "careers.details.pm.resp.roadmaps",
      "careers.details.pm.resp.delivery",
    ],
    requirements: [
      "careers.details.pm.req.comm",
      "careers.details.pm.req.metrics",
      "careers.details.pm.req.tools",
    ],
  },
];

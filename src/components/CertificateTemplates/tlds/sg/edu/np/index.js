import dynamic from "template-utils/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

const NPAA2018MAIN = dynamic(() =>
  import("./NP-AA2018-MAIN" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2018OPTION = dynamic(() =>
  import("./NP-AA2018-OPTION" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2018BMSCLT = dynamic(() =>
  import("./NP-AA2018-BMS(CLT)" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2018ECH = dynamic(() =>
  import("./NP-AA2018-ECH" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2018LDH = dynamic(() =>
  import("./NP-AA2018-LDH" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2018PHARM = dynamic(() =>
  import("./NP-AA2018-PHARM" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2018DPP = dynamic(() =>
  import("./NP-AA2018-DPP" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2019PTDMAIN = dynamic(() =>
  import("./NP-CET2019-PTDMAIN" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2019PDPMAIN = dynamic(() =>
  import("./NP-CET2019-PDPMAIN" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2019SDPCN = dynamic(() =>
  import("./NP-CET2019-SDPCN" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2019SDCGN = dynamic(() =>
  import("./NP-CET2019-SDCGN" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2019NIEC = dynamic(() =>
  import("./NP-AA2019-NIEC" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2019OPTNIEC = dynamic(() =>
  import("./NP-AA2019-OPT-NIEC" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA1996MAIN = dynamic(() =>
  import("./NP-AA1996-MAIN" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2017BMSCLT = dynamic(() =>
  import("./NP-AA2017-BMS(CLT)" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2017PHARM = dynamic(() =>
  import("./NP-AA2017-PHARM" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2009ECH = dynamic(() =>
  import("./NP-AA2009-ECH" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2010ECH = dynamic(() =>
  import("./NP-AA2010-ECH" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2011ECH = dynamic(() =>
  import("./NP-AA2011-ECH" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2009LDH = dynamic(() =>
  import("./NP-AA2009-2012-LDH" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2020BMSCLT = dynamic(() =>
  import("./NP-AA2020-BMS(CLT)" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2020PHARM = dynamic(() =>
  import("./NP-AA2020-PHARM" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2019NONACAD = dynamic(() =>
  import("./NP-CET2019-NONACAD" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2019SCDF = dynamic(() =>
  import("./NP-CET2019-SCDF" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2019ASMI = dynamic(() =>
  import("./NP-CET2019-SC-ASMI" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2019NEA = dynamic(() =>
  import("./NP-CET2019-SC-NEA" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2019MAGES = dynamic(() =>
  import("./NP-CET2019-SC-MAGES" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2019SGINV = dynamic(() =>
  import("./NP-CET2019-SC-SGINV" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2020SDFT = dynamic(() =>
  import("./NP-CET2020-SDFT" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2020LDH = dynamic(() =>
  import("./NP-AA2020-LDH" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPCET2020SDPCN = dynamic(() =>
  import("./NP-CET2020-SDPCN" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const NPAA2004BMSCLT = dynamic(() =>
  import("./NP-AA2004-BMS(CLT)" /* webpackChunkName: "NgeeAnnTemplates" */)
);
const templates = {
  "2018-main": NPAA2018MAIN,
  "2018-option": NPAA2018OPTION,
  "2018-bms-clt": NPAA2018BMSCLT,
  "2018-ech": NPAA2018ECH,
  "2018-ldh": NPAA2018LDH,
  "2018-pharm": NPAA2018PHARM,
  "2018-dpp": NPAA2018DPP,
  "NP-CET2019-PTDMAIN": NPCET2019PTDMAIN,
  "NP-CET2019-PDPMAIN": NPCET2019PDPMAIN,
  "NP-CET2019-SDPCN": NPCET2019SDPCN,
  "NP-CET2019-SDCGN": NPCET2019SDCGN,
  "NP-AA2019-NIEC": NPAA2019NIEC,
  "NP-AA2019-OPT-NIEC": NPAA2019OPTNIEC,
  "NP-AA1996-MAIN": NPAA1996MAIN,
  "NP-AA2017-BMS(CLT)": NPAA2017BMSCLT,
  "NP-AA2017-PHARM": NPAA2017PHARM,
  "NP-AA2009-ECH": NPAA2009ECH,
  "NP-AA2010-ECH": NPAA2010ECH,
  "NP-AA2011-ECH": NPAA2011ECH,
  "NP-AA2009-2012-LDH": NPAA2009LDH,
  "NP-AA2020-BMS(CLT)": NPAA2020BMSCLT,
  "NP-AA2020-PHARM": NPAA2020PHARM,
  "NP-CET2019-NONACAD": NPCET2019NONACAD,
  "NP-CET2019-SCDF": NPCET2019SCDF,
  "NP-CET2019-SC-ASMI": NPCET2019ASMI,
  "NP-CET2019-SC-NEA": NPCET2019NEA,
  "NP-CET2019-SC-MAGES": NPCET2019MAGES,
  "NP-CET2019-SC-SGINV": NPCET2019SGINV,
  "NP-CET2020-SDFT": NPCET2020SDFT,
  "NP-AA2020-LDH": NPAA2020LDH,
  "NP-CET2020-SDPCN": NPCET2020SDPCN,
  "NP-AA2004-BMS(CLT)": NPAA2004BMSCLT
};

export default addDirToTemplatePath("np", templates);

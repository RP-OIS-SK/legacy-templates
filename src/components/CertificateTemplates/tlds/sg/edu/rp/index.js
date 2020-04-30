import dynamic from "template-utils/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

const RPAA2018PMAIN = dynamic(() =>
  import("./2018-P-MAIN" /* webpackChunkName: "RPTemplates" */)
);
const RPAA2018CDPLUS = dynamic(() =>
  import("./2018-C-DPLUS" /* webpackChunkName: "RPTemplates" */)
);
const RPAA2018CMC = dynamic(() =>
  import("./2018-C-MC" /* webpackChunkName: "RPTemplates" */)
);
const RPAA2018CDCN = dynamic(() =>
  import("./2018-C-DCN" /* webpackChunkName: "RPTemplates" */)
);
const RPAA2018CDCJP = dynamic(() =>
  import("./2018-C-DCJP" /* webpackChunkName: "RPTemplates" */)
);
const RPAA2018CDCSU = dynamic(() =>
  import("./2018-C-DCSU" /* webpackChunkName: "RPTemplates" */)
);
const RPAA2018CMCJP = dynamic(() =>
  import("./2018-C-MCJP" /* webpackChunkName: "RPTemplates" */)
);
const RPAA2018CMCSU = dynamic(() =>
  import("./2018-C-MCSU" /* webpackChunkName: "RPTemplates" */)
);
const RPAA2019CSCA = dynamic(() =>
  import("./2019-C-SCA" /* webpackChunkName: "RPTemplates" */)
);
const RPAA2020CDBIA = dynamic(() =>
  import("./2020-C-DCBIA" /* webpackChunkName: "RPTemplates" */)
);
const RPAA2020CMBIA = dynamic(() =>
  import("./2020-C-MCBIA" /* webpackChunkName: "RPTemplates" */)
);
const templates = {
  "2018-P-MAIN": RPAA2018PMAIN,
  "2018-C-DPLUS": RPAA2018CDPLUS,
  "2018-C-MC": RPAA2018CMC,
  "2018-C-DCN": RPAA2018CDCN,
  "2018-C-MCJP": RPAA2018CMCJP,
  "2018-C-DCJP": RPAA2018CDCJP,
  "2018-C-MCSU": RPAA2018CMCSU,
  "2018-C-DCSU": RPAA2018CDCSU,
  "2019-C-SCA": RPAA2019CSCA,
  "2020-C-DCBIA": RPAA2020CDBIA,
  "2020-C-MCBIA": RPAA2020CMBIA
};

export default addDirToTemplatePath("rp", templates);

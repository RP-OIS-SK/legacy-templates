import PropTypes from "prop-types";
import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import { approvedAddresses } from "../common";
import RPTranscript from "./transcript";

const templates = [
  {
    id: "transcript",
    label: "Transcript",
    template: RPTranscript
  }
];

const RPAA2020PCCA = props => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={approvedAddresses}
    {...props}
  />
);

RPAA2020PCCA.displayName = "2020-P-CCA Template";
RPAA2020PCCA.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default RPAA2020PCCA;

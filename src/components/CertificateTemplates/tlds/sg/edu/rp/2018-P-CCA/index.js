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

const RPAA2018PCCA = props => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={approvedAddresses}
    {...props}
  />
);

RPAA2018PCCA.displayName = "2018-P-CCA Template";
RPAA2018PCCA.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default RPAA2018PCCA;

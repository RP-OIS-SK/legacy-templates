import PropTypes from "prop-types";
import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import { approvedAddresses } from "../common";
import RPCert from "./certificate";
import RPTranscript from "../common/transcript";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: RPCert
  },
  {
    id: "transcript",
    label: "Transcript",
    template: RPTranscript
  }
];

const RPAA2020CMBIA = props => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={approvedAddresses}
    {...props}
  />
);

RPAA2020CMBIA.displayName = "2020-C-MBIA Template";
RPAA2020CMBIA.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default RPAA2020CMBIA;

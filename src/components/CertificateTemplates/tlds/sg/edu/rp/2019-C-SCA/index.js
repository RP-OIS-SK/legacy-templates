import PropTypes from "prop-types";
import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import { approvedAddresses } from "../common";
import RPCert from "./certificate";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: RPCert
  }
];

const RPAA2019CSCA = () => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={approvedAddresses}
  />
);

RPAA2019CSCA.displayName = "2018-C-SCA Template";
RPAA2019CSCA.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default RPAA2019CSCA;

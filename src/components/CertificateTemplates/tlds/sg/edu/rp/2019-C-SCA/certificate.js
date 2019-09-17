import PropTypes from "prop-types";
import {
  renderLogoRP,
  renderAwardTextSH,
  renderACESignatures
} from "../common/certificate";

const Template = ({ certificate }) => (
  <div>
    <div
      className="container"
      style={{ border: 12, borderColor: "#000099", borderStyle: "solid" }}
    >
      <br /> <br />
      {renderLogoRP()}
      {renderAwardTextSH(certificate)}
      {renderACESignatures(certificate)}
    </div>
  </div>
);

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default Template;

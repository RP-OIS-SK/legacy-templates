import PropTypes from "prop-types";
import { get } from "lodash";

import { getLogger } from "../../utils/logger";
import templates from "../CertificateTemplates";

const { trace } = getLogger("components:CertificateViewer");

const FramelessCertificateViewer = props => {
  const {
    document,
    tabIndex,
    updateParentTemplates,
    obfuscateDocument
  } = props;

  const selectedTemplateName = get(document, "$template", "default");
  const SelectedTemplate = templates[selectedTemplateName] || templates.default;

  trace(`Templates Mapping: %o`, templates);
  trace(`Selected template: ${selectedTemplateName}`);
  trace(`Certificate content: %o`, document);

  return (
    <SelectedTemplate
      document={document}
      tabIndex={tabIndex}
      updateParentTemplates={updateParentTemplates}
      obfuscateDocument={obfuscateDocument}
    />
  );
};

FramelessCertificateViewer.propTypes = {
  document: PropTypes.object,
  tabIndex: PropTypes.number,
  updateParentTemplates: PropTypes.func,
  obfuscateDocument: PropTypes.func
};

export default FramelessCertificateViewer;

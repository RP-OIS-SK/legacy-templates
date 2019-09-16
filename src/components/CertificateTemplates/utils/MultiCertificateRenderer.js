import React, { Component } from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import InvalidCertificateNotice from "../InvalidCertificateNotice";

/**
 * Retrieves the contract store address from the provided certificate
 * and tries to find it in the provided whitelist of allowed addresses
 *
 * @returns true if contract store address is present in whitelist, or if whitelist is empty
 * @param {*} whitelist
 * @param {*} document
 */
const storeCanRenderTemplate = ({ whitelist, document }) => {
  if (!whitelist || whitelist === []) {
    return true;
  }
  const issuers = get(document, "issuers", []);
  const validStoreAddressForTemplate = whitelist.map(a => a.toLowerCase());
  return issuers.reduce((prev, curr) => {
    const storeAddress = get(curr, "certificateStore", "").toLowerCase();
    const foundInWhitelist = validStoreAddressForTemplate.includes(
      storeAddress
    );
    return prev && foundInWhitelist;
  }, true);
};

/**
 * This React component renders a certificate's data, given an array of template views.
 * @param {*} document Certificate Data
 * @param {*} whitelist A list of contract store addresses which are allowed to use this template
 * @param {*} templates An array of template views to render using `renderTemplateToTab()`
 */
class MultiCertificateRenderer extends Component {
  componentDidMount() {
    const { templates, updateParentTemplates } = this.props;

    // Templates
    updateParentTemplates(templates);
  }

  render() {
    const {
      document,
      whitelist,
      templates,
      tabIndex,
      obfuscateDocument
    } = this.props;
    const SelectedTemplateTab = templates[tabIndex].template;
    const allowedToRender = storeCanRenderTemplate({
      whitelist,
      document
    });
    if (allowedToRender) {
      return (
        <SelectedTemplateTab
          certificate={document}
          handleObfuscation={obfuscateDocument}
        />
      );
    }
    return <InvalidCertificateNotice />;
  }
}

MultiCertificateRenderer.propTypes = {
  whitelist: PropTypes.array,
  templates: PropTypes.array.isRequired,
  document: PropTypes.object.isRequired,
  tabIndex: PropTypes.number.isRequired,
  updateParentTemplates: PropTypes.func,
  obfuscateDocument: PropTypes.func
};

export default MultiCertificateRenderer;

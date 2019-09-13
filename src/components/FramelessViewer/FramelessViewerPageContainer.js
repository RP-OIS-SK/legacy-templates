import React, { Component } from "react";
import connectToParent from "penpal/lib/connectToParent";
import ReactDOM from "react-dom";
import styles from "../certificateViewer.scss";
import FramelessCertificateViewer from "./FramelessCertificateViewer";
import { inIframe, formatTemplate } from "./utils";

class FramelessViewerContainer extends Component {
  constructor(props) {
    super(props);

    this.handleDocumentChange = this.handleDocumentChange.bind(this);
    this.selectTemplateTab = this.selectTemplateTab.bind(this);
    this.updateParentHeight = this.updateParentHeight.bind(this);
    this.updateParentTemplates = this.updateParentTemplates.bind(this);
    this.obfuscateDocument = this.obfuscateDocument.bind(this);
    this.getTemplates = this.getTemplates.bind(this);
    this.state = {
      parentFrameConnection: null,
      document: null,
      tabIndex: 0,
      templates: null
    };
  }

  componentDidUpdate() {
    this.updateParentHeight();
  }

  componentDidMount() {
    const selectTemplateTab = this.selectTemplateTab;
    const renderDocument = this.handleDocumentChange;
    const getTemplates = this.getTemplates;

    window.opencerts = {
      renderDocument,
      selectTemplateTab,
      getTemplates
    };

    if (inIframe()) {
      const parentFrameConnection = connectToParent({
        methods: {
          renderDocument,
          selectTemplateTab
        }
      }).promise;
      this.setState({ parentFrameConnection });
    }

    const config = { attributes: true, childList: true, subtree: true };
    // eslint-disable-next-line no-undef
    const observer = new MutationObserver(this.updateParentHeight);
    // eslint-disable-next-line react/no-find-dom-node
    observer.observe(ReactDOM.findDOMNode(this), config);
  }

  async selectTemplateTab(tabIndex) {
    if (inIframe()) {
      const { parentFrameConnection } = this.state;
      const parent = await parentFrameConnection;
      if (parent.selectTemplateTab) {
        await parent.selectTemplateTab(tabIndex);
      }
    }
    this.setState({ tabIndex });
  }

  handleDocumentChange(document) {
    this.setState({ document });
  }

  async obfuscateDocument(field) {
    if (inIframe()) {
      const { parentFrameConnection } = this.state;
      const parent = await parentFrameConnection;
      if (parent.updateCertificate) {
        parent.updateCertificate(field);
      }
    }
  }

  async updateParentHeight() {
    if (inIframe()) {
      const { parentFrameConnection } = this.state;
      const parent = await parentFrameConnection;
      if (parent.updateHeight) {
        await parent.updateHeight(document.documentElement.offsetHeight);
      }
    }
  }

  async updateParentTemplates(templates) {
    if (inIframe()) {
      const { parentFrameConnection } = this.state;
      const parent = await parentFrameConnection;
      if (parent.updateTemplates) {
        parent.updateTemplates(formatTemplate(templates));
      }
    }
    this.setState({ templates });
  }

  getTemplates() {
    return this.state.templates;
  }

  render() {
    return (
      <div>
        {this.state.document ? (
          <div className="frameless-tabs" id="rendered-certificate">
            <FramelessCertificateViewer
              id={styles["frameless-container"]}
              tabIndex={this.state.tabIndex}
              document={this.state.document}
              updateParentHeight={this.updateParentHeight}
              updateParentTemplates={this.updateParentTemplates}
              obfuscateDocument={this.obfuscateDocument}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default FramelessViewerContainer;

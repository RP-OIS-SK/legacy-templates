import { get } from "lodash";
import {
  IMG_LOGO_RP,
  IMG_CERTIFICATE_SEAL,
  IMG_LOGO_ALLPOLY,
  IMG_LOGO_SUSS,
  IMG_LOGO_NP
} from "./images";
import {
  formatDDMMMYYYY,
  formatDate,
  formatDatePrefix,
  formatCertName,
  formatSignatoriesPosition
} from "./functions";

export const logoLStyle = {
  textAlign: "left",
  width: "100%",
  height: "auto"
};
export const logoRStyle = {
  width: "100%",
  height: "auto",
  textAlign: "right"
};
export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};
export const sealWidthStyle = {
  width: "95%",
  height: "auto",
  textAlign: "center"
};

export const signatureTextStyle = {
  color: "#090",
  fontWeight: "bold",
  fontSize: "1.2rem"
};
export const printCertStyle = {
  fontFamily: "Old English Text MT",
  fontWeight: "bold",
  fontSize: "3rem",
  color: "#555",
  textAlign: "center"
};

export const printSCCertStyle = {
  fontFamily: "Old English Text MT",
  fontWeight: "bold",
  fontSize: "3.5rem",
  color: "#000",
  textAlign: "center"
};
export const SCsignatureTextStyle = {
  fontFamily: "High Tower Text",
  fontSize: "1.4rem"
};
export const printSCRecipentStyle = {
  fontFamily: "High Tower Text",
  fontWeight: "900!important",
  fontStyle: "italic",
  fontSize: "2.5rem",
  color: "#000",
  textAlign: "center"
};
export const printSCTextStyle1 = {
  fontFamily: "High Tower Text",
  fontWeight: "500!important",
  fontStyle: "italic",
  fontSize: "1.6rem",
  color: "#555",
  textAlign: "center"
};
export const printSCTextStyle = {
  fontFamily: "High Tower Text",
  fontWeight: "500!important",
  fontSize: "1.6rem",
  color: "#555",
  textAlign: "center"
};
export const printRecipientStyle = {
  fontFamily: "Lucida Calligraphy",
  fontWeight: "500!important",
  fontSize: "3rem",
  color: "#555",
  textAlign: "center"
};

export const printTextStyle = {
  fontFamily: "Times New Roman",
  fontWeight: "500!important",
  fontSize: "2rem",
  color: "#555",
  textAlign: "center"
};

export const singaporeTextStyle = {
  color: "#555",
  fontSize: "3rem"
};

export const nameTextStyle = {
  fontSize: "3rem",
  textAlign: "center"
};

export const titleTextStyle = {
  color: "rgb(30,93,200)",
  fontSize: "3rem",
  textAlign: "center"
};

export const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  height: "auto"
};

export const supportSUSSTextStyle = {
  display: "block",
  fontSize: "1rem",
  textAlign: "center"
};

export const supportJPTextStyle = {
  fontFamily: "Times New Roman",
  display: "block",
  fontSize: "1.5rem",
  fontWeight: "900",
  textAlign: "center"
};

export const renderSingapore = () => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "2rem" }}
  >
    <p style={singaporeTextStyle} />
  </div>
);
export const renderLogoRPNP = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img style={{ width: "1050px" }} src={IMG_LOGO_NP} />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoRP = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img src={IMG_LOGO_RP} />
    </div>
    <div className="col-2" />
  </div>
);

// type = 0 (SUSS), 1 (Joint Poly)
export const renderLogoRPPartner = type => {
  let logo = IMG_LOGO_SUSS;
  if (type === 1) logo = IMG_LOGO_ALLPOLY;
  const logoST = type === 0 ? "col-4 mx-auto" : "mx-auto";
  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ marginTop: "3rem" }}
    >
      <div className="col-1" />
      <div className="col-10">
        <span style={supportSUSSTextStyle}>
          {type === 0 ? "This programme is supported by" : null}{" "}
        </span>
        <span style={supportJPTextStyle}>
          {type === 1 ? "In collaboration with:" : null}{" "}
        </span>
        <div className={logoST}>
          <img style={imageStyle} src={logo} />
        </div>
      </div>
      <div className="col-1" />
    </div>
  );
};
// signature for short courses
export const renderACESignatures = certificate => {
  const certSign = formatSignatoriesPosition(
    get(certificate, "additionalData.certSignatories[0].position")
  );
  return (
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "0rem", marginBottom: "1rem" }}
    >
      <div className="col-6">
        <div className="px-6">
          <img
            style={{ width: "100%", borderBottom: "1px solid black" }}
            src={get(
              certificate,
              "additionalData.certSignatories[0].signature"
            )}
          />
        </div>
        <div className="text-center">
          <span style={SCsignatureTextStyle}>
            {get(certificate, "additionalData.certSignatories[0].name")}
            <br />
            {certSign[0]}
            <br />
            {certSign.length > 0 ? certSign[1] : null}
            <br />
            {get(certificate, "additionalData.certSignatories[0].organisation")}
            <br />
          </span>
        </div>
      </div>
    </div>
  );
};
// displayname  = 1 - SD for BIA
export const renderTwoSignatures = (certificate, displayName) => {
  const certSign = formatSignatoriesPosition(
    get(certificate, "additionalData.certSignatories[0].position")
  );
  return (
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "8rem", marginBottom: "1rem" }}
    >
      <div className="col-4">
        <div className="px-4">
          <img
            style={logoLStyle}
            src={get(
              certificate,
              "additionalData.certSignatories[0].signature"
            )}
          />
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {certSign.length > 0 ? certSign[1] : null}
            {displayName > 0
              ? get(certificate, "additionalData.certSignatories[0].name")
              : null}
          </span>
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>{certSign[0]}</span>
        </div>
      </div>
      <div className="col-4">
        <div className="px-4">
          <img style={sealWidthStyle} src={IMG_CERTIFICATE_SEAL} />
        </div>
      </div>
      <div className="col-4">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(
              certificate,
              "additionalData.certSignatories[1].signature"
            )}
          />
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {displayName > 0
              ? get(certificate, "additionalData.certSignatories[1].name")
              : null}
          </span>
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {get(certificate, "additionalData.certSignatories[1].position")}
          </span>
        </div>
      </div>
    </div>
  );
};

export const renderIssuingDate = certificate => (
  <span>
    {formatDatePrefix(get(certificate, "issuedOn"))}{" "}
    {formatDate(get(certificate, "issuedOn"))}
  </span>
);

// type = 0 - DPLUS, 1 - Modular Cert, 2 - PTD/SD
export const renderAwardTextCET = (certificate, type) => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />

    <div style={printTextStyle}>&nbsp;</div>

    <div style={printTextStyle}>&nbsp;</div>

    <div style={printTextStyle}>It is hereby certified that</div>

    <div className="row d-flex justify-content-center">
      <p style={printRecipientStyle}>{get(certificate, "recipient.name")}</p>
    </div>

    <div style={printTextStyle}>having satisfied all course requirements</div>

    <div style={printTextStyle}>was awarded the</div>

    <div className="row d-flex justify-content-center">
      <div style={printTextStyle}>
        <p style={printCertStyle}>{get(certificate, "name")}</p>
      </div>
    </div>

    <div style={printTextStyle}>{type === 1 ? "leading to the " : null}</div>

    <div className="row d-flex justify-content-center">
      <div style={printTextStyle}>
        <p style={printCertStyle}>
          {type === 1 ? get(certificate, "description") : null}
        </p>
      </div>
    </div>

    <div className="row d-flex justify-content-center">
      <p style={printTextStyle}>
        {formatDDMMMYYYY(get(certificate, "issuedOn"))}
      </p>
    </div>
  </div>
);

// Render the main text for Short Course Cert
export const renderAwardTextSH = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />
    <p style={printSCCertStyle}>Certificate of Attendance</p>
    <br /> <br />
    <p style={printSCTextStyle1}>This is to certify that</p>
    <br />
    <p style={printSCRecipentStyle}>{get(certificate, "recipient.name")}</p>
    <p style={printSCTextStyle1}>has successfully completed the course</p>
    <br />
    <br />
    <p style={printSCRecipentStyle}>{get(certificate, "name")}</p>
    <p style={printSCTextStyle}>{get(certificate, "description")}</p>
    <br />
    <br />
    <p style={printSCTextStyle}>Republic Polytechnic, Singapore</p>
  </div>
);

export const renderAwardText = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />
    <div style={printTextStyle}>The Board of Governors of the</div>

    <div style={printTextStyle}>Republic Polytechnic</div>

    <div style={printTextStyle}>On the recommendation of the Senate has</div>

    <div style={printTextStyle}>conferred</div>

    <div className="row d-flex justify-content-center">
      <p style={printRecipientStyle}>{get(certificate, "recipient.name")}</p>
    </div>

    <div style={printTextStyle}>the</div>

    <div className="row d-flex justify-content-center">
      <div style={printTextStyle}>
        <p style={printCertStyle}>{get(certificate, "description")}</p>
        {formatCertName(get(certificate, "additionalData.merit"))}
      </div>
    </div>
    <div style={printTextStyle}>with all of its privileges and obligations</div>

    <div className="row d-flex justify-content-center">
      <p style={printTextStyle}>Given this {renderIssuingDate(certificate)}.</p>
    </div>
  </div>
);

export const renderFooter = certificate => (
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-6 text-left">&nbsp;</div>
      <div className="col-6 text-right">
        {get(certificate, "additionalData.additionalCertId")}
      </div>
    </div>
  </div>
);

import { Selector } from "testcafe";
import { readFileSync } from "fs";
import { join } from "path";
import { getData } from "@govtechsg/open-attestation";

fixture("Frameless Viewer").page`http://localhost:3000/`;

const Certificate = "./Ropsten-Demo.json";
const RenderedCertificate = Selector("#rendered-certificate");

const Media = Selector("#youtube-vid");

const validateTextContent = async (t, component, texts) =>
  texts.reduce(
    async (_prev, curr) => t.expect(component.textContent).contains(curr),
    Promise.resolve()
  );

test("Govtech Demo certificate is rendered correctly", async t => {
  // Inject javascript and execute window.opencerts.renderDocument
  const certificateContent = getData(
    JSON.parse(readFileSync(join(__dirname, Certificate)).toString())
  );
  await t.eval(() => window.opencerts.renderDocument(certificateContent), {
    dependencies: { certificateContent }
  });

  // Check content of window.opencerts.templates
  const container = Selector("#rendered-certificate .container");
  await container(); // wait for document to be rendered
  const templates = await t.eval(() => window.opencerts.getTemplates());
  await t
    .expect(templates)
    .eql([
      { id: "certificate", label: "Certificate", template: undefined },
      { id: "transcript", label: "Transcript", template: undefined },
      { id: "media", label: "Media", template: undefined }
    ]);

  // Validate content of first tab
  await validateTextContent(t, RenderedCertificate, [
    "This is to certify that",
    "Your Name",
    "has successfully completed the",
    "OpenCerts Demo",
    "certification through training administered by"
  ]);

  // Navigate to next tab using window.opencerts.selectTemplateTab
  await t.eval(() => window.opencerts.selectTemplateTab(1));

  // Validate content of second tab
  await validateTextContent(t, RenderedCertificate, [
    "CS 1110",
    "Introduction to Programming",
    "SXXXXXXXY",
    "53b75bbe"
  ]);

  // Navigate to next tab using window.opencerts.selectTemplateTab
  await t.eval(() => window.opencerts.selectTemplateTab(2));

  // Validate content of third tab
  await t.expect(Media.visible).ok();
});

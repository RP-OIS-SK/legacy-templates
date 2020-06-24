import { Selector } from "testcafe";
import { readFileSync } from "fs";
import { join } from "path";
import { getData } from "@govtechsg/open-attestation";

fixture("Republic Polytechnic").page`http://localhost:3000`;

const Certificate = "./RP_PETCCA_104070.opencert";

const RenderedCertificate = Selector("#rendered-certificate");

const validateTextContent = async (t, component, texts) =>
  texts.reduce(
    async (prev, curr) => t.expect(component.textContent).contains(curr),
    Promise.resolve()
  );

test("PET CCA certificate is rendered correctly", async t => {
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
    .eql([{ id: "transcript", label: "Transcript", template: undefined }]);

  // Certificate tab content
  await validateTextContent(t, RenderedCertificate, [
    "CO-CURRICULAR ACTIVITIES TRANSCRIPT",
    "Vincent Goh",
    "Diploma in Biotechnology",
    "SPORTS EXCELLENCE AWARDS 2014",
    "ACADEMIC YEAR 2014/2015"
  ]);
});

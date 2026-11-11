import { describe, expect, it } from "vitest";

import { highlights, projects } from "@/routes/index";

// Content rules Keri stated directly: both projects must be present with their
// real repositories, and the on-campus IT job must be described with its real duties.
describe("Portfolio content", () => {
  it("lists the AAC desktop app with its real repository", () => {
    const aac = projects.find((p) => p.title === "AAC Desktop App");

    expect(aac).toBeDefined();
    expect(aac?.link).toBe("https://github.com/KeriGagnow/Local-AAC-Desktop-App");
    expect(aac?.detail).toContain("ChromaDB");
    expect(aac?.detail).toContain("Phi3");
  });

  it("lists the Market House Prediction paper with its real repository", () => {
    const paper = projects.find((p) => p.title === "Market House Prediction");

    expect(paper).toBeDefined();
    expect(paper?.link).toBe("https://github.com/KeriGagnow/DASC400-House-Market-Predictions");
    expect(paper?.detail).toContain("Zillow");
    expect(paper?.detail).toContain("0.99995");
  });

  it("keeps the two original projects alongside them", () => {
    expect(projects.map((p) => p.title)).toEqual([
      "Mental Health Data Analysis",
      "Sustainability Quiz",
      "AAC Desktop App",
      "Market House Prediction",
    ]);
  });

  it("describes the on-campus IT job with its real duties", () => {
    const job = highlights.find((h) => h.title === "Student Tech, University IT");

    expect(job).toBeDefined();
    expect(job?.text).toContain("first-level tech support");
    expect(job?.text).toContain("password resets");
    expect(job?.text).toContain("classroom technology setup");
    expect(job?.text).toContain("phished accounts");
  });
});

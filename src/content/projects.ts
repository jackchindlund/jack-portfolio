export type StorySection = { id: string; title: string; paragraphs: string[] };
export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  status: string;
  scope: string;
  sections: StorySection[];
};
export const projects: Project[] = [
  {
    slug: "product-knowledge",
    number: "01",
    category: "AI workflows · Product knowledge",
    title: "From product materials to documents and slides.",
    summary:
      "I built a shared-drive knowledge system for an AI agent, keeping product information and the team's deliverable formats available as the source material changed.",
    role: "System design & implementation",
    status: "Working document and slide generation",
    scope: "Google Apps Script · HTML, CSS & JavaScript",
    sections: [
      {
        id: "starting-point",
        title: "The information was already there.",
        paragraphs: [
          "The team's shared drive held two kinds of useful knowledge: information about the product, and examples of how we communicated it. Slides, documents, and spreadsheets carried content alongside the formats and design choices we used to create deliverables.",
          "I wanted an AI agent to draw on both. A request to build a slideshow needed more than a relevant paragraph about the product. It needed the right content in a real slide deck, with the appropriate format and design. As new material arrived, that context needed to change too.",
        ],
      },
      {
        id: "decision",
        title: "A retrieval limit shaped the system.",
        paragraphs: [
          "We had a retrieval-augmented generation (RAG) agent builder: a tool that could bring source excerpts into an AI's context. But it could only surface a limited number of chunks at a time. A growing shared drive and a limited set of retrieved excerpts created a practical constraint on what the agent could use for a particular request.",
          "My implementation choice was to build a knowledge system around those shared-drive materials. It ingested new material as it came in, supporting product knowledge that could evolve and examples of how our team created deliverables. The overall approach was my own design decision in response to the builder's limitation.",
        ],
      },
      {
        id: "built",
        title: "Knowledge had to become something usable.",
        paragraphs: [
          "I personally built the system in Google Apps Script, using HTML, CSS, and JavaScript. The work connected source material, the agent's usable knowledge, and document and slide creation. Working outputs included actual documents and slide decks.",
          "The goal was for the agent to keep current on the product while drawing on the way we made things. Content, format, and design all mattered to a request such as building a presentation. Updating the knowledge context as source material changed was part of that approach; this was not a claim that I trained a new model.",
        ],
      },
      {
        id: "example",
        title: "A small example of the idea.",
        paragraphs: [
          "The prepared example below uses a fictional scheduling product. It shows how the same source facts can become a document or a slide, and what an answer should look like when the source is missing information. It explains the source-to-output relationship without exposing the internal system or product materials.",
        ],
      },
      {
        id: "completed",
        title: "What was completed.",
        paragraphs: [
          "I built the shared-drive knowledge system, including ingestion of new material, and working document and slide generation. The project brought implementation and product communication into the same workflow: source knowledge was useful when it could become a deliverable someone could use.",
          "This case describes the system and working outputs. I am not presenting a measured time-saving, adoption, or accuracy result. The illustrations are conceptual, and the example content is fictional.",
        ],
      },
    ],
  },
  {
    slug: "sales-call-analysis",
    number: "02",
    category: "Sales analysis · Enablement",
    title: "Finding the product story sellers were missing.",
    summary:
      "I built an ongoing AI-powered system to find recurring messaging gaps in sales conversations, then turned the analysis into training recommendations.",
    role: "Analysis system, findings & recommendations",
    status: "Ongoing analysis · Report delivered",
    scope: "Initial batch of 65 sales calls",
    sections: [
      {
        id: "conversations",
        title: "Look across conversations.",
        paragraphs: [
          "A sales conversation contains more than a list of features discussed. It also shows how sellers explain the product and connect it to a customer's work. I built an AI-powered system to analyze Gong transcripts for recurring selling and messaging weaknesses across conversations.",
          "The initial batch covered 65 calls. That number describes the starting scope of the work. The system is ongoing, with further transcripts expanding the source material available for analysis.",
        ],
      },
      {
        id: "finding",
        title: "The gap concerned fundamentals.",
        paragraphs: [
          "The useful finding was that sellers could explain individual features but often struggled to explain the product's core purpose and why it mattered to a customer's work. Knowing what a feature does did not always translate into explaining the practical value of the product.",
          "That distinction changed the training recommendation. More feature detail alone would not directly address the gap I identified. I recommended a stronger emphasis on product fundamentals and on connecting those fundamentals to practical customer value.",
        ],
      },
      {
        id: "evidence",
        title: "Checking the answers against the evidence.",
        paragraphs: [
          "I used a second AI with the full source database to audit selected responses for accuracy. I also requested specific quotations that the source material should support, then verified the returned quotes in the transcripts.",
          "I tested the opposite situation too: questions about topics the data did not cover, and requests for quotes the sources should not contain. In those tests, the system clearly stated that it had no supporting evidence instead of supplying an answer or quotation. That behavior increased my confidence in the responses I was checking.",
          "These were practical checks of selected answers and unsupported requests. They are observations from those tests, rather than a measured accuracy rate or a guarantee that every future response will be supported. The transcripts and actual customer quotations remain internal.",
        ],
      },
      {
        id: "recommendation",
        title: "Turn the finding into a training direction.",
        paragraphs: [
          "I delivered a report, recommendations, and supporting analysis to sales enablement. The recommendation centered on helping sellers explain the product's purpose and practical relevance, so a feature conversation could begin with what a customer was trying to do.",
          "The comparison below is an original illustration of that communication shift. It is not a quotation from any call and does not refer to a specific customer or internal feature.",
        ],
      },
      {
        id: "completed",
        title: "The handoff and continuing work.",
        paragraphs: [
          "My contribution included building the analysis system, examining the findings, checking selected responses, and delivering the report and training recommendations. The work connected a recurring pattern in sales conversations to a concrete enablement direction.",
          "The analysis is ongoing. The delivered report and recommendations are completed work; their effect on training or sales performance has not been measured here. That distinction matters when explaining what the project established.",
        ],
      },
    ],
  },
  {
    slug: "dealer-enablement",
    number: "03",
    category: "Product marketing · Content design",
    title: "A clearer feature reference for sellers.",
    summary:
      "I designed the framework and wrote all content for a live internal catalog covering 13 product features for dealers and sellers.",
    role: "Content framework & all written content",
    status: "Live internal resource",
    scope: "13 product features",
    sections: [
      {
        id: "audience",
        title: "Start with the seller's questions.",
        paragraphs: [
          "A seller needs to understand what a product can do, who a capability is relevant to, and where it is available. I organized a feature reference around those questions for an internal dealer and seller audience.",
          "My role was to design the framework and write all the content. The catalog covered 13 product features. Keeping capabilities, intended audiences, and plan availability together gave each entry a consistent job to do.",
        ],
      },
      {
        id: "structure",
        title: "Give every entry a useful structure.",
        paragraphs: [
          "The content approach joined a clear explanation of the capability with the information a seller would need to place it in context. An entry needed to explain more than a feature name: it needed to connect the feature to the people it served and identify its plan availability.",
          "The fictional entry below illustrates those content categories. It is an original example using a scheduling product, not a screenshot, an internal feature description, or a reconstruction of the catalog's interface.",
        ],
      },
      {
        id: "completed",
        title: "A live resource, with clear ownership.",
        paragraphs: [
          "The internal catalog is live. I designed its framework and authored all its content; I do not claim sole implementation of its software interface. This story describes the resource that was completed, without assigning unmeasured usage or business results to it.",
          "The catalog sits alongside other seller resources I personally authored, including a discovery script, objection-handling cheat sheet, pricing one-pager, data sheets, and competitive battlecards. I also rewrote and restructured a live internal dealer and seller enablement page.",
        ],
      },
    ],
  },
];
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

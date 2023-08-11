import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/src/sanity/schemas";
import { env } from "~/env.mjs";
// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["halaman-utama"]);

export default defineConfig({
  name: "default",
  title: "gumiwang",

  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  basePath: "/admin",
  useCdn: false,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title("Halaman Utama").id("halaman-utama").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("halaman-utama")
                .documentId("halaman-utama"),
            ),

            // Regular document types
            S.documentTypeListItem("slide").title("Slide"),
            S.documentTypeListItem("dusun").title("Dusun"),
            S.documentTypeListItem("pembangunanDesa").title("Pembangunan Desa"),
            S.documentTypeListItem("perangkatDesa").title("Perangkat Desa"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

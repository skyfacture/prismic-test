import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: [".next/server/pages"], // Ensure this path is correct
    }),
  ],
  modelExtensions: [
    {
      name: "Page",
      type: "page",
      urlPath: "/{slug}",
      filePath: ".next/server/pages/{slug}.tsx", // Ensure this matches your file structure
      fields: [
        { name: "title", type: "string", required: true },
        // Add any additional fields here
      ],
    },
  ],
  assetsConfig: {
    referenceType: "static",
    staticDir: "public", // Ensure this matches your static directory
    uploadDir: "", // Leave this empty if images are directly in the public directory
    publicPath: "/public", // Ensure this matches your public path
  },
});

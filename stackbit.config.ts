import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["pages"], // Adjust this if your content is in a different directory
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "pages/{slug}.tsx", // Adjust this to match your file structure
          fields: [{ name: "title", type: "string", required: true }]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public", // This should match the directory where your images are stored
        uploadDir: "", // Leave this empty if images are directly in the public directory
        publicPath: "/public" // Adjust this to match your public path
      }
    })
  ]
});

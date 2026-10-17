import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/resume",
    ...projects.map((project) => "/work/" + project.slug),
  ].map((path) => ({
    url: site.origin + path,
    lastModified: new Date(site.updated + "T12:00:00Z"),
  }));
}

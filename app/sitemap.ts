import type { MetadataRoute } from "next";
import { CFG } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: CFG.siteUrl, lastModified: new Date() }];
}

import type { MetadataRoute } from "next";
import { CFG } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${CFG.siteUrl}/sitemap.xml` };
}

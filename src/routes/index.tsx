import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Science Academy Sr. Sec. School | Admissions Open 2026-27 | Kishangarh-Renwal" },
      { name: "description", content: "Premier co-educational English medium school in Kishangarh-Renwal. Apply for admission at Science Academy — 20+ years of academic excellence, modern campus & dedicated faculty." },
      { name: "keywords", content: "Science Academy, school admission Kishangarh-Renwal, best CBSE RBSE school, English medium school Rajasthan, sr secondary school" },
      { property: "og:title", content: "Science Academy Sr. Sec. School — Admissions Open 2026-27" },
      { property: "og:description", content: "Where curious minds become tomorrow's leaders. Book a campus visit today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});<script type="text/javascript">
    (function (l) {
      if (l.search[1] === "/") {
        var decoded = l.search
          .slice(1)
          .split("&")
          .map(function (s) {
            return s.replace(/~and~/g, "&");
          })
          .join("?");
        window.history.replaceState(
          null,
          null,
          l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    })(window.location);
  </script>

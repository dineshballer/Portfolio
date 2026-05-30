/* ─────────────────────────────────────────────
   Google Analytics 4 — Dinesh Baller portfolio
   Property: G-4LVCG0R2CR

   Loads gtag, auto-sends pageviews, and exposes
   window.trackEvent(name, params) for custom events
   wired from each page's own JS.

   Skips analytics entirely on localhost / 127.0.0.1 /
   file:// so local dev testing stays out of the
   production data. In dev, trackEvent() still works —
   it just logs to the console instead of sending.
───────────────────────────────────────────── */
(function () {
  const GA_ID = "G-4LVCG0R2CR";

  const host = window.location.hostname;
  const isLocal =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "" ||
    window.location.protocol === "file:";

  // Always expose trackEvent so callers don't need to feature-detect.
  // In dev: log to console. In prod: forward to gtag.
  window.trackEvent = function (name, params) {
    if (isLocal) {
      console.log("%c[ga:dev]%c " + name, "color:#1F4D3E;font-weight:600", "color:inherit", params || {});
      return;
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    }
  };

  if (isLocal) {
    console.log(
      "%c[ga] dev mode — pageviews and events are logged, not sent",
      "color:#1F4D3E;font-weight:600"
    );
    return;
  }

  // Initialize gtag (production only)
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    send_page_view: true,
  });

  // Inject the gtag loader script
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
})();

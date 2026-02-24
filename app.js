(() => {
  // ===== Site config (change here only) =====
  const CONFIG = {
    phoneDisplay: "(423) 285-5663",
    phoneRaw: "4232855663",
    email: "refereesportsbargrill@gmail.com",
    address: "200 Able Drive, Dayton, TN 37321",
    // If you get a clean Google Maps link later, drop it here.
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=200+Able+Drive%2C+Dayton%2C+TN+37321",
    // Replace with the real Facebook page link if desired
    facebookUrl: "https://www.facebook.com/share/16tysqTBA6/?mibextid=wwXIfr",
    // If later you enable Square/Toast ordering, paste the link here and update buttons
    orderingUrl: "" // e.g. "https://square.link/u/..." or "https://order.toasttab.com/..."
  };

  // ===== Helpers =====
  const $ = (sel) => document.querySelector(sel);

  function setHref(id, href) {
    const el = $(id);
    if (el) el.href = href;
  }

  function setText(id, text) {
    const el = $(id);
    if (el) el.textContent = text;
  }

  // ===== Wire up links =====
  const telHref = `tel:+1${CONFIG.phoneRaw}`;
  ["#abCall", "#heroCall", "#midCall", "#calloutCall", "#successCall", "#phoneLink", "#contactPhone"].forEach(id => setHref(id, telHref));

  ["#abDirections", "#topDirections", "#midDirections", "#contactDirections", "#mapDirections", "#mapEmbedLink"].forEach(id => setHref(id, CONFIG.mapsQueryUrl));

  ["#facebookLinkTop", "#facebookLinkBottom"].forEach(id => setHref(id, CONFIG.facebookUrl));

  // Dynamic year
  setText("#year", String(new Date().getFullYear()));

  // ===== Open status (simple local check based on posted hours) =====
  // Note: This uses the user's device time and assumes local timezone is correct.
  // Hours:
  // Mon 15-21, Tue closed, Wed-Sat 11-23, Sun 11-21
  function computeOpenStatus(now = new Date()) {
    const day = now.getDay(); // 0 Sun .. 6 Sat
    const minutes = now.getHours() * 60 + now.getMinutes();

    const CLOSED = { open: false, msg: "Closed today" };

    const schedule = {
      0: { openMin: 11 * 60, closeMin: 21 * 60 }, // Sun
      1: { openMin: 15 * 60, closeMin: 21 * 60 }, // Mon
      2: null,                                    // Tue closed
      3: { openMin: 11 * 60, closeMin: 23 * 60 }, // Wed
      4: { openMin: 11 * 60, closeMin: 23 * 60 }, // Thu
      5: { openMin: 11 * 60, closeMin: 23 * 60 }, // Fri
      6: { openMin: 11 * 60, closeMin: 23 * 60 }  // Sat
    };

    const today = schedule[day];
    if (!today) return CLOSED;

    const { openMin, closeMin } = today;

    if (minutes < openMin) {
      return { open: false, msg: `Closed now • Opens at ${formatTime(openMin)}` };
    }
    if (minutes >= closeMin) {
      return { open: false, msg: `Closed now • Opens tomorrow` };
    }
    // Open
    const minsLeft = closeMin - minutes;
    const hr = Math.floor(minsLeft / 60);
    const min = minsLeft % 60;
    const leftStr = hr > 0 ? `${hr}h ${min}m` : `${min}m`;
    return { open: true, msg: `Open now • Closes in ${leftStr}` };
  }

  function formatTime(totalMin) {
    let h = Math.floor(totalMin / 60);
    const m = totalMin % 60;
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${String(m).padStart(2, "0")} ${ampm}`;
  }

  function updateOpenStatus() {
    const status = computeOpenStatus();
    const el = $("#openStatus");
    if (!el) return;

    el.textContent = status.msg;
    el.style.color = status.open ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.85)";
  }

  updateOpenStatus();
  setInterval(updateOpenStatus, 60 * 1000);

  // ===== Order form (MVP: sends email via mailto) =====
  // This creates a pre-filled email to the business. Later replace with real ordering link.
  const form = $("#orderForm");
  const success = $("#orderSuccess");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const name = (fd.get("name") || "").toString().trim();
      const phone = (fd.get("phone") || "").toString().trim();
      const pickup = (fd.get("pickup") || "").toString().trim();
      const details = (fd.get("details") || "").toString().trim();
      const notes = (fd.get("notes") || "").toString().trim();
      const contactPref = (fd.get("contactPref") || "call").toString();

      const subject = encodeURIComponent(`Pickup Order Request — ${name}`);
      const bodyLines = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Pickup time: ${pickup}`,
        `Preferred contact: ${contactPref}`,
        "",
        "Order details:",
        details,
        "",
        notes ? `Notes: ${notes}` : ""
      ].filter(Boolean);

      const body = encodeURIComponent(bodyLines.join("\n"));
      const mailto = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

      // If an ordering platform link exists, go there instead
      if (CONFIG.orderingUrl && CONFIG.orderingUrl.trim().length > 0) {
        window.open(CONFIG.orderingUrl, "_blank", "noopener");
      } else {
        window.location.href = mailto;
      }

      form.reset();
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
})();

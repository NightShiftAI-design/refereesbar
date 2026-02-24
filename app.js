(() => {
  // ===== Site config =====
  const CONFIG = {
    phoneDisplay: "(423) 285-5663",
    phoneRaw: "4232855663",
    email: "refereesportsbargrill@gmail.com",
    address: "200 Able Drive, Dayton, TN 37321",
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=200+Able+Drive%2C+Dayton%2C+TN+37321",
    facebookUrl: "https://www.facebook.com/share/16tysqTBA6/?mibextid=wwXIfr",
    orderingUrl: "" // paste Square/Toast link later
  };

  // ===== Menu data (from your cleaned extraction) =====
  const MENU = [
    {
      key: "appetizers",
      title: "Starting Line-Up",
      subtitle: "Appetizers",
      items: [
        { name: "Fresh Guacamole & Chips", price: 8.00 },
        { name: "Jalapeno Poppers", price: 8.00 },
        { name: "Loaded Fries", price: 12.00, desc: "(Pico / Melted Cheese / Bacon Bits / Sour Cream / Jalapenos)" },
        { name: "Sampler Platter", price: 12.00, desc: "(Pretzel Nuggets / Mushrooms / Cheese Wedges)" },
        { name: "Pretzel Nuggets with Beer Cheese", price: 8.00 },
        { name: "Potato Skins", price: 10.00 },
        { name: "Fried Zucchini with Marinara", price: 8.00 },
        { name: "Spinach/Artichoke Dip with Pita Chips", price: 10.00 },
        { name: "Cheese Wedges with Marinara", price: 8.00 },
        { name: "Fried Mushrooms", price: 8.00 },
        { name: "Quesadilla", price: 10.00, desc: "(Served with Lettuce / Tomatoes / Salsa / Sour Cream; Grilled Chicken / Steak)" },
        { name: "Jolene Platter", price: 12.00, desc: "(Mushrooms, Green Beans, Zucchini)" },
        { name: "Green Beans", price: 10.00, desc: "(Boom Boom Sauce)" },
        { name: "Nachos", price: 15.00, desc: "(Monterey Jack / Salsa / Sour Cream / Pico / Lettuce / Tomatoes; Grilled Chicken / Steak up-charge)" },
        { name: "Fried Pickles", price: 8.00 }
      ]
    },
    {
      key: "salads",
      title: "Salads",
      subtitle: "Dressings: Honey Mustard, French, Thousand Island, Italian, Blue Cheese, Raspberry Vinaigrette, Caesar, Ranch",
      items: [
        { name: "The Sir Cobb", price: 14.00, desc: "(Mixed Greens / Ham / Turkey / Cucumbers / Tomatoes / Shredded Cheese)" },
        { name: "Madison Square Garden", price: 9.00, desc: "(Mixed Greens / Cucumbers / Tomatoes / Shredded Cheese / Croutons / Red Onions)" },
        { name: "Chicken Caesar", price: 12.00, desc: "(Romaine / Caesar Dressing / Parmesan / Croutons / Grilled Chicken)" }
      ]
    },
    {
      key: "wings",
      title: "Wings",
      subtitle: "Bone-In or Boneless",
      items: [
        { name: "½ Dozen", price: 11.00 },
        { name: "Whole Dozen", price: 20.00 },
        { name: "Wet Sauces", priceText: "Mild / Hot / Garlic Parmesan / Honey / BBQ / Sweet Red Chili / Siracha Bourbon / Mango Habanero" },
        { name: "Dry Rubs", priceText: "Lemon Pepper / Garlic Parmesan / Blackened / Cajun" }
      ]
    },
    {
      key: "burgers",
      title: "Burgers",
      subtitle: "All burgers come on a Brioche Bun with one side.",
      items: [
        { name: "All American*", price: 12.00, desc: "(Lettuce / Tomato / Onion / Pickle / American Cheese; Add Bacon $2.00)" },
        { name: "Jolene's Burger*", price: 12.00, desc: "(Grilled Chicken Breast / Bacon / BBQ Sauce / Lettuce / Onions / Tomatoes)" },
        { name: "Bacon Burger*", price: 14.00, desc: "(Beef Patty / Bacon / BBQ Sauce)" },
        { name: "Portobella Bacon Swiss*", price: 15.00, desc: "(Portobella Mushrooms / Peppered Bacon / Swiss Cheese)" },
        { name: "Roethlisburger*", price: 15.00, desc: "(Double burger loaded with Mozzarella / Melted Cheddar / Bacon Bits) — You will need gloves for this one!" },
        { name: "Chicken Buffalo Burger*", price: 13.50, desc: "(Fried Chicken + Buffalo Sauce / Lettuce / Pickles / Onions / Tomatoes) — Add any other sauce for 25¢ more." }
      ],
      footnote: "*Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food-borne illness."
    },
    {
      key: "sides",
      title: "Sidelines",
      subtitle: "$3.99 ( $1.99 up-charge for loaded )",
      items: [
        { name: "Tater Babies (Wedges)" },
        { name: "Tater Tots" },
        { name: "Cole Slaw" },
        { name: "Onion Rings" },
        { name: "Sweet Potato Fries" },
        { name: "Waffle Fries" },
        { name: "Side Salad" }
      ]
    },
    {
      key: "subs",
      title: "Subs / Wraps",
      subtitle: "Comes with 1 Side",
      items: [
        { name: "Philly Flyer Steak*", price: 10.00, desc: "(Grilled Steak / Sauteed Onion / Provolone / Bell Peppers)" },
        { name: "The Bills Wrap", price: 12.00, desc: "(Hand-breaded Chicken tossed in Buffalo / Lettuce / Tomato / Onion)" },
        { name: "Clubhouse Wrap", price: 13.00, desc: "(Ham / Turkey / American Cheese / Lettuce / Tomato)" },
        { name: "Referees Chicken Dog", price: 11.50, desc: "(Hand-breaded Chicken Tender / Coleslaw / Ranch / Green Onions / Buffalo Sauce)" }
      ]
    },
    {
      key: "chicken",
      title: "Fowled Out",
      subtitle: "Comes with 1 Side",
      items: [
        { name: "Chicken Tenders", price: 13.00, desc: "(House-breaded and Fried)" },
        { name: "Naked Tenders", price: 12.00, desc: "(Grilled Chicken)" }
      ]
    },
    {
      key: "pasta",
      title: "Pasta",
      items: [
        { name: "Chicken Alfredo", price: 15.00, desc: "(House-breaded Chicken over Angel Pasta; Add Shrimp $3.00)" },
        { name: "Chicken Parmesan", price: 15.00, desc: "(House-breaded Chicken Breast + Pasta Sauce + Provolone over Pasta)" }
      ]
    },
    {
      key: "steaks",
      title: "Steaks",
      items: [
        { name: "Top Sirloin*", price: 20.00, desc: "(8 oz Baseball Center Cut Sirloin / with Baked Potato)" },
        { name: "Rib-Eye*", price: 32.00, desc: "(16 oz Cowboy Cut Rib-eye / with Baked Potato)" },
        { name: "T-Bone*", priceText: "Market Price", desc: "(with Baked Potato)" }
      ]
    },
    {
      key: "seafood",
      title: "Seafood",
      items: [
        { name: "Fish and Chips*", price: 15.00, desc: "(Corona Beer-Battered Cod)" }
      ]
    },
    {
      key: "fajitas",
      title: "Sizzling Fajitas",
      items: [
        { name: "Chicken / Steak*", price: 16.00, desc: "(Bell Peppers / Onions / Tomatoes)" },
        { name: "Shrimp Fajitas", price: 17.00 },
        { name: "Hawaiian Fajitas", price: 18.00, desc: "(Steak / Bell Peppers / Onions / Pineapple)" },
        { name: "Tex Fajitas", price: 18.00, desc: "(Chicken / Steak / Shrimp; Bell Peppers / Onions / Tomatoes)" }
      ]
    },
    {
      key: "kids",
      title: "Kid’s Menu",
      subtitle: "Ages 12 & Under — $6.00",
      items: [
        { name: "Kid Batter Up Tenders & 1 Side" },
        { name: "Kid Lil' Slugger Burger & 1 Side" },
        { name: "Kid Fowled Out Alfredo" },
        { name: "Cheese Quesadilla" },
        { name: "Side Options", priceText: "Waffle Fries / Onion Rings / Tater Babies / Sweet Potato Fries" }
      ]
    },
    {
      key: "drinks",
      title: "Drinks",
      items: [
        { name: "Coca-Cola Products", price: 2.99 }
      ]
    },
    {
      key: "desserts",
      title: "Desserts",
      items: [
        { name: "(Ask Server)" }
      ]
    }
  ];

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

  function money(n) {
    if (typeof n !== "number") return "";
    return `$${n.toFixed(2)}`;
  }

  // ===== Wire up links =====
  const telHref = `tel:+1${CONFIG.phoneRaw}`;
  ["#abCall", "#heroCall", "#midCall", "#calloutCall", "#successCall", "#phoneLink", "#contactPhone"].forEach(id => setHref(id, telHref));
  ["#abDirections", "#topDirections", "#midDirections", "#contactDirections", "#mapDirections", "#mapEmbedLink"].forEach(id => setHref(id, CONFIG.mapsQueryUrl));
  ["#facebookLinkTop", "#facebookLinkBottom"].forEach(id => setHref(id, CONFIG.facebookUrl));
  setText("#year", String(new Date().getFullYear()));

  // ===== Open status =====
  function computeOpenStatus(now = new Date()) {
    const day = now.getDay(); // 0 Sun .. 6 Sat
    const minutes = now.getHours() * 60 + now.getMinutes();

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
    if (!today) return { open: false, msg: "Closed today" };

    const { openMin, closeMin } = today;

    if (minutes < openMin) return { open: false, msg: `Closed now • Opens at ${formatTime(openMin)}` };
    if (minutes >= closeMin) return { open: false, msg: `Closed now • Opens tomorrow` };

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
  }

  updateOpenStatus();
  setInterval(updateOpenStatus, 60 * 1000);

  // ===== Menu rendering + tabs + search =====
  const tabsEl = $("#menuTabs");
  const gridEl = $("#menuGrid");
  const searchEl = $("#menuSearch");
  const clearBtn = $("#clearSearch");
  const metaEl = $("#menuMeta");

  let activeKey = "all";
  let query = "";

  function allMenuItemsCount(filtered = null) {
    const data = filtered || MENU;
    return data.reduce((acc, sec) => acc + (sec.items?.length || 0), 0);
  }

  function buildTabs() {
    if (!tabsEl) return;
    const tabs = [
      { key: "all", label: "All" },
      ...MENU.map(s => ({ key: s.key, label: s.title }))
    ];

    tabsEl.innerHTML = tabs.map(t => {
      const selected = t.key === activeKey ? "true" : "false";
      return `<button class="tab" role="tab" aria-selected="${selected}" data-key="${t.key}" type="button">${t.label}</button>`;
    }).join("");

    tabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab");
      if (!btn) return;
      activeKey = btn.dataset.key || "all";
      renderMenu();
      buildTabs();
      gridEl?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function matchText(item, q) {
    if (!q) return true;
    const hay = `${item.name || ""} ${item.desc || ""} ${item.priceText || ""}`.toLowerCase();
    return hay.includes(q.toLowerCase());
  }

  function sectionHasMatches(section, q) {
    return section.items.some(it => matchText(it, q));
  }

  function filteredMenu() {
    let sections = MENU;

    if (activeKey !== "all") {
      sections = MENU.filter(s => s.key === activeKey);
    }

    if (query.trim().length) {
      const q = query.trim();
      sections = sections
        .filter(s => sectionHasMatches(s, q))
        .map(s => ({
          ...s,
          items: s.items.filter(it => matchText(it, q))
        }));
    }

    return sections;
  }

  function renderMenu() {
    if (!gridEl) return;

    const sections = filteredMenu();
    const total = allMenuItemsCount(sections);
    const showKey = activeKey === "all" ? "All categories" : (MENU.find(s => s.key === activeKey)?.title || "Category");
    const qText = query.trim().length ? ` • Search: “${query.trim()}”` : "";

    if (metaEl) metaEl.textContent = `${showKey} • ${total} item(s)${qText}`;

    if (!sections.length) {
      gridEl.innerHTML = `
        <div class="menu-section">
          <div class="menu-section-head">
            <h3>No results</h3>
            <span class="badge">Try a different search</span>
          </div>
          <div class="muted">No menu items match “${escapeHtml(query)}”.</div>
        </div>
      `;
      return;
    }

    gridEl.innerHTML = sections.map(sec => {
      const itemsHtml = sec.items.map(it => {
        const price = it.priceText ? it.priceText : (typeof it.price === "number" ? money(it.price) : "");
        return `
          <li class="menu-item">
            <div>
              <div class="item-name">${escapeHtml(it.name)}</div>
              ${it.desc ? `<div class="item-desc">${escapeHtml(it.desc)}</div>` : ""}
            </div>
            ${price ? `<div class="item-price">${escapeHtml(price)}</div>` : `<div class="item-price"></div>`}
          </li>
        `;
      }).join("");

      return `
        <article class="menu-section" data-section="${sec.key}">
          <div class="menu-section-head">
            <div>
              <h3>${escapeHtml(sec.title)}</h3>
              ${sec.subtitle ? `<div class="menu-sub">${escapeHtml(sec.subtitle)}</div>` : ""}
            </div>
            <span class="badge">${sec.items.length} item(s)</span>
          </div>
          <ul class="menu-items">${itemsHtml}</ul>
          ${sec.footnote ? `<p class="tiny muted mt">${escapeHtml(sec.footnote)}</p>` : ""}
        </article>
      `;
    }).join("");
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  if (searchEl) {
    searchEl.addEventListener("input", (e) => {
      query = e.target.value || "";
      renderMenu();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      query = "";
      if (searchEl) searchEl.value = "";
      renderMenu();
    });
  }

  buildTabs();
  renderMenu();

  // ===== Order form (MVP: mailto) =====
  const form = $("#orderForm");
  const success = $("#orderSuccess");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      const pickup = String(fd.get("pickup") || "").trim();
      const details = String(fd.get("details") || "").trim();
      const notes = String(fd.get("notes") || "").trim();
      const contactPref = String(fd.get("contactPref") || "call");

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

(() => {
  const CONFIG = {
    phoneDisplay: "(423) 285-5663",
    phoneRaw: "4232855663",
    email: "refereesportsbargrill@gmail.com",
    address: "200 Able Drive Suite 7, Dayton, TN 37321",
    mapsQueryUrl: "https://www.google.com/maps/place/Referees/data=!4m2!3m1!1s0x0:0x9618beea02624ab2?sa=X&ved=1t:2428&ictx=111",
    facebookUrl: "https://www.facebook.com/share/16tysqTBA6/?mibextid=wwXIfr",
    reviewUrl: "https://www.google.com/search?sca_esv=db2351f46a6aa745&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOSrkv5aWi_biwLS8E5Nh7hVrDuFGLbv-hMx-yYjjDmYifS-Tlgb5a76cBwR1jjkDsrCRF2rOjlXhYW3hXiKQGXDbdA3c&q=Referees+Reviews&sa=X&ved=2ahUKEwizlo-7jviSAxVdv4kEHZxyIG0Q0bkNegQIHBAF&biw=1470&bih=831&dpr=2",
  };

  // ─── MENU PHOTOS ───────────────────────────────────────────────
  // To add menu photos:
  // 1. Add the image file to the root of your project (e.g. menu-photo-1.jpg)
  // 2. Add an entry to MENU_PHOTOS below with { src, alt } — that's it.
  const MENU_PHOTOS = [
    { src: "./food-wings-1.jpg",   alt: "Wings"        },
    { src: "./food-burger-1.jpg",  alt: "Burgers"      },
    { src: "./food-fajitas-1.jpg", alt: "Fajitas"      },
    { src: "./food-steak-1.jpg",   alt: "Steaks"       },
    { src: "./food-pickles-1.jpg", alt: "Fried Pickles" },
    { src: "./IMG_0874.jpg",       alt: "Menu Item"    },
  ];

  const MENU = [
    {
      key: "appetizers",
      title: "Starting Line-Up",
      subtitle: "Appetizers",
      items: [
        { name: "Fresh Guacamole & Chips", price: 8.00 },
        { name: "Jalapeño Poppers", price: 8.00 },
        { name: "Loaded Fries", price: 12.00, desc: "Pico · Melted Cheese · Bacon Bits · Sour Cream · Jalapeños" },
        { name: "Sampler Platter", price: 12.00, desc: "Pretzel Nuggets · Mushrooms · Cheese Wedges" },
        { name: "Pretzel Nuggets with Beer Cheese", price: 8.00 },
        { name: "Potato Skins", price: 10.00 },
        { name: "Fried Zucchini with Marinara", price: 8.00 },
        { name: "Spinach/Artichoke Dip with Pita Chips", price: 10.00 },
        { name: "Cheese Wedges with Marinara", price: 8.00 },
        { name: "Fried Mushrooms", price: 8.00 },
        { name: "Quesadilla", price: 10.00, desc: "Served with Lettuce · Tomatoes · Salsa · Sour Cream — Grilled Chicken or Steak" },
        { name: "Jolene Platter", price: 12.00, desc: "Mushrooms · Green Beans · Zucchini" },
        { name: "Green Beans", price: 10.00, desc: "Boom Boom Sauce" },
        { name: "Nachos", price: 15.00, desc: "Monterey Jack · Salsa · Sour Cream · Pico · Lettuce · Tomatoes. Grilled Chicken or Steak up-charge." },
        { name: "Fried Pickles", price: 8.00 }
      ]
    },
    {
      key: "salads",
      title: "Salads",
      subtitle: "Dressings: Honey Mustard · French · Thousand Island · Italian · Blue Cheese · Raspberry Vinaigrette · Caesar · Ranch",
      items: [
        { name: "The Sir Cobb", price: 14.00, desc: "Mixed Greens · Ham · Turkey · Cucumbers · Tomatoes · Shredded Cheese" },
        { name: "Madison Square Garden", price: 9.00, desc: "Mixed Greens · Cucumbers · Tomatoes · Shredded Cheese · Croutons · Red Onions" },
        { name: "Chicken Caesar", price: 12.00, desc: "Romaine · Caesar Dressing · Parmesan · Croutons · Grilled Chicken" }
      ]
    },
    {
      key: "wings",
      title: "Wings",
      subtitle: "Bone-In or Boneless",
      items: [
        { name: "½ Dozen", price: 11.00 },
        { name: "Whole Dozen", price: 20.00 },
        { name: "Wet Sauces", priceText: "Choose your heat", desc: "Mild · Hot · Garlic Parmesan · Honey · BBQ · Sweet Red Chili · Sriracha Bourbon · Mango Habanero" },
        { name: "Dry Rubs", priceText: "Choose your rub", desc: "Lemon Pepper · Garlic Parmesan · Blackened · Cajun" }
      ]
    },
    {
      key: "burgers",
      title: "Burgers",
      subtitle: "All burgers on a Brioche Bun with one side",
      items: [
        { name: "All American", price: 12.00, desc: "Lettuce · Tomato · Onion · Pickle · American Cheese — Add Bacon $2.00" },
        { name: "Jolene's Burger", price: 12.00, desc: "Grilled Chicken Breast · Bacon · BBQ Sauce · Lettuce · Onions · Tomatoes" },
        { name: "Bacon Burger", price: 14.00, desc: "Beef Patty · Bacon · BBQ Sauce" },
        { name: "Portobella Bacon Swiss", price: 15.00, desc: "Portobella Mushrooms · Peppered Bacon · Swiss Cheese" },
        { name: "Roethlisburger", price: 15.00, desc: "Double burger loaded with Mozzarella · Melted Cheddar · Bacon Bits. You will need gloves for this one!" },
        { name: "Chicken Buffalo Burger", price: 13.50, desc: "Fried Chicken · Buffalo Sauce · Lettuce · Pickles · Onions · Tomatoes. Add any other sauce for 25¢." }
      ],
      footnote: "* Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food-borne illness."
    },
    {
      key: "sides",
      title: "Sidelines",
      subtitle: "$3.99 each — $1.99 up-charge for loaded",
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
      title: "Subs & Wraps",
      subtitle: "Comes with 1 side",
      items: [
        { name: "Philly Flyer Steak", price: 10.00, desc: "Grilled Steak · Sautéed Onion · Provolone · Bell Peppers" },
        { name: "The Bills Wrap", price: 12.00, desc: "Hand-breaded Chicken tossed in Buffalo · Lettuce · Tomato · Onion" },
        { name: "Clubhouse Wrap", price: 13.00, desc: "Ham · Turkey · American Cheese · Lettuce · Tomato" },
        { name: "Referees Chicken Dog", price: 11.50, desc: "Hand-breaded Chicken Tender · Coleslaw · Ranch · Green Onions · Buffalo Sauce" }
      ]
    },
    {
      key: "chicken",
      title: "Fowled Out",
      subtitle: "Comes with 1 side",
      items: [
        { name: "Chicken Tenders", price: 13.00, desc: "House-breaded and fried" },
        { name: "Naked Tenders", price: 12.00, desc: "Grilled chicken" }
      ]
    },
    {
      key: "pasta",
      title: "Pasta",
      items: [
        { name: "Chicken Alfredo", price: 15.00, desc: "House-breaded Chicken over Angel Pasta — Add Shrimp $3.00" },
        { name: "Chicken Parmesan", price: 15.00, desc: "House-breaded Chicken Breast · Pasta Sauce · Provolone over Pasta" }
      ]
    },
    {
      key: "steaks",
      title: "Steaks",
      items: [
        { name: "Top Sirloin", price: 20.00, desc: "8 oz Baseball Center Cut Sirloin · with Baked Potato" },
        { name: "Rib-Eye", price: 32.00, desc: "16 oz Cowboy Cut Rib-eye · with Baked Potato" },
        { name: "T-Bone", priceText: "Market Price", desc: "with Baked Potato — price varies based on availability" }
      ]
    },
    {
      key: "seafood",
      title: "Seafood",
      items: [
        { name: "Fish and Chips", price: 15.00, desc: "Corona Beer-Battered Cod" }
      ]
    },
    {
      key: "fajitas",
      title: "Sizzling Fajitas",
      items: [
        { name: "Chicken or Steak", price: 16.00, desc: "Bell Peppers · Onions · Tomatoes" },
        { name: "Shrimp Fajitas", price: 17.00 },
        { name: "Hawaiian Fajitas", price: 18.00, desc: "Steak · Bell Peppers · Onions · Pineapple" },
        { name: "Tex Fajitas", price: 18.00, desc: "Chicken · Steak · Shrimp — Bell Peppers · Onions · Tomatoes" }
      ]
    },
    {
      key: "kids",
      title: "Kid's Menu",
      subtitle: "Ages 12 & Under — $6.00",
      items: [
        { name: "Kid Batter Up Tenders & 1 Side" },
        { name: "Kid Lil' Slugger Burger & 1 Side" },
        { name: "Kid Fowled Out Alfredo" },
        { name: "Cheese Quesadilla" },
        { name: "Side Options", priceText: "", desc: "Waffle Fries · Onion Rings · Tater Babies · Sweet Potato Fries" }
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
        { name: "Ask your server for today's options" }
      ]
    }
  ];

  const $ = sel => document.querySelector(sel);
  const $$ = sel => document.querySelectorAll(sel);

  function setHrefAll(sel, href) {
    $$(sel).forEach(el => { el.href = href; });
  }

  function money(n) {
    return typeof n === "number" ? `$${n.toFixed(2)}` : "";
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  const telHref = `tel:+1${CONFIG.phoneRaw}`;

  setHrefAll("[data-tel]", telHref);
  setHrefAll("[data-maps]", CONFIG.mapsQueryUrl);
  setHrefAll("[data-fb]", CONFIG.facebookUrl);
  setHrefAll("[data-review]", CONFIG.reviewUrl);

  $$("#year").forEach(el => { el.textContent = new Date().getFullYear(); });

  // ─── HOURS / STATUS ────────────────────────────────────────────
  const schedule = {
    0: { open: 11 * 60, close: 21 * 60,  label: "11 AM – 9 PM"  },
    1: { open: 15 * 60, close: 21 * 60,  label: "3 PM – 9 PM"   },
    2: null,
    3: { open: 11 * 60, close: 23 * 60,  label: "11 AM – 11 PM" },
    4: { open: 11 * 60, close: 23 * 60,  label: "11 AM – 11 PM" },
    5: { open: 11 * 60, close: 23 * 60,  label: "11 AM – 11 PM" },
    6: { open: 11 * 60, close: 23 * 60,  label: "11 AM – 11 PM" }
  };

  function fmtTime(m) {
    let h = Math.floor(m / 60), min = m % 60;
    const ap = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}${min ? ":" + String(min).padStart(2, "0") : ""} ${ap}`;
  }

  function updateStatus() {
    const now = new Date();
    const d = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();
    const today = schedule[d];

    let msg, cls;
    if (!today) {
      msg = "Closed Today"; cls = "status-closed";
    } else if (mins < today.open) {
      msg = `Opens at ${fmtTime(today.open)}`; cls = "status-closed";
    } else if (mins >= today.close) {
      msg = "Closed Now"; cls = "status-closed";
    } else {
      const left = today.close - mins;
      const h = Math.floor(left / 60), m = left % 60;
      const leftStr = h > 0 ? `${h}h ${m}m` : `${m}m`;
      msg = `Open · Closes in ${leftStr}`; cls = "status-open";
    }

    $$(".open-status").forEach(el => {
      el.textContent = msg;
      el.className = "open-status stat-value " + cls;
    });

    const todayIds = ["hours-sun","hours-mon","hours-tue","hours-wed","hours-thu","hours-fri","hours-sat"];
    const todayId = todayIds[d];
    if (todayId) {
      const row = $(`#${todayId}`);
      if (row) row.classList.add("today");
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000);

  // ─── MENU RENDERING ─────────────────────────────────────────────
  const tabsEl    = $("#menuTabs");
  const gridEl    = $("#menuGrid");
  const searchEl  = $("#menuSearch");
  const clearBtn  = $("#clearSearch");
  const metaEl    = $("#menuMeta");

  let activeKey = "all";
  let query = "";

  function buildTabs() {
    if (!tabsEl) return;
    const tabs = [{ key: "all", label: "All" }, ...MENU.map(s => ({ key: s.key, label: s.title }))];
    tabsEl.innerHTML = tabs.map(t =>
      `<button class="tab" role="tab" aria-selected="${t.key === activeKey}" data-key="${t.key}" type="button">${esc(t.label)}</button>`
    ).join("");
    tabsEl.addEventListener("click", e => {
      const btn = e.target.closest(".tab");
      if (!btn) return;
      activeKey = btn.dataset.key || "all";
      renderMenu(); buildTabs();
      gridEl?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function filteredMenu() {
    let sections = activeKey === "all" ? MENU : MENU.filter(s => s.key === activeKey);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      sections = sections
        .filter(s => s.items.some(it => `${it.name} ${it.desc || ""} ${it.priceText || ""}`.toLowerCase().includes(q)))
        .map(s => ({ ...s, items: s.items.filter(it => `${it.name} ${it.desc || ""} ${it.priceText || ""}`.toLowerCase().includes(q)) }));
    }
    return sections;
  }

  function renderMenu() {
    if (!gridEl) return;
    const sections = filteredMenu();
    const total = sections.reduce((a, s) => a + s.items.length, 0);
    if (metaEl) metaEl.textContent = `${activeKey === "all" ? "All categories" : MENU.find(s => s.key === activeKey)?.title} · ${total} item${total !== 1 ? "s" : ""}${query.trim() ? ` matching "${query.trim()}"` : ""}`;

    if (!sections.length) {
      gridEl.innerHTML = `<div class="notice"><div class="notice-icon">🔍</div><div class="notice-body"><strong>No results</strong><p>No menu items match "<em>${esc(query)}</em>". Try a different search.</p></div></div>`;
      return;
    }

    gridEl.innerHTML = sections.map(sec => {
      const itemsHtml = sec.items.map(it => {
        const priceRaw = it.priceText !== undefined && it.priceText !== null ? it.priceText : (typeof it.price === "number" ? money(it.price) : "");
        const isMarket = priceRaw === "Market Price";
        const priceDisplay = isMarket
          ? `<span class="market-price">Market Price</span>`
          : esc(priceRaw);
        return `<li class="menu-item">
          <div>
            <div class="item-name">${esc(it.name)}</div>
            ${it.desc ? `<div class="item-desc">${esc(it.desc)}</div>` : ""}
          </div>
          <div class="item-price">${priceDisplay}</div>
        </li>`;
      }).join("");

      return `<article class="menu-section">
        <div class="menu-section-head">
          <div>
            <h3>${esc(sec.title)}</h3>
            ${sec.subtitle ? `<div class="menu-sub">${esc(sec.subtitle)}</div>` : ""}
          </div>
          <span class="badge">${sec.items.length} item${sec.items.length !== 1 ? "s" : ""}</span>
        </div>
        <ul class="menu-items">${itemsHtml}</ul>
        ${sec.footnote ? `<p class="menu-footnote">${esc(sec.footnote)}</p>` : ""}
      </article>`;
    }).join("");
  }

  if (searchEl) {
    searchEl.addEventListener("input", e => { query = e.target.value || ""; renderMenu(); });
  }
  if (clearBtn) {
    clearBtn.addEventListener("click", () => { query = ""; if (searchEl) searchEl.value = ""; renderMenu(); });
  }
  buildTabs();
  renderMenu();

  // ─── MENU IMAGE TILES — LIGHTBOX MODAL ──────────────────────────
  // Listeners bound once on DOMContentLoaded. Scoped only to
  // [data-menu-tile] buttons. No other images on the site trigger this.

  document.addEventListener("DOMContentLoaded", function () {
    var modal    = document.getElementById("menuImageModal");
    var closeBtn = document.getElementById("mimClose");
    var content  = document.getElementById("mimContent");
    var title    = document.getElementById("mimTitle");

    if (!modal || !closeBtn || !content) return; // not on this page

    var scrollY = 0;

    var TILE_DATA = {
      food: {
        label: "Food Menu",
        images: [
          { src: "./foodmenu1.jpg", alt: "Referees Food Menu Page 1",  filename: "foodmenu1.jpg"  },
          { src: "./foodmenu2.jpg", alt: "Referees Food Menu Page 2",  filename: "foodmenu2.jpg"  }
        ]
      },
      drink: {
        label: "Drink Menu",
        images: [
          { src: "./drinkmenu.jpg", alt: "Referees Drink Menu", filename: "drinkmenu.jpg" }
        ]
      }
    };

    function buildContent(type) {
      var data = TILE_DATA[type];
      if (!data) return;
      if (title) title.textContent = data.label;
      content.innerHTML = data.images.map(function (img) {
        return '<div class="mim-img-block">'
          + '<img src="' + img.src + '" alt="' + img.alt + '" />'
          + '<a class="mim-download" href="' + img.src + '" download="' + img.filename + '">⬇ Download ' + img.alt + '</a>'
          + '</div>';
      }).join('');
    }

    function openModal(type) {
      buildContent(type);
      scrollY = window.scrollY;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      // iOS-safe scroll lock
      document.body.style.top = "-" + scrollY + "px";
      document.body.classList.add("scroll-locked");
      closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("scroll-locked");
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    }

    // Wire tiles — each carries data-menu-tile="food" or "drink"
    document.querySelectorAll("[data-menu-tile]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openModal(btn.getAttribute("data-menu-tile"));
      });
    });

    // Close — X button
    closeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      closeModal();
    });

    // Close — click overlay backdrop (not the box)
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });

    // Close — ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  });

  // ─── PHOTO CAROUSEL ─────────────────────────────────────────────
  const track = $("#csTrack");
  if (track) {
    const slides = track.querySelectorAll(".cs-slide");
    const total = slides.length;
    if (total > 1) {
      let current = 0;
      let paused = false;
      let animating = false;

      function goTo(next) {
        if (animating) return;
        animating = true;
        const from = current;
        current = (next + total) % total;
        const clone = slides[current].cloneNode(true);
        clone.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transition:opacity 1.2s ease;";
        track.parentElement.appendChild(clone);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            clone.style.opacity = "1";
            setTimeout(() => {
              slides[from].style.backgroundImage = slides[current].style.backgroundImage;
              clone.remove();
              animating = false;
            }, 1250);
          });
        });
      }

      setInterval(() => { if (!paused) goTo(current + 1); }, 4500);
      track.parentElement.addEventListener("mouseenter", () => { paused = true; });
      track.parentElement.addEventListener("mouseleave", () => { paused = false; });

      let tx = 0, ty = 0;
      track.parentElement.addEventListener("touchstart", e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
      track.parentElement.addEventListener("touchend", e => {
        const dx = e.changedTouches[0].clientX - tx;
        const dy = Math.abs(e.changedTouches[0].clientY - ty);
        if (Math.abs(dx) > 40 && dy < 60) goTo(dx < 0 ? current + 1 : current - 1);
      }, { passive: true });
    }
  }

  // ─── MOBILE NAV (HAMBURGER) ──────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    var toggle  = document.getElementById("navToggle");
    var mobileNav = document.getElementById("mobileNav");
    if (!toggle || !mobileNav) return;

    var scrollY = 0;

    function openNav() {
      scrollY = window.scrollY;
      toggle.setAttribute("aria-expanded", "true");
      mobileNav.classList.add("is-open");
      // iOS-safe scroll lock: fix body at current position
      document.body.style.top = "-" + scrollY + "px";
      document.body.classList.add("scroll-locked");
    }

    function closeNav() {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
      document.body.classList.remove("scroll-locked");
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    }

    function toggleNav() {
      if (mobileNav.classList.contains("is-open")) { closeNav(); } else { openNav(); }
    }

    // Toggle on hamburger click
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleNav();
    });

    // Close when a nav link is tapped
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    // Close on tap outside
    document.addEventListener("click", function (e) {
      if (mobileNav.classList.contains("is-open") &&
          !mobileNav.contains(e.target) &&
          e.target !== toggle &&
          !toggle.contains(e.target)) {
        closeNav();
      }
    });

    // Close on ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });
  });
  const navLinks = $$(".nav a");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(a => {
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("#") && (href.includes(currentPath) || (currentPath === "" && href === "index.html"))) {
      a.classList.add("active");
    }
  });

})();

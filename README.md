# Referees Sports Bar & Grill — Website

Static HTML/CSS/JS site. No build tools, no frameworks. Just drop files on any host.

---

## Quick Edits — Open `app.js` and update the `CONFIG` block at the top

```js
const CONFIG = {
  phoneDisplay: "(423) 285-5663",   // Display format
  phoneRaw: "4232855663",           // Digits only — used for tel: links
  email: "refereesportsbargrill@gmail.com",
  address: "200 Able Drive Suite 7, Dayton, TN 37321",
  mapsQueryUrl: "https://...",       // Google Maps deep link
  facebookUrl:  "https://...",       // Facebook share/page URL
  reviewUrl:    "PASTE_GOOGLE_REVIEW_LINK_HERE",  // ← SEE BELOW
};
```

### How to get your Google Review link

1. Go to [Google Maps](https://maps.google.com)
2. Search **Referees Sports Bar & Grill Dayton TN**
3. Click your listing → click **Reviews** tab → click **Write a review**
4. Copy the URL from your browser address bar
5. Paste it as the value of `reviewUrl` in `app.js`

The "Leave a Review" button will then work on every page automatically.

---

## Adding Menu Photos (menu.html photo gallery)

Photos are managed in `app.js` in the `MENU_PHOTOS` array:

```js
const MENU_PHOTOS = [
  { src: "./food-wings-1.jpg",   alt: "Wings"   },
  { src: "./food-burger-1.jpg",  alt: "Burgers" },
  // Add more entries here ↓
  { src: "./menu-photo-new.jpg", alt: "Ribeye steak" },
];
```

**Steps:**
1. Add your photo file (JPG/PNG/WEBP) to the **root** of the project (same folder as `index.html`)
2. Add a new `{ src: "./your-filename.jpg", alt: "Description" }` line to `MENU_PHOTOS`
3. Save and deploy — the photo grid and lightbox will update automatically

The lightbox supports keyboard navigation (← →) and has a Download button for each photo.

---

## File Structure

```
/
├── index.html          Home page
├── menu.html           Full menu + menu photos + policies
├── events.html         Weekly events & specials
├── gallery.html        Photo gallery
├── styles.css          All styles
├── app.js              All JS (config, menu data, lightbox, status)
├── referees-logo.png
├── hero-bg.jpg
├── food-*.jpg          Food photos
├── interior*.jpg       Interior photos
├── event-*.jpg         Event photos
├── drinks-beer-1.jpg
├── IMG_0874.jpg
├── IMG_0885.jpg
├── favicon (2).ico
├── favicon-*.png
└── apple-touch-icon.png
```

**Removed:** `catering.html` — removed pending licensing confirmation.

---

## Updating Hours

Hours live in **two places** — keep them in sync:

1. **`app.js` → `schedule` object** — controls the live "Open/Closed" status badge
2. **`index.html` → `#hours` section** — the visual hours table
3. **Footer hours snippet** — appears in all 4 HTML files (find/replace is easiest)

---

## Deploying

This is a plain static site. Works on:
- **GitHub Pages** — push to repo, enable Pages in settings
- **Netlify** — drag and drop the folder
- **Any web host** — upload all files via FTP/SFTP

No `.htaccess`, build steps, or server config needed.

---

## Updating Policies / Legal Copy

All policy text lives in the **footer** of each HTML file (search for `footer-policies`) and on the **menu page** in the Policies section. Edit those blocks directly in the HTML.

---

## Contact

Phone: (423) 285-5663  
Email: refereesportsbargrill@gmail.com  
Address: 200 Able Drive Suite 7, Dayton, TN 37321

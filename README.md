# 🍛 Spice & Soul — Restaurant Website Template

A clean, premium static website for restaurants, cafes, and small food businesses.  
Built with vanilla HTML, CSS, and JavaScript. Zero dependencies. GitHub Pages ready.

## Features

- Responsive design (mobile + desktop)
- Hero section with animated entrance
- Stats strip (years, items, rating, delivery)
- Filterable menu (Starters / Mains / Breads / Desserts) with veg/non-veg indicators
- Gallery section
- Contact section with address, phone, hours, and delivery info
- WhatsApp direct order button (floating + section CTA)
- Google Maps link

## Project Structure

```
restaurant-demo/
├── index.html        ← Main page
├── css/
│   └── style.css     ← All styles
├── js/
│   └── menu.js       ← Menu data + filter logic
└── README.md
```

## Customization Checklist

Before going live, update the following:

### In `index.html`
- [ ] Restaurant name (search: `Spice & Soul`)
- [ ] WhatsApp number (search: `919999999999` → replace with actual number)
- [ ] Address text in contact section
- [ ] Google Maps link (`href="https://maps.google.com"`)
- [ ] Footer credit name

### In `js/menu.js`
- [ ] Update `menuItems` array with actual dishes, descriptions, and prices

### In `css/style.css`
- [ ] Change color scheme via `:root` variables if needed

## Deploy on GitHub Pages

1. Create a new repo on GitHub
2. Upload all files (maintain folder structure)
3. Go to **Settings → Pages → Source → main branch / root**
4. Site will be live at `https://yourusername.github.io/repo-name`

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (no frameworks)
- Google Fonts: Cormorant Garamond + DM Sans

---

Made with ❤️ as a client demo template.

# FounderBD — Landing Page

FounderBD is a static, responsive landing page template for a creative digital
agency. It demonstrates a clean layout built with modern HTML, CSS, and
vanilla JavaScript, plus a couple of lightweight libraries for animation and
carousels.

![Project Screenshot](./assets/Page.png)

**Purpose:** Showcase a simple agency homepage with sections for Home,
About, Portfolio, Client/Feedback and Contact.

**Highlights:**

- Clean, responsive layout using CSS grid and utility styles
- Mobile navigation with open/close animation
- Smooth scroll behavior for internal anchor links
- Feedback carousel using Swiper
- Content reveal animations using ScrollReveal
- Iconography via Remixicon

Technologies

- HTML5
- CSS3 (custom styles)
- JavaScript (vanilla)
- Swiper (carousel)
- ScrollReveal (on-scroll animations)
- Remixicon (icons)

Quick Start

1. Open the project folder `founder` in your editor or file manager.
2. Open `index.html` in a browser to view the page. For example, in PowerShell:

```powershell
ii 'c:\Users\HARSH\OneDrive\Documents\Learning Js\JavaScript_Projects\founder\index.html'
```

Optional: run a local static server (useful for some browsers or testing):

```powershell
# Using Python 3
python -m http.server 5500; Start-Process 'http://localhost:5500'

# Or using node's live-server if installed
live-server .
```

Project Structure

- `index.html` — main page markup with named sections and navigation anchors
- `styles.css` — all project styles
- `main.js` — menu toggle, animations, and Swiper initialization
- `assets/` — images used across the site (header, about, feedback, portfolio)

Editing Tips

- Update images in `assets/` and keep the same filenames or update `index.html` paths.
- Tweak colors and typography in `styles.css` (CSS variables are at the top).
- Add or modify sections by giving the target element an `id` that matches the
  corresponding nav link (for example, `id="about"` for `href="#about"`).

Accessibility & UX Notes

- Interactive nav links now show a pointer cursor and the mobile menu is
  brought to the front when opened so links are clickable.
- Consider adding `:focus` styles for keyboard users and `aria` attributes on the
  menu button for improved accessibility.

Contributing
Feel free to open issues or create branches with improvements (styling,
performance, accessibility). If you want, I can help add features like a
contact form, CMS integration, or accessibility improvements.

License
You can choose a license for this project — MIT is a common permissive option.

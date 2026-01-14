# Ember & Bun 🍔🔥

A world-class, ultra-premium restaurant website built as a Single Page Application (SPA). This project features a sophisticated dark-themed UI, smooth transitions, and a feature-rich online ordering interface.

# Preview
![Preview](ember.png)
## 🚀 Features

### 1. **Immersive User Interface**
- **Dark Mode Design:** A curated palette of charcoal, deep blacks, and gold accents (`#e0b629`) to convey luxury.
- **Responsive Layouts:** Fully adaptive designs for Mobile, Tablet, and Desktop using Tailwind CSS.
- **Smooth Animations:** Custom fade-in and scroll interactions.

### 2. **Navigation & Routing**
- **Client-Side Routing:** Seamless page transitions using `react-router-dom` (HashRouter).
- **Sticky Navigation:** Persistent access to menu links with backdrop blur effects.
- **Mobile Menu:** Accessible overlay navigation for smaller screens.

### 3. **Pages**
- **Home:** Hero section with video/image backgrounds, horizontal scrollable "Signature Collection" carousel, and testimonials.
- **Menu (Showcase):** A visual-first categorization of top items (Burgers, Sides, Elixirs).
- **Full Menu (Order Online):** A functional, application-style menu page inspired by top food delivery platforms.
    - **Search:** Real-time text search.
    - **Advanced Filtering:** Filter by Category, Price Range, and Dietary preferences (Veg, Non-Veg, Vegan, Egg).
    - **Sorting:** Sort by Price (High/Low), Rating, or Relevance.
- **Our Story:** A narrative-driven page with parallax-style visual layouts.
- **Contact:** Interactive contact info and stylized map visualization.

## 🛠 Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS (via CDN with custom config)
- **Routing:** React Router DOM
- **Icons:** Google Material Symbols
- **Typography:** Be Vietnam Pro (Display), Noto Sans (Body)

## 📂 Project Structure

```
├── index.html              # Entry point, Tailwind config, Font imports
├── index.tsx               # React DOM root render
├── App.tsx                 # Main Routing configuration
├── metadata.json           # Application metadata
├── components/
│   └── MobileMenu.tsx      # Reusable mobile navigation overlay
└── pages/
    ├── Home.tsx            # Landing page
    ├── Menu.tsx            # Visual menu showcase
    ├── FullMenu.tsx        # Search/Filterable menu application
    ├── About.tsx           # Story and philosophy
    └── Contact.tsx         # Location and contact info
```

## 🎨 Design System

**Primary Colors:**
- **Gold:** `#e0b629` (Primary), `#d4aa22` (Hover)
- **Backgrounds:** `#171611` (Home Bg), `#232018` (Surface)
- **Text:** `#ffffff` (Primary), `#b7b29e` (Secondary)

**Typography:**
- **Headers:** *Be Vietnam Pro* (Modern, Geometric)
- **Body:** *Noto Sans* (Clean, Readable)

## 🏃‍♂️ How to Run

Since this project uses ES Modules directly in the browser with Tailwind via CDN:

1.  Serve the root directory using a static file server.
    *   Example using Python: `python3 -m http.server 8000`
    *   Example using Node: `npx serve .`
2.  Open your browser to `http://localhost:8000`.

*Note: The project is configured to use `HashRouter`, making it compatible with simple static hosting environments without complex server-side routing configuration.*

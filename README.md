# Product Explorer React Application

A responsive **Product Explorer** application built with React.js, Vite, and Tailwind CSS. The application fetches real-time product data from the public DummyJSON API and implements category filtering, debounced title search, clean lifecycle hooks, and React performance optimizations (`useMemo` and `useCallback`).

---

## 🚀 Features & Requirements Checklist

- [x] **1. Project Setup**: Built with React.js + Vite, styled with Tailwind CSS. Structured logically into `components`, `pages`, `hooks`, and `utils`.
- [x] **2. Dynamic Navbar**: Persistent responsive navbar containing Logo, Home link, Products link, and an integrated Search Box.
- [x] **3. Display Products**: Fetches data from DummyJSON API and displays Product Image, Title, Price, and Category for each item.
- [x] **4. Category Filter**: Dynamic category selector buttons allowing filtering by specific category or displaying all products when "All" is selected.
- [x] **5. Debounced Search**: Implemented a custom `useDebounce` hook that delays search execution by 350ms so filtering does not execute on every single keystroke.
- [x] **6. React Lifecycle**: Used `useEffect()` to fetch products and category data on component mount, with `AbortController` request cancellation for proper cleanup.
- [x] **7. Performance Optimization**:
  - **`useMemo()`**: Used in `ProductsPage.jsx` to memoize the computed filtered products array. Filtering logic is re-calculated only when `products`, `selectedCategory`, or `debouncedSearchQuery` change, avoiding unnecessary re-computation during unrelated re-renders.
  - **`useCallback()`**: Used to memoize event handlers (`handleSelectCategory`, `handleResetFilters`, `loadData`) passed to child components (`Navbar`, `CategoryFilter`, `ProductGrid`).
- [x] **8. Loading & Error Handling**: Displays a loading spinner with skeleton cards during API fetches, and renders a clear error card with a **"Try Again"** button if network or API requests fail.

---

## 📁 Directory Structure

```
product-explorer/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Top navigation bar with logo, links, and search
│   │   ├── CategoryFilter.jsx   # Category filter pills with "All" option
│   │   ├── ProductCard.jsx      # Card displaying image, title, price, category
│   │   ├── ProductGrid.jsx      # Grid rendering product cards or empty search state
│   │   ├── LoadingState.jsx     # Loading spinner & skeleton cards UI
│   │   ├── ErrorState.jsx       # Error banner with retry button
│   │   └── PerformanceNote.jsx  # Performance optimization explanation badge
│   ├── pages/
│   │   ├── Home.jsx             # Hero landing page
│   │   └── ProductsPage.jsx     # Discovery page with search, filters, grid
│   ├── hooks/
│   │   └── useDebounce.js       # Custom hook for debouncing search input
│   ├── utils/
│   │   └── api.js               # API helper for DummyJSON products & categories
│   ├── App.jsx                  # Main wrapper & router state
│   ├── main.jsx                 # Vite React entry point
│   └── index.css                # Tailwind CSS imports & global styles
├── package.json
└── vite.config.js
```

---

## 💻 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## ⚡ Performance Optimization Explanation

> **`useMemo()` Rationale**: In `ProductsPage.jsx`, product filtering involves iterating over array items matching category strings and title sub-strings. Wrapping this calculation in `useMemo()` ensures that the array filtering operation runs **only** when `products`, `selectedCategory`, or `debouncedSearchQuery` change. This prevents expensive array filtering whenever unrelated parent state changes occur.
>
> **`useCallback()` Rationale**: Used to freeze function references for event handlers passed down to child components (`CategoryFilter`, `ProductGrid`), preventing child components from re-rendering due to new function instances created on each render.

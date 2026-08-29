import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ProductsPage } from "./pages/ProductsPage";
import { useDebounce } from "./hooks/useDebounce";

import Footer from "./components/Footer";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 350);

  const isDebouncing = searchQuery !== debouncedSearchQuery;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/*  Dynamic Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDebouncing={isDebouncing}
      />

      {/* Main Content View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activePage === "home" ? (
          <Home onExploreClick={() => setActivePage("products")} />
        ) : (
          <ProductsPage
            debouncedSearchQuery={debouncedSearchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

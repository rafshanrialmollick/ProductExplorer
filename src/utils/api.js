const BASE_URL = "https://dummyjson.com";

export async function fetchProducts(signal) {
  const response = await fetch(`${BASE_URL}/products?limit=100`, { signal });
  if (!response.ok) {
    throw new Error(`Failed to fetch products (Status: ${response.status})`);
  }
  const data = await response.json();
  return data.products;
}

export async function fetchCategories(signal) {
  const response = await fetch(`${BASE_URL}/products/categories`, { signal });
  if (!response.ok) {
    throw new Error(`Failed to fetch categories (Status: ${response.status})`);
  }
  const data = await response.json();

  return data.map((cat) =>
    typeof cat === "string" ? cat : cat.name || cat.slug,
  );
}

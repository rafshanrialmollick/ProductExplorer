const BASE_URL = 'https://dummyjson.com';

/**
 * Fetches products list from DummyJSON API.
 * Supports passing an AbortSignal for request cancellation on cleanup.
 * @param {AbortSignal} signal
 * @returns {Promise<Array>}
 */
export async function fetchProducts(signal) {
  const response = await fetch(`${BASE_URL}/products?limit=100`, { signal });
  if (!response.ok) {
    throw new Error(`Failed to fetch products (Status: ${response.status})`);
  }
  const data = await response.json();
  return data.products;
}

/**
 * Fetches category list from DummyJSON API.
 * @param {AbortSignal} signal
 * @returns {Promise<Array>}
 */
export async function fetchCategories(signal) {
  const response = await fetch(`${BASE_URL}/products/categories`, { signal });
  if (!response.ok) {
    throw new Error(`Failed to fetch categories (Status: ${response.status})`);
  }
  const data = await response.json();
  // DummyJSON returns array of strings or objects depending on version; normalize to simple strings or objects
  return data.map(cat => (typeof cat === 'string' ? cat : cat.name || cat.slug));
}

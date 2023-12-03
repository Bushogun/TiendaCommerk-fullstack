export interface StoreProduct {
    categories: [];
    products: [];
    selectCategory: string;
    searchQuery: string;
    loading: Boolean;
    error: string | null;
  }
  export const initialUserStateStore: StoreProduct = {
    categories: [],
    products: [],
    selectCategory: "All",
    searchQuery: "",
    loading: false,
    error: null,
  };
  
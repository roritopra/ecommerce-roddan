import React from "react";

export const applyFilters = (products, filters, priceRange) => {
    let filtered = products;
  
    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
  
    if (filters.laptops) {
      filtered = filtered.filter((product) => product.category.includes("Laptops"));
    }
    if (filters.speakers) {
      filtered = filtered.filter((product) => product.category.includes("Speakers"));
    }
    if (filters.consoles) {
      filtered = filtered.filter((product) => product.category.includes("Consoles"));
    }
    if (filters.smartwatches) {
      filtered = filtered.filter((product) => product.category.includes("Smartwatches"));
    }
    if (filters.tablets) {
      filtered = filtered.filter((product) => product.category.includes("Tablets"));
    }
  
    return filtered;
  };
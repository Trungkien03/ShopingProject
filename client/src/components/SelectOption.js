import React, { useContext, useEffect } from "react";
import { CategoryContext } from "../contexts/CategoryContext";
export const SelectOption = ({ OnCategoryChange }) => {
  const {category, setCategory} = useContext(CategoryContext);
  useEffect(() => {
    OnCategoryChange(category);
    setCategory("");
  },[])

  const handleCategoryChange = (event) => {
    setCategory("");
    const selectedCategory = event.target.value;
    OnCategoryChange(selectedCategory);
  };

  return (
    <div>
      <select
        className="shadow-lg hover:shadow-2xl py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-900 focus:ring-blue-900 dark:bg-gray-50 dark:text-gray-500"
        onChange={handleCategoryChange}
      >
        <option selected>--Select Category--</option>
        <option value="all">All Category</option>
        <option value="men's clothing">Men's Clothes</option>
        <option value="women's clothing">Women's Clothes</option>
        <option value="jewelry">Jewelery</option>
      </select>
    </div>
  );
};

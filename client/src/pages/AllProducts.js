import React, { useContext, useState } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import Pagination from "../components/Pagination";
import { SearchBar } from "../components/SearchBar";
import { SelectOption } from "../components/SelectOption";

export const AllProducts = () => {
  const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Điều chỉnh số lượng sản phẩm trên mỗi trang tùy theo nhu cầu
  const [searchTerm, setSearchTerm] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
  }

  // Lọc danh sách sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = products.filter((product) => {
    const titleIncludeSearchItem = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    if(selectCategory){
      if(selectCategory === "all"){
        return titleIncludeSearchItem && product;
      }
      return (
        titleIncludeSearchItem && product.category === selectCategory
      );
    }
    return titleIncludeSearchItem;
  });


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="lg:mt-20 mt-28">
      <div className="font-bold lg:text-5xl text-4xl bg-blue-100 h-[150px] flex items-center justify-center">
        All Our Products
      </div>
      <div className="flex justify-center items-center lg:m-10 m-2 lg:gap-0 gap-2">
        <div className="flex-grow">
          <SearchBar onSearch={handleSearch} />{" "}
          {/* Truyền hàm handleSearch vào props onSearch */}
        </div>
        <div>
          <SelectOption OnCategoryChange={handleCategoryChange}/>
        </div>
      </div>
      <section>
        <h2 class="text-2xl m-5 max-w-sm font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {displayedProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <Pagination
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </div>
  );
};

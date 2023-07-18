import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../contexts/CategoryContext";
export const ProductCategory = () => {
  const { category, setCategory } = useContext(CategoryContext);
  const handleChangeCate = (e) => {
    setCategory(e);
    console.log(category);
  };
  

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="lg:bg-gray-600 bg-gray-700  font-semibold w-full h-[150px] flex justify-center items-center ">
              <h1 className="text-gray-300 lg:text-5xl lg:font-bold text-2xl">
                Shop By Category
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://ae01.alicdn.com/kf/Seea798f7831a45beafff46406bec98beN/Aotvetee-Long-Sleeve-Women-Clothes-2023-New-Fashion-Spring-Casual-Vintage-Slim-T-Shirt-Women-Chic.jpg"
                  alt="girl-image"
                />
                <Link onClick={() => handleChangeCate("women's clothing")} to={"/allProducts"} className=" text-center dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Women
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              
              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://www.travelandleisure.com/thmb/wdwbfQmZQUJkJskq0T0VDuXdUVI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tl-trusted-10-most-comfortable-walking-shoes-tout-d26efce7a58e41898b7bc350cc7a45ab.jpg"
                    alt="shoe-image"
                  />
                  <Link onClick={() => handleChangeCate("men's shoes")} to={"/allProducts"} className=" text-center dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Shoes
                  </Link>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://www.rox.co.uk/media/amasty/webp/pages/watches/new-season-allwatches-april23_jpg.webp"
                    alt="watch-image"
                  />
                  <Link onClick={() => handleChangeCate("jewelry")} to={"/allProducts"} className=" text-center dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    jewelry
                  </Link>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </div>
              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://www.next.pl/nxtcms/resource/blob/5487882/704106d2c7ab81cf9186ac925f8c335c/multipacks-data.jpg"
                  alt="girl-image"
                />
                <Link onClick={() => handleChangeCate("men's clothing")} to={"/allProducts"} className=" text-center dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Men
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                  alt="girl-image"
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src="https://www.next.pl/nxtcms/resource/blob/5487882/704106d2c7ab81cf9186ac925f8c335c/multipacks-data.jpg"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <Link onClick={() => handleChangeCate("men's clothing")} to={"/allProducts"} className=" text-center dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Men
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>

            </div>
            
            <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <img
                className="object-center object-cover h-full w-full hidden md:block"
                src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                alt="girl-image"
              />
              <img
                className="object-center object-cover h-full w-full sm:hidden"
                src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Accessories
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import "./ShopPage.css";
import { NavLink } from "react-router-dom";
import {
  Slider,
  Checkbox,
  Accordion,
  AccordionItem,
  Button,
  Pagination,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

import { ShopItemGrid } from "../../components/ShopItemGrid/ShopItemGrid";
import { ShopItemList } from "../../components/ShopItemList/ShopItemList";
import { useScrollReveal } from "../../../libs/ScrollReveal";
import { Footer } from "../../components/Footer/Footer";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../firebase/firebase";
import { applyFilters } from "../../../hooks/useFilters";

export function ShopPage() {
  useScrollReveal();
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [color1, setColor1] = useState("#323232");
  const [color2, setColor2] = useState("#0081FE");
  const [border1, setBorder1] = useState("");
  const [border2, setBorder2] = useState(
    "border border-[#0081FE] p-3 rounded-lg"
  );
  const [isListVisible, setIsListVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(true);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1750]);
  const [filters, setFilters] = useState({
    smartwatches: false,
    tablets: false,
    speakers: false,
    laptops: false,
    smartphones: false,
    consoles: false,
  });

  const itemsPerPage = 9;

  useEffect(() => {
    (async () => {
      const productsCollection = collection(database, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = [];
      productsSnapshot.forEach((product) => {
        productsList.push({ key: product.id, ...product.data() });
      });
      setProducts(productsList);
      setfilteredProducts(productsList);
    })();
  }, []);

  useEffect(() => {
    let filtered = applyFilters(products, filters, priceRange);
    setfilteredProducts(filtered);

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setfilteredProducts(filtered);
  }, [filters, searchTerm, priceRange]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <main className="content-shop px-5 max-w-[1440px] mx-auto mb-28 text-sm mt-5">
        <section className="filter-section">
          <NavLink to={"/"}>
            <Button
              variant="bordered"
              className="font-satoshi font-normal rounded-full border-[#D9D9D9] mb-6"
            >
              Back to home
            </Button>
          </NavLink>

          <aside
            onClick={() => applyFilters(products, filters, priceRange)}
            className="border border-[#D9D9D9] rounded-2xl px-5 py-5"
          >
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-5 text-sm text-gray-900 border border-[#E0E0E0] rounded-full placeholder:font-satoshi placeholder:text-[#757575] bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  required
                />
                <button className="text-white absolute end-2.5 bottom-2.5 bg-[#0081FE] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border flex flex-col gap-2 border-[#D9D9D9] rounded-2xl px-5 py-5 mb-6">
              <h2 className="font-satoshi text-[#757575] text-[17px] font-semibold mb-3">
                Filter devices
              </h2>
              <Checkbox
                className="mb-1 font-satoshi"
                isSelected={filters.laptops}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    laptops: !prevFilters.laptops,
                  }))
                }
                value="laptops"
              >
                Laptops
              </Checkbox>
              <Checkbox
                className="mb-1 font-satoshi"
                isSelected={filters.speakers}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    speakers: !prevFilters.speakers,
                  }))
                }
                value="speakers"
              >
                Speakers
              </Checkbox>
              <Checkbox
                className="mb-1 font-satoshi"
                isSelected={filters.consoles}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    consoles: !prevFilters.consoles,
                  }))
                }
                value="consoles"
              >
                Consoles
              </Checkbox>
              <Checkbox
                className="mb-1 font-satoshi"
                isSelected={filters.smartwatches}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    smartwatches: !prevFilters.smartwatches,
                  }))
                }
                value="smartwatches"
              >
                Smartwatches
              </Checkbox>
              <Checkbox
                className="mb-1 font-satoshi"
                isSelected={filters.tablets}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    tablets: !prevFilters.tablets,
                  }))
                }
                value="tablets"
              >
                Tablets
              </Checkbox>
              <Checkbox
                className="font-satoshi"
                isSelected={filters.smartphones}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    smartphones: !prevFilters.smartphones,
                  }))
                }
                value="smartphones"
              >
                Smartphones
              </Checkbox>
            </div>

            <Accordion variant="bordered">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Choose price"
                className="font-satoshi text-[5px]"
              >
                <Slider
                  label="Price Range"
                  step={50}
                  minValue={0}
                  maxValue={3000}
                  value={priceRange}
                  onChange={(value) => setPriceRange(value)}
                  defaultValue={[100, 500]}
                  formatOptions={{ style: "currency", currency: "USD" }}
                  className="max-w-md font-satoshi mb-3"
                />
              </AccordionItem>
            </Accordion>
          </aside>
        </section>

        <section className="items">
          <div className="flex justify-between">
            <h1 className="font-satoshi text-[#167DFF] text-[35px] font-light">
              The best of{" "}
              <span className="linear-title border rounded-xl border-[#D9D9D9] font-semibold px-1">
                techno
              </span>
            </h1>
            <div>
              <div className="flex items-center flex-row-reverse gap-5">
                <button
                  className={`${border1} p-3 rounded-lg transition-all`}
                  onClick={() => {
                    setColor1("#0081FE");
                    setColor2("#323232");
                    setBorder1(" border-[#0081FE] border");
                    setBorder2("");
                    setIsListVisible(true);
                    setIsGridVisible(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="19"
                    viewBox="0 0 26 19"
                    fill="none"
                    className="transition-all"
                  >
                    <g clipPath="url(#clip0_191_136)">
                      <path
                        d="M-8.375 3.875H17.875V0.125H-8.375V3.875ZM-8.375 11.375H17.875V7.625H-8.375V11.375ZM-8.375 18.875H17.875V15.125H-8.375V18.875ZM21.625 18.875H25.375V15.125H21.625V18.875ZM21.625 0.125V3.875H25.375V0.125H21.625ZM21.625 11.375H25.375V7.625H21.625V11.375Z"
                        fill={color1}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_191_136">
                        <rect width="26" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  className={`${border2} p-3 rounded-lg transition-all`}
                  onClick={() => {
                    setColor2("#0081FE");
                    setColor1("#323232");
                    setBorder1("");
                    setBorder2("border-[#0081FE] border");
                    setIsListVisible(false);
                    setIsGridVisible(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="19"
                    viewBox="0 0 25 19"
                    fill="none"                   
                  >
                    <path
                      d="M0 8.76923H7.35294V0H0V8.76923ZM0 19H7.35294V10.2308H0V19ZM8.82353 19H16.1765V10.2308H8.82353V19ZM17.6471 19H25V10.2308H17.6471V19ZM8.82353 8.76923H16.1765V0H8.82353V8.76923ZM17.6471 0V8.76923H25V0H17.6471Z"
                      fill={color2}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {filteredProducts.length === 0 && (
            <p className="grid h-screen place-items-center font-satoshi font-bold text-xl">
              No products found with the applied filters.
            </p>
          )}

          <section
            className={
              isListVisible ? "mt-[45px] mx-auto max-w-[1440px]" : "hidden"
            }
          >
            {filteredProducts
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((product) => (
                <ShopItemList
                  key={product.key}
                  name={product.title}
                  price={product.price}
                  img={product.images[0]}
                  category={product.category}
                  link={`/shop/${product.key}`}
                />
              ))}
          </section>

          <section
            className={
              isGridVisible
                ? "grid sm:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto gap-[30px] mt-6"
                : "hidden"
            }
          >
            {filteredProducts
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((product) => (
                <ShopItemGrid
                  key={product.key}
                  name={product.title}
                  price={product.price}
                  image={product.images[0]}
                  link={`/shop/${product.key}`}
                />
              ))}
          </section>
          <div className="flex justify-center mt-20">
            <Pagination
              total={Math.ceil(filteredProducts.length / itemsPerPage)}
              initialPage={1}
              showShadow
              color="primary"
              page={currentPage}
              onChange={(newPage) => setCurrentPage(newPage)}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

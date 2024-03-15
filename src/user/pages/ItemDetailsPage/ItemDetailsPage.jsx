import "./ItemDetailsPage.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Spinner } from "@nextui-org/react";
import { Select, SelectItem, Image } from "@nextui-org/react";
import { CarouselProducts } from "../../components/CarouselProduct/CarouselProducts";
import { Footer } from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../../firebase/firebase";

export function ItemDetailsPage() {
  const { productId } = useParams();
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null);
  
  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(database, "products", productId);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        setProduct(productSnapshot.data());
      } else {
        console.log("No such product!");
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return (
      <div className="grid h-screen place-items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <>
      <main className="px-5 max-w-[1440px] mx-auto mt-5 mb-24">
        <section className="flex gap-[40px]">
          <div className="w-1/2 h-full">
            <div className="flex justify-between">
              <NavLink to={"/"}>
                <Button
                  variant="bordered"
                  className="font-satoshi font-normal rounded-full border-[#D9D9D9] mb-6"
                >
                  Back to home
                </Button>
              </NavLink>
              <div>
                <img src="/icons/category-sony.png" alt="Category icon" />
              </div>
            </div>

            <h2 className="font-satoshi text-[#19191B] font-semibold text-[45px] mt-3 mb-5 w-[80%]">
              {product.title}
            </h2>
            <h6 className="font-satoshi text-[#19191B] font-semibold text-[18px] mb-5">
              Category:{" "}
              <span className="font-satoshi text-[#0081FE] text-[18px]">
                {product.category}
              </span>
            </h6>
            <p className="font-satoshi text-[#3F3F40] text-[16px] w-[80%] mb-5">
              {product.description}
            </p>

            <div className="mb-10">
              <p className="font-satoshi font-semibold text-[18px] text-[#19191B] mt-5 mb-2">
                Characteristics
              </p>
                  <p className="font-satoshi text-[#3F3F40] font-normal">
                    <span className="text-[#19191B] font-semibold">Size:</span> {product.length} x {product.width} x {product.breadth} cm
                  </p>
            </div>

            <div className="flex gap-4 items-center">
              <p className="font-satoshi text-[#19191B] text-[18px]">
                Quantity
              </p>
              <button
                onClick={decreaseCount}
                className="rounded-full bg-white border border-[#D9D9D9] px-3 font-satoshi text-[25px] text-[#19191B] focus:border focus:border-[#0081FE] focus:bg-[#0081FE] focus:text-white"
              >
                -
              </button>
              <p>{count}</p>
              <button
                onClick={increaseCount}
                className="rounded-full bg-white border border-[#D9D9D9] px-3 font-satoshi text-[25px] text-[#19191B] focus:border focus:border-[#0081FE] focus:bg-[#0081FE] focus:text-white"
              >
                +
              </button>
            </div>

            <div className="flex items-center mt-10 gap-6">
              <p className="font-satoshi text-[#19191B] text-[25px] font-medium">
                ${product.price}
              </p>
              <Button
                endContent={
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="35" height="35" rx="17.5" fill="white" />
                    <path
                      d="M13.4999 19.642L11.3413 24.5H15.75H21H24.5V22.75H14.0341L15.0062 20.5625H23.8179L26.4819 12.5716L24.8216 12.0181L22.5571 18.8125H15.0679L12.0054 9.625H8.75V11.375H10.7446L13.4999 19.642Z"
                      fill="#3A3A3A"
                    />
                    <path
                      d="M15.75 26.25C16.2332 26.25 16.625 25.8582 16.625 25.375C16.625 24.8918 16.2332 24.5 15.75 24.5C15.2668 24.5 14.875 24.8918 14.875 25.375C14.875 25.8582 15.2668 26.25 15.75 26.25Z"
                      fill="#3A3A3A"
                    />
                    <path
                      d="M21 26.25C21.4832 26.25 21.875 25.8582 21.875 25.375C21.875 24.8918 21.4832 24.5 21 24.5C20.5168 24.5 20.125 24.8918 20.125 25.375C20.125 25.8582 20.5168 26.25 21 26.25Z"
                      fill="#3A3A3A"
                    />
                    <path
                      d="M19.6875 15.75V13.125H22.3125V11.375H19.6875V8.75H17.9375V11.375H15.3125V13.125H17.9375V15.75H19.6875Z"
                      fill="#3A3A3A"
                    />
                  </svg>
                }
                className="flex items-center gap-5 rounded-full font-satoshi font-medium py-7 bg-[#0081FE] text-white"
              >
                Add to Cart
              </Button>
            </div>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-10">
              <Select
                label="Select an color"
                className="max-w-xs font-satoshi font-light text-[18px] text-[#19191B] border border-[#D9D9D9] rounded-xl"
              >
                {product.colors.map((color, index) => (
                  <SelectItem key={index} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>

          <div className="w-1/2">
            <div className="grid gap-4">
              <div className={active === product.images[product.images.length - 1] ? "flex justify-center w-full rounded-2xl" : "second-card flex justify-center rounded-2xl"}>
                <Image
                  className="h-auto w-full max-w-full rounded-[20px] object-cover object-center md:h-[480px]"
                  src={active}
                  alt=""
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                  <div key={index} className={`${index === product.images.length - 1 ? 'w-full' : 'card'} flex justify-center rounded-2xl`}>
                    <img
                      onClick={() => setActive(image)}
                      src={image}
                      className="max-h-32 max-w-full cursor-pointer rounded-xl object-cover object-center"
                      alt="gallery-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-between mt-20 px-36">
          <div className="flex flex-col justify-center">
            <p className="font-satoshi font-light text-[30px] text-center text-[#696969]">
              Stop by new <br />
              arrivals
            </p>
            <hr className="border-[#696969]" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-satoshi font-medium text-[30px] text-center text-[#19191B]">
              Shop by top <br />
              collections
            </p>
            <hr className="border-[#696969]" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-satoshi font-light text-[30px] text-center text-[#696969]">
              Shop by pro starp <br />
              extra
            </p>
            <hr className="border-[#696969]" />
          </div>
        </section>

        <div className="flex justify-between mt-28 mb-8">
          <p className="bg-[#EBEBEB] font-satoshi text-[#636367] rounded-full px-4 py-2 text-[14px]">
            104 products
          </p>
          <div className="flex items-center gap-3 bg-[#0081FE] rounded-full px-4 py-2">
            <p className="font-satoshi text-white text-[14px]">Show less</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M15 17L16.5 15L3.5 2H14V0H0V14L2 14V4L15 17Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <hr className="border-[#D1D1D1]" />

        <div className="mt-12">
          <CarouselProducts />
        </div>
      </main>
      <Footer />
    </>
  );
}

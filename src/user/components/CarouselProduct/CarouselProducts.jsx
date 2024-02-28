import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Product } from "../Product/Product";
import { productData, responsive } from "../../../data/data" 

export function CarouselProducts() {

  const product = productData.map((item, index) => (
    <Product
      key={index}
      name={item.name}
      url={item.imageurl}
      price={item.price}
    />
  ));

  return (
    <div>
      <Carousel responsive={responsive} partialVisible={true}>
        {product}
      </Carousel>
    </div>
  )
}


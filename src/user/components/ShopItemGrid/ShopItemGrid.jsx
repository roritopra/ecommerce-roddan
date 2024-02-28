import './ShopItemGrid.css'
import { Link } from 'react-router-dom'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

export function ShopItemGrid({ image, name, price, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className={`item-container mt-5 mb-16 hover:filter hover:drop-shadow-2xl transition-all ${
          hovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
          <figure className="card flex justify-center h-full items-center rounded-[35px] max-w-[350px] relative">
            <img className="" src={image} alt="Product" />
          </figure>
          <div className="pt-5">
            <p className="text-[#19191B] font-poppins text-[16px] mb-3">{name}</p>
            <div className="relative flex justify-between items-center">
              <span className="text-[#19191B] font-poppins text-[18px] font-semibold">
                ${price}
              </span>
              <div
                className={`button-container absolute bottom-0 right-0 text-center ${
                  hovered ? "visible" : ""
                }`}
              >
                <Link to={link}>
                  <Button
                    size="sm"
                    className="bg-[#0081FE] text-[11px] font-poppins text-white rounded-full px-2 transition-all"
                  >
                    View more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}


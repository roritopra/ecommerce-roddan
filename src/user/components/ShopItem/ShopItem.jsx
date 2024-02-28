import './ShopItem.css'

export function ShopItem({ image, name, price }) {
  return (
    <>
     <div className="mt-5 mb-28 cursor-pointer">
        <figure className="card flex justify-center h-full items-center rounded-[35px] max-w-[350px]">
          <img className="w-[100px]" src={image} alt="Items home" />
        </figure>
        <div className="mt-5">
          <p className="text-[#19191B] font-poppins text-[16px] mb-3">{name}</p>
          <span className="text-[#19191B] font-poppins text-[18px] font-semibold">
            {price}
          </span>
        </div>
      </div>
    </>
  )
}


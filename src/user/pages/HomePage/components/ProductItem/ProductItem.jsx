import './ProductItem.css';

export function ProductItem({ image, name, price }) {
  return (
    <>
      <div className="mt-5 mb-28 cursor-pointer">
        <figure className="card flex justify-center h-full items-center rounded-[35px] max-w-[350px]">
          <img className="" src={image} alt="Items home" />
        </figure>
        <div className="mt-5">
          <p className="text-[#19191B] font-poppins text-[18px]">{name}</p>
          <span className="text-[#19191B] font-poppins text-[20px] font-semibold">
            {price}
          </span>
        </div>
      </div>
    </>
  );
}

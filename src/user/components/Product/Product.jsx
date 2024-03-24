import "./Product.css";

export function Product(props) {
  return (
    <>
      <article className="my-auto mx-3">
        <figure className="card-product flex justify-center items-center rounded-[25px] w-full max-h-[330px] h-[330px] py-20 max-w-[500px] relative">
          <img src={props.url} alt="Product" />
        </figure>
        <div className="flex justify-between mt-5 mr-8">
          <h1 className="text-[#19191B] font-satoshi text-[16px]">
            {props.name}
          </h1>
          <p className="text-[#19191B] font-satoshi text-[18px] font-semibold">
            {props.price}
          </p>
        </div>
      </article>
    </>
  );
}

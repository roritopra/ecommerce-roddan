import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <section className="container-grid max-w-[1440px] px-5">
        <div className="div1 rounded-[35px]">
          <div className="flex items-center gap-5">
            <img src="/icons/logo-icon.svg" alt="Logo icon" />
            <p className="text-white text-sm font-poppins">Time for offers-24</p>
          </div>
          <h1 className="text-white text-9xl font-poppins max-w-[1440px]">JANUARY OFFERS, WE START THE YEAR</h1>
        </div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div5"></div>
        <div className="div6"></div>
        <div className="div7"></div>
      </section>
    </>
  );
}

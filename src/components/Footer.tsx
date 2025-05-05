const Footer = () => {
  return (
    <footer className="mt-14">
      <div className="bg-darkbeige w-full h-[195px] flex flex-col justify-center items-center">
        <h4 className="font-(family-name:--font-theseasons) text-[35px] font-bold">
          Become a member
        </h4>
        <p className="font-(family-name:--font-afacad) text-xl w-[361px] text-center">
          Be first in line for new drops and special offers and get 10% on your
          first order.
        </p>
        <div className="flex flex-row justify-center pt-4">
          <form>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-[227px] border-0 border-b-2 border-darkbrown bg-transparent focus:outline-none focus:ring-0 placeholder:text-black placeholder:text-[16px] placeholder:font-(family-name:--font-theseasons) pl-2"
            />
            <button
              type="submit"
              className=" w-[130px] h-[30px] shrink-0 bg-[#483418] text-white text-center font-(family-name:--font-afacad) text-[20px] font-bold">
              SING ME UP!
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-row justify-around my-16">
        <div className="flex flex-col items-center">
          <h5 className="font-(family-name:--font-theseasons) text-3xl font-bold">
            everlyst.shopping
          </h5>
          <p className="font-(family-name:--font-afacad) text-[18px]">
            For everything you lust for.
          </p>
          <div className="font-(family-name:--font-afacad) text-sm text-center leading-none pt-6">
            <p>
              <strong>© 2025 everlyst.shopping</strong>
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h5 className="font-(family-name:--font-theseasons) text-3xl font-bold">
            Flagship Store
          </h5>
          <div className="font-(family-name:--font-afacad) text-[18px] text-center">
            <p>Bygdøy allé 7 0257</p>
            <p>Oslo, Norway</p>
          </div>

          <div className="font-(family-name:--font-afacad) text-[18px] text-center pt-6">
            <p>hello@everlyst.shopping</p>
            <p> +47 23 89 45 67</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h5 className="font-(family-name:--font-theseasons) text-3xl font-bold">
            Always safe payments
          </h5>
          <div className="flex flex-row gap-7">
            <img
              src="/images/visa.png"
              alt="visa logo"
              className="h-[25px] w-auto"
            />
            <img
              src="/images/mastercard.png"
              alt="mastercard logo"
              className="h-[25px] w-auto"
            />
            <img
              src="/images/paypal.png"
              alt="paypal logo"
              className="h-[25px] w-auto"
            />
          </div>
          <div className="flex flex-row gap-7">
            <img src="/images/klarna.png" alt="klarna logo" className="h-[25px] w-auto" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h5 className="font-(family-name:--font-theseasons) text-3xl font-bold">
            Follow us:
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

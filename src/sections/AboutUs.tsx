export const AboutUs = () => {
  return (
    <section className="m-auto flex w-full max-w-[1350px] flex-col items-center justify-center px-10">
      <h2 className="text-ceneter my-10 xl:self-start">About Us</h2>
      <div className="flex flex-col-reverse items-center rounded-[2px] bg-(--color-peach-cream) lg:flex-row lg:gap-[15px]">
        <p className="p-[15px] text-center font-medium lg:w-2/5 lg:p-[20px] lg:text-left lg:text-[1.3rem]">
          At FurniNest, we’re dedicated to helping you create the home of your
          dreams with high-quality, stylish furniture. Our collection is
          designed to bring comfort, style, and functionality to every room. We
          believe in offering exceptional products that last, backed by
          excellent customer service and a seamless online shopping experience.
          Whether you're refreshing a room or furnishing your entire home, we’re
          here to make it easy and enjoyable.
        </p>
        <img
          className="w-full lg:w-3/5"
          src="public\images\aboutUs.png"
          alt="about us"
        />
      </div>
    </section>
  );
};

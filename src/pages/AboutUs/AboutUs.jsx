import aboutBg from '../../assets/images/3566801.jpg';
const AboutUs = () => {
  return (
    <div className="font-sora bg-pink-50">
      <div className="bg-[#9538E2] pt-14 pb-5  flex flex-col justify-center items-center text-white space-y-3">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p className="text-xs text-gray-400 w-2/4 text-center">
          Welcome to our platform! We are passionate about bringing you the
          latest and greatest in gadgets, carefully curated to enhance your
          experience and make life a bit more exciting. Our team works hard to
          ensure quality, innovation, and customer satisfaction are at the heart
          of everything we do. Explore our collections and find what suits you
          best!
        </p>
      </div>

      <div className="flex justify-center  mt-10 container mx-auto gap-6">
        <img
          className="rounded-xl  border-white/30 border-8 border-b-0 w-[400px]"
          src={aboutBg}
          alt=""
        />
        <div>
          <h3 className="text-lg font-bold"> About Us</h3>
          <p className="text-xs mt-4 text-justify">
            Welcome to Gadget Heaven, your one-stop destination for high-quality
            electronics, gadgets, and accessories! We are dedicated to bringing
            you a wide selection of the latest and most trusted products, all in
            one place. Whether you’r looking for phones, laptops, smartwatches,
            power banks, or other devices, we’ve got you covered. At Gadget
            Heaven, we believe in combining quality, affordability, and
            convenience. We carefully curate our product range to meet the
            diverse needs of our customers, ensuring every item offers the best
            value and performance. Our mission is to make shopping for tech
            easy, enjoyable, and reliable, from browsing to delivery. Explore
            our extensive catalog and discover top brands, great deals, and
            excellent customer service. Thank you for choosing us as your
            trusted partner in tech!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

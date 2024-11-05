const Footer = () => {
  return (
    <footer className=" bg-white text-black py-2 space-y-3 mt-8">
      <h3 className="text-center text-xl">Gadget Heaven</h3>
      <p className="text-center text-sm ">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <div className="border-gray-500 border-b-[1px] container mx-auto"></div>
      <div className="footer py-4 container mx-auto flex flex-col md:flex-row justify-center gap-x-32">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

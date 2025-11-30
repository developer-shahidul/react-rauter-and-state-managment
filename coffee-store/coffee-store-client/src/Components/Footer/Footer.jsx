import logo1 from "../../assets/more/logo1.png";
import footerlogo from "../../assets/more/13.jpg";
import {
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${footerlogo})`, objectFit: "cover" }}>
      <div className="md:flex lg:gap-36 gap-16  space-y-20 md:space-y-0 lg:w-[1320px] pt-24 mx-auto px-2 lg:px-0 pb-12">
        <div className="w-full">
          <img className="w-[75px] h-[90px] pb-6" src={logo1} alt="" />
          <h2 className="text-[45px] text-[#331A15] rancho ">
            Espresso Emporium
          </h2>
          <p className="raleway text-xl text-[#1B1A1A] py-7 w-[300px] md:w-auto">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-2">
            <a
              href="https://facebook.com"
              className="h-10 w-10"
              target="_blank"
            >
              <Facebook className="h-full w-full" />
            </a>

            <a
              href="https://instagram.com"
              className="h-10 w-10"
              target="_blank"
            >
              <Instagram className="h-full w-full" />
            </a>

            <a
              href="https://linkedin.com"
              className="h-10 w-10"
              target="_blank"
            >
              <Linkedin className="h-full w-full" />
            </a>

            <a
              href="https://twitter.com"
              className=" h-10 w-10"
              target="_blank"
            >
              <Twitter className=" h-full w-full " />
            </a>

            <a href="https://youtube.com" className="h-10 w-10" target="_blank">
              <Youtube className="h-full w-full" />
            </a>
          </div>

          <h3 className="rancho text-[45px] text-[#331A15] py-8">
            Get in Touch
          </h3>

          <div className="space-y-4">
            <div className="flex gap-6 ">
              <a href="tel:+880123456789">
                <Phone className="cursor-pointer w-6 h-6" />
              </a>
              <a
                className="hover:underline text-xl text-[#1B1A1A]"
                href="tel:01752503268"
              >
                01752503268
              </a>
            </div>

            <div className="flex gap-6">
              <a href="mailto:example@gmail.com">
                <Mail className="cursor-pointer w-6 h-6" />
              </a>

              <a
                href="mailto:example@gmail.com"
                className="hover:underline text-xl text-[#1B1A1A]"
              >
                info@gmail.com
              </a>
            </div>
            <div className="flex gap-6">
              <a href="https://maps.google.com">
                <MapPin className="cursor-pointer w-6 h-6" />
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-xl text-[#1B1A1A]"
              >
                72, Wall street, King Road, Dhaka
              </a>
            </div>
          </div>
        </div>

        <div className="w-full content-center">
          <h2 className="rancho text-[45px] text-[#331A15] mb-8">
            Connect with Us
          </h2>
          <form action="" className="flex flex-col gap-4 ">
            <input
              type="text"
              name="name"
              id=""
              required
              placeholder="Name"
              className="py-4 pl-3 w-full bg-white rounded-md"
            />
            <input
              type="email"
              name="email"
              id=""
              required
              placeholder="Email"
              className="py-4 pl-3   bg-white rounded-md"
            />
            <textarea
              className="pl-3 pt-4 pb-24  bg-white rounded-md"
              name=""
              id=""
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              className="border-2 hover:cursor-pointer rancho text-6 w-fit rounded-[30px] py-[9px] px-[21px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import udemyWeb from "@/public/images/certificates/udemy-web-development.jpg";
import pbiLuarskolah from "@/public/images/certificates/PBI_luarskolah_Page_1.png";

const Page = () => {
  const certifications = [
    {
      quote: "The Complete 2024 Web Development Bootcamp",
      name: "The Complete 2024 Web Development Bootcamp",
      designation: "Udemy",
      src: udemyWeb,
    },
    {
      quote: "Web Developer Project Based Internship Luarsekolah",
      name: "Web Developer Project Based Internship Luarsekolah",
      designation: "Luarsekolah",
      src: pbiLuarskolah,
    },
  ];
  return (
    <div
      className={
        "flex-grow flex flex-col justify-center items-center bg-[#0F172A]" +
        " mx-8 rounded-2xl p-4 mt-6 mb-12 lg:mx-0"
      }
    >
      <AnimatedTestimonials testimonials={certifications} />
    </div>
  );
};
export default Page;

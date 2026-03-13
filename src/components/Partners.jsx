// export default function Partners() {
//   const partners = [
//     { name: "شركة A", logo: "https://placehold.co/150x80?text=A" },
//     { name: "شركة B", logo: "https://placehold.co/150x80?text=B" },
//     { name: "شركة C", logo: "https://placehold.co/150x80?text=C" },
//     { name: "شركة D", logo: "https://placehold.co/150x80?text=D" },
//   ];

//   return (
//     <section id="partners" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <h2 className="text-blue-600 text-3xl md:text-4xl font-bold text-center mb-12">
//           شركاؤنا في النجاح
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
//           {partners.map((p, i) => (
//             <div key={i} className="flex justify-center">
//               <img src={p.logo} alt={p.name} className="max-h-16 object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Partners() {
  const partners = [
    { name: "شركة A", logo: "https://placehold.co/150x80?text=A" },
    { name: "شركة B", logo: "https://placehold.co/150x80?text=B" },
    { name: "شركة C", logo: "https://placehold.co/150x80?text=C" },
    { name: "شركة D", logo: "https://placehold.co/150x80?text=D" },
    { name: "شركة E", logo: "https://placehold.co/150x80?text=E" },
    { name: "شركة F", logo: "https://placehold.co/150x80?text=F" },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-blue-600 text-3xl md:text-4xl font-bold text-center mb-12">
          شركاؤنا في النجاح
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((p, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-16 object-contain opacity-70 hover:opacity-100 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

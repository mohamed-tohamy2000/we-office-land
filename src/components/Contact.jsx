import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center flex-col lg:items-start text-center lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              هل أنت مستعد لتطوير مساحة عملك؟
            </h2>
            <p className="text-lg text-gray-300 text-center mb-8 max-w-lg mx-auto lg:mx-0">
              احصل على استشارة مجانية من خبرائنا لمساعدتك في تصميم مكتب أحلامك.
            </p>
            <div className="space-y-4 text-lg">
              <p className="flex items-center justify-center lg:justify-start">
                <FaEnvelope className="w-6 h-6 ml-3 text-blue-400" />
                <span>contact@weofficeland.com</span>
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                <FaPhone className="w-6 h-6 ml-3 text-blue-400" />
                <span>+201022135678</span>
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.0741661813613!2d31.3367129!3d30.063408499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fda06feda15%3A0xadbda7212985ee9!2sWe%20office%20land!5e0!3m2!1sar!2seg!4v1751547930783!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="We Office Land Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

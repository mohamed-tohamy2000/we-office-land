export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-blue-600 text-xl font-bold mb-4">We Office Land</h3>
            <p>
              وجهتك الأولى لأثاث مكتبي يجمع بين الفخامة والجودة والراحة، لتحويل
              بيئة عملك إلى مصدر إلهام ونجاح.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition">
                  المميزات
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  منتجاتنا
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition">
                  آراء العملاء
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">تابعنا</h3>
            <p>أضف روابط السوشيال ميديا هنا</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2025 We Office Land. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

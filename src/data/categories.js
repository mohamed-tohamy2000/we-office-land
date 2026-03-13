import chairWaiting from "../assets/images/cher.png";
import counterDesk from "../assets/images/conter.png";
import managerDesk from "../assets/images/manger office.png";
import meetingTable from "../assets/images/meeting office.png";
import workstations from "../assets/images/malti office.jpg";
import sofaOffice from "../assets/images/sofi office.jpg";
import products from "./products";

const categoryBase = [
  {
    id: 1,
    slug: "task-chairs",
    name: "كراسي موظفين",
    image: chairWaiting,
    description: "حلول جلوس عملية ومريحة لرفع كفاءة فرق العمل اليومية.",
  },
  {
    id: 2,
    slug: "executive-chairs",
    name: "كراسي مديرين",
    image: managerDesk,
    description: "مقاعد تنفيذية فاخرة تناسب المكاتب الإدارية الراقية.",
  },
  {
    id: 3,
    slug: "waiting-chairs",
    name: "كراسي انتظار",
    image: chairWaiting,
    description: "مقاعد استقبال وانتظار بتصميم مرتب وتحمل يومي مرتفع.",
  },
  {
    id: 4,
    slug: "office-lounges",
    name: "انتريهات مكتبية",
    image: sofaOffice,
    description: "جلسات استقبال راقية تمنح مساحة الأعمال انطباعًا أولًا قويًا.",
  },
  {
    id: 5,
    slug: "workstations",
    name: "مكاتب موظفين",
    image: workstations,
    description: "محطات عمل ومكاتب تشغيلية عملية للمساحات المرنة.",
  },
  {
    id: 6,
    slug: "manager-desks",
    name: "مكاتب مديرين",
    image: managerDesk,
    description: "مكاتب تنفيذية بتفاصيل فاخرة وحضور بصري واثق.",
  },
  {
    id: 7,
    slug: "reception-desks",
    name: "مكاتب استقبال",
    image: counterDesk,
    description: "مكاتب استقبال تبرز هوية العلامة وتدعم تجربة الضيف.",
  },
  {
    id: 8,
    slug: "meeting-tables",
    name: "ترابيزات اجتماعات",
    image: meetingTable,
    description: "طاولات اجتماعات للمجالس وغرف النقاش والعروض التنفيذية.",
  },
];

const categories = categoryBase.map((category) => ({
  ...category,
  productCount: products.filter((product) => product.categorySlug === category.slug).length,
}));

export default categories;

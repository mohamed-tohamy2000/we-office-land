import { HiOutlineTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatters";
import QuantitySelector from "./QuantitySelector";

export default function CartItem({ item, onUpdate, onRemove }) {
  return (
    <article className="premium-card flex flex-col gap-5 p-4 md:flex-row md:items-center">
      <img src={item.image} alt={item.name} className="h-32 w-full rounded-[24px] object-cover md:w-40" />
      <div className="flex-1 space-y-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold text-[var(--primary-dark)]">{item.category}</p>
            <Link to={`/product/${item.slug}`} className="text-xl font-bold">
              {item.name}
            </Link>
          </div>
          <button type="button" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--danger)]" onClick={() => onRemove(item.id)}>
            <HiOutlineTrash />
            حذف
          </button>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <QuantitySelector quantity={item.quantity} onChange={(value) => onUpdate(item.id, value)} />
          <div className="flex items-center gap-8">
            <div>
              <p className="text-sm text-muted">سعر الوحدة</p>
              <p className="font-bold">{formatCurrency(item.price)}</p>
            </div>
            <div>
              <p className="text-sm text-muted">الإجمالي</p>
              <p className="font-bold">{formatCurrency(item.price * item.quantity)}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

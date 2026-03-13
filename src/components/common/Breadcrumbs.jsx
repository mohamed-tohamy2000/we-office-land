import { HiChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted">
      {items.map((item, index) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          {item.to ? <Link to={item.to}>{item.label}</Link> : <span className="font-semibold text-[var(--foreground)]">{item.label}</span>}
          {index < items.length - 1 && <HiChevronLeft />}
        </span>
      ))}
    </div>
  );
}

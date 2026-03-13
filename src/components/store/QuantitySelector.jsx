import { HiMinus, HiPlus } from "react-icons/hi2";

export default function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-2 py-2">
      <button type="button" className="rounded-full p-2 transition hover:bg-black/5" onClick={() => onChange(Math.max(1, quantity - 1))}>
        <HiMinus />
      </button>
      <span className="min-w-12 text-center font-bold">{quantity}</span>
      <button type="button" className="rounded-full p-2 transition hover:bg-black/5" onClick={() => onChange(quantity + 1)}>
        <HiPlus />
      </button>
    </div>
  );
}

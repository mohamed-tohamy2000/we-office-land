import { siteConfig } from "../data/site";
import { formatCurrency } from "./formatters";

export function createWhatsAppLink(message) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function generateInquiryLink(productName) {
  const message = `مرحبًا ${siteConfig.brandName}، أرغب في الاستفسار عن المنتج: ${productName}`;
  return createWhatsAppLink(message);
}

export function generateOrderMessage(customer, items, totals) {
  const productLines = items
    .map(
      (item, index) =>
        `${index + 1}. ${item.name}\n- الكمية: ${item.quantity}\n- سعر الوحدة: ${formatCurrency(
          item.price
        )}\n- الإجمالي: ${formatCurrency(item.price * item.quantity)}`
    )
    .join("\n\n");

  return [
    `طلب جديد من ${siteConfig.brandName}`,
    "",
    `اسم العميل: ${customer.name}`,
    `رقم الهاتف: ${customer.phone}`,
    `المدينة: ${customer.city}`,
    `العنوان: ${customer.address}`,
    "",
    "المنتجات المطلوبة:",
    productLines,
    "",
    `الإجمالي النهائي: ${formatCurrency(totals.estimatedTotal)}`,
    `الملاحظات: ${customer.notes || "لا توجد ملاحظات"}`,
  ].join("\n");
}

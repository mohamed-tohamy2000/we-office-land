export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-right";

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      {eyebrow && <p className="section-kicker mb-3 text-sm font-extrabold uppercase">{eyebrow}</p>}
      <h2 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">{title}</h2>
      {description && <p className="text-lg text-muted">{description}</p>}
    </div>
  );
}

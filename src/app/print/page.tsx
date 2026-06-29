import { slides } from "@/lib/slides";

export default function PrintPage() {
  return (
    <main className="print-deck px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto space-y-6" style={{ maxWidth: "1100px" }}>
        {slides.map((slide) => {
          const Current = slide.component;
          return (
            <section key={slide.title} className="print-page">
              <div className="print-section-label text-[10px] tracking-[0.22em] uppercase font-extrabold text-brand mb-3">
                {slide.section}
              </div>
              <Current />
            </section>
          );
        })}
      </div>
    </main>
  );
}

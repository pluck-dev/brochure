"use client";

import { useCallback, useEffect, useState } from "react";
import { slides } from "@/lib/slides";

export default function SlideViewer() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setIndex(clamped);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#${clamped + 1}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [total]
  );

  // 키보드 네비게이션
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") go(index + 1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") go(index - 1);
      if (e.key === "Home") go(0);
      if (e.key === "End") go(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, go]);

  // 해시 딥링크
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    const n = parseInt(hash, 10);
    if (!isNaN(n) && n >= 1 && n <= total) setIndex(n - 1);
  }, [total]);

  const Current = slides[index].component;
  const meta = slides[index];

  return (
    <div className="relative min-h-screen z-10">
      {/* 진행 막대 */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-paper-soft z-50 no-print">
        <div
          className="h-full bg-brand transition-all duration-300"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      {/* 상단 인포 */}
      <div className="fixed top-3 left-0 right-0 flex justify-between items-center px-5 sm:px-8 z-40 no-print">
        <div className="flex items-center gap-2.5">
          <span className="pluck-logo text-base text-brand">PLUCK</span>
          <span className="text-[10px] tracking-[0.18em] text-ink-mute font-bold uppercase">
            누보 제안서
          </span>
        </div>
        <div className="mono text-[11px] text-ink-soft font-bold">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      {/* 슬라이드 본문 */}
      <main className="px-4 sm:px-6 lg:px-8 pt-16 pb-32">
        <div
          key={index}
          className="slide-fade-enter slide-fade-active mx-auto"
          style={{ maxWidth: "1100px" }}
        >
          <div className="text-[10px] tracking-[0.22em] uppercase font-extrabold text-brand mb-3">
            {meta.section}
          </div>
          <Current />
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <div className="fixed bottom-0 left-0 right-0 bg-paper/85 backdrop-blur border-t border-line z-40 no-print">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between gap-3">
          <button
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold border border-line bg-paper text-ink-soft hover:text-brand hover:border-brand/40 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            ← 이전
          </button>

          <div className="hidden sm:flex gap-1.5 max-w-[60%] overflow-x-auto py-1">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                title={s.title}
                className={`shrink-0 h-2 rounded-full transition-all ${
                  i === index
                    ? "bg-brand w-8"
                    : "bg-line hover:bg-brand/40 w-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            disabled={index === total - 1}
            className="px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold bg-brand text-white hover:bg-brand-deep disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            {index === total - 1 ? "끝" : "다음 →"}
          </button>
        </div>
      </div>
    </div>
  );
}

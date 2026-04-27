import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "플럭이 일하는 방식 — 누보 AI 의사결정 시스템 제안서",
  description:
    "누보의 판매·구매·생산 의사결정을 데이터 기반으로 빠르게 지원하는 AI 시스템 제안서. 플럭이 어떻게 일하는지, 무엇을 만드는지, 어떤 방식으로 진행하는지 단계별로 안내합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { ReactNode } from "react";

/* ================== 공통 슬라이드 레이아웃 ================== */

function SlideShell({
  title,
  subtitle,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="slide bg-paper/95 border border-line rounded-3xl p-8 sm:p-12 shadow-[0_18px_40px_rgba(40,57,200,0.10)] backdrop-blur">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight text-ink">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-ink-soft leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}
      </header>
      <div>{children}</div>
    </article>
  );
}

function Card({
  tone = "paper",
  className = "",
  children,
}: {
  tone?: "paper" | "brand" | "soft" | "ink" | "warn" | "info";
  className?: string;
  children: ReactNode;
}) {
  const map = {
    paper: "bg-paper border-line",
    brand: "bg-brand-soft border-brand/15",
    soft: "bg-paper-soft border-line",
    ink: "bg-ink text-white border-ink",
    warn: "bg-paper-soft border-ink/10",
    info: "bg-brand-soft border-brand/20",
  };
  return (
    <div className={`rounded-2xl p-5 sm:p-6 border ${map[tone]} ${className}`}>
      {children}
    </div>
  );
}

function Tag({
  tone = "brand",
  children,
}: {
  tone?: "brand" | "ink" | "soft" | "warn";
  children: ReactNode;
}) {
  const map = {
    brand: "bg-brand/10 text-brand-deep",
    ink: "bg-ink/10 text-ink",
    soft: "bg-ink/5 text-ink-soft",
    warn: "bg-ink/10 text-ink",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider ${map[tone]}`}
    >
      {children}
    </span>
  );
}

/* ================== 슬라이드 1. 표지 (명함 톤) ================== */

function Slide01Cover() {
  return (
    <div className="rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(40,57,200,0.18)] grid sm:grid-cols-[1.2fr_1fr] min-h-[64vh]">
      <div className="bg-brand text-white p-10 sm:p-14 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute -left-12 -bottom-12 w-60 h-60 rounded-full bg-white/5" />

        <div className="relative">
          <div className="inline-flex px-3 py-1.5 rounded-full bg-white/15 text-white/95 text-[10px] font-extrabold tracking-[0.22em]">
            PROPOSAL · 2026.04.27
          </div>
        </div>

        <div className="relative">
          <h1 className="pluck-logo text-[68px] sm:text-[110px] lg:text-[140px] text-white">
            PLUCK
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/85 leading-snug max-w-md font-medium">
            Igniting your ideas with fast,
            <br />
            reliable development
          </p>
        </div>

        <div className="relative pt-6 border-t border-white/15 text-[11px] tracking-[0.15em] text-white/70 font-bold">
          PLUCK · HWANG SUNG-AN · SHIM JAE-HYUNG
        </div>
      </div>

      <div className="bg-paper p-10 sm:p-12 flex flex-col justify-between relative">
        <div>
          <div className="text-[10px] tracking-[0.22em] font-extrabold text-brand mb-3">
            FOR NUBO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-ink">
            누보 AI<br />
            의사결정 지원<br />
            시스템 구축 제안서
          </h2>
          <p className="mt-5 text-sm sm:text-base text-ink-soft leading-relaxed">
            ERP 데이터와 외부 시황을 종합해, 누보의 S&amp;OP와 경영
            의사결정을 빠르고 일관되게 보조하는 시스템 구축 제안입니다.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-line space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <div className="text-[10px] tracking-[0.18em] font-extrabold text-ink-mute w-16 mt-0.5">
              수신
            </div>
            <div className="text-ink font-bold">주식회사 누보</div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-[10px] tracking-[0.18em] font-extrabold text-ink-mute w-16 mt-0.5">
              제안
            </div>
            <div className="text-ink font-bold">
              플럭 · 황성안 · 심재형
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-[10px] tracking-[0.18em] font-extrabold text-ink-mute w-16 mt-0.5">
              CONTACT
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href="mailto:hello@pluck.co.kr"
                className="text-ink-soft mono text-[13px] hover:text-ink transition-colors"
              >
                hello@pluck.co.kr
              </a>
              <a
                href="mailto:hello@pluck.co.kr"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-ink text-paper text-[11px] font-bold tracking-wide hover:bg-ink/85 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                메일 보내기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================== 슬라이드 2. 제안 개요 ================== */

function Slide02Overview() {
  return (
    <SlideShell
      title="제안 개요"
      subtitle='이번 과제의 핵심은 "챗봇 도입"이 아니라 "근거가 있는 의사결정 지원 체계 구축"입니다.'
    >
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card tone="brand">
          <Tag tone="brand">핵심 목표</Tag>
          <div className="mt-3 text-2xl font-bold text-ink leading-tight tracking-tight">
            결정 속도 개선
          </div>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            국내·해외·B2B·생산 부서의 상충되는 의견을 수치와 근거로 빠르게
            정리합니다.
          </p>
        </Card>
        <Card tone="paper">
          <Tag tone="ink">핵심 방법</Tag>
          <div className="mt-3 text-2xl font-bold text-ink leading-tight tracking-tight">
            데이터 + 모델 + 설명
          </div>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            ERP 데이터를 정리하고 분석 모델을 구축한 뒤, LLM을 설명 계층으로
            활용합니다.
          </p>
        </Card>
        <Card tone="warn">
          <Tag tone="ink">핵심 원칙</Tag>
          <div className="mt-3 text-2xl font-bold text-ink leading-tight tracking-tight">
            사람 승인 유지
          </div>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            AI는 추천·비교·설명을 담당하고, 최종 승인과 실행 판단은 누보가
            보유합니다.
          </p>
        </Card>
      </div>

      <Card tone="ink">
        <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
          본 제안은 1차로{" "}
          <strong className="text-white">
            내부 ERP 기반 의사결정 지원 시스템
          </strong>
          을 최소 6개월(28주) 일정으로 구축한 뒤,{" "}
          <strong className="text-white">운영·개선 단계로 자연스럽게 전환</strong>
          되어 AXE 외부 시황 연계와 후속 자동화 과제까지 차차 확장되는 장기
          파트너십 구조입니다.
        </p>
      </Card>
    </SlideShell>
  );
}

/* ================== 슬라이드 3. 플럭은 어떻게 일합니다 ================== */

function Slide03HowWeWork() {
  const principles = [
    {
      no: "01",
      title: "단계로 검증하며 갑니다",
      desc: "0~3단계를 한 번에 묶어 계약하되, 각 단계 산출물 검수·승인을 조건으로 진행합니다. 누보의 위험과 일정 변동을 동시에 낮추는 방식입니다.",
    },
    {
      no: "02",
      title: "결과물 중심으로 일합니다",
      desc: "기술 용어보다 회의에서 바로 쓸 수 있는 화면을 만드는 데 집중합니다. 산출물이 누보 회의에 들어가야 의미가 있습니다.",
    },
    {
      no: "03",
      title: "사람의 결정을 대체하지 않습니다",
      desc: "AI는 비교·추천·설명까지입니다. 발주·배분 같은 핵심 결정은 사람의 승인을 거치는 구조로 설계합니다.",
    },
    {
      no: "04",
      title: "벤더 종속을 만들지 않습니다",
      desc: "소스코드·데이터 정의서·운영 권한은 처음부터 누보가 함께 보유합니다. 우리가 사라져도 시스템이 멈추지 않게 만듭니다.",
    },
  ];
  return (
    <SlideShell
      title="플럭은 이렇게 일합니다"
      subtitle="누보가 가장 우려하는 부분 — 벤더 종속, 과도한 약속, 검증 없는 큰 계약 — 을 미리 차단하는 방식으로 일합니다."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {principles.map((p) => (
          <Card key={p.no} tone="paper">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="mono text-2xl font-bold text-brand tabular-nums">
                {p.no}
              </span>
              <h3 className="text-lg font-bold text-ink leading-tight">
                {p.title}
              </h3>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed">{p.desc}</p>
          </Card>
        ))}
      </div>
    </SlideShell>
  );
}

/* ================== 슬라이드 4. 프로젝트 배경 및 문제 정의 ================== */

function Slide04Background() {
  return (
    <SlideShell
      title="프로젝트 배경 및 문제 정의"
      subtitle="미팅에서 확인된 주요 현안을 네 가지로 정리했습니다."
    >
      <div className="grid md:grid-cols-2 gap-4">
        <Card tone="paper">
          <Tag tone="brand">현업 이슈</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 같은 제품이라도 국내·해외·B2B·생산 부서의 우선순위가 다름</li>
            <li>· 손익 기준으로 어디에 먼저 배분할지 빠르게 합의 어려움</li>
            <li>· 원료 구매 시점 판단에 개인 경험·감정이 개입될 수 있음</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">데이터 이슈</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 데이터는 더존 ERP에 있으나 직접 의사결정에 쓰기엔 정리 필요</li>
            <li>· 지역·조직 변경 이력으로 코드 매핑·기준 정합화가 선행되어야 함</li>
            <li>· 사용 가능한 과거 데이터 범위는 2013~2026으로 확인됨</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">의사결정 이슈</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 판매계획·실적·구매·생산 계획이 순차 연결됨</li>
            <li>· 흐름 전체를 동시에 봐야 합리적인 배분과 구매 판단이 가능</li>
            <li>· 현재는 빠른 비교와 설명이 가능한 통합 화면이 부재</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">외부 변수</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 전쟁·중국 정책·물류·환율 등 외부 영향이 원료 적기에 큼</li>
            <li>· AXE 같은 국제 시황 자료는 내부 가격과 함께 비교되어야 함</li>
            <li>· 정답 예측보다 시나리오 비교·기회손실 추정이 더 실무적</li>
          </ul>
        </Card>
      </div>
    </SlideShell>
  );
}

/* ================== 슬라이드 5. 제안 범위 ================== */

function Slide05Scope() {
  return (
    <SlideShell
      title="제안 범위"
      subtitle="1차 구축 범위는 실제 의사결정에 바로 활용할 수 있는 핵심 기능에 집중합니다."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card tone="brand">
          <Tag tone="brand">1차 핵심 범위</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            내부 의사결정 지원
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 판매 계획 대비 실적 비교</li>
            <li>· 지역·채널·사업부 기준 손익 비교</li>
            <li>· 구매 실적·계획과 생산 계획 연계</li>
            <li>· 배분 우선순위 추천 및 근거 설명</li>
          </ul>
        </Card>
        <Card tone="brand">
          <Tag tone="brand">화면 및 운영 범위</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            S&amp;OP 회의 보조 화면
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 현재 재고 및 판매 방향 요약</li>
            <li>· 배분 추천안과 기회손실 비교</li>
            <li>· 추천 근거 자연어 설명</li>
            <li>· 사람 승인 전제의 워크플로우</li>
          </ul>
        </Card>
        <Card tone="warn">
          <Tag tone="ink">후속 선택 범위</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            외부 시황 및 확장
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· AXE 기반 외부 시황 연계</li>
            <li>· 원료 구매 적기 시나리오 비교</li>
            <li>· 사무 자동화 후속 과제</li>
            <li>· 농업 AI 확장 및 플랫폼 연계</li>
          </ul>
        </Card>
      </div>

      <Card tone="soft" className="border-dashed">
        <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
          본 제안서의 1차 범위에는 지분 기반 전략 파트너십, 트릿지 연계, 전사
          자동화 전체 구축은 포함하지 않습니다. 1차 성과 확인 후 별도 후속
          과제로 제안 가능합니다.
        </p>
      </Card>
    </SlideShell>
  );
}

/* ================== 슬라이드 6. 구축 단계 및 산출물 ================== */

function Slide06Phases() {
  const phases = [
    {
      n: 0,
      title: "진단 및 상세 설계",
      period: "최소 4주",
      bullets: [
        "샘플 데이터 분석",
        "업무 흐름·KPI 정의",
        "지역·조직 코드 매핑 설계",
        "상세 구축 명세서 작성",
      ],
    },
    {
      n: 1,
      title: "데이터 기반 구축",
      period: "최소 8주",
      bullets: [
        "ERP 추출 구조 정리",
        "분석용 데이터마트 구성",
        "기준 코드 정합화",
        "기본 현황 대시보드",
      ],
    },
    {
      n: 2,
      title: "의사결정 MVP 구현",
      period: "최소 10주",
      bullets: [
        "배분 추천 로직",
        "손익·기회손실 비교",
        "S&OP 보조 화면",
        "추천 사유 설명 기능",
      ],
    },
    {
      n: 3,
      title: "안정화 및 전환",
      period: "최소 6주",
      bullets: [
        "권한·감사 로그",
        "운영 매뉴얼 작성",
        "사용자 교육",
        "인수인계·운영 전환",
      ],
    },
  ];
  return (
    <SlideShell
      title="구축 단계 및 산출물"
      subtitle="데이터 상태와 검증 필요성을 고려해 단계형 수행을 제안합니다. 단계마다 누보의 검수를 거친 뒤 다음으로 진행합니다."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {phases.map((p) => (
          <Card key={p.n} tone="paper">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand text-white inline-flex items-center justify-center font-bold mono">
                {p.n}
              </div>
              <span className="inline-flex px-2.5 py-1 rounded-full bg-brand-soft text-brand text-[11px] font-extrabold tracking-wider">
                {p.period}
              </span>
            </div>
            <h3 className="text-base font-bold text-ink leading-tight mb-3">
              {p.title}
            </h3>
            <ul className="space-y-1.5 text-sm text-ink-soft leading-relaxed">
              {p.bullets.map((b, i) => (
                <li key={i}>· {b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-6 p-4 rounded-2xl bg-paper-soft border border-dashed border-brand/20 text-sm text-ink-soft">
        <strong className="text-ink">최소 28주(6개월 이상)</strong>의 일정으로
        진행되며, 단계별 산출물이 검수를 통과해야 다음 단계로 넘어갑니다. 데이터
        상태와 누보 검수 사이클에 따라 더 길어질 수 있습니다.
      </div>
    </SlideShell>
  );
}

/* ================== 슬라이드 7. 예상 일정 ================== */

function Slide07Schedule() {
  const rows = [
    {
      stage: "0단계 — 진단 및 상세 설계",
      period: "최소 4주",
      output: "데이터 진단서, KPI 정의서, 코드 매핑 계획, 구축 명세서",
      review: "범위 확정 및 다음 단계 승인",
    },
    {
      stage: "1단계 — 데이터 기반 구축",
      period: "최소 8주",
      output: "분석용 데이터마트, 기준 테이블, 기본 현황 화면",
      review: "데이터 정합성·조회 정확성 검수",
    },
    {
      stage: "2단계 — 의사결정 MVP",
      period: "최소 10주",
      output: "배분 추천 화면, 손익 비교, 설명 기능, 승인 흐름 초안",
      review: "회의 활용성·추천 결과 검토",
    },
    {
      stage: "3단계 — 안정화 및 전환",
      period: "최소 6주",
      output: "권한, 감사 로그, 운영 문서, 교육 자료",
      review: "운영 준비 완료·종료 승인",
    },
  ];
  return (
    <SlideShell
      title="예상 일정"
      subtitle="1차 핵심 구축은 최소 28주(6개월 이상) 기준이며, 누보 검수 일정과 데이터 상태에 따라 더 길어질 수 있습니다."
    >
      <div className="rounded-2xl border border-line overflow-hidden bg-paper">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead className="bg-brand-soft">
              <tr>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  단계
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  기간
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  주요 산출물
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  검수 포인트
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className={`border-t border-line ${
                    i % 2 === 1 ? "bg-paper-soft/40" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-bold text-ink">{r.stage}</td>
                  <td className="px-4 py-3 text-ink mono">{r.period}</td>
                  <td className="px-4 py-3 text-ink-soft">{r.output}</td>
                  <td className="px-4 py-3 text-ink-soft">{r.review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5 p-4 rounded-2xl bg-paper-soft border border-dashed border-brand/20 text-sm text-ink-soft">
        AXE 연동 및 구매 적기 외부 변수 모델은 1차 종료 후 별도 옵션으로{" "}
        <strong className="text-ink">4~6주 추가 일정</strong>이 필요합니다.
      </div>
    </SlideShell>
  );
}

/* ================== 슬라이드 8. 제안 금액 ================== */

function Slide08Pricing() {
  const rows = [
    {
      stage: "0단계 — 진단 및 상세 설계",
      period: "최소 4주",
      cost: "10,000,000 ~ 15,000,000",
      note: "데이터 확인, KPI 정의, 상세 명세",
    },
    {
      stage: "1단계 — 데이터 기반 구축",
      period: "최소 8주",
      cost: "40,000,000 ~ 60,000,000",
      note: "데이터 정합화, 분석용 구조, 기본 화면",
    },
    {
      stage: "2단계 — 의사결정 MVP 구현",
      period: "최소 10주",
      cost: "35,000,000 ~ 55,000,000",
      note: "배분 추천, 손익 비교, 설명 기능",
    },
    {
      stage: "3단계 — 안정화 및 전환",
      period: "최소 6주",
      cost: "15,000,000 ~ 25,000,000",
      note: "운영 문서, 교육, 권한, 로그",
    },
  ];
  return (
    <SlideShell
      title="제안 금액"
      subtitle="제출용 표준 견적이며, 0~3단계를 묶은 1차 합산 계약 기준입니다. 단계별 산출물 검수에 따라 최소 1억 ~ 1.55억 범위 안에서 변동되며 부가세는 별도입니다."
    >
      <div className="rounded-2xl border border-line overflow-hidden bg-paper mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead className="bg-brand-soft">
              <tr>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  구분
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  기간
                </th>
                <th className="text-right px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  금액
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className={`border-t border-line ${
                    i % 2 === 1 ? "bg-paper-soft/40" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-bold text-ink">{r.stage}</td>
                  <td className="px-4 py-3 text-ink mono">{r.period}</td>
                  <td className="px-4 py-3 text-right text-ink mono font-bold">
                    {r.cost}원
                  </td>
                  <td className="px-4 py-3 text-ink-soft">{r.note}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-brand bg-brand-soft">
                <td className="px-4 py-4 font-extrabold text-brand-deep">
                  1차 핵심 구축 합계
                </td>
                <td className="px-4 py-4 text-brand-deep mono font-bold">
                  최소 28주
                </td>
                <td className="px-4 py-4 text-right text-brand-deep mono font-extrabold">
                  <div className="text-lg">
                    100,000,000 ~ 155,000,000원
                  </div>
                  <div className="text-[10px] font-bold tracking-wider text-brand mt-0.5">
                    최소 1.0억 ~ 표준 1.55억
                  </div>
                </td>
                <td className="px-4 py-4 text-brand-deep font-bold text-xs">
                  부가세 별도
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SlideShell>
  );
}

/* ================== 슬라이드 9. 추가 옵션 + 운영비 ================== */

function Slide09Options() {
  return (
    <SlideShell
      title="추가 옵션 및 운영비"
      subtitle="1차 구축 외에 선택 가능한 옵션과, 운영 단계의 월 비용입니다."
    >
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <Card tone="paper">
          <Tag tone="ink">선택 옵션</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            외부 시황 연계 확장
          </h3>
          <div className="mono text-3xl font-extrabold text-ink mt-2 tracking-tight">
            35,000,000원
          </div>
          <p className="text-xs text-ink-mute mt-1">부가세 별도 · 4~6주 추가</p>
          <p className="mt-4 text-sm text-ink-soft leading-relaxed">
            AXE 등 외부 자료 연계, 구매 적기 시나리오, 외부 변수 반영 비교
            화면을 추가합니다.
          </p>
        </Card>
        <Card tone="brand">
          <Tag tone="brand">운영 지원</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">월 운영 및 개선</h3>
          <div className="mono text-2xl sm:text-3xl font-extrabold text-brand-deep mt-2 tracking-tight">
            8,000,000 ~ 12,000,000원
          </div>
          <p className="text-xs text-ink-mute mt-1">월 단위 · 부가세 별도</p>
          <p className="mt-4 text-sm text-ink-soft leading-relaxed">
            룰 보완, 모델 점검, 사용자 피드백 반영, 운영 회의 지원. 실제 범위에
            따라 조정합니다.
          </p>
        </Card>
      </div>

      <Card tone="warn">
        <Tag tone="warn">별도 부담 항목</Tag>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed">
          클라우드 인프라, LLM API 사용료, 외부 시황 데이터 구독료는 누보 측
          별도 부담으로 청구됩니다. 일반적으로{" "}
          <strong className="text-ink">월 300만~1,000만원 수준</strong>에서
          시작하며 사용량과 연계 범위에 따라 달라집니다.
        </p>
      </Card>
    </SlideShell>
  );
}

/* ================== 슬라이드 10. 권장 계약 방식 ================== */

function Slide10Contract() {
  return (
    <SlideShell
      title="권장 계약 방식"
      subtitle="0~3단계를 묶은 1차 합산 계약을 권장합니다. 일정과 범위, 책임 소재를 가장 안정적으로 확보하는 방식입니다."
    >
      <div className="grid md:grid-cols-3 gap-4">
        <Card tone="paper" className="ring-2 ring-brand/40 relative">
          <div className="absolute -top-2.5 right-5 px-3 py-1 rounded-full bg-brand text-white text-[10px] font-extrabold tracking-wider">
            권장
          </div>
          <Tag tone="brand">A안</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">1차 합산 계약</h3>
          <div className="mono text-xl font-extrabold text-brand-deep mt-2">
            1.0억 ~ 1.55억
          </div>
          <div className="text-[11px] text-ink-mute mt-0.5">
            범위 내 변동 · 부가세 별도
          </div>
          <ul className="mt-4 pt-4 border-t border-line space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 0~3단계를 한 번에 계약</li>
            <li>· 단계별 검수·중간 산출물 승인을 조건으로 진행</li>
            <li>· 일정·인력·책임 소재 가장 안정적</li>
            <li>· 본 구축 전환 단절 없이 직진</li>
          </ul>
        </Card>

        <Card tone="paper">
          <Tag tone="ink">B안</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            0단계 분리 계약
          </h3>
          <div className="mono text-xl font-extrabold text-ink mt-2">
            보수형 옵션
          </div>
          <div className="text-[11px] text-ink-mute mt-0.5">
            중도 종료 가능성 존재
          </div>
          <ul className="mt-4 pt-4 border-t border-line space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 0단계 진단(1,000만~1,500만원)을 먼저 계약</li>
            <li>· 결과 승인 후 1~3단계 본 구축 재계약</li>
            <li>· 본 구축 전환 시 일정·인력 재확보 필요</li>
          </ul>
        </Card>

        <Card tone="paper">
          <Tag tone="warn">C안</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            인하우스 연계형
          </h3>
          <div className="mono text-xl font-extrabold text-ink mt-2">
            별도 협의
          </div>
          <ul className="mt-4 pt-4 border-t border-line space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 누보 내부 담당자 1명 + 외부 구축 인력 병행</li>
            <li>· 운영 지속성·종속 위험 완화에 유리</li>
            <li>· 겸직·역할·KPI·거주 조건 별도 협의</li>
          </ul>
        </Card>
      </div>
    </SlideShell>
  );
}

/* ================== 슬라이드 11. 누보 협조 사항 ================== */

function Slide11Cooperation() {
  return (
    <SlideShell
      title="누보 협조 사항"
      subtitle="아래 항목이 준비되면 일정과 정확도가 크게 안정됩니다."
    >
      <div className="grid md:grid-cols-2 gap-4">
        <Card tone="paper">
          <Tag tone="brand">필수 데이터</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>
              · 판매 계획·실적, 구매 실적·계획, 생산 계획 샘플 데이터
            </li>
            <li>· 3~6개월치 우선 제공, 이후 전체 범위 확장</li>
            <li>· 지역·사업부·채널 기준 코드표 및 변경 이력</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">시스템 접근</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 더존 테스트 계정 또는 시뮬레이션 환경</li>
            <li>· 민감정보 제외 샘플 추출 방식 공유</li>
            <li>· 보안·반출 정책 사전 정의</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">업무 기준</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· S&amp;OP 회의에서 사용하는 현재 보고 자료</li>
            <li>· 배분 우선순위·구매 적기 판단 시 참고하는 기준</li>
            <li>· 내부 PM 또는 실무 창구 1명 지정</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">검수 체계</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 단계별 리뷰 회의 참여자 지정</li>
            <li>· 중간 산출물 승인 절차 정의</li>
            <li>· 운영 전환 시 사용자 교육 대상 확정</li>
          </ul>
        </Card>
      </div>
    </SlideShell>
  );
}

/* ================== 슬라이드 12. 리스크 대응 및 운영 원칙 ================== */

function Slide12Risk() {
  return (
    <SlideShell
      title="리스크 대응 및 운영 원칙"
      subtitle="실제 활용성과 장기 운영성을 확보하기 위해 다음 원칙을 제안합니다."
    >
      <div className="grid md:grid-cols-3 gap-4">
        <Card tone="brand">
          <Tag tone="brand">운영 원칙</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· AI 추천 결과는 사람이 승인 후 실행</li>
            <li>· 추천 사유와 사용 데이터를 화면에 표시</li>
            <li>· 배분·구매 판단은 추론이 아닌 비교 중심</li>
          </ul>
        </Card>
        <Card tone="brand">
          <Tag tone="brand">소유권</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 소스코드, 규칙 문서, 데이터 정의서, 운영 매뉴얼 이관</li>
            <li>· 관리자 계정·배포 권한 이전 가능 구조</li>
            <li>· 종료·인력 변경 시 인수인계 세션 포함</li>
          </ul>
        </Card>
        <Card tone="warn">
          <Tag tone="warn">비용 통제</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 클라우드·API·외부 데이터 비용 상한선 설정</li>
            <li>· 업데이트 주기·사용량을 정책으로 고정</li>
            <li>· 외부 시황 연계는 1차 성과 확인 후 확장</li>
          </ul>
        </Card>
      </div>
    </SlideShell>
  );
}

/* ================== 슬라이드 13. 다음 단계 제안 ================== */

function Slide13NextSteps() {
  const steps = [
    {
      n: "01",
      title: "1차 구축 범위 확정",
      desc: "누보 내부에서 1차 구축 범위와 우선순위를 확정합니다.",
    },
    {
      n: "02",
      title: "샘플 데이터 준비",
      desc: "3~6개월치 샘플과 더존 테스트 접근 환경을 준비합니다.",
    },
    {
      n: "03",
      title: "1차 합산 계약 체결",
      desc: "0~3단계를 묶어 1.0억~1.55억 범위로 한 번에 계약합니다.",
    },
    {
      n: "04",
      title: "단계별 검수 진행",
      desc: "각 단계 산출물 승인을 조건으로 본 구축을 직진합니다.",
    },
    {
      n: "05",
      title: "후속 과제 검토",
      desc: "운영 안정화 후 AXE 연계·후속 자동화 과제를 검토합니다.",
    },
  ];
  return (
    <SlideShell
      title="다음 단계 제안"
      subtitle="프로젝트를 빠르게 시작하기 위한 권장 절차입니다."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
        {steps.map((s) => (
          <Card key={s.n} tone="paper">
            <div className="mono text-xs tracking-[0.2em] text-brand font-bold mb-2">
              STEP {s.n}
            </div>
            <h4 className="text-sm font-bold text-ink leading-tight mb-2">
              {s.title}
            </h4>
            <p className="text-xs text-ink-soft leading-relaxed">{s.desc}</p>
          </Card>
        ))}
      </div>

      <Card tone="ink">
        <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
          0~3단계를 묶은 1차 합산 계약{" "}
          <span className="mono">최소 1.0억 ~ 1.55억</span>으로 시작하며, 각 단계
          산출물의 검수와 승인을 조건으로 다음 단계로 진행합니다. 정확한 금액은
          1차 구축 범위 확정 시점에 확정됩니다.
        </p>
      </Card>
    </SlideShell>
  );
}

/* ================== 슬라이드 14. 정리 — 한눈에 보기 ================== */

function Slide14Summary() {
  return (
    <SlideShell
      title="제안 한눈에 보기"
      subtitle="제출용 제안서의 핵심 수치를 한 화면에 정리했습니다."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <Card tone="brand">
          <div className="text-[10px] tracking-[0.18em] font-extrabold text-brand mb-1">
            총 기간
          </div>
          <div className="mono text-3xl font-extrabold text-ink tracking-tight">
            최소 28주
          </div>
          <div className="text-xs text-ink-mute mt-1">6개월 이상</div>
        </Card>
        <Card tone="brand">
          <div className="text-[10px] tracking-[0.18em] font-extrabold text-brand mb-1">
            1차 핵심 구축
          </div>
          <div className="mono text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            1.0억 ~ 1.55억
          </div>
          <div className="text-xs text-ink-mute mt-1">변동 가능 · 부가세 별도</div>
        </Card>
        <Card tone="paper">
          <div className="text-[10px] tracking-[0.18em] font-extrabold text-ink-mute mb-1">
            외부 시황 옵션
          </div>
          <div className="mono text-3xl font-extrabold text-ink tracking-tight">
            3,500만
          </div>
          <div className="text-xs text-ink-mute mt-1">4~6주 추가</div>
        </Card>
        <Card tone="paper">
          <div className="text-[10px] tracking-[0.18em] font-extrabold text-ink-mute mb-1">
            월 운영비
          </div>
          <div className="mono text-3xl font-extrabold text-ink tracking-tight">
            800~1,200만
          </div>
          <div className="text-xs text-ink-mute mt-1">월 단위</div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card tone="paper">
          <Tag tone="brand">진행 구조</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>
              · <strong className="text-ink">0~3단계 1차 합산 계약</strong> 권장
            </li>
            <li>· 단계별 검수·산출물 승인을 조건으로 직진</li>
            <li>· 0단계 진단(4주)부터 운영 전환까지 단절 없음</li>
            <li>· 1차 종료 후 외부 시황·후속 과제 별도 검토</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">결과물 핵심</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· S&amp;OP 회의 보조 화면</li>
            <li>· 배분 추천 + 손익 비교 + 기회손실 시뮬레이션</li>
            <li>· 추천 근거 자연어 설명</li>
            <li>· 운영 매뉴얼·권한·감사 로그 일체</li>
          </ul>
        </Card>
      </div>
    </SlideShell>
  );
}

/* ================== 신규. 인력 운용 1·2·3안 ================== */

function SlidePlans() {
  return (
    <SlideShell
      title="이 흐름을 수행하는 방식 — 1·2·3안"
      subtitle="0~3단계 흐름과 개발 비용은 모든 안에 동일하게 적용됩니다. 차이는 두 사람이 어떻게 일하느냐와 누보 측에서 부담하는 부대 사항입니다."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card tone="paper">
          <Tag tone="ink">1안</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">2인 재택</h3>
          <p className="text-sm text-ink-soft mt-1">두 사람 모두 원격</p>
          <div className="mt-5 mono text-2xl font-extrabold text-ink tracking-tight">
            1.0억 ~ 1.55억
          </div>
          <p className="text-xs text-ink-mute mt-1">1차 합산 계약 · 범위 내 변동</p>
          <div className="mt-5 pt-4 border-t border-line">
            <div className="text-[10px] font-extrabold tracking-wider text-ink-mute mb-1.5">
              누보 추가 부담
            </div>
            <p className="text-sm text-ink font-bold">없음</p>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 출입 부담 없음</li>
            <li>· 화상 회의 + 월 1~2회 방문</li>
            <li>· 도메인 학습 속도가 다소 느림</li>
          </ul>
        </Card>

        <Card tone="paper">
          <Tag tone="brand">2안</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            1인 상주 + 1인 재택
          </h3>
          <p className="text-sm text-ink-soft mt-1">상주 1명 주 2~3일 출근</p>
          <div className="mt-5 mono text-2xl font-extrabold text-brand-deep tracking-tight">
            1.0억 ~ 1.55억
          </div>
          <p className="text-xs text-ink-mute mt-1">1차 합산 계약 · 범위 내 변동</p>
          <div className="mt-5 pt-4 border-t border-line">
            <div className="text-[10px] font-extrabold tracking-wider text-brand mb-1.5">
              누보 추가 부담
            </div>
            <p className="text-sm text-ink font-bold">사무 1석</p>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 회의 직접 참여로 빠른 반영</li>
            <li>· 비용·효과 균형이 가장 좋음</li>
            <li>· 본 제안서 표준 가정</li>
          </ul>
        </Card>

        <Card tone="paper">
          <Tag tone="warn">3안</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">2인 상주</h3>
          <p className="text-sm text-ink-soft mt-1">두 사람 모두 누보 출근</p>
          <div className="mt-5 mono text-2xl font-extrabold text-ink tracking-tight">
            1.0억 ~ 1.55억
          </div>
          <p className="text-xs text-ink-mute mt-1">1차 합산 계약 · 범위 내 변동</p>
          <div className="mt-5 pt-4 border-t border-line">
            <div className="text-[10px] font-extrabold tracking-wider text-ink-mute mb-1.5">
              누보 추가 부담
            </div>
            <p className="text-sm text-ink font-bold">
              사무 2석 + 상주 출장·체류 실비 정산
            </p>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 가장 빠른 진행, 즉시 응대</li>
            <li>· 다부서 협조 즉시 가능</li>
            <li>· 도메인 학습 속도 가장 빠름</li>
          </ul>
        </Card>
      </div>

      <Card tone="brand">
        <Tag tone="brand">개발 비용은 모든 안에 동일</Tag>
        <p className="mt-3 text-sm text-ink leading-relaxed">
          본 제안서의 개발 비용{" "}
          <strong className="text-brand-deep">최소 1억 ~ 표준 1.55억</strong>은
          0~3단계를 묶은 1차 합산 계약 기준이며, 1·2·3안 어느 쪽을 선택하셔도
          동일하게 적용됩니다. 안별 차이는{" "}
          <strong className="text-ink">누보 측 사무 공간과 상주 부대 실비</strong>
          에서만 발생합니다.
        </p>
      </Card>

      <Card tone="warn" className="mt-3 mb-8">
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-ink">동일하게 차차 진행 — </strong>
          이후 운영(월 200만 ~ 1,200만, 강도에 따라 별도 협의)과 외부 시황 연계
          옵션, 후속 자동화 과제도 모든 안에서 동일하게 단계적으로 확장됩니다.
        </p>
      </Card>

      <Card tone="soft" className="mt-3">
        <p className="text-sm text-ink-soft leading-relaxed">
          <strong className="text-ink">참고 — </strong>
          장기 운영을 고려해 누보 내부에 담당 인력을 두는 인하우스 연계 형태도
          별도로 협의 가능합니다 (겸직·역할·KPI·거주 조건은 별도 합의).
        </p>
      </Card>
    </SlideShell>
  );
}

/* ================== 신규 — 단계별 일정·산출물·금액 (05+06+07 통합) ================== */

function SlideComboPhasePricing() {
  const phases = [
    {
      n: "0",
      title: "진단 및 상세 설계",
      period: "최소 4주",
      outputs: "데이터 진단서, KPI 정의서, 코드 매핑 계획, 구축 명세서",
      review: "범위 확정 · 다음 단계 승인",
      cost: "10,000,000 ~ 15,000,000",
      width: 14,
    },
    {
      n: "1",
      title: "데이터 기반 구축",
      period: "최소 8주",
      outputs: "분석용 데이터마트, 기준 테이블, 기본 현황 화면",
      review: "데이터 정합성 · 조회 정확성 검수",
      cost: "40,000,000 ~ 60,000,000",
      width: 28,
    },
    {
      n: "2",
      title: "의사결정 MVP 구현",
      period: "최소 10주",
      outputs: "배분 추천 화면, 손익 비교, 설명 기능, 승인 흐름 초안",
      review: "회의 활용성 · 추천 결과 검토",
      cost: "35,000,000 ~ 55,000,000",
      width: 36,
    },
    {
      n: "3",
      title: "안정화 및 전환",
      period: "최소 6주",
      outputs: "권한 · 감사 로그 · 운영 문서 · 교육 자료",
      review: "운영 준비 완료 · 종료 승인",
      cost: "15,000,000 ~ 25,000,000",
      width: 22,
    },
  ];
  return (
    <SlideShell
      title="단계별 일정 · 산출물 · 금액"
      subtitle="0~3단계를 묶은 1차 합산 계약 기준입니다. 단계마다 검수를 통과해야 다음 단계로 진행되는 구조라 일정과 위험 통제가 안정적입니다."
    >
      <h3 className="text-base font-bold text-ink mb-3">전체 흐름 (최소 28주 / 6개월 이상)</h3>
      <div className="rounded-2xl border border-line bg-paper-soft p-5 mb-6">
        <div className="flex gap-2 mb-3">
          {phases.map((p, i) => (
            <div
              key={p.n}
              style={{ flex: p.width }}
              className={`h-14 rounded-lg flex items-center justify-center text-white font-bold text-sm relative ${
                i % 2 === 0 ? "bg-brand-deep" : "bg-brand"
              }`}
            >
              <div className="text-center">
                <div className="text-[10px] tracking-wider opacity-80 leading-none">
                  {p.n}단계
                </div>
                <div className="mono text-xs font-extrabold mt-0.5">
                  {p.period}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 text-[11px] text-ink-soft font-medium">
          {phases.map((p) => (
            <div
              key={p.n}
              style={{ flex: p.width }}
              className="text-center truncate"
            >
              {p.title}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-line overflow-hidden bg-paper">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[820px]">
            <thead className="bg-brand-soft">
              <tr>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  단계
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  기간
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  주요 산출물
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  검수 포인트
                </th>
                <th className="text-right px-4 py-3 text-[11px] font-extrabold tracking-wider text-brand-deep">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              {phases.map((p, i) => (
                <tr
                  key={p.n}
                  className={`border-t border-line ${
                    i % 2 === 1 ? "bg-paper-soft/40" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-bold text-ink whitespace-nowrap">
                    {p.n}단계 — {p.title}
                  </td>
                  <td className="px-4 py-3 text-ink mono whitespace-nowrap">
                    {p.period}
                  </td>
                  <td className="px-4 py-3 text-ink-soft">{p.outputs}</td>
                  <td className="px-4 py-3 text-ink-soft">{p.review}</td>
                  <td className="px-4 py-3 text-right text-ink mono font-bold whitespace-nowrap">
                    {p.cost}원
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-brand bg-brand-soft">
                <td className="px-4 py-4 font-extrabold text-brand-deep">
                  1차 합산 계약 합계
                </td>
                <td className="px-4 py-4 text-brand-deep mono font-bold whitespace-nowrap">
                  최소 28주
                </td>
                <td
                  className="px-4 py-4 text-brand-deep text-xs"
                  colSpan={2}
                >
                  단계별 검수 통과 후 다음 단계로 진입
                </td>
                <td className="px-4 py-4 text-right text-brand-deep mono font-extrabold whitespace-nowrap">
                  <div className="text-base">100,000,000 ~ 155,000,000원</div>
                  <div className="text-[10px] font-bold tracking-wider mt-0.5">
                    최소 1.0억 ~ 표준 1.55억 · 부가세 별도
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SlideShell>
  );
}

/* ================== 신규 — 1차 이후 로드맵 ================== */

function SlideRoadmap() {
  return (
    <SlideShell
      title="1차 이후 — 차차 확장되는 장기 파트너십"
      subtitle="1차 28주 / 1.55억은 시작점입니다. 이후 운영 안정화와 외부 시황 연계, 차기 프로젝트로 자연스럽게 확장됩니다."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card tone="brand">
          <div className="text-[10px] tracking-[0.18em] font-extrabold text-brand mb-2">
            STAGE 1 — 진행형
          </div>
          <h3 className="text-lg font-bold text-ink leading-tight">
            운영 · 지속 개선
          </h3>
          <p className="text-sm text-ink-soft mt-2 leading-relaxed">
            룰 보완, 모델 점검, 사용자 피드백 반영, 운영 회의 지원
          </p>
          <div className="mt-4 pt-3 border-t border-brand/20 text-xs">
            <div className="text-ink-mute font-bold mb-1">월 운영비</div>
            <div className="text-ink mono font-bold">
              월 200만 ~ 1,200만 (강도별 별도 협의)
            </div>
          </div>
        </Card>

        <Card tone="paper">
          <div className="text-[10px] tracking-[0.18em] font-extrabold text-ink-mute mb-2">
            STAGE 2 — 옵션
          </div>
          <h3 className="text-lg font-bold text-ink leading-tight">
            외부 시황 연계
          </h3>
          <p className="text-sm text-ink-soft mt-2 leading-relaxed">
            AXE 등 국제 시황 자료, 환율·운임·정책 변수 반영, 구매 적기 시나리오
          </p>
          <div className="mt-4 pt-3 border-t border-line text-xs">
            <div className="text-ink-mute font-bold mb-1">기간 / 견적</div>
            <div className="text-ink mono font-bold">
              4~6주 추가 / 35,000,000원
            </div>
          </div>
        </Card>

        <Card tone="paper">
          <div className="text-[10px] tracking-[0.18em] font-extrabold text-ink-mute mb-2">
            STAGE 3 — 차기 프로젝트
          </div>
          <h3 className="text-lg font-bold text-ink leading-tight">
            도메인 확장
          </h3>
          <p className="text-sm text-ink-soft mt-2 leading-relaxed">
            1차 안정화 후 별도 협의로 자연스럽게 확장
          </p>
          <ul className="mt-3 pt-3 border-t border-line text-xs text-ink-soft space-y-1.5">
            <li>· P2. 사무 업무 자동화</li>
            <li>· P3. 농업 · 비료 도메인 AI</li>
            <li>· P4. AI 운영 인프라</li>
          </ul>
        </Card>
      </div>

      <Card tone="ink">
        <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
          <strong className="text-white">차차 확장 — </strong>
          1차 종료 후 누보가 강도와 범위를 확인한 뒤 단계적으로 운영 → 외부 시황
          → 차기 도메인 과제로 확장합니다. 모든 후속 단계는 1차 결과 검증 후
          별도 협의입니다.
        </p>
      </Card>
    </SlideShell>
  );
}

/* ================== 신규 — 협조 + 운영 원칙 (통합) ================== */

function SlideCoopPrinciples() {
  return (
    <SlideShell
      title="누보 협조 사항 · 운영 원칙"
      subtitle="안정적 진행을 위해 누보 측에서 준비해주실 사항과, 모든 안에 공통 적용되는 운영 원칙입니다."
    >
      <h3 className="text-base font-bold text-ink mb-3">누보 측 협조 사항</h3>
      <div className="grid md:grid-cols-2 gap-3 mb-7">
        <Card tone="paper">
          <Tag tone="brand">데이터 / 시스템</Tag>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 판매·구매·생산 계획·실적 샘플 데이터 (3~6개월치)</li>
            <li>· 지역·사업부·채널 코드표 및 변경 이력</li>
            <li>· 더존 테스트 계정 또는 시뮬레이션 환경</li>
            <li>· 보안·반출 정책 사전 정의</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">업무 / 검수</Tag>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· S&amp;OP 회의 보고 자료 및 판단 기준</li>
            <li>· 내부 진행 책임자 1명 지정</li>
            <li>· 단계별 리뷰 회의 참여자 지정</li>
            <li>· 중간 산출물 승인 절차 정의</li>
          </ul>
        </Card>
      </div>

      <h3 className="text-base font-bold text-ink mb-3">공통 운영 원칙</h3>
      <div className="grid md:grid-cols-3 gap-3">
        <Card tone="brand">
          <Tag tone="brand">사람 승인</Tag>
          <ul className="mt-3 space-y-1.5 text-xs text-ink-soft leading-relaxed">
            <li>· 추천 결과는 사람이 승인 후 실행</li>
            <li>· 추천 사유와 사용 데이터를 화면에 표시</li>
            <li>· 배분·구매 판단은 비교 중심으로 제공</li>
          </ul>
        </Card>
        <Card tone="brand">
          <Tag tone="brand">소유권 이관</Tag>
          <ul className="mt-3 space-y-1.5 text-xs text-ink-soft leading-relaxed">
            <li>· 소스코드·데이터 정의서·운영 매뉴얼 이관</li>
            <li>· 관리자 계정·배포 권한 이전 가능 구조</li>
            <li>· 종료·인력 변경 시 인수인계 의무</li>
          </ul>
        </Card>
        <Card tone="warn">
          <Tag tone="warn">비용 통제</Tag>
          <ul className="mt-3 space-y-1.5 text-xs text-ink-soft leading-relaxed">
            <li>· 클라우드·API·외부 데이터 비용 상한선</li>
            <li>· 업데이트 주기·사용량 정책 고정</li>
            <li>· 외부 시황 연계는 1차 성과 확인 후 확장</li>
          </ul>
        </Card>
      </div>
    </SlideShell>
  );
}

/* ================== 슬라이드 15. 마무리 (명함 톤) ================== */

function Slide15Closing() {
  return (
    <article className="rounded-3xl overflow-hidden bg-brand text-white shadow-[0_18px_40px_rgba(40,57,200,0.20)] min-h-[60vh] relative">
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-white/5" />
      <div className="absolute -right-16 top-12 w-56 h-56 rounded-full bg-white/5" />

      <div className="relative p-10 sm:p-16 flex flex-col justify-between min-h-[60vh]">
        <div>
          <div className="inline-flex px-3 py-1.5 rounded-full bg-white/15 text-white/95 text-[10px] font-extrabold tracking-[0.22em]">
            LAST SLIDE
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
            함께 시작해볼까요?
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
            1차 합산 계약{" "}
            <span className="mono font-bold">최소 1.0억 ~ 1.55억</span>으로
            0~3단계를 한 번에 시작합니다. 단계별 검수를 통과하며 다음 단계로
            진행되는 구조라 일정 확보가 안정적이고, 1·2·3안 어느 쪽이든 동일하게
            흘러가며 이후 운영·외부 시황·후속 자동화로 차차 확장됩니다.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-3">
          {[
            {
              n: "01",
              title: "범위 확정",
              desc: "누보 내부에서 1차 구축 우선순위를 확정합니다.",
            },
            {
              n: "02",
              title: "샘플 데이터 협의",
              desc: "3~6개월치 데이터 보안 범위를 함께 정합니다.",
            },
            {
              n: "03",
              title: "1차 합산 계약 체결",
              desc: "0~3단계를 한 번에 묶어 본 구축에 착수합니다.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-5"
            >
              <div className="mono text-xs tracking-[0.2em] text-white/60 font-bold mb-2">
                STEP {s.n}
              </div>
              <h4 className="text-lg font-bold text-white leading-tight">
                {s.title}
              </h4>
              <p className="text-sm text-white/80 mt-1.5 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="pluck-logo text-3xl text-white">PLUCK</div>
            <div className="text-white/70 text-xs tracking-[0.15em] mt-1 font-bold">
              FAST · RELIABLE · DEVELOPMENT
            </div>
          </div>
          <div className="sm:text-right space-y-1.5 text-white/85 mono text-[13px]">
            <div className="flex sm:justify-end items-center gap-2 flex-wrap">
              <a
                href="mailto:hello@pluck.co.kr"
                className="hover:text-white transition-colors"
              >
                hello@pluck.co.kr
              </a>
              <a
                href="mailto:hello@pluck.co.kr"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white text-ink text-[11px] font-bold tracking-wide hover:bg-white/85 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                메일 보내기
              </a>
            </div>
            <div>황성안 · 심재형</div>
            <div className="text-white/55">2026.04.27</div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ================== 슬라이드 등록 ================== */

export const slides = [
  { section: "표지", title: "제안서 표지", component: Slide01Cover },
  {
    section: "01. 개요",
    title: "제안 개요",
    component: Slide02Overview,
  },
  {
    section: "02. 배경",
    title: "누보의 현재 상황",
    component: Slide04Background,
  },
  {
    section: "03. 범위",
    title: "제안 범위",
    component: Slide05Scope,
  },
  {
    section: "04. 단계 · 금액",
    title: "단계별 일정 · 산출물 · 금액",
    component: SlideComboPhasePricing,
  },
  {
    section: "05. 로드맵",
    title: "1차 이후 로드맵",
    component: SlideRoadmap,
  },
  {
    section: "06. 진행 방식",
    title: "1·2·3안 인력 운용",
    component: SlidePlans,
  },
  {
    section: "07. 옵션",
    title: "추가 옵션 및 운영비",
    component: Slide09Options,
  },
  {
    section: "08. 협조 · 원칙",
    title: "누보 협조 사항 · 운영 원칙",
    component: SlideCoopPrinciples,
  },
  {
    section: "09. 우리는",
    title: "플럭은 어떻게 일합니다",
    component: Slide03HowWeWork,
  },
  {
    section: "10. 다음 단계",
    title: "다음 단계 제안",
    component: Slide13NextSteps,
  },
  {
    section: "맺음",
    title: "함께 시작하기",
    component: Slide15Closing,
  },
];

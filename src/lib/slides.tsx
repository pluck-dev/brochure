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
    <div className="slide rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(40,57,200,0.18)] grid sm:grid-cols-[1.2fr_1fr] min-h-[64vh]">
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
            빠르고 안정적으로 구축하는
            <br />
            실행 중심 파트너
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
            더존 ERP와 외부 시황 정보를 함께 보고, 판매·구매·생산 판단을 더
            빠르고 일관되게 할 수 있도록 돕는 시스템 제안입니다.
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
      subtitle="이번 제안의 핵심은 AI 자체가 아니라, 누보가 더 빨리 비교하고 더 쉽게 합의할 수 있는 판단 도구를 만드는 것입니다."
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
            자료 정리 + 비교 기준 + 쉬운 설명
          </div>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            흩어진 자료를 한곳에 모으고, 비교 기준을 만들고, 결과를 이해하기
            쉬운 문장과 화면으로 보여줍니다.
          </p>
        </Card>
        <Card tone="warn">
          <Tag tone="ink">핵심 원칙</Tag>
          <div className="mt-3 text-2xl font-bold text-ink leading-tight tracking-tight">
            최종 판단은 사람
          </div>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            AI는 추천·비교·설명을 담당하고, 최종 승인과 실행 판단은 누보가
            보유합니다.
          </p>
        </Card>
      </div>

      <Card tone="ink">
        <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
          1차로는 누보 내부 데이터를 기준으로 판매, 구매, 생산 판단을 돕는
          핵심 화면을 구축하고, 이후 필요에 따라 외부 시황 정보 연계와 추가
          자동화로 넓혀가는 방식입니다.
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
      title: "단계별로 확인하며 진행합니다",
      desc: "각 단계 결과를 함께 확인한 뒤 다음 단계로 넘어갑니다. 큰 계약만 먼저 하고 나중에 확인하는 방식이 아닙니다.",
    },
    {
      no: "02",
      title: "실제로 쓰는 화면을 만듭니다",
      desc: "기술 설명보다 회의와 운영 현장에서 바로 사용할 수 있는 화면과 결과물을 만드는 데 집중합니다.",
    },
    {
      no: "03",
      title: "최종 결정은 누보가 합니다",
      desc: "시스템은 비교와 추천을 돕지만, 발주·배분 같은 중요한 결정은 반드시 누보가 직접 승인하도록 구성합니다.",
    },
    {
      no: "04",
      title: "한 업체에 묶이지 않게 합니다",
      desc: "운영 자료와 권한이 누보에 남도록 구성해, 담당 업체가 바뀌어도 계속 운영할 수 있게 합니다.",
    },
  ];
  return (
    <SlideShell
      title="플럭은 이렇게 일합니다"
      subtitle="누보가 걱정할 수 있는 부분을 줄이고, 실제로 확인하면서 진행하는 방식으로 프로젝트를 수행합니다."
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
            <li>· 동일 제품이라도 국내·해외·B2B·생산 부서별 우선순위가 상이함</li>
            <li>· 손익 기준으로 어느 채널에 우선 배분할지 신속한 합의가 어려움</li>
            <li>· 원료 구매 시점 판단이 개인 경험에 크게 좌우될 수 있음</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">데이터 이슈</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 데이터는 더존 ERP에 있지만, 바로 판단에 쓰기에는 먼저 정리 작업이 필요함</li>
            <li>· 지역·조직 변경 이력 때문에 코드와 기준을 먼저 통일해야 함</li>
            <li>· 활용 가능한 과거 데이터 범위는 2013~2026년으로 확인됨</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">의사결정 이슈</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 판매계획, 실적, 구매, 생산 계획이 연쇄적으로 연결됨</li>
            <li>· 전체 흐름을 함께 보아야 합리적인 배분 및 구매 판단이 가능함</li>
            <li>· 현재는 여러 자료를 한 번에 비교해볼 수 있는 통합 화면이 부족함</li>
          </ul>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">외부 변수</Tag>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed">
            <li>· 전쟁, 중국 정책, 물류, 환율 등 외부 요인이 원료 구매 적기에 큰 영향을 미침</li>
            <li>· 국제 시황 자료는 내부 가격 정보와 함께 봐야 실질적인 판단이 가능함</li>
            <li>· 하나의 정답을 맞히는 것보다 여러 시나리오를 비교하는 방식이 더 실무적임</li>
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
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <Card tone="brand">
          <Tag tone="brand">1차 핵심 범위</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            내부 의사결정 지원
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 판매 계획 대비 실적 분석</li>
            <li>· 지역·채널·사업부 기준 손익 비교</li>
            <li>· 구매 실적·계획과 생산 계획의 연계 분석</li>
            <li>· 배분 우선순위 추천 및 근거 설명</li>
          </ul>
        </Card>
        <Card tone="brand">
          <Tag tone="brand">화면 및 운영 범위</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            의사결정 회의 보조 화면
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 현재 재고와 판매 방향 요약</li>
            <li>· 배분 추천안과 기회손실 비교</li>
            <li>· 추천 이유를 쉬운 문장으로 설명</li>
            <li>· 사람 승인 전제의 검토 절차</li>
          </ul>
        </Card>
      </div>

      <Card tone="soft" className="border-dashed">
        <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
          외부 시황 정보 연계, 반복 업무 자동화, 신규 사업 확장 과제는 1차 범위에
          포함되지 않으며, <strong className="text-ink">1차 성과 확인 이후 별도 후속
          과제로 다룹니다</strong> (자세한 내용은 「확장 과제」 슬라이드 참조).
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
      subtitle="1차 구축 이후 선택 가능한 확장 항목과 운영 단계의 월 비용입니다."
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
            외부 시황 정보 연계, 구매 시점 비교, 외부 변수 반영 화면을
            추가합니다.
          </p>
        </Card>
        <Card tone="brand">
          <Tag tone="brand">운영 지원</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">월 운영 및 개선</h3>
          <div className="mono text-2xl sm:text-3xl font-extrabold text-brand-deep mt-2 tracking-tight">
            2,000,000 ~ 12,000,000원
          </div>
          <p className="text-xs text-ink-mute mt-1">
            월 단위 · 강도별 별도 협의 · 부가세 별도
          </p>
          <p className="mt-4 text-sm text-ink-soft leading-relaxed">
            가벼운 유지보수부터 적극적인 개선·운영까지 누보의 사용 강도에 따라
            범위와 비용을 합의합니다.
          </p>
        </Card>
      </div>

      <Card tone="warn">
        <Tag tone="warn">별도 부담 항목</Tag>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed">
          클라우드 서버 비용, AI 사용료, 외부 시황 데이터 구독료는 누보 측
          별도 부담입니다. 일반적으로{" "}
          <strong className="text-ink">월 300만~1,000만원 수준</strong>에서
          시작하며, 사용량과 연계 범위에 따라 변동됩니다.
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
            <li>· 본 구축 전환 시 단절 없이 이어서 진행</li>
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
      title: "본 계약 체결",
      desc: "범위·일정·금액 확정 후 본 계약을 체결합니다.",
    },
    {
      n: "04",
      title: "단계별 검수 진행",
      desc: "각 단계 산출물 승인 후 다음 단계로 순차 진행합니다.",
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
      subtitle="프로젝트 착수를 위한 권장 절차입니다."
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
          각 단계 산출물의 검수와 승인을 전제로 다음 단계로 진행합니다. 정확한
          금액과 세부 일정은 1차 구축 범위 확정 이후 확정됩니다.
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
            <li>· 단계별 검수와 산출물 승인을 전제로 순차 진행</li>
            <li>· 0단계 진단(4주)부터 운영 전환까지 흐름 단절 없음</li>
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
      title="협업 방식에 따른 3가지 진행안"
      subtitle="구축 내용은 같고, 차이는 현장 참여 방식과 이에 따른 총 비용입니다."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card tone="paper">
          <Tag tone="ink">1안</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">전면 원격</h3>
          <p className="text-sm text-ink-soft mt-1">
            필요한 경우 방문을 병행하는 방식
          </p>
          <div className="mt-5 mono text-2xl font-extrabold text-ink tracking-tight">
            9,500만 ~ 1.4억
          </div>
          <p className="text-xs text-ink-mute mt-1">출장·체류 부담 없음</p>
          <div className="mt-5 pt-4 border-t border-line">
            <div className="text-[10px] font-extrabold tracking-wider text-ink-mute mb-1.5">
              누보 추가 부담
            </div>
            <p className="text-sm text-ink font-bold">없음</p>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 현장 출입 부담 없음</li>
            <li>· 화상 회의 중심, 월 1~2회 방문</li>
            <li>· 현장 이해 속도는 상대적으로 느릴 수 있음</li>
          </ul>
        </Card>

        <Card tone="paper">
          <Tag tone="brand">2안</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            일부 현장 협업
          </h3>
          <p className="text-sm text-ink-soft mt-1">
            1명 기준, 주 2~3일 현장 참여
          </p>
          <div className="mt-5 mono text-2xl font-extrabold text-brand-deep tracking-tight">
            1.0억 ~ 1.55억
          </div>
          <p className="text-xs text-ink-mute mt-1">출장·체류 일부 포함 (표준 견적)</p>
          <div className="mt-5 pt-4 border-t border-line">
            <div className="text-[10px] font-extrabold tracking-wider text-brand mb-1.5">
              누보 추가 부담
            </div>
            <p className="text-sm text-ink font-bold">사무 1석</p>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 회의 참여와 피드백 반영이 빠름</li>
            <li>· 비용과 실행 효율의 균형이 우수함</li>
            <li>· 본 제안서의 기본 가정</li>
          </ul>
        </Card>

        <Card tone="paper">
          <Tag tone="warn">3안</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">전면 현장 협업</h3>
          <p className="text-sm text-ink-soft mt-1">
            두 인력 모두 누보 현장 중심으로 참여
          </p>
          <div className="mt-5 mono text-2xl font-extrabold text-ink tracking-tight">
            1.1억 ~ 1.7억
          </div>
          <p className="text-xs text-ink-mute mt-1">출장·체류 풀 반영</p>
          <div className="mt-5 pt-4 border-t border-line">
            <div className="text-[10px] font-extrabold tracking-wider text-ink-mute mb-1.5">
              누보 추가 부담
            </div>
            <p className="text-sm text-ink font-bold">사무 2석</p>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 가장 빠른 진행과 즉각 대응이 가능함</li>
            <li>· 다부서 협의가 필요한 경우 유리함</li>
            <li>· 현장 이해도 확보 속도가 가장 빠름</li>
          </ul>
        </Card>
      </div>

      <Card tone="brand">
        <Tag tone="brand">핵심 차이</Tag>
        <p className="mt-3 text-sm text-ink leading-relaxed">
          세 안 모두 구축 목표와 결과물은 같지만, 현장 참여 수준이 높아질수록
          출장·체류와 운영 부담이 총 비용에 반영됩니다. 누보 입장에서는{" "}
          <strong className="text-ink">속도와 비용의 균형</strong>을 기준으로
          선택하시면 됩니다.
        </p>
      </Card>

      <Card tone="warn" className="mt-3 mb-8">
        <p className="text-sm text-ink-soft leading-relaxed">
          어느 안을 선택하더라도 단계별 검토 방식과 후속 확장 구조는 동일하게
          유지됩니다.
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
      outputs: "데이터 진단서, 핵심 판단 기준서, 코드 정리 계획, 구축 명세서",
      review: "범위 확정 · 다음 단계 승인",
      cost: "10,000,000 ~ 15,000,000",
      width: 14,
    },
    {
      n: "1",
      title: "데이터 기반 구축",
      period: "최소 8주",
      outputs: "분석용 데이터 정리, 기준 테이블, 기본 현황 화면",
      review: "데이터 정합성 · 조회 정확성 검수",
      cost: "40,000,000 ~ 60,000,000",
      width: 28,
    },
    {
      n: "2",
      title: "의사결정 화면 구축",
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
      subtitle="각 단계를 확인하고 넘어가는 방식으로 진행해 일정과 품질을 안정적으로 관리합니다."
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
      title="1차 이후 — 단계적 확장 로드맵"
      subtitle="1차 구축 이후에는 운영 안정화, 외부 정보 연계, 추가 과제 검토 순으로 차근차근 확장할 수 있습니다."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card tone="brand">
          <div className="text-[10px] tracking-[0.18em] font-extrabold text-brand mb-2">
            STAGE 1 — 진행형
          </div>
          <h3 className="text-lg font-bold text-ink leading-tight">
            운영 안정화 및 지속 개선
          </h3>
          <p className="text-sm text-ink-soft mt-2 leading-relaxed">
            운영 규칙 보완, 결과 점검, 사용자 피드백 반영, 운영 회의 지원
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
            외부 정보 연계
          </h3>
          <p className="text-sm text-ink-soft mt-2 leading-relaxed">
            국제 시황 자료, 환율, 운임, 정책 변수 반영, 구매 시점 비교
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
            추가 과제 확장
          </h3>
          <p className="text-sm text-ink-soft mt-2 leading-relaxed">
            1차 안정화 이후 별도 협의를 통해 확장
          </p>
          <ul className="mt-3 pt-3 border-t border-line text-xs text-ink-soft space-y-1.5">
            <li>· 반복 업무 자동화</li>
            <li>· 제품·채널별 손익 분석 고도화</li>
            <li>· 사업부 통합 관리 화면</li>
          </ul>
        </Card>
      </div>

      <Card tone="warn" className="mb-3">
        <Tag tone="warn">별도 부담 항목 (모든 안 공통)</Tag>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed">
          클라우드 서버 비용, AI 사용료, 외부 시황 데이터 구독료는 누보 측 별도
          부담입니다. 일반적으로{" "}
          <strong className="text-ink">월 300만 ~ 1,000만원 수준</strong>에서
          시작하며 사용량과 연계 범위에 따라 변동됩니다.
        </p>
      </Card>

      <Card tone="ink">
        <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
          <strong className="text-white">확장 원칙 </strong>
          1차 종료 후 운영 안정화, 외부 정보 연계, 추가 과제로 순차
          확장합니다. 모든 후속 단계는 1차 성과 검증을 전제로 별도 협의합니다.
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
      subtitle="안정적인 추진을 위해 누보 측 준비 사항과 공통 운영 원칙을 함께 정리했습니다."
    >
      <h3 className="text-base font-bold text-ink mb-3">누보 측 협조 사항</h3>
      <div className="grid md:grid-cols-2 gap-3 mb-7">
        <Card tone="paper">
          <Tag tone="brand">데이터 / 시스템</Tag>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-soft leading-relaxed">
            <li>· 판매·구매·생산 계획 및 실적 샘플 데이터 (3~6개월치)</li>
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
            <li>· 추천 사유와 사용 데이터를 화면에서 함께 확인</li>
            <li>· 배분·구매 판단은 비교 중심으로 제공</li>
          </ul>
        </Card>
        <Card tone="brand">
          <Tag tone="brand">소유권 이관</Tag>
          <ul className="mt-3 space-y-1.5 text-xs text-ink-soft leading-relaxed">
            <li>· 운영 자료와 설명 문서는 누보에 남도록 정리</li>
            <li>· 관리자 계정과 운영 권한 이전 가능 구조</li>
            <li>· 종료 또는 담당자 변경 시 인수인계 절차 포함</li>
          </ul>
        </Card>
        <Card tone="warn">
          <Tag tone="warn">비용 통제</Tag>
          <ul className="mt-3 space-y-1.5 text-xs text-ink-soft leading-relaxed">
            <li>· 서버·AI 사용료·외부 데이터 비용 상한선 설정</li>
            <li>· 업데이트 주기와 사용량 기준 사전 정의</li>
            <li>· 외부 시황 연계는 1차 성과 확인 후 확장</li>
          </ul>
        </Card>
      </div>
    </SlideShell>
  );
}

/* ================== 신규 — AI 전담 기능의 필요성 ================== */

function SlideAITeamRationale() {
  return (
    <SlideShell
      title="왜 누보에 AI 전담 기능이 필요한가"
      subtitle="AI팀은 단순한 기술 조직이 아니라, 누보의 수익성 관리와 미래 사업 확장을 뒷받침하는 전략 실행 기능으로 볼 수 있습니다."
    >
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <Card tone="brand">
          <Tag tone="brand">내부 역량 축적</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            판단 기준이 회사 안에 남습니다
          </h3>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">
            외부 업체가 화면만 만들어주는 구조가 아니라, 누보 내부에 데이터 기준과
            판단 방식이 계속 쌓이는 구조를 만들 수 있습니다.
          </p>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">수익성 관리 고도화</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            제품·채널·국가별 손익 대응이 빨라집니다
          </h3>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">
            무엇을 먼저 팔고, 어디에 배분하고, 언제 사는 것이 유리한지 더 빠르게
            비교할 수 있어 수익성 관리 체계가 한 단계 올라갑니다.
          </p>
        </Card>
        <Card tone="paper">
          <Tag tone="brand">수출 확대 대응</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            해외 거래가 늘수록 전담 기능이 필요합니다
          </h3>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">
            일본, 미국 등 해외 거래가 커질수록 가격, 공급, 일정 판단을 더 자주
            해야 하므로 이를 지속적으로 관리할 내부 기능이 필요합니다.
          </p>
        </Card>
        <Card tone="warn">
          <Tag tone="ink">기업가치 관점</Tag>
          <h3 className="mt-3 text-lg font-bold text-ink">
            미래 성장 체계에 대한 설명력이 생깁니다
          </h3>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">
            단순히 AI를 도입했다는 의미보다, 누보가 수익성 관리와 미래 사업
            확장을 준비하고 있다는 점을 더 분명하게 설명할 수 있습니다.
          </p>
        </Card>
      </div>

      <Card tone="ink">
        <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
          누보의 AI 전담 기능은 비용 절감만을 위한 조직이 아니라,{" "}
          <strong className="text-white">수익성 관리 체계 고도화</strong>,{" "}
          <strong className="text-white">수출 확대 대응</strong>,{" "}
          <strong className="text-white">미래 사업 실행력 내재화</strong>를 위한
          전략 실행 기능으로 설계될 수 있습니다.
        </p>
      </Card>
    </SlideShell>
  );
}

/* ================== 신규 — 후속 프로젝트 10선 ================== */

function SlideFutureProjects() {
  const leftProjects = [
    {
      n: "01",
      title: "원료 구매 시점 판단",
      desc: "환율, 물류, 국제 시황을 함께 보고 원료를 언제 사는 게 유리한지 비교",
    },
    {
      n: "02",
      title: "수출 국가별 손익 관리",
      desc: "국가·거래처·제품별 매출과 마진을 한눈에 비교하는 관리 화면",
    },
    {
      n: "03",
      title: "생산·재고 최적화",
      desc: "판매 계획과 출하 일정에 맞춰 생산량과 재고 수준을 조정하는 체계",
    },
    {
      n: "04",
      title: "제품별 수익성 계산",
      desc: "원가, 판매가, 물류비를 반영해 어떤 제품이 더 남는지 비교",
    },
    {
      n: "05",
      title: "영업 견적 지원",
      desc: "작물, 지역, 시즌에 따라 추천 제품과 견적 초안을 빠르게 만드는 기능",
    },
  ];
  const rightProjects = [
    {
      n: "06",
      title: "해외 거래 진행 관리",
      desc: "계약, 발주, 생산, 선적 진행 상황을 한 번에 추적하는 관리 화면",
    },
    {
      n: "07",
      title: "골프장 고객 관리",
      desc: "골프장별 제품 사용 이력과 관리 일정을 정리하는 고객 관리 시스템",
    },
    {
      n: "08",
      title: "홈가드닝 고객 운영",
      desc: "가정원예 고객 대상 추천, 정기 구매, 리뷰 관리를 돕는 판매 지원 체계",
    },
    {
      n: "09",
      title: "시험 데이터 정리 및 재사용",
      desc: "시험 포장과 작물 반응 데이터를 쌓아 다음 제품 개발에 다시 활용하는 체계",
    },
    {
      n: "10",
      title: "경영 현황 한눈에 보기",
      desc: "비료, 수출, 골프장, 원예 사업 현황을 대표와 임원이 함께 보는 통합 화면",
    },
  ];

  return (
    <SlideShell
      title="누보에 적합한 후속 프로젝트 10선"
      subtitle="1차 구축 이후, 누보의 현재 사업 구조를 바탕으로 현실적으로 검토할 수 있는 후보 과제들입니다."
    >
      <div className="grid lg:grid-cols-2 gap-4">
        <Card tone="paper">
          <Tag tone="brand">구매 · 수출 · 생산</Tag>
          <div className="mt-4 space-y-3">
            {leftProjects.map((p) => (
              <div key={p.n} className="border-b border-line last:border-b-0 pb-3 last:pb-0">
                <div className="text-sm font-bold text-ink">
                  {p.n}. {p.title}
                </div>
                <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card tone="brand">
          <Tag tone="brand">운영 · 고객 · 경영</Tag>
          <div className="mt-4 space-y-3">
            {rightProjects.map((p) => (
              <div key={p.n} className="border-b border-brand/15 last:border-b-0 pb-3 last:pb-0">
                <div className="text-sm font-bold text-ink">
                  {p.n}. {p.title}
                </div>
                <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SlideShell>
  );
}

/* ================== 슬라이드 15. 마무리 (명함 톤) ================== */

function Slide15Closing() {
  return (
    <article className="slide rounded-3xl overflow-hidden bg-brand text-white shadow-[0_18px_40px_rgba(40,57,200,0.20)] min-h-[60vh] relative">
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-white/5" />
      <div className="absolute -right-16 top-12 w-56 h-56 rounded-full bg-white/5" />

      <div className="relative p-10 sm:p-16 flex flex-col justify-between min-h-[60vh]">
        <div>
          <div className="inline-flex px-3 py-1.5 rounded-full bg-white/15 text-white/95 text-[10px] font-extrabold tracking-[0.22em]">
            FINAL
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
            감사합니다
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
            이번 1차 구축의 목적은 흩어진 자료를 한곳에서 보고, 판매·구매·생산
            판단을 더 빠르고 일관되게 할 수 있게 만드는 것입니다. 이후에는
            수출, 생산, 고객 관리, 추가 자동화 영역으로 자연스럽게 확장할 수
            있습니다.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-5">
            <div className="text-[10px] tracking-[0.18em] font-extrabold text-white/65 mb-2">
              1차 구축 초점
            </div>
            <p className="text-sm text-white/85 leading-relaxed">
              판매, 구매, 생산, 배분 판단을 하나의 흐름으로 연결해 회의와 운영에
              바로 쓰는 화면 구축
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-5">
            <div className="text-[10px] tracking-[0.18em] font-extrabold text-white/65 mb-2">
              확장 가능 영역
            </div>
            <p className="text-sm text-white/85 leading-relaxed">
              외부 정보 연계, 글로벌 수출, 고객 관리, 반복 업무 자동화까지
              단계적으로 확장 가능
            </p>
          </div>
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
    section: "03. 진행 원칙",
    title: "플럭은 어떻게 일합니다",
    component: Slide03HowWeWork,
  },
  {
    section: "04. 범위",
    title: "제안 범위",
    component: Slide05Scope,
  },
  {
    section: "05. 단계 · 금액",
    title: "단계별 일정 · 산출물 · 금액",
    component: SlideComboPhasePricing,
  },
  {
    section: "06. 진행 방식",
    title: "협업 방식에 따른 3가지 진행안",
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
    section: "09. 전략 기능",
    title: "왜 누보에 AI 전담 기능이 필요한가",
    component: SlideAITeamRationale,
  },
  {
    section: "10. 확장 과제",
    title: "누보에 적합한 후속 프로젝트 10선",
    component: SlideFutureProjects,
  },
  {
    section: "맺음",
    title: "마무리",
    component: Slide15Closing,
  },
];

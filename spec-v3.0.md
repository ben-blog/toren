# Toren Homepage — Spec v3.0

**제품**: Toren — Enterprise Agent Control Plane  
**회사**: ImperAI (EACP Inc.)  
**목적**: 디자인 파트너 + 투자자 유치  
**배포**: GitHub Pages (정적 HTML/CSS/JS, 빌드 없음)  
**최종 업데이트**: 2026-05-03 (세션 3)

---

## 변경 이력

| 버전 | 시기 | 주요 변경 |
|---|---|---|
| v1.0 | 2026-04 초 | 최초 작성, 다크 스킴 (딥 네이비/틸/앰버) |
| v1.2 | 2026-04 중 | Pretendard 단일 폰트, 다크 스킴 유지, 브랜드 가이드라인 수령 |
| v3.0 | 2026-05-02 (세션 1) | 브랜드 가이드라인 전면 적용 (라이트 스킴), Jost+SUIT 폰트, 전체 페이지 구조 재설계, style.css 공통화, insight.html 추가, offering.html 완전 재구축 |
| v3.0.1 | 2026-05-02 (세션 2) | offering.html i18n 전면 감사 (T/TARCH/FEED_DECISIONS 오염 제거), hero 헤드카피 제거 (eyebrow only), who-we-are.html nav 로고 경로 수정 |
| v3.0.2 | 2026-05-03 (세션 3) | who-we-are.html hero img 태그 방식 전환 (16:9 자연 비율), pillars 3개 복원 (AI 연구·정책 커뮤니티), 팀 카드 폰트 크기/gap 조정, LinkedIn URL 수정, Ben 경력 추가 (Global Consulting Firms 15년); index.html ticker 동적 JS fill 방식으로 재구현; insight.html cursordb 아티클 추가 (Tom's Hardware · The Register); vision.html pack-h2 KO br 제거 |

---

## 파일 구조 (현재)

```
index.html            ← 메인 랜딩
vision.html           ← 세계관 / 선언문
offering.html         ← 서비스 + 제품 상세
who-we-are.html       ← 팀 소개
insight.html          ← 아티클 / 인사이트
style.css             ← 공통 CSS (nav, footer, reset, 변수, 애니메이션)
favicon.svg
imperai_logo_white_v2.png   ← footer 전용 ImperAI 로고

assets/
  toren_hero_crystal.mp4    ← index.html hero 배경 영상
  hero_vision.webp          ← vision.html hero 배경 이미지
  offering_hero.webp        ← offering.html hero 배경 이미지 (추가 예정)
  toren_logo_dark.png       ← nav 로고 (라이트 테마 페이지)
  toren_logo_light.png      ← nav 로고 (다크 테마 / vision.html)
  logos/
    lakera.png
    guardrails.png
    langsmith.png
    langfuse.svg
    portkey.webp
    litellm.png
  andrew_marble.png
  wwa_hero.webp
  ben_eum.png
  sangdeok_seo.png
  sangdeok_seo_profile.jpeg

fonts/
  SUIT-Variable.woff2         ← KO 전용
  SUIT-Variable.css
  Jost-Variable.woff2         ← EN 헤딩/UI
  Jost-Variable-Italic.woff2
```

---

## 디자인 시스템

### 컬러 (CSS :root)

```css
--obsidian:  #0A0A0A   /* 주 텍스트 */
--navy:      #1B2A4E   /* 권위, CTA 배경, 강조 */
--authority: #2C4270   /* 액센트, hover */
--slate:     #5E6675   /* 보조 텍스트 */
--mist:      #A8ADB7   /* 캡션, 비활성 */
--hairline:  #D9D6CE   /* 구분선 */
--ivory:     #F7F6F2   /* 섹션 배경 */
--white:     #FFFFFF   /* 캔버스 */
```

**원칙**: 라이트 스킴. White/Ivory 배경, Obsidian 텍스트, Navy 시그널. 그라데이션 없음, 장식 없음.  
다크 섹션(differentiation, integration-path, kr-pack, footer)만 예외적으로 Obsidian/Navy 배경 사용.

### 타입 스케일 (CSS :root)

```css
--t-display: clamp(32px, 4.5vw, 60px)
--t-h1:      clamp(26px, 3.4vw, 48px)
--t-h2:      clamp(20px, 2.5vw, 34px)
--t-h2-sm:   clamp(18px, 2vw, 26px)
--t-h3:      18px
```

KO 모드(`body.ko`)에서 약 8% 축소 override (SUIT 폰트의 em-square 차이 보정).

### 폰트

```css
--font-en: 'Jost Variable', sans-serif   /* EN 헤딩, UI 레이블, 숫자 */
--font-kr: 'SUIT', sans-serif            /* KO 텍스트, body 전체 */
```

KO 모드에서 주요 헤딩에 `--font-kr` override + line-height 1.35–1.4으로 증가.

### 레이아웃 변수

```css
--col-wide:  1080px
--col-text:  720px
--col-narrow: 520px
--pad-v:     120px   /* 섹션 상하 패딩 (모바일에서 56px로 축소) */
--pad-h:     72px    /* 섹션 좌우 패딩 (모바일에서 20px로 축소) */
```

### 반응형 브레이크포인트

- Tablet: `max-width: 960px`
- Mobile: `max-width: 560px`

### Kicker 패턴

```css
.kicker {
  font-size: 10px; letter-spacing: 0.22em; font-weight: 700;
  color: var(--navy); text-transform: uppercase;
  display: flex; align-items: center; gap: 14px; margin-bottom: 24px;
}
.kicker::before { content: ''; width: 28px; height: 1px; background: var(--navy); }
```

다크 섹션에서는 color/background를 rgba(255,255,255,0.4) / rgba(255,255,255,0.25)로 override.

---

## 언어 시스템

- 기본 언어: **KO** (URL param 없을 때)
- URL 파라미터: `?lang=ko` / `?lang=en`
- 페이지 이동 시 `currentLang` 파라미터 유지
- 번역: 각 HTML 파일 내 `const T = { en: {...}, ko: {...} }` 정의
- `setLang(l)`: `T[l]` 키 순회 → `document.getElementById(id).innerHTML = T[l][id]`
- 인터랙티브 데이터(tarch diagram 등)는 별도 객체(`TARCH`, `FEED_DECISIONS`)로 분리

**T 오브젝트 관리 원칙**:
- DOM에 `id=` 없는 T 키는 죽은 코드 → 즉시 삭제
- EN/KO 키 개수 동일해야 함
- 인터랙티브 JS 객체(TARCH 등)에 T 키를 섞지 않는다

---

## 네비게이션

### 데스크톱 Nav (공통)

```
[Toren 로고] | Vision · Offering · Who We Are · Insight · Get Started | [KR/EN] [Request a Demo]
```

- `Request a Demo` → `goIndex('#contact', 'demo')`
- `Get Started` → `#contact` (앵커)
- 현재 페이지 메뉴 항목: `class="active"`
- 언어 스위치: pill 형태 KR / EN 토글

### 모바일 Nav

- 브레이크포인트 960px 이하에서 burger 메뉴 노출
- `.mob-nav`: 메뉴 링크 + 하단에 KR/EN 토글
- `.nav-links`, `.nav-cta`, `.lang-switch` 숨김

### Nav 테마별 동작

| 페이지 | 초기 상태 | 스크롤 후 |
|---|---|---|
| index / offering / who-we-are | frosted glass (ivory 75% + blur) | 하단 보더 표시 |
| vision | 완전 투명, dark (흰 링크) | `rgba(8,8,8,0.42)` + blur |

**vision.html**: 로고 항상 `toren_logo_light.png`, 링크 항상 `rgba(255,255,255,0.5)`

### 페이지 간 이동

- 서브 페이지 → index.html 섹션: `goIndex('#section')` 함수 사용
- 모든 href에 `?lang=`+currentLang 자동 삽입

---

## 페이지별 스펙

---

### index.html — 메인 랜딩

#### 섹션 구성

1. **Hero** — 비디오 배경, 헤드카피, ticker
2. **Vision Teaser** — 세계관 미리보기 (Q&A 3쌍)
3. **Offering Teaser** — 5개 capability 태그
4. **Trust / Pillars** — 3개 신뢰 기둥
5. **Contact** — 3탭 폼 (General / Demo / Investor)
6. **Footer**

#### Hero (`#hero`)

- 배경: `<video>` — `assets/toren_hero_crystal.mp4` (autoplay, muted, loop)
- 오버레이: 그라데이션 (아래쪽 어두움)
- 구성: hero-tag (eyebrow) / hero-h1 (헤드카피) / hero-p (서브카피) / hero-support / CTA 버튼 / ticker (3개 숫자 슬라이드)

#### Vision Teaser (`.vision-teaser`)

- kicker + h2 + sub + link
- 3개 Q&A 카드 (vt-q1/a1, vt-q2/a2, vt-q3/a3)
- Vision 페이지 링크

#### Offering Teaser (`.offering-teaser`)

- kicker + h2 + sub + link
- 5개 capability 태그: Policy-as-Code / HITL Approval / Decision Log / ROI Engine / Audit Trail
- ot-key: 한 줄 closing statement

#### Trust / Pillars (`#trust`)

- 3개 pillar: 각 title + body
- Pillar 3에 Vision 페이지 link

#### Contact Form (`#contact`)

- 3개 탭: General (일반 문의) / Demo (데모 신청) / Investor (투자자)
- 각 탭: 별도 폼 (company, title, name, email, message 등)
- 폼 제출: Formspree 또는 네이티브 action 처리

---

### vision.html — 세계관

#### Nav 특이사항

- 항상 dark (흰색 링크, logo-light)
- `vision.html?lang=` 링크에 active 클래스

#### 섹션 구성

| 섹션 | ID | 내용 |
|---|---|---|
| Manifesto Hero | `#manifesto` | 배경: `assets/hero_vision.webp`, 주장 문장, CTA |
| Point of View | `#pov` | 3개 belief (번호 좌측 고정, 텍스트 들여쓰기) |
| Problem | `#problem` | 72% / 9% 통계 (navy), 3개 페르소나 박스 |
| Why Now | `#why-now` | 3개 stat 카드 (62% / 9% / 6mo), 출처 McKinsey |
| Tooling Gap | `#stack-fail` | 비교 테이블 |
| CAPER Engine | `#eacp-definition` | 5단계 사이클 플로우 |
| Pack Evolution | `#pack-evolution` | 타임라인 트랙 + 3단계 카드 |

#### Tooling Gap 테이블 구조

**컬럼 순서**: Dim (sticky left:0) | **Toren** (sticky left:180px, `#ebf1fb` bg) | Security Guard | Observability | LLM Gateway | Custom Logging

**헤더**: 각 `<th>` 안에 `.mx-header-inner` wrapper
- `.mx-header-inner`: `position: relative; padding: 20px 20px 64px`
- `.mx-col-name`: `height: 40px; overflow: hidden`
- `.tool-logos`: `position: absolute; top: 72px; left: 20px; right: 20px`

**로고 높이 (per-logo override)**:
- Lakera: 18px / Guardrails AI: 20px / LangSmith: 12px (alt='LangSmith') / Langfuse: 16px
- Portkey: 14px / LiteLLM: 13px / Custom Logging: 로고 없음 (의도적)
- `.tool-logos { align-items: start }` — 상단 정렬

**행**: R1 Primary Buyer / R2 Decision Scope: 텍스트. R3–R6: Moon chart (SVG)
**Toren moon**: `fill: var(--navy)` / 경쟁사: 기본색
**hover**: JS `colIndex { sec:3, obs:4, gw:5, diy:6 }` → 해당 컬럼 opacity 조정

#### Pack Evolution 구조

- `.pack-stages` > `.pack-track` + `.pack-cards`
- 타임라인 트랙: hairline `::before` + `.pack-track-fill` (mist→authority→navy gradient)
- IntersectionObserver → `#pack-evolution.track-animated` → `scaleX(1)` 애니메이션
- 탭 레이블: "Stage 1 / Stage 2 / Stage 3" (EN/KO 공히 영문)
- 카드 상단 바: 2px / 3px / 4px 순차 강조
- Stage 3 카드: `background: rgba(27,42,78,0.03)`, `border-color: rgba(27,42,78,0.18)`
- 반응형: 960px 이하 트랙 숨김 + 카드 좌측 컬러 보더 / 560px 이하 1열

---

### offering.html — 서비스 + 제품 상세

#### Hero (`.prod-hero`)

- 배경: `assets/offering_hero.webp` (추가 예정) + CSS gradient overlay
- 현재: obsidian→navy CSS gradient + SVG noise texture
- 텍스트: eyebrow ("Offering") **만** 표시 — 별도 헤드카피 없음
- Hero는 분위기 전환 역할. 내러티브는 Journey 섹션부터 시작

#### 섹션 구성

| 섹션 | ID | 내용 |
|---|---|---|
| Journey Overview | `#journey` | 4단계 카드 |
| Product Reality | `#product-reality` | CAPER feed + tarch diagram + 에디션 |
| Integration Path | `#integration-path` | L0/L1/L2 |
| Why Now | `#why-now` | 3개 리스크 카드 |
| Use Cases | `#use-cases` | Before/After 3개 케이스 |
| KR Regulatory Pack | `#kr-pack` | KR-FIN / KR-PIPA / KR-ISMS + 페르소나 |
| Differentiation | `#differentiation` | 3개 라인 (Obsidian 배경) |
| Partners Marquee | — | 산업 분야 무한 스크롤 |
| CTA Strip | — | navy 배경 CTA |

#### Journey Overview (`#journey`)

4개 카드 — `Ground Truth / Launch Prep / Toren Launch / Toren Govern`
- 카드 1–2: 컨설팅 단계 (hairline 상단 바)
- 카드 3–4: `.toren-card` (navy 상단 바, navy 텍스트)
- 반응형: 4열 → 2열(960px) → 1열(560px)

#### Product Reality (`#product-reality`)

1. **CAPER Live Feed**: 5단계 (Cognition / Appraisal / Permission / Execution / Review), Toren 담당 3단계 하이라이트. 실시간 decision 시뮬레이션 피드. 결과: Approved / HITL / Blocked
2. **Tarch Diagram**: 5개 탭 (Overview / Policy / HITL / Log / ROI). Control Plane ↔ Agents ↔ Systems 레이어 다이어그램. 탭 hover로 즉시 전환. 스크롤 진입 시 레이어 순차 등장 + 흐름 점 애니메이션
3. **Editions**: Observer (PoC, ₩1–3억) / Guardian (Pilot, ₩3–7억) / Sovereign (Production, ₩10억+)
4. **Deploy Strip**: Cloud (SaaS) / Private (VPC/K8s) / Vault (Air-gap, HSM)
5. **Policy Pack 노트**: KR-FIN · KR-PIPA · KR-ISMS · EU AI Act · HIPAA (Apache 2.0)

#### Integration Path (`#integration-path`)

Dark (Obsidian) 배경. L0/L1/L2 3열 그리드.

| 레벨 | 시간 | 방식 |
|---|---|---|
| L0 · Visibility | 5분 | 환경변수 1개 (`TOREN_BASE_URL`, `TOREN_KEY`) |
| L1 · Audit Hook | 반나절 | SDK 콜백 (`toren.on_decision(callback=audit_hook)`) |
| L2 · Runtime Adapter | 1–3일 | `@toren.runtime(policies=["kr-fin"])` |

각 레벨: level 배지 / 시간 태그 / 제목 / 본문 / 코드 스니펫 / 획득 항목 3가지

#### KR Regulatory Pack (`#kr-pack`)

Navy 배경. 3개 팩 카드 + 3개 페르소나.

| 팩 | 근거법 | 상태 |
|---|---|---|
| KR-FIN | 금감원 AI 가이드라인 · 자본시장법 제174조 | Active · 2026-08 전면 시행 |
| KR-PIPA | 개인정보보호법 | Active · PIPC 정렬 |
| KR-ISMS | ISMS-P | Active · KISA 정렬 |

페르소나: CISO / CFO / 준법감시인

---

### who-we-are.html — 팀 소개

#### 섹션 구성

1. **Hero** — eyebrow + 제목 + 소개 2단락
2. **Origin Quote** — blockquote + attribution
3. **Trust Signals** — 숫자 3개 (경력 연수 등)
4. **Why / Pillars** — 3개 기둥 (어떤 사람들인가)
5. **Team** — 팀원 카드 (이름/역할/바이오/이전 경력/학력)
6. **Dual CTA** — 파트너십 신청 / 직접 이메일

#### Hero (`.wwa-hero`)

- **img 태그 방식** — `<img class="wwa-hero-bg">` + CSS grid stacking (offering.html과 동일한 패턴)
- `<img width:100%; height:auto; align-self:start>` → 자연 16:9 비율 유지, 크롭 없음
- grid-area: 1/1 스태킹: `wwa-hero-bg` → `wwa-hero-overlay` → `wwa-hero-content` (z-index 순)
- `wwa-hero-content`: `grid-template-columns: 1fr 1fr; gap: 80px; padding: 160px var(--pad-h) 120px`

#### Pillars (`.wwa-pillars`)

- 3개 pillar, `repeat(3, 1fr)` 그리드
- Pillar 1: `'Inside the room where enterprise AI decisions are made'`
- Pillar 2: `'Seeing both sides — the builder's tool and the buyer's reality'`
- Pillar 3: `'Inside the AI research and policy communities shaping this industry'` — AI 연구·정책 커뮤니티 참여 (조직명 미기재)

#### 팀 구성 (현재)

| ID | 사진 | 이름 | 역할 |
|---|---|---|---|
| member-2 | ben_eum.png | 음병찬 (Ben Eum) | Co-Founder & CEO |
| member-3 | andrew_marble.png | Andrew Marble | Co-Founder, AI Research |

- `.member-body` grid: `260px 1fr`
- `.wwa-team-grid` gap: `48px`
- exp-org: `14px` / exp-role: `12px` / exp-ctx: `11px` / exp-item padding: `13px 0`
- LinkedIn: Ben = `https://www.linkedin.com/in/bceum/` / Andrew = `https://www.linkedin.com/in/andrewmarble/`
- Ben exp 순서: Kakao → Global Consulting Firms (15 years) → …

`assets/sangdeok_seo.png` 및 `sangdeok_seo_profile.jpeg` 존재 — 카드 추가 예정 (Ben 확인 필요)

---

### insight.html — 아티클

구 `signal.html`. 아티클 카드 목록.

| slug | 제목 (EN) | badge stat | 날짜 |
|---|---|---|---|
| `openclaw` | OpenClaw | — | — |
| `kpmg` | Enterprise Leaders Prioritize AI Governance | — | — |
| `ibm` | Observability Alone Is Not Enough | — | — |
| `cursordb` | Cursor's AI Agent Deleted an Entire Company Database in 9 Seconds | 9 sec | PocketOS · April 2026 |

- `cursordb` 소스: Tom's Hardware · The Register
- `cursordb` Read 링크: Tom's Hardware 원문 URL

---

## 공통 CSS (style.css)

공유 스타일:
- `@font-face` (SUIT, Jost Variable)
- CSS reset (`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0 }`)
- `:root` 변수 (컬러, 타입 스케일, 레이아웃)
- `body.ko` 타입 스케일 override
- `#nav` + 관련 모든 nav 컴포넌트 (logo, nav-links, lang-switch, nav-cta, burger, mob-nav)
- `footer` + foot-logo, foot-copy, foot-links
- `@keyframes fadeUp`
- `.fade` / `.fade.in` / `.fd1`–`.fd4` (stagger delay)
- 반응형: 960px (nav collapse, footer column) / 560px (pad-h, logo 축소)

**개별 페이지 `<style>`에 두어야 할 것**: 페이지 고유 섹션 CSS만. `.kicker`는 offering.html에서만 필요하므로 offering.html `<style>`에 유지.

---

## 핵심 제품 개념

### CAPER 사이클

5단계 decision 사이클. **Toren이 담당하는 3단계 = Appraisal / Permission / Review**

```
Cognition (agent) → Appraisal (Toren) → Permission (Toren) → Execution (agent) → Review (Toren)
```

### Toren Capabilities (5개)

1. Policy-as-Code — 실행 전 5ms 이내 정책 평가
2. HITL Approval — 고위험 액션 자동 일시정지 + 구조화된 승인 요청
3. Decision Log — 전체 추론 맥락 불변 기록
4. ROI Engine — 실행 추적 → 비즈니스 지표 변환
5. Audit Trail — 즉시 조회 가능한 감사 기록

### Toren Editions

| Edition | 포지셔닝 | 주요 기능 | 가격 |
|---|---|---|---|
| Observer | PoC | 가시성 (Decision Log, Cost Tracking) | ₩1–3억 |
| Guardian | Pilot | Policy-as-Code, HITL, ROI | ₩3–7억 |
| Sovereign | Production | Guardian + 자율 Agent Team, Policy Forge | ₩10억+ |

### 배포 옵션

| 옵션 | 설명 | Observer | Guardian | Sovereign |
|---|---|---|---|---|
| Cloud | SaaS, 5분 설치 | ✓ | ✓ | — |
| Private | VPC / K8s | ✓ | ✓ | ✓ |
| Vault | Air-gap, HSM | — | ✓ | ✓ |

---

## 코드 작업 규칙

1. **CSS 변수만 사용** — 하드코딩 금지. 새 색상/폰트 추가 금지
2. **T 오브젝트 EN/KO 쌍** — 하나 추가하면 둘 다 추가
3. **T 오브젝트 정기 감사** — DOM id 없는 키는 즉시 삭제
4. **인터랙티브 데이터는 별도 객체** — T에 섞지 않음 (TARCH, FEED_DECISIONS 등)
5. **페이지 간 nav/footer 구조 동일** 유지
6. **수정 후**: `npm run format:check` 실행
7. **git 명령 금지** — commit/push는 항상 Ben이 직접 실행 (sandbox에서 .git/*.lock 충돌 발생)

---

## 미결 사항

- [ ] `offering.html` hero 이미지 추가 (`assets/offering_hero.webp` — Ben 저장 후 CSS 적용)
- [ ] `sangdeok_seo` 팀원 카드 추가 (역할/바이오/경력 Ben 확인 필요)
- [ ] `og-image.png` 내용 현행화 (파일 존재하나 구버전 디자인)
- [ ] `SUIT-Variable.css` 사용 여부 확인 (`.woff2` 직접 로드와 중복 가능성)

### 세션 2 완료

- [x] `offering.html` T 오브젝트 전면 감사: TARCH.en 사망 키 ~40개 제거, FEED_DECISIONS 루트 KO 키 ~70줄 제거, T.en/T.ko에 올바르게 재배치
- [x] `offering.html` T.ko 오류 수정: 고아 키(`prod-note`) 삭제, 오래된 hero 키 수정
- [x] `offering.html` hero 헤드카피 제거 (`prod-title`, `prod-hero-sub` HTML+T 삭제) — eyebrow only
- [x] `offering.html` 중복 footer CSS 제거 (style.css와 중복된 960px 블록)
- [x] `who-we-are.html` nav 로고 경로 수정 (`logo-dark/light.png` → `assets/toren_logo_dark/light.png`)

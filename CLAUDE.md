# Toren Homepage — CLAUDE.md

## 프로젝트 개요

**제품**: Toren — Enterprise Agent Control Plane  
**회사**: ImperAI (EACP Inc.)  
**목적**: 디자인 파트너 + 투자자 유치  
**배포**: GitHub Pages (정적 HTML/CSS/JS, 빌드 없음)  
**최종 업데이트**: 2026-05-02

---

## 파일 구조

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
  offering_hero.webp        ← offering.html hero 배경 이미지 (Ben 저장 예정)
  toren_logo_dark.png       ← nav 로고 (라이트 테마 페이지)
  toren_logo_light.png      ← nav 로고 (다크 테마 / vision.html) + Tooling Gap 테이블 내 Toren 로고
  ben_eum.png               ← 팀원 사진
  andrew_marble.png         ← 팀원 사진
  sangdeok_seo.png          ← 팀원 사진 (카드 미추가 — Ben 확인 필요)
  sangdeok_seo_profile.jpeg ← 팀원 사진 (대안)
  logos/
    lakera.png
    guardrails.png
    langsmith.png
    langfuse.svg
    portkey.webp
    litellm.png

fonts/
  SUIT-Variable.woff2
  SUIT-Variable.css
  Jost-Variable.woff2
  Jost-Variable-Italic.woff2
```

---

## 디자인 시스템

### 컬러 변수 (CSS :root)

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

**원칙**: 라이트 스킴. 새 색상/폰트 추가 금지 — 기존 변수만 사용.

### 폰트 변수

```css
--font-en: 'Jost Variable', sans-serif   /* EN 헤딩, UI 레이블, 숫자 */
--font-kr: 'SUIT', sans-serif            /* KO 텍스트, body 전체 */
```

KO 모드(`body.ko`)에서 주요 헤딩에 `--font-kr` override + font-size 약 8% 축소.

### 타입 스케일

```css
--t-display: clamp(32px, 4.5vw, 60px)
--t-h1:      clamp(26px, 3.4vw, 48px)
--t-h2:      clamp(20px, 2.5vw, 34px)
--t-h2-sm:   clamp(18px, 2vw, 26px)
--t-h3:      18px
```

### 레이아웃 변수

```css
--col-wide:  1080px
--col-text:  720px
--pad-v:     120px
--pad-h:     72px
```

### 반응형 브레이크포인트

- Tablet: `max-width: 960px`
- Mobile: `max-width: 560px`

---

## 언어 시스템

- 기본 언어: **KO** (URL param 없을 때)
- URL 파라미터: `?lang=ko` / `?lang=en`
- 페이지 이동 시 `currentLang` 파라미터 유지
- 번역: 각 HTML 파일 내 `const T = { en: {...}, ko: {...} }` 정의
- `setLang(l)`: `T[l]` 키 순회 → `document.getElementById(id).innerHTML = T[l][id]`

### T 오브젝트 관리 원칙

- DOM에 `id=` 없는 T 키는 죽은 코드 → **즉시 삭제**
- EN/KO 키 개수 동일하게 유지
- 인터랙티브 JS 객체(TARCH, FEED_DECISIONS 등)에 T 키 **절대 섞지 않는다**
- `setLang()`은 T[l]만 읽음 — TARCH/FEED_DECISIONS의 문자열은 setLang() 도달 불가

---

## 네비게이션 규칙

- 메뉴 순서: `Vision · Offering · Who We Are · Insight · Get Started`
- 현재 페이지 메뉴 항목: `class="active"`
- 서브 페이지 → index.html 섹션: `goIndex('#section')` 함수 사용
- 모든 href에 `?lang=` + currentLang 자동 삽입
- nav 로고: 모든 페이지 `assets/toren_logo_dark.png` / `assets/toren_logo_light.png` 사용

### Nav 테마

| 페이지 | 테마 |
|---|---|
| index / offering / who-we-are | frosted glass (ivory 75% + blur) |
| vision | 완전 투명 → 스크롤 시 `rgba(8,8,8,0.42)` + blur, 로고 항상 light |

---

## 코드 작업 규칙

1. **CSS 변수만** — 하드코딩 금지, 새 색상/폰트 추가 금지
2. **T 오브젝트 EN/KO 쌍** — 하나 추가하면 둘 다 추가
3. **T 감사** — DOM id 없는 키 즉시 삭제
4. **인터랙티브 데이터는 별도 객체** — T에 섞지 않음
5. **nav/footer 구조** — 페이지 간 동일하게 유지
6. **수정 후** `npm run format:check` 실행
7. **git 명령 절대 금지** — commit/push는 항상 Ben이 직접 실행

---

## Prettier 설정

```bash
npm install           # 최초 1회
npm run format        # 전체 포맷
npm run format:check  # 포맷 검증만
```

`.prettierrc`: printWidth 120, singleQuote, es5 trailingComma

---

## vision.html 주요 구조

| 섹션 | ID | 내용 |
|---|---|---|
| Manifesto Hero | `#manifesto` | 배경: `assets/hero_vision.webp`, 주장 문장, CTA |
| Point of View | `#pov` | 3개 belief (번호 좌측 고정) |
| Problem | `#problem` | 72%/9% 통계 (navy), 3개 페르소나 박스 |
| Why Now | `#why-now` | 3개 카드 (62% / 9% / 6mo), McKinsey 출처 |
| Tooling Gap | `#stack-fail` | 비교 테이블 |
| CAPER Engine | `#eacp-definition` | 5단계 사이클 플로우 |
| Pack Evolution | `#pack-evolution` | 타임라인 트랙 + 3단계 카드 |

### Tooling Gap 테이블 구조

**컬럼**: Dim (sticky left:0) | **Toren** (sticky left:180px, `#ebf1fb` bg) | Security Guard | Observability | LLM Gateway | Custom Logging

**헤더**: `<th>` 안에 `.mx-header-inner` wrapper
- `mx-header-inner`: `position: relative; padding: 20px 20px 56px`
- `mx-col-name`: `height: 40px; overflow: hidden`
- `tool-logos`: `position: absolute; top: 72px; left: 20px; right: 20px`

**행**: R1 Primary Buyer / R2 Decision Scope: 텍스트. R3–R6: Moon chart (SVG)
- Toren moon: `fill: var(--navy)` / 경쟁사: 기본색
- JS `colIndex { sec:3, obs:4, gw:5, diy:6 }` → hover 시 컬럼 opacity 조정

### Pack Evolution 구조

- `.pack-stages` > `.pack-track` + `.pack-cards`
- 타임라인 트랙: hairline `::before` + `.pack-track-fill` (mist→authority→navy gradient)
- IntersectionObserver → `#pack-evolution.track-animated` → `scaleX(1)`
- 카드 상단 바: 2px / 3px / 4px 순차 강조
- Stage 3: `background: rgba(27,42,78,0.03)`, `border-color: rgba(27,42,78,0.18)`
- 반응형: 960px 이하 트랙 숨김 + 카드 좌측 컬러 보더 / 560px 이하 1열

---

## offering.html 주요 구조

### Hero (`.prod-hero`)

- eyebrow ("Offering") **만** 표시 — 별도 헤드카피 없음 (의도적)
- 현재: obsidian→navy CSS gradient + SVG noise texture
- `assets/offering_hero.webp` 저장 후 CSS 배경 이미지로 교체 예정

### 섹션 구성

| 섹션 | ID | 내용 |
|---|---|---|
| Journey Overview | `#journey` | 4단계 카드 (Ground Truth / Launch Prep / Toren Launch / Toren Govern) |
| Product Reality | `#product-reality` | CAPER feed + tarch diagram + 에디션 + 배포 옵션 |
| Integration Path | `#integration-path` | L0/L1/L2 |
| Why Now | `#why-now` | 3개 리스크 카드 |
| Use Cases | `#use-cases` | Before/After 3개 케이스 |
| KR Regulatory Pack | `#kr-pack` | KR-FIN / KR-PIPA / KR-ISMS + 페르소나 |
| Differentiation | `#differentiation` | 3개 라인 (Obsidian 배경) |

### offering.html i18n 구조 (중요)

- `T`: 모든 페이지 텍스트 번역 (setLang이 읽는 유일한 객체)
- `TARCH`: tarch 다이어그램 인터랙티브 데이터만 (문자열 키 없음)
- `FEED_DECISIONS`: CAPER 피드 시뮬레이션 배열만 (문자열 키 없음)

---

## who-we-are.html 팀 구성

| DOM ID | 사진 | 이름 |
|---|---|---|
| member-2 | assets/ben_eum.png | 음병찬 (Ben Eum) — Co-Founder & CEO |
| member-3 | assets/andrew_marble.png | Andrew Marble — Co-Founder, AI Research |

`assets/sangdeok_seo.png` 존재 — 카드 미추가 (Ben 확인 필요)

---

## 미결 사항

- [ ] `offering.html` hero: `assets/offering_hero.webp` 저장 후 CSS 적용
- [ ] `who-we-are.html` Sangdeok Seo 카드 추가 (역할/바이오 Ben 확인 필요)
- [ ] `og-image.png` 현행화 (파일 존재하나 구버전)
- [ ] `insight.html` 아티클 콘텐츠 업데이트
- [ ] `SUIT-Variable.css` 중복 여부 확인

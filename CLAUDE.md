# Toren Homepage — CLAUDE.md

## 프로젝트 개요

**제품**: Toren — Enterprise Agent Control Plane  
**회사**: Imperai (EACP Inc.)  
**목적**: 디자인 파트너 + 투자자 유치  
**배포**: GitHub Pages (정적 HTML/CSS/JS, 빌드 없음)

---

## 파일 구조

```
index.html          ← 메인 랜딩 (Problem / How Toren Works / Contact)
vision.html         ← Manifesto / POV / Problem / Why Now / Tooling Gap / CAPER / Pack Evolution
signal.html         ← 아티클/인사이트 페이지
who-we-are.html     ← 팀 소개 페이지 (현재 skeleton)
offering.html       ← L0/L1/L2 통합 경로 + KR Pack spotlight
assets/
  main_image.webp   ← Hero 배경 이미지
  toren_logo_light.png  ← Tooling Gap 테이블 내 Toren 로고 (nav 아님)
  logos/
    lakera.png      ← 투명 PNG (lakera.svg는 로딩 실패로 대체)
    guardrails.png  ← 투명 배경 PNG
    langsmith.png
    langfuse.svg
    portkey.webp
    litellm.png
fonts/
  SUIT-Variable.woff2
  Jost-Variable.woff2        ← EN 헤딩 폰트 (실제 사용 중)
  Jost-Variable-Italic.woff2
  (Noto 파일들은 미사용 → 삭제 예정)
logo-light.png
logo-dark.png       ← nav/footer 전용
favicon.svg
```

---

## 디자인 시스템

### 컬러 변수 (CSS :root)

```css
--obsidian:  #0A0A0A   /* 주 텍스트 */
--navy:      #1B2A4E   /* 권위, 시그널, CTA 배경 */
--authority: #2C4270   /* 액센트, hover */
--slate:     #5E6675   /* 보조 텍스트 */
--mist:      #A8ADB7   /* 캡션, 비활성 */
--hairline:  #D9D6CE   /* 구분선 */
--ivory:     #F7F6F2   /* 섹션 배경 */
--white:     #FFFFFF   /* 캔버스 */
```

### 폰트 변수

```css
--font-en: 'Jost Variable', sans-serif   /* EN 헤딩 및 UI (실제 사용 중) */
--font-kr: 'SUIT', sans-serif            /* 전체 UI / KO 텍스트 */
```

> KO 모드(`body.ko`)에서 주요 헤딩은 `--font-kr`로 override되며 font-size도 약 15% 축소.

### 반응형 브레이크포인트

- Tablet: `max-width: 960px`
- Mobile: `max-width: 560px`

---

## 언어 시스템

- URL 파라미터 `?lang=ko` / `?lang=en`으로 언어 전환
- 모든 페이지 간 이동 시 `currentLang` 파라미터 유지
- 번역 문자열은 각 HTML 파일 내 `const T = { en: {...}, ko: {...} }` 객체에 정의
- `setLang(l)` 함수가 `T[l]` 키를 순회하며 `innerHTML`로 주입

---

## 네비게이션 규칙

- **index.html** → 다른 페이지: `href="page.html?lang="+currentLang`
- **서브 페이지** → index.html 섹션: `goIndex('#section')` 함수 사용 (lang 파라미터 유지)
- 현재 페이지 메뉴 항목에는 `class="active"` 부여
- 메뉴 순서: The Problem / How Toren Works / Who We Are / Signal / Design Partner Program

---

## 코드 작업 규칙

### 수정 전 확인 사항
- CSS 변수는 반드시 위의 디자인 시스템 변수 사용 (하드코딩 금지)
- 새 색상이나 폰트 추가 금지 — 기존 변수 활용
- EN 텍스트와 KO 텍스트 **둘 다** T 객체에 추가할 것
- 페이지 간 nav/footer 구조 동일하게 유지

### 파일 편집 후
- Prettier 포맷 체크 실행: `npm run format:check`
- 세 HTML 파일 모두 nav 메뉴 순서/구조가 동일한지 확인

### Git 규칙
- **Claude는 git 명령을 절대 실행하지 않는다** — commit/push는 항상 Ben이 직접 실행
- 이유: 샌드박스에서 git 실행 시 .git/*.lock 파일이 생성되고 삭제 불가 → 충돌 발생
- Claude는 파일 수정만 하고, 완료 후 Ben에게 commit/push 명령어를 안내한다

---

## Prettier 설정

```bash
npm install        # 최초 1회
npm run format     # 전체 포맷
npm run format:check  # 포맷 검증만 (변경 없음)
```

설정 파일: `.prettierrc` (printWidth 120, singleQuote, es5 trailingComma)

---

## Nav 동작 (vision.html)

- 항상 dark (투명 → 스크롤 시 `rgba(8,8,8,0.42)` + blur)
- `#nav.scrolled` 트리거: `scrollY > 30`
- 로고: 항상 `.logo-light`, `.logo-dark`는 `display:none`
- 링크 색: 항상 `rgba(255,255,255,0.5)` — 스크롤 여부 무관

## Nav 동작 (index / offering / who-we-are)

- Frosted glass: `background: rgba(247,246,242,0.75); backdrop-filter: blur(24px) saturate(180%)`
- 스크롤 기준: `scrollY > 30`

---

## vision.html 주요 구조 (최신)

| 섹션 | ID | 내용 |
|---|---|---|
| Manifesto Hero | `#manifesto` | Hero, 주장 문장, CTA |
| Point of View | `#pov` | 3개 belief (번호 좌측 고정, 텍스트 들여쓰기) |
| Problem | `#problem` | 72%/9% 통계 (navy), 3개 페르소나 박스, intro 전체 너비 |
| Why Now | `#why-now` | 3개 카드 (62% / 9% / 6mo), McKinsey 출처 가시성 0.48 |
| Tooling Gap | `#stack-fail` | 비교 테이블 (아래 상세 참조) |
| CAPER Engine | `#eacp-definition` | 5단계 사이클 플로우 |
| Pack Evolution | `#pack-evolution` | 타임라인 트랙 + 3단계 카드 |

### Tooling Gap 테이블 구조 (현재)

**컬럼 순서**: Dim (sticky left:0) | **Toren** (sticky left:180px, `#ebf1fb` bg) | Security Guard | Observability | LLM Gateway | Custom Logging

**헤더 구조**: 단일 `<thead><tr>` — 각 `<th class="mx-th-tool">` 안에 `<div class="mx-header-inner">` wrapper
- `mx-header-inner`: `position: relative; padding: 20px 20px 56px`
- `mx-col-name`: `height: 40px; overflow: hidden` (고정 높이로 Y 정렬)
- `tool-logos`: `position: absolute; top: 72px; left: 20px; right: 20px` (div wrapper 덕에 크로스브라우저 안전)

**행 구조**:
- R1 (Primary Buyer), R2 (Decision Scope): 텍스트 셀 — `mx-cell-primary` + `mx-cell-sub` 두 줄 구조
- R3–R6: Moon chart 셀 — SVG 방식

**Toren 컬럼 moon chart**: `fill: var(--navy)` (밝은 배경 위 진한 색)
**경쟁사 컬럼 moon chart**: 기본 색상

**CSS nth-child fade**: `tbody td:nth-child(3–6)` (competitor cols만 fade, toren=col2 제외)

**JS colIndex**: `{ sec: 3, obs: 4, gw: 5, diy: 6 }` — hover 시 해당 컬럼 body cell opacity 조정

**로고 파일**: `assets/logos/` 디렉토리 내 PNG/SVG/WEBP
- `onerror="this.style.display='none'"` 처리
- Per-logo 높이 override: `img.tool-logo-img[alt='LangSmith'] { height: 11px }` 등
- Custom Logging 컬럼: 로고 없음 (의도적)

**Primary Buyer 행**: `mx-eacp-1` → "CISO · CFO · CRO" (EN/KO 동일)

### Pack Evolution 구조 (현재)

- `.pack-stages` > `.pack-track` + `.pack-cards`
- **타임라인 트랙**: `::before` hairline + `.pack-track-fill` (gradient 애니메이션)
  - `#pack-evolution.track-animated .pack-track-fill { transform: scaleX(1) }` — IntersectionObserver로 트리거
  - 그라디언트: mist → authority → navy
- **카드**: 번호는 트랙에만 (카드에서 제거), 상단 바 두께 2/3/4px로 단계별 강조
- **Stage 3**: `background: rgba(27,42,78,0.03)`, `border-color: rgba(27,42,78,0.18)`
- **반응형**: 960px 이하 트랙 숨김 + 카드 좌측 컬러 보더, 560px 이하 1열 스택

---

## 미결 사항

- [ ] 브랜드 가이드라인 전면 적용 (Obsidian/Navy/Ivory 라이트 스킴 확정)
- [ ] 한글 폰트 확정 — SUIT vs Pretendard
- [ ] `who-we-are.html` 팀원 정보 입력 (현재 skeleton)
- [ ] `og-image.png` 제작
- [ ] `fonts/` 내 미사용 Noto 파일 5개 삭제

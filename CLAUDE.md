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
signal.html         ← 아티클/인사이트 페이지
who-we-are.html     ← 팀 소개 페이지
assets/
  main_image.webp   ← Hero 배경 이미지
fonts/
  SUIT-Variable.woff2
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
--font-en: 'Century Gothic', 'AppleGothic', 'CenturyGothic', sans-serif  /* EN 헤딩 */
--font-kr: 'SUIT', sans-serif                                              /* 전체 UI/KO */
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

## 미결 사항 (spec-v1.2 기준)

- [ ] 브랜드 가이드라인 전면 적용 (Obsidian/Navy/Ivory 라이트 스킴 확정)
- [ ] 한글 폰트 확정 — SUIT vs Pretendard
- [ ] `who-we-are.html` 팀원 정보 입력 (현재 skeleton)
- [ ] `og-image.png` 제작
- [ ] `fonts/` 내 미사용 Noto 파일 5개 삭제

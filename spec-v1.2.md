# Toren Homepage — Spec v1.2

**Product**: Toren — Enterprise Agent Control Plane  
**Company**: Imperai (EACP Inc.)  
**Purpose**: 디자인 파트너 + 투자자 유치  
**배포**: GitHub Pages  

---

## 세션 요약 (v1.1 → v1.2)

이번 세션에서 진행한 주요 작업:

1. **모바일 버그 수정** — 햄버거 메뉴 내 EN/KO 토글 미노출 버그 수정 (`.lang-switch` → `#nav .lang-switch`), Talk to us 버튼 제거
2. **Hero 이미지 파일명** — `main.webp` → `main_ink.webp` → `assets/main_image.webp` 최종 변경
3. **폰트 교체** — Cormorant Garamond + DM Sans + Noto → **Pretendard** 단일 폰트로 통합
4. **코드 리팩토링** — CSS 변수 `--serif-en` / `--sans-en` / `--mono` → `--font` 하나로 통합, `applyKoFonts` / `resetFonts` 불필요 JS 제거, `tarchBlock` 선언 순서 수정, 빈 style 블록 제거
5. **다크 컬러 스킴 전환** — 크림/잉크/골드 라이트 스킴 → 딥 네이비/틸/앰버 다크 스킴 (세 파일 동시 적용)
6. **어두운 섹션 가시성 개선** — 다크 배경 위 저대비 텍스트 색상 전반 개선
7. **로고 수정** — 다크 배경에 맞게 nav/footer 모두 `logo-dark.png`로 통일
8. **tarch 다이어그램 모바일 개선** — capability 카드 3개 노출 → 5개 전부 노출 (flex wrap 3열)
9. **히어로 이미지 제작** — Higgsfield Reve 모델로 조선 수묵화 스타일 이미지 제작 시도 (소나무/관아 씬 등 다수 iteration)
10. **브랜드 가이드라인 수령** — IMPERAI Brand Guidelines v1.0 검토, 다음 버전에 반영 예정

---

## 파일 구조

```
index.html
signal.html
who-we-are.html
assets/
  main_image.webp       ← 히어로 이미지 (수묵화 스타일, Higgsfield 생성)
logo-light.png
logo-dark.png           ← nav/footer 모두 이걸로 통일
favicon.svg
fonts/
  Pretendard-Light.woff2
  Pretendard-Regular.woff2
  Pretendard-Medium.woff2
  Pretendard-SemiBold.woff2
  Pretendard-Bold.woff2
  NotoSerifKR-Light.ttf     ← 미사용 (삭제 가능)
  NotoSerifKR-Regular.ttf   ← 미사용 (삭제 가능)
  NotoSerifKR-Medium.ttf    ← 미사용 (삭제 가능)
  NotoSansKR-Light.ttf      ← 미사용 (삭제 가능)
  NotoSansKR-Regular.ttf    ← 미사용 (삭제 가능)
backup-v1.1/              ← 크림/잉크/골드 스킴 백업본
```

---

## 디자인 시스템 (현재)

### 컬러
| 변수 | 값 | 용도 |
|---|---|---|
| `--base` | #06080F | 기본 배경 |
| `--surface` | #0D1220 | 섹션 배경 |
| `--surface-mid` | #111928 | 카드, nav mob 배경 |
| `--surface-high` | #1A2438 | 호버, 강조 배경 |
| `--ink` | #E8EDF5 | 기본 텍스트 |
| `--ink-mid` | #A0AEBF | 본문 텍스트 |
| `--ink-light` | #607080 | 보조 텍스트 |
| `--ink-faint` | #3A4F60 | 캡션, 비활성 |
| `--teal` | #00C4A0 | 메인 액센트 (버튼, kicker, 링크) |
| `--teal-bright` | #00E8BE | hover 상태 |
| `--amber` | #C8922A | 보조 액센트 |
| `--amber-bright` | #E4A830 | 강조 |
| `--border` | rgba(0,196,160,0.12) | 경계선 |
| `--night` | #06080F | 다크 섹션 |
| `--night-border` | #1A2438 | 다크 섹션 경계 |

### 폰트
| 용도 | 폰트 |
|---|---|
| EN/KO 전체 | Pretendard (로컬 woff2) |
| CSS 변수 | `--font: 'Pretendard', sans-serif` |

> **미결**: 브랜드 가이드라인 적용 시 EN 헤딩 → Century Gothic, 본문 → Calibri, KO 헤딩 → SUIT 또는 Pretendard 검토 중

### 반응형 브레이크포인트
- Tablet: `max-width: 960px`
- Mobile: `max-width: 560px`

---

## 브랜드 가이드라인 (IMPERAI v1.0) — 적용 예정

### 컬러 시스템
| 컬러 | HEX | 용도 |
|---|---|---|
| Obsidian | #0A0A0A | 70% — 주 텍스트, 배경 |
| Imperial Navy | #1B2A4E | 20% — 권위, 시그널 |
| Authority Blue | #2C4270 | 액센트, 하이퍼링크 |
| Slate | #5E6675 | 보조 텍스트 |
| Mist | #A8ADB7 | 캡션, 3차 텍스트 |
| Hairline | #D9D6CE | 구분선 |
| Ivory | #F7F6F2 | 에디토리얼 배경 |
| Pure White | #FFFFFF | 캔버스 |

> 원칙: 화이트/아이보리 배경, Obsidian 텍스트, Navy 시그널. 그라데이션 없음, 장식 없음.

### 타이포그래피 (가이드라인 기준)
| 용도 | 폰트 | 스펙 |
|---|---|---|
| EN Display/Headline | Century Gothic | 넓은 자간, bold 사용 안 함 |
| EN Body/Interface | Calibri | Regular / Light |
| KO Headline | 미결 (SUIT 또는 Pretendard 검토 중) | — |
| KO Body | 미결 | — |

### 타입 스케일
| 레벨 | 크기 | 스타일 |
|---|---|---|
| H1 Hero | 44pt | letter-spacing 2, Display |
| H2 Title | 28pt | letter-spacing 1, Display |
| H3 Section | 20pt | letter-spacing 1, Display |
| Eyebrow/Kicker | 10pt | letter-spacing 6, Bold, Uppercase |
| Body | 14pt | Regular |
| Caption/Meta | 9pt | letter-spacing 3, Uppercase |

---

## 페이지별 스펙

### 1. index.html

#### 섹션 구성
1. NAV — 로고(`logo-dark.png`), 메뉴, EN/KO 토글, Talk to us CTA
2. Hero — 전체화면 이미지(`assets/main_image.webp`) 배경, 헤드카피, 서브카피, CTA
3. Problem — 2컬럼 그리드, 3개 문제 카드
4. How Toren Works — 5개 capability 카드 + 아키텍처 다이어그램
5. Contact — 디자인 파트너십 신청 폼
6. Footer

#### Hero
- 배경: `assets/main_image.webp`, `object-position: center 25%`
- 헤드카피: 줄별 마스크 reveal 애니메이션
- EN: "Every decision your agents make — / *recorded,* governed, approved."
- KO: "에이전트가 내리는 모든 결정 — / 근거 있게, 통제할 수 있게, *승인을 거쳐* 실행되어야 합니다."

#### How Toren Works capability 카드 (5개)
1. Policy-as-Code
2. HITL Approval
3. Decision Log
4. ROI Engine
5. Audit Trail

#### How Toren Works 다이어그램
- 탭: Overview / Policy / HITL / Log / ROI
- 탭 hover 시 즉시 전환 (desktop), tap 시 전환 (mobile)
- 스크롤 진입 시 레이어 순차 등장
- 흐르는 점 애니메이션: 스크롤 진입 전 paused → 진입 시 running
- 모바일: capability 카드 5개 flex wrap 3열 (3+2, 마지막 2개 가운데 정렬)

#### 모바일 네비게이션
- 햄버거 메뉴 내 EN/KO 토글만 표시 (`#nav .lang-switch`만 숨김, mob-nav 내 토글 노출)
- Talk to us 버튼 제거 (모바일 메뉴에서)

#### 언어 시스템
- URL 파라미터: `?lang=ko` / `?lang=en`
- KO 모드 시 주요 헤딩 폰트 사이즈 약 15% 축소 override

---

### 2. signal.html

#### 아티클 3개
- OpenClaw (News) — AI 에이전트 보안 취약점
- KPMG (Insight) — 기업 리더 75% AI 거버넌스 우선
- IBM (Insight) — 관찰만으로는 부족하다

---

### 3. who-we-are.html

#### 필러 3개
1. 기업에서 AI의 확산을 가로막는 이유가 무엇인지 아는 사람
2. 프로덕션에서 AI 인프라를 만들어본 사람
3. 규제 기관, 감사인, 이사회가 AI에 대해 실제로 무엇을 묻는지 아는 사람

---

## 네비게이션

모든 페이지 이동 시 언어 파라미터 유지  
index.html 진입 시 hash로 자동 스크롤

---

## 미결 사항

- [ ] **브랜드 가이드라인 전면 적용** — 컬러 스킴 (Obsidian/Navy/Ivory), 타이포그래피 (Century Gothic + Calibri), 전체 라이트 스킴으로 전환
- [ ] **한글 폰트 확정** — SUIT vs Pretendard 검토 중 (font-comparison.html 참조)
- [ ] **팀원 정보 입력** — who-we-are.html skeleton 슬롯 채우기
- [ ] **og-image.png 제작**
- [ ] **Noto 폰트 파일 삭제** — fonts/ 폴더 내 미사용 Noto 파일 5개 제거

---

## 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1.0 | 2026-04 | 최초 작성 |
| v1.1 | 2026-04 | hero 이미지 `main.webp` → `main_ink.webp` / capability 카드 4→5개 / 모바일 nav 토글 버그 수정 / Talk to us 버튼 스타일 개선 |
| v1.2 | 2026-04 | 폰트 Pretendard 단일화 / 다크 컬러 스킴 전환 (3파일) / CSS 변수 통합 리팩토링 / 로고 dark 통일 / 히어로 이미지 교체 (`assets/main_image.webp`) / 모바일 다이어그램 5개 노출 / 브랜드 가이드라인 수령 |

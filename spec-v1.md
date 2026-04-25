# Toren Homepage — Spec v1.0

**Product**: Toren — Enterprise Agent Control Plane  
**Company**: Imperai  
**Purpose**: 디자인 파트너 + 투자자 유치  
**배포**: GitHub Pages  

---

## 파일 구조

```
index.html
signal.html
who-we-are.html
main.webp
logo-light.png
logo-dark.png
favicon.svg
fonts/
  NotoSerifKR-Light.ttf
  NotoSerifKR-Regular.ttf
  NotoSerifKR-Medium.ttf
  NotoSansKR-Light.ttf
  NotoSansKR-Regular.ttf
```

---

## 디자인 시스템

### 컬러
| 변수 | 값 | 용도 |
|---|---|---|
| `--cream` | #F4EFE6 | 기본 배경 |
| `--linen` | #FAF7F2 | 섹션 배경 (밝은) |
| `--ink` | #1E1B16 | 기본 텍스트 |
| `--gold` | #B8922A | 포인트 컬러 |
| `--gold-bright` | #D4A83C | 버튼, 강조 |
| `--night` | #0C0B08 | 다크 섹션 배경 |

### 폰트
| 용도 | 폰트 |
|---|---|
| EN 세리프 (헤딩) | Cormorant Garamond |
| EN 산세리프 (본문) | DM Sans |
| EN 모노 (레이블, 태그) | DM Mono |
| KO 세리프 | Noto Serif KR (로컬) |
| KO 산세리프 | Noto Sans KR (로컬) |

### 반응형 브레이크포인트
- Tablet: `max-width: 960px`
- Mobile: `max-width: 560px`

---

## 페이지별 스펙

### 1. index.html

#### 섹션 구성
1. NAV — 로고, 메뉴, EN/KO 토글, Talk to us CTA
2. Hero — 전체화면 이미지(`main.webp`) 배경, 헤드카피, 서브카피, CTA
3. Problem — 2컬럼 그리드, 3개 문제 카드
4. How Toren Works — 4개 capability 카드 + 아키텍처 다이어그램
5. Contact — 디자인 파트너십 신청 폼
6. Footer

#### Hero
- 배경: `main.webp`, `object-position: center 25%`
- 헤드카피: 줄별 마스크 reveal 애니메이션
- EN: "Every decision your agents make — / *recorded,* governed, approved."
- KO: "에이전트가 내리는 모든 결정 — / 근거 있게, 통제할 수 있게, *승인을 거쳐* 실행되어야 합니다."

#### How Toren Works 다이어그램
- 탭: Overview / Policy / HITL / Log / ROI
- 탭 hover 시 즉시 전환 (desktop), tap 시 전환 (mobile)
- 스크롤 진입 시 레이어 순차 등장
- 흐르는 점 애니메이션: 스크롤 진입 전 paused → 진입 시 running

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

- [ ] main.webp 수묵화 스타일 트랜스퍼 (Higgsfield 작업 예정)
- [ ] 팀원 정보 입력 시 skeleton 슬롯 채우기
- [ ] og-image.png 제작

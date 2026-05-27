# Insight 페이지 배포 패키지

## 폴더 구조

```
홈페이지_루트/
├── insight.html                                          ← 기존 파일 교체
└── insight/
    ├── delegation-or-nothing.html                        ← 새 글
    └── assets/
        └── delegation-or-nothing/
            ├── authorization-gap-desk.jpg                ← Higgsfield 책상 이미지 (직접 추가)
            ├── authorization-gap-corridor.jpg            ← Higgsfield 복도 이미지 (직접 추가)
            ├── delegation_curve.svg                      ← 차트 1 (포함)
            └── usage_vs_delegability.svg                 ← 차트 2 (포함)
```

## 이미지 두 장의 역할 분담

- **`authorization-gap-desk.jpg`** (책상 위 책 + 시계 + 만년필 + 태블릿)
  - Insight 목록 페이지의 FEATURED 카드 이미지
  - 소셜 공유 시 보이는 OG / Twitter 카드 이미지
  - 외부에서 *클릭하고 싶게 만드는* 후킹 이미지

- **`authorization-gap-corridor.jpg`** (어두운 코퍼드 천장 + 바닥의 두 빛 띠 복도)
  - 본문 안의 Authorization Gap 섹션 메인 삽화
  - 읽기 시작한 독자에게 *몰입감*을 주는 건축적 이미지

## 배포 방법

1. `insight.html`을 기존 파일과 교체
2. `insight/` 폴더를 홈페이지 루트에 복사
3. Higgsfield 이미지 두 장을 `insight/assets/delegation-or-nothing/`에:
   - `authorization-gap-desk.jpg`
   - `authorization-gap-corridor.jpg`
4. 끝

## 디자인 원칙

- 별도 CSS 파일 없음. 페이지 안의 `<style>` 블록 (maturity-model.html 패턴)
- `<base href="../">` 사용. 포스트 페이지의 모든 상대 경로가 루트 기준
- 기존 `style.css` 디자인 토큰만 활용

## 이미지 최적화 권장

- 가로 1600px 정도
- JPG 80-85% 품질
- 용량 200-400KB

## 새 글 추가 패턴

`insight/delegation-or-nothing.html`을 복사 → 수정:
1. 파일명: `insight/{new-slug}.html`
2. `<title>` + OG 메타 3곳 수정
3. `T` 객체의 한영 텍스트 교체
4. 이미지 폴더: `insight/assets/{new-slug}/`
5. `insight.html`의 FEATURED 카드를 새 글로 업데이트

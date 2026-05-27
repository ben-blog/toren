# offering.html — 현재 상태 & 작업 이력

**마지막 업데이트**: 2026-05-03 (세션 6)

---

## 현재 섹션 순서

1. Hero (`.prod-hero`) — `assets/offering_hero.webp` 배경 + gradient overlay, eyebrow only
2. Mode of Engagement (`#diagnosis`) — navy bg, 2-col: 조직 진단 3영역 + Toren Launch/Govern
3. Product Reality (`#product-reality`) — CAPER feed + Tarch diagram + Editions + Deploy Strip
4. Integration Path (`#integration-path`) — L0/L1/L2 (dark bg)
5. KR Regulatory Pack (`#kr-pack`) — navy bg
6. Differentiation (`#differentiation`) — obsidian bg: 3 lines + Tooling Gap 4-col + Why ImperAI 3-item
7. Footer

## 세션별 완료 작업

- **세션 2**: T/TARCH/FEED_DECISIONS 오염 제거, hero 헤드카피 제거 (eyebrow only), nav 로고 경로 수정
- **세션 3**: Partners Marquee 삭제, CTA Strip 삭제
- **세션 4**: Hero webp 적용, mode-of-engagement 신규, journey/why-now/use-cases 삭제, differentiation 확장 (Tooling Gap + Why ImperAI)
- **세션 5**: dead CSS 제거 (.moe-offerings 등), Formspree 엔드포인트 변경 (mdabaygv), 문의 유형 _subject 레이블링, `<html lang="ko">` 수정
- **세션 6**: 모바일 반응형 전면 수정 — CAPER feed 가로 스크롤 (680px, min-width:640px), stage col 텍스트 중앙 정렬, tarch-nav min-width:600px, tarch-wrap overflow-x:auto (560px)

## 모바일 반응형 상태 (offering.html 전용)

### 680px 이하
- `.caper-feed-panel`: `overflow-x: auto` — CAPER 5단계 전체 가로 스크롤
- topbar/stage-bar/rows-container/footer: `min-width: 640px`
- `.caper-stage-col`: `text-align: center; padding: 8px 4px` — 헤더↔pip 정렬
- `.tarch-wrap`: `overflow-x: auto` / `.tarch-diagram`: `min-width: 600px`
- `.tarch-nav`: `min-width: 600px` — 이전/다음 버튼 정렬

### 560px 이하
- `.tarch-wrap`: `overflow-x: auto` 유지 (이전 `hidden` → 수정)

## 미결 사항

- [ ] Sangdeok Seo 팀원 카드 (who-we-are.html) — Ben 확인 필요
- [ ] og-image.png 현행화

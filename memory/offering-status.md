# offering.html — 현재 상태 & 작업 이력

**마지막 업데이트**: 2026-05-02 (세션 4)

---

## 현재 섹션 순서 (세션 4 기준)

1. Hero (`.prod-hero`) — offering_hero.webp 배경, 헤드카피 + sub + Toren Launch/Govern 레이블
2. Mode of Engagement (`#mode-of-engagement`) — navy bg, 2-col: 조직 진단 3영역 + 2개 오퍼링
3. Product Reality (`#product-reality`) — CAPER feed + Tarch diagram + Editions + Deploy Strip
4. Integration Path (`#integration-path`) — L0/L1/L2 (dark bg)
5. KR Regulatory Pack (`#kr-pack`) — navy bg
6. Differentiation (`#differentiation`) — obsidian bg: 3 lines + Tooling Gap 4-col + Why ImperAI 3-item + close
7. Footer

## 세션 3에서 완료한 작업

- **Partners Marquee 삭제**: HTML + CSS + T키(EN/KO) 전부 제거
- **CTA Strip 삭제**: HTML + CSS(tablet 반응형 포함) + T키(EN/KO) 전부 제거

## 세션 4에서 완료한 작업

- **Hero 업데이트**: offering_hero.webp 배경 적용, prod-title + prod-hero-sub + hero-launch/govern 레이블 추가
- **#mode-of-engagement 신규**: navy bg, 2-col layout, 3 diagnostic areas, 2 offerings
- **#journey / #why-now / #use-cases 삭제**: HTML + CSS + T키 전부 제거
- **#differentiation 확장**: Tooling Gap 4-col grid (Security/Observability/LLM Gateway/Toren) + Why ImperAI 3-item 추가
- **orphaned CSS 정리**: `.whynow-key` 삭제
- **T 오브젝트**: EN/KO 각 13개 신규 키 추가, 구 키 대거 삭제 (parity 유지)
- **Prettier 통과**: `npm run format:check` ✓

## 세션 4에서 제안한 개선 방향 (미실행)

### 우선순위 1 — CTA Strip (페이지 끝)
Differentiation → Footer로 바로 떨어짐. 최소 CTA 필요.  
제안 카피: "Every week an agent acts without a record. Schedule a conversation."

### 우선순위 2 — Product Reality 섹션 분리 (복잡도 높음)
CAPER Feed / Tarch / Editions 각각 독립 섹션으로 분리

## 미결 사항 (스펙 기준)

- [ ] `assets/offering_hero.webp` 미추가 → hero 여전히 CSS gradient
- [ ] Sangdeok Seo 팀원 카드 (who-we-are.html)
- [ ] og-image.png 현행화
- [ ] insight.html 아티클 업데이트

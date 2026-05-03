# Toren Homepage — CLAUDE.md

## 프로젝트 개요

**제품**: Toren — Enterprise Agent Control Plane  
**회사**: ImperAI (EACP Inc.)  
**목적**: 디자인 파트너 + 투자자 유치  
**배포**: GitHub Pages (정적 HTML/CSS/JS, 빌드 없음)  
**최종 업데이트**: 2026-05-03

---

## 스펙 파일

전체 프로젝트 스펙은 **`spec-v3.0.md`** 참조.

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

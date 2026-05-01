# Toren — 제품 & 회사

**제품**: Toren — Enterprise Agent Control Plane  
**회사**: ImperAI (EACP Inc.)  
**목적**: 디자인 파트너 + 투자자 유치  
**단계**: Seed  
**도메인**: imperai.ai  
**마지막 업데이트**: 2026-05-02

---

## 핵심 포지셔닝

Enterprise AI 에이전트의 **제어 평면(Control Plane)**. 에이전트가 내리는 모든 결정을 감사·차단·승인하는 인프라.  
경쟁사(Lakera, Guardrails AI, LangSmith, LangFuse, Portkey, LiteLLM)는 보안 가드레일 또는 옵저버빌리티 단일 기능. Toren은 Appraisal + Permission + Review 3단계를 동시에 소유.

## CAPER 사이클

5단계 decision 사이클. **Toren이 담당하는 3단계 = Appraisal / Permission / Review**

```
Cognition (agent) → Appraisal (Toren) → Permission (Toren) → Execution (agent) → Review (Toren)
```

## 5대 Capability

1. **Policy-as-Code** — 실행 전 5ms 이내 정책 평가
2. **HITL Approval** — 고위험 액션 자동 일시정지 + 구조화된 승인 요청
3. **Decision Log** — 전체 추론 맥락 불변 기록
4. **ROI Engine** — 실행 추적 → 비즈니스 지표 변환
5. **Audit Trail** — 즉시 조회 가능한 감사 기록

## Editions (가격)

| Edition | 포지셔닝 | 가격 |
|---|---|---|
| Observer | PoC — 가시성 | ₩1–3억 |
| Guardian | Pilot — Policy-as-Code, HITL, ROI | ₩3–7억 |
| Sovereign | Production — Guardian + 자율 Agent Team | ₩10억+ |

## 배포 옵션

| 옵션 | 설명 | Observer | Guardian | Sovereign |
|---|---|---|---|---|
| Cloud | SaaS, 5분 설치 | ✓ | ✓ | — |
| Private | VPC / K8s | ✓ | ✓ | ✓ |
| Vault | Air-gap, HSM | — | ✓ | ✓ |

## Integration Path

| 레벨 | 시간 | 방식 |
|---|---|---|
| L0 · Visibility | 5분 | 환경변수 2개 (`TOREN_BASE_URL`, `TOREN_KEY`) |
| L1 · Audit Hook | 반나절 | SDK 콜백 (`toren.on_decision(callback=audit_hook)`) |
| L2 · Runtime Adapter | 1–3일 | `@toren.runtime(policies=["kr-fin"])` |

## KR Regulatory Pack

| 팩 | 근거법 | 상태 |
|---|---|---|
| KR-FIN | 금감원 AI 가이드라인 · 자본시장법 제174조 | Active · 2026-08 전면 시행 |
| KR-PIPA | 개인정보보호법 | Active · PIPC 정렬 |
| KR-ISMS | ISMS-P | Active · KISA 정렬 |

## ImperAI Journey (4단계)

1. **Ground Truth** — 에이전트 랜드스케이프 감사, 리스크 노출 확인
2. **Launch Prep** — 거버넌스 설계, 컴플라이언스 팩 구성
3. **Toren Launch** — 프로덕션 컨트롤 플레인 가동
4. **Toren Govern** — 정책 진화, 커버리지 확장

## 팀

| ID | 이름 | 역할 |
|---|---|---|
| member-2 | 음병찬 (Ben Eum) | Co-Founder & CEO |
| member-3 | Andrew Marble | Co-Founder, AI Research |

`assets/sangdeok_seo.png` 존재 — 카드 미추가 (Ben 확인 필요)

## Use Cases (페이지에 있는 3개)

1. **Financial Services** — PB 에이전트 포트폴리오 결정 → KR-FIN 적격성 룰 + 불변 결정 기록
2. **Legal / Procurement** — 계약 에이전트 → PIPA 동의 확인 + 조달 임계값 HITL
3. **IT Operations** — 인프라 에이전트 → 변경 관리 정책 + 자동 롤백 트리거

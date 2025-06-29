---
title: 도르멍
team: true
tab: 도르멍
description: 제주도 여행객을 위한 테마 기반 일정 자동 생성 & 최단 동선 추천 서비스
startedAt: 2024-12-18
endedAt: 2025-01-16
techStack:
  ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query', 'Motion']
github: https://github.com/Doreumung/Doreumung-FE
demo: https://www.doreumung.site
image: /projects/doreumung.png
isDone: true
---

## 프로젝트 개요

사용자가 선택한 여행 옵션을 기반으로 최적 동선을 추천하는 여행 경로 생성 서비스입니다.  
웹소켓 기반 실시간 인터랙션, WYSIWYG 에디터 커스터마이징 등 새로운 기술을 직접 도입하고 구현하며, 학습과 문제 해결을 반복하는 과정을 통해 사용자 중심의 기능을 완성해 나갔습니다.

## 담당 역할

- useWebSocket을 활용한 실시간 좋아요/댓글 동기화
- Next.js Middleware 기반 페이지 접근 제어
- Framer Motion, Swiper로 구현한 인터랙티브 UI
- REST API 연동 기반의 여행 후기 CRUD 기능 구현
- WYSIWYG 에디터 커스터마이징
- Figma 기반 UI 설계 및 일관된 퍼블리싱 리딩

## 협업 경험

- 데이터 스키마 설계에 관해 적극 소통하며 백엔드와 원활한 협업 유지
- 데일리 스크럼을 통한 우선순위 조정 및 일정 관리 경험
- 일관된 UI 사용을 위해 공통 스타일을 정립하고, 공통 컴포넌트화를 통해 협업 효율 향상

## 문제 해결

### 접근성 점수 개선

- **배경**: 초기 페이지에서 aria 속성 미적용, 키보드 접근성 부족, 색상 대비 미흡 등으로 Lighthouse 접근성 점수가 89점에 그침
- **방식**: 시맨틱 마크업으로 구조 개선, `aria-label` 및 키보드 Tab 순서 조정, 색상 대비 조정
- **성과**: Lighthouse 접근성 점수 89점 → 100점 달성, 다양한 사용자 환경에서의 접근성 확보

### 웹소켓 연결 최적화를 통한 리소스 절약

- **배경**: 각 컴포넌트가 개별 웹소켓을 연결하면서 중복 연결이 발생, 리소스 낭비 및 성능 저하 유발
- **방식**: 웹소켓 연결을 전역 상태(`useContext`)로 관리해 하나의 연결을 공유하도록 구조 개선
- **성과**: 중복 연결 제거로 불필요한 네트워크 요청 감소 및 성능 최적화

### 페이지 접근 제어 최적화

- **배경**: 사용자 인증/인가 여부에 따라 특정 페이지에 대한 접근 제어 필요
- **방식**
  - Next.js의 Middleware를 활용한 인증 여부에 따른 정적 접근 제어
  - ProtectedRoute를 설정하여 인가 여부에 따른 동적 접근 제어
- **성과**: 적절한 리디렉션을 통한 UX 개선 및 페이지 보안 강화
- **과제**: 접근 제어 로직 일원화를 통한 구조적 단순화 필요

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

## Responsibilities

- **Figma를 활용한 UI 디자인 주도**  
  사용자 경험을 고려한 레이아웃 구성 및 인터랙션 흐름을 직접 설계하고, 컴포넌트 단위로 구현까지 연결
- **`useWebSocket`으로 실시간 좋아요/댓글 동기화**  
  페이지 새로고침 없이도 사용자 간 인터랙션 상태가 즉시 반영되도록 웹소켓 기반 실시간 통신 처리
- **Motion 및 Swiper을 이용한 애니메이션 구현**  
  사용자의 몰입도를 높이기 위한 슬라이드 및 전환 애니메이션을 자연스럽고 매끄럽게 구현
- **WYSIWYG 텍스트 에디터 커스터마이징**  
  사용자가 후기 작성 시 다양한 스타일을 적용할 수 있도록, 텍스트 에디터의 툴바와 기능을 커스터마이징
- **React Hook Form + Zod 기반 CRUD 구현**  
  사용자 정보 및 후기 데이터를 안정적으로 관리할 수 있도록 클라이언트 측 폼 검증과 API 연동 로직 구현

## Improvements

### 웹소켓 연결 최적화를 통한 리소스 절약

- **배경**: 여러 컴포넌트에서 각각 웹소켓에 연결되어 불필요한 리소스 사용 증가
- **방식**: 웹소켓 연결을 전역 상태(`useContext`)로 관리하여 하나의 연결을 여러 컴포넌트에서 공유
- **성과**: 중복 연결 제거로 성능 최적화 및 네트워크 리소스 절약

### 페이지 접근 제어 최적화

- **배경**: 사용자 인증 및 인가 여부에 따라 접근 제어 필요
- **방식**:
  - 정적 제어: Next.js Middleware를 활용한 인증 기반 접근 제어
  - 동적 제어: `ProtectedRoute`를 통한 인가 기반 동적 접근 제어
- **성과**: 적절한 리디렉션을 통한 UX 개선 및 페이지 보안 강화
- **과제**: 접근 제어 로직이 분산되어 있어 일원화 방안 연구 필요

## Insights

### 멘토링을 통해 웹 접근성과 웹 표준에 대한 중요성 인식

랜딩페이지의 Lighthouse 접근성 점수를 89점에서 100점으로 향상

### Figma를 활용한 UI 디자인 주도

Figma를 통해 UI 전반을 주도적으로 설계하며, 디자인 원칙과 사용자 흐름에 대한 실질적인 이해를 쌓음

## Teamwork

### 백엔드와 원활한 협업 유지

데이터 구조 변경 시 적극적으로 소통하여 API 연동 시 오류 없이 개발 진행

### 프로젝트 관리 역량 강화

데일리 스크럼을 통해 업무 가시성 향상 및 우선순위 조정을 통한 생산성 극대화

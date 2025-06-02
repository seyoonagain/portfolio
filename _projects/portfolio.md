---
title: Macintosh 포트폴리오
team: false
tab: 포트폴리오
description: Macintosh Desktop UI를 구현한 포트폴리오용 웹 애플리케이션
startedAt: 2024-12-10
endedAt: 2025-05-24
techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Zustand']
github: https://github.com/seyoonagain/portfolio
demo: https://seyoon-portfolio.vercel.app
image: /projects/portfolio.png
isDone: false
---

## Responsibilities

- **서버 컴포넌트를 통한 렌더링 구조 최적화**  
  서버에서 데이터 처리 후 클라이언트 컴포넌트로 전달해, 구조적 분리를 통한 성능 및 유지보수성 향상
- **윈도우 계층 구조 구현**  
  z-index를 활용하여 창 간의 계층 구조를 동적으로 처리, 가장 최근에 클릭한 창이 최상위로 올라오는 인터랙션 구현
- **반응형 및 데스크탑 UI 구현**  
  다양한 화면 크기에 최적화된 반응형 레이아웃 구현, 데스크탑 환경에서의 UI 요소 배치 최적화

## Improvements

### 정적 데이터 처리를 고려한 서버/클라이언트 컴포넌트 분리

- **배경**: 초기에는 SPA 구조로 모든 페이지를 클라이언트 컴포넌트로 구성했으나, 정적 파일 처리 및 변환을 위해 서버 컴포넌트의 도입이 필요해짐
- **방식**: 페이지 전체를 서버 컴포넌트로 감싸고, 렌더링된 UI 요소를 객체 형태로 구성해 클라이언트 컴포넌트에 전달하는 방식으로 구조 재설계
- **성과**: 서버-클라이언트 컴포넌트 간 역할이 명확히 분리되어 구조적 일관성과 성능이 향상되었으며, 서버 컴포넌트를 활용한 SPA 설계에 대한 실무 이해도 심화

## Insights

### 데스크탑 UX 구현 감각 향상

윈도우 인터페이스 구현을 통해 사용자 행동 흐름에 최적화된 인터랙션 설계 감각을 발전시킴

### 반응형 구현을 통해 사용자 중심의 UI 감각 향상

데스크탑 중심의 맥킨토시 스타일 UI를 다양한 해상도에 맞게 반응형으로 구현하며, 시각적 완성도와 사용자 경험을 모두 고려한 설계 역량을 키움

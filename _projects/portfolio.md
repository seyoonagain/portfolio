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

## 프로젝트 개요

macOS 스타일의 UI를 웹 상에 구현한 인터랙션 중심의 포트폴리오 웹사이트입니다.  
사용자 몰입 경험을 높이기 위해 드래그 앤 드롭, 윈도우 계층 구조 등 마이크로 인터랙션을 구현했으며, 서버 컴포넌트를 활용한 콘텐츠 모듈화와 정적 파일 처리 구조를 설계하여 렌더링 일관성과 유지보수성을 개선했습니다.

## 핵심 구현 내용

- macOS 스타일의 UI 및 윈도우 기반 마이크로 인터랙션 구현
- 서버 컴포넌트를 활용한 콘텐츠 모듈화
- 반응형 레이아웃 및 시각적 완성도 개선

## 문제 해결

### 서버 컴포넌트 도입을 통한 구조 재설계 및 성능 향상

- **배경**: Markdown 렌더링이 클라이언트 환경에서 동작하지 않아 서버 컴포넌트 도입이 필요
- **방식**: 정적 파일 처리와 변환 로직을 서버 컴포넌트에서 수행하고, 결과만 클라이언트에 전달하는 구조로 재설계
- **성과**: 클라이언트의 한계를 해결하고 렌더링 책임을 분리하여 구조적 일관성과 유지보수성 향상

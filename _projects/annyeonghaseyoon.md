---
title: 안녕하세윤
team: false
tab: 블로그
description: 개발 공부 기록하는 기술 블로그
startedAt: 2025-04-23
endedAt: 2025-05-24
techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer motion']
github: https://github.com/seyoonagain/annyeonhaseyoon
demo: https://annyeonghaseyoon.vercel.app
image: /projects/annyeonghaseyoon.png
isDone: false
---

## 프로젝트 개요

Markdown 렌더링과 태그 필터 기능을 중심으로 콘텐츠 관리 흐름을 설계한 기술 블로그입니다.  
UI/UX 디자인과 반응형 레이아웃을 직접 구현하고, 정적 데이터 전달을 위한 서버/클라이언트 컴포넌트 분리, 이미지 및 폰트 로딩 최적화를 통해 사용자 경험과 성능을 함께 개선했습니다.

## 핵심 구현 기능

- 반응형 UI/UX 디자인 및 직관적인 레이아웃 구현
- Markdown → HTML 렌더링 파이프라인 구축 (remark, rehype)
- 서버/클라이언트 컴포넌트 분리 및 정적 데이터 전달 구조 설계
- Framer Motion 기반 인터랙션 애니메이션 구현

## 문제 해결

### 이미지 최적화를 통한 사용자 경험 개선

- **배경**: 고용량 배경 이미지를 CSS에서 직접 사용해 Lighthouse 성능 저하
- **방식**: 이미지 해상도 최적화 + Next.js `<Image>` 컴포넌트 적용으로 자동 최적화 구현
- **성과**: Lighthouse 성능 점수 79점 → 92점으로 향상, 초기 로딩 속도 및 사용자 경험 개선

### Google Fonts 로딩 방식 최적화

- **배경**: @import 방식의 Google Fonts 로딩으로 인한 렌더링 차단 리소스 발생
- **방식**: Next.js의 next/font 기능 활용하여 폰트 로딩 방식을 최적화된 방법으로 전환
- **성과**: 렌더링 차단 리소스 제거, 성능 점수 개선 및 안정적인 폰트 로딩 구현

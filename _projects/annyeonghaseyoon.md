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

## Responsibilities

- **서버 컴포넌트를 통한 렌더링 구조 최적화**  
  정적 페이지 생성을 고려한 효율적인 콘텐츠 구성 방식 설계
- **마이크로 인터랙션 구현**  
  텍스트 회전, 손 흔들기, 마우스트래킹 명함 등 주목도 높은 인터랙션 효과를 통해 사용자 경험 강화
- **전체 UI/UX 디자인 및 반응형 레이아웃 구현**  
  다양한 화면 크기에서도 일관된 사용자 경험을 제공할 수 있도록 개발

## Improvements

### 이미지 최적화를 통한 사용자 경험 개선

- **배경**: 고용량 배경 이미지를 CSS에서 직접 사용해 Lighthouse 성능 저하
- **방식**: 이미지 해상도 최적화 + Next.js Image 컴포넌트 적용으로 자동 최적화 구현
- **성과**: Lighthouse 성능 점수 79점 → 92점으로 향상, 초기 로딩 속도 및 사용자 경험 개선

### Google Fonts 로딩 방식 최적화

- **배경**: @import 방식의 Google Fonts 로딩으로 인한 렌더링 차단 리소스 발생
- **방식**: Next.js의 next/font 기능 활용하여 폰트 로딩 방식을 최적화된 방법으로 전환
- **성과**: 렌더링 차단 리소스 제거, 성능 점수 개선 및 안정적인 폰트 로딩 구현

## Insights

### 서버-클라이언트 컴포넌트 분리 경험

Markdown 처리, 정적 데이터 전달, 렌더링 흐름 등을 통해 서버 컴포넌트와 클라이언트 컴포넌트의 구조적 역할을 명확히 이해함

### Framer Motion을 활용한 몰입형 인터랙션 구현

Framer Motion을 활용해 마우스 위치 기반의 입체 애니메이션과 반복 동작을 구현하며, UI에 생동감을 더하고 애니메이션 라이브러리에 대한 이해를 심화함

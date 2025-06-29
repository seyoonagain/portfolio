---
title: Macintosh 계산기
team: false
tab: 계산기
description: Macintosh Desktop UI를 구현한 계산기
startedAt: 2024-09-25
endedAt: 2024-09-30
techStack: ['JavaScript', 'HTML', 'CSS']
github: https://github.com/seyoonagain/calculator
demo: https://macintosh-calculator.netlify.app
image: /projects/calculator.png
isDone: true
---

## 핵심 구현 기능

- Macintosh UI 스타일을 모방한 계산기 인터페이스 디자인 및 구현
- HTML, CSS, JavaScript만을 사용하여 덧셈, 뺄셈, 곱셈, 나눗셈 기능을 포함한 기본 계산 기능 구현

## 문제 해결

### 예외 처리 로직 구현

- **배경**: 0으로 나누기나 과도한 수치를 입력할 경우, 계산기 화면에 잘못된 값이 표시되는 문제가 발생
- **방식**: 오류가 발생할 경우, 경고 메시지를 표시하여 잘못된 입력을 알리도록 처리
- **성과**: 잘못된 입력에도 안정적으로 동작하여 사용자 경험 개선

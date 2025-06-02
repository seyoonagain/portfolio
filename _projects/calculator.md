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

## Responsibilities

- Macintosh UI 스타일을 모방한 계산기 인터페이스 디자인 및 구현
- HTML, CSS, JavaScript만을 사용하여 덧셈, 뺄셈, 곱셈, 나눗셈 기능을 포함한 기본 계산 기능 구현

## Improvements

### 예외 처리 로직 구현

- 배경: 0으로 나누기나 과도한 수치를 입력할 경우, 계산기 화면에 잘못된 값이 표시되는 문제가 발생
- 방식: 오류가 발생할 경우, 경고 메시지를 표시하여 잘못된 입력을 알리도록 처리
- 성과: 잘못된 입력에도 안정적으로 동작하여 사용자 경험 개선

## Insights

### 순수 JavaScript로 UI와 로직을 직접 구현한 경험

프레임워크 없이 HTML, CSS, JavaScript만으로 계산기 UI와 기능을 모두 구현하며 DOM 조작, 이벤트 흐름, 상태 관리의 기본기를 탄탄히 다질 수 있었음

### 오류 처리 및 사용자 친화적 피드백에 대한 고민

0으로 나누는 경우나 계산기 화면 범위를 벗어나는 숫자 입력 등 예외 상황을 직접 처리하며, 사용자 경험을 해치지 않으면서 문제를 알리는 방식에 대해 고민하고 구현함

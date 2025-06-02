import skill from '@/components/skill/types';

const SKILLS: skill[] = [
  {
    skill: 'TypeScript',
    description: '기본적인 타입 지정부터 유틸리티 타입, 제네릭까지 활용할 수 있음',
  },
  {
    skill: 'React',
    description:
      '컴포넌트 설계와 상태 관리에 익숙하고, 핵심 훅과 렌더링 최적화에 대해 이해하고 있으며, 커스텀 훅을 만들어 사용할 수 있음',
  },
  {
    skill: 'Next.js',
    description:
      'App Router 기반 프로젝트 개발 경험이 있으며, 서버 컴포넌트, 동적 라우팅, Middleware 구성 등을 직접 해봄',
  },
  {
    skill: 'NextAuth',
    description:
      '백엔드 로그인 API와 연동한 경험이 있으며, 액세스 토큰 만료 시간에 맞춘 refetchInterval 설정 등 토큰 기반 인증 흐름에 대한 커스터마이징이 가능함',
  },
  {
    skill: 'Redux Toolkit',
    description:
      'Slice, Action, PayloadAction 등 핵심 개념을 이해하고 있으며, 상태 불변성을 유지한 reducer 작성과 커스텀 상태 관리를 구조적으로 설계할 수 있음',
  },
  {
    skill: 'RTK Query',
    description:
      '태그 기반 캐시 전략과 transformResponse를 포함한 CRUD API 설계 및 상태 관리를 수행할 수 있음',
  },
  {
    skill: 'Zustand',
    description: 'store 분리에 익숙하며, 간단하고 유연한 전역 상태 관리 용도로 사용해봄',
  },
  {
    skill: 'TanStack Query',
    description:
      '조건부 요청, staleTime 설정, 캐시 무효화 등 상태 관리에 필요한 주요 기능을 상황에 맞게 활용할 수 있음',
  },
  {
    skill: 'Tailwind CSS',
    description:
      '버전 3, 4 환경에서 작업한 경험이 있으며, 기본 유틸리티 외에 @theme, @utility 등을 사용해 커스텀 스타일을 구성할 수 있음',
  },
  {
    skill: 'Motion',
    description:
      '스크롤 트리거 및 전환 애니메이션을 활용해 사용자 경험을 강화하는 UI를 구성할 수 있음',
  },
  {
    skill: 'Figma',
    description:
      'Auto Layout과 그리드 시스템을 활용한 레이아웃 설계에 익숙하며, 변수 설정을 통해 효율적인 디자인 작업이 가능함',
  },
  {
    skill: 'ShadCN UI',
    description:
      'Form, Sidebar, Alert, Select, Toggle 등 다양한 UI 컴포넌트를 사용해 실제 프로젝트에 적용한 경험이 있으며, React Hook Form과 연동하여 유효성 검사를 포함한 폼 구현이 가능함',
  },
];

export default SKILLS;

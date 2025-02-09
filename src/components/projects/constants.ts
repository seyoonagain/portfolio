import Doreumung from '@public/images/dolmung.svg';
import HakunaMatatrot from '@public/images/hakunamatatarot.svg';

const PROJECTS_DETAILS = [
  {
    title: '도르멍',
    image: Doreumung,
    startedAt: '2024-12-18',
    endedAt: '2025-01-16',
    overview:
      '제주도에서 새로움을 느끼고 싶은 여행자들을 위한 랜덤 여행 서비스로, 숨겨진 명소와 최적의 여행 동선을 제공합니다.',
    backend: 2,
    frontend: 3,
    techStacks: [
      'Next.js',
      'React',
      'Typescript',
      'Redux Toolkit',
      'RTK Query',
      'React Hook Form',
      'Zod',
      'Tiptap',
      'Swiper',
      'Motion',
      'TailwindCSS',
    ],
    githubRepo: 'https://github.com/Doreumung/Doreumung-FE',
    website: 'https://www.doreumung.site',
    role: '프론트엔드',
    responsibility: [
      'Tiptap을 활용한 텍스트 에디터 커스터마이징',
      'react-hook-form과 Zod를 활용한 후기 및 댓글 작성 폼 구현과 유효성 검사 적용',
      '웹소켓(useWebSocket)을 이용한 좋아요 수 및 댓글 실시간 업데이트 구현',
      '웹 접근성을 고려한 ARIA 속성 적용 및 키보드 내비게이션 최적화',
      'Motion과 Swiper를 활용한 랜딩페이지 애니메이션 구현',
      'Next.js Middleware를 활용한 인증 기반 페이지 접근 제어 및 리디렉트 구현',
    ],
    keyAchievements: [],
    lessonsLearned: [],
  },
  {
    title: '하쿠나마타타로',
    image: HakunaMatatrot,
    startedAt: '2025-01-17',
    endedAt: '2025-02-26',
    overview: '',
    backend: 3,
    frontend: 4,
    techStacks: [
      'Next.js',
      'React',
      'Typescript',
      'Zustand',
      'Tanstack Query',
      'React Hook Form',
      'Zod',
      'TailwindCSS',
    ],
    githubRepo: 'https://github.com/tataro-project/Tataro-FE',
    website: '',
    role: '프론트엔드',
    responsibility: [],
    keyAchievements: [],
    lessonsLearned: [],
  },
];

export default PROJECTS_DETAILS;

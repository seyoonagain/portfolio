import Doreumung from '@public/images/dolmung.svg';
import HakunaMatatrot from '@public/images/hakunamatatarot.svg';

import { ProjectDetails, ProjectTitles } from './types';

export const PROJECTS: ProjectTitles[] = ['하쿠나마타타로', '도르멍'];

export const HAKUNAMATATROT_DETAILS: ProjectDetails = {
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
  links: [
    { link: 'Repository', href: 'https://github.com/tataro-project/Tataro-FE' },
    { link: 'Demo', href: 'https://hakunamatatarot.com' },
  ],
  responsibilities: [
    <>
      OAuth 기반<span className="font-galmuri9 text-zinc-950"> 로그인 구현 및 토큰 관리</span>
    </>,
    <>
      <span className="font-galmuri9 text-zinc-950">React Hook Form과 Zod</span>를 활용한 유효성
      검사 적용
    </>,
  ],
  keyAchievements: [
    {
      title: '상태 관리 효율화',
      details: [
        'Redux Toolkit과 Zustand의 차이 경험',
        '프로젝트 특성에 맞는 상태 관리 도구 선택의 필요성',
      ],
    },
  ],
  lessonsLearned: [
    {
      title: 'PR 리뷰를 통한 코드 품질 향상',
      details: [
        '팀원들간의 코드 리뷰를 통해 코드 일관성 유지',
        '서로의 개발 방식과 접근법을 보며 새로운 기술 또는 패턴 학습',
      ],
    },
  ],
};

export const DOREUMUNG_DETAILS: ProjectDetails = {
  title: '도르멍',
  image: Doreumung,
  startedAt: '2024-12-18',
  endedAt: '2025-01-16',
  overview: (
    <>
      제주도에서 새로움을 느끼고 싶은 여행자들을 위한 랜덤 여행 서비스로, <br />
      숨겨진 명소와 최적의 여행 동선을 제공합니다.
    </>
  ),
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
  links: [
    { link: 'Repository', href: 'https://github.com/Doreumung/Doreumung-FE' },
    { link: 'Demo', href: 'https://www.doreumung.site' },
  ],
  responsibilities: [
    <>
      Tiptap을 활용한
      <span className="font-galmuri9 text-zinc-950"> 텍스트 에디터 커스터마이징</span>
    </>,
    <>
      <span className="font-galmuri9 text-zinc-950">React Hook Form과 Zod</span>를 활용한 유효성
      검사 적용 및 <span className="font-galmuri9 text-zinc-950">CRUD</span> 기능 추가
    </>,
    <>
      <span className="font-galmuri9 text-zinc-950">웹소켓(useWebSocket)</span>을 이용한 좋아요 수
      및 댓글 실시간 업데이트 구현
    </>,
    <>
      <span className="font-galmuri9 text-zinc-950">Motion과 Swiper</span>를 활용한 랜딩페이지
      <span className="font-galmuri9 text-zinc-950"> 애니메이션</span> 구현
    </>,
    <>
      <span className="font-galmuri9 text-zinc-950">Next.js Middleware</span>를 활용한 인증 기반
      페이지 접근 제어 및 리디렉트 구현
    </>,
  ],
  keyAchievements: [
    {
      title: '웹 접근성의 중요성',
      details: ['ARIA 속성 적용 및 키보드 내비게이션 최적화를 통해 접근성 개선'],
    },
  ],
  lessonsLearned: [
    {
      title: '팀 협업 및 컨벤션의 중요성',
      details: [
        '백엔드와의 원활한 소통을 위한 API 명세 공유',
        '데이터 형태의 중요성 인지하고 원활한 협업을 위한 데이터 구조 사전 정의',
        '일관된 커밋 메시지 규칙과 TailwindCSS 클래스 네이밍 컨벤션 적용하여 코드 일관성 향상',
      ],
    },
  ],
};

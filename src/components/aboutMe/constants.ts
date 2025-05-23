import Cup from '@public/images/cup.svg';
import Pencil from '@public/images/pencil.svg';
import Glasses from '@public/images/glasses.svg';
import AboutMeItem from '@/components/aboutMe/types';

const ABOUT_ME: AboutMeItem[] = [
  {
    heading: '소통하는 개발자',
    icon: Cup,
    content:
      '따뜻한 말이 팀의 책임감과 신뢰를 키운다고 믿습니다. 존중받을 때 사람은 더 주도적으로 일하고, 신뢰받을 때 더 오래 함께할 수 있다고 느꼈습니다. 기술뿐 아니라 말과 태도로 팀의 분위기를 세워나가겠습니다.',
  },
  {
    heading: '디테일에 강한 개발자',
    icon: Glasses,
    content:
      '작은 차이가 결과물의 완성도를 결정한다고 믿습니다. 디테일을 놓치지 않는 시선은 결과물의 정교함을 높이고, 더 나은 사용자 경험으로 이어진다고 생각합니다. 사용자에게 보이지 않는 부분까지도 꼼꼼히 챙기겠습니다.',
  },
  {
    heading: '도전을 두려워하지 않는 개발자',
    icon: Pencil,
    content:
      '새로운 길을 선택하는 데 나이는 걸림돌이 아니라고 믿습니다. 낯선 분야에서도 배움을 즐기고, 필요하다면 처음부터 다시 시작하는 용기를 냅니다. 익숙함에 머무르지 않고, 더 나은 방향을 향해 꾸준히 나아가겠습니다.',
  },
];

export default ABOUT_ME;

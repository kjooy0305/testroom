// 시안 기록. 새 시안을 만들면 맨 위에 한 개 덧붙이면 목록에 나타난다. (순서는 date 로 정렬하므로 상관없음)
// status: 'open' 선택 필요 / 'done' 선택 완료 / 'archive' 보관
// questions: 시안 페이지의 질문 id 목록과 질문 글 (목록에서 선택 진행도를 보여 준다)
window.MOCKS = [
  {
    id: 'usw-sync-app',
    href: 'usw-sync/',
    title: 'Coetus(USW SYNC) 팀 저장소 develop 빌드',
    project: 'USW SYNC (수원대 팀플 조율)',
    date: '2026-11-26',
    status: 'live',
    summary: '팀 저장소 develop 브랜치의 React 앱(Vite 빌드)을 그대로 올린 것. 로그인 → 내 팀 목록 → 팀 홈/일정/할 일/멤버, 시간표 입력, 공통 가능 시간, 투표. 여기는 서버가 없어 예시 데이터로만 동작. 기기 간 공유는 학교 테스트 서버(6000 포트)에서. 예시 계정 jinwoo / 1234',
    tags: ['사이트', 'develop 빌드', 'React', '휴대폰', '해커톤']
  },
  {
    id: 'usw-sync-frame',
    title: 'USW SYNC 화면 틀: PC · 비로그인 소개 · 휴대폰',
    project: 'USW SYNC (수원대 팀플 조율)',
    date: '2026-11-14',
    status: 'done',
    decided: 'PC 틀 OK · ② 비로그인 소개 OK · ① 휴대폰 전용 OK (2026-11-14, 세 화면 모두 이대로 진행)',
    summary: '손그림 3장을 흑백 틀로 옮긴 시안. PC 기준 틀(카드 2+2 + 세부 작업 공간), 비로그인 소개 화면(빈 지그재그 틀), 휴대폰 전용(공지 + 주요 기능 목록에서 선택) — 버튼·카드 눌러 보기 가능',
    tags: ['시안', '화면 틀', 'PC', '휴대폰', '흑백', '해커톤'],
    questions: [
      { id: 'pc', text: 'PC 기준 틀' },
      { id: 'intro', text: '② 비로그인 소개' },
      { id: 'phone', text: '① 휴대폰 전용' },
      { id: 'etc', text: '그 밖에' }
    ]
  },
  {
    id: 'dungeon-minigames',
    title: '던전 미니게임: 어떤 게임을 할지',
    project: '끝에 도달하는 이야기',
    date: '2026-11-14',
    status: 'archive',
    decided: '아직 만들지 않음 · 스토리를 다 만든 뒤에 진행 (보류)',
    summary: '미니게임형 던전에서 쓸 게임 후보 8가지를 보고 "처음부터 / 나중에 / 빼기"로 고르기 (대체 방식과 새 아이디어는 글로)',
    tags: ['시안', '던전', '미니게임', '세계관 노트'],
    questions: [
      { id: 'g1', text: '① 회로 이어 붙이기' },
      { id: 'g2', text: '② 문양 기억 짝 맞추기' },
      { id: 'g3', text: '③ 타이밍 막대' },
      { id: 'g4', text: '④ 안개 길 찾기' },
      { id: 'g5', text: '⑤ 틀린 곳 찾기' },
      { id: 'g6', text: '⑥ 소리 따라 하기' },
      { id: 'g7', text: '⑦ 식량 나누기' },
      { id: 'g8', text: '⑧ 피하기' },
      { id: 'alt', text: '못 하는 사람을 위한 대체 방식' },
      { id: 'new', text: '넣고 싶은 미니게임' }
    ]
  },
  {
    id: 'edit-export',
    title: '세계관 노트 편집과 내보내기',
    project: '끝에 도달하는 이야기',
    date: '2026-11-14',
    status: 'done',
    decided: '편집 범위 C(추가·삭제까지) · 전달 A+B+C 모두 · 겹치면 B(보류하고 알려 주기)',
    applied: '2026-11-14 세계관 노트에 구현',
    summary: '사이트에서 노트를 직접 고치고, 바뀐 부분만 파일로 내보내 저장소에 반영하는 방식에서 애매한 부분 정하기 (글로 답하는 칸 포함)',
    tags: ['시안', '편집', '내보내기', '세계관 노트', '반영'],
    questions: [
      { id: 'scope', text: '편집 범위' },
      { id: 'send', text: '수정 내용 전달 방식' },
      { id: 'merge', text: '새 내용과 겹칠 때' },
      { id: 'want', text: '꼭 있었으면 하는 편집 기능' },
      { id: 'file', text: '내보내기 파일 요구사항' }
    ]
  },
  {
    id: 'nav-layers',
    title: '레이어 구조: 바로가기와 큰 글 분리',
    project: '끝에 도달하는 이야기',
    date: '2026-11-14',
    status: 'done',
    decided: '바로가기 C(왼쪽 트리 + 위 경로) · 본문 A(화면 하나만) · 큰 글 A(줄마다 페이지로 열기) · 노트 A(시안과 통일)',
    applied: '2026-11-14 화면 시안과 세계관 노트에 적용',
    summary: '위쪽 바로가기 모양, 본문 표시 방식, 세계관 노트의 큰 글을 별도 페이지로 빼는 기준을 그림으로 고르기',
    tags: ['시안', '구조', '나무위키식', '바로가기', '세계관 노트'],
    questions: [
      { id: 'nav', text: '위쪽 바로가기 모양' },
      { id: 'body', text: '화면을 고르면 본문 표시' },
      { id: 'split', text: '큰 글을 별도 페이지로 빼는 기준' },
      { id: 'note', text: '세계관 노트 바로가기' }
    ]
  }
];

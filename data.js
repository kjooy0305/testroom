// 시안 기록. 새 시안을 만들면 맨 위에 한 개 덧붙이면 목록에 나타난다. (순서는 date 로 정렬하므로 상관없음)
// status: 'open' 선택 필요 / 'done' 선택 완료 / 'archive' 보관
// questions: 시안 페이지의 질문 id 목록과 질문 글 (목록에서 선택 진행도를 보여 준다)
window.MOCKS = [
  {
    id: 'nav-layers',
    title: '레이어 구조: 바로가기와 큰 글 분리',
    project: '끝에 도달하는 이야기',
    date: '2026-11-14',
    status: 'open',
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

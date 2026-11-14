// 시안 페이지 공통: 옵션 카드에서 "이걸로 선택"을 누르면 저장하고 하단에 결과를 보여 준다.
// 사용: 카드 <section class="opt" data-q="질문id" data-o="옵션id"> 안에 <button class="pick">이걸로 선택</button>
(function () {
  const ID = window.MOCK_ID, KEY = 'testroom.choice.' + ID;
  let chosen = {};
  try { chosen = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(chosen)); } catch (e) {} };
  // 질문 id 는 선택 카드(.opt)와 글로 적는 칸(.ans) 어디에 있어도 모은다. 글 답은 '~질문id' 키로 저장한다.
  const qs = [...new Set([...document.querySelectorAll('[data-q]')].map(e => e.dataset.q))];
  const titles = {}; document.querySelectorAll('[data-qtitle]').forEach(e => { titles[e.dataset.qtitle] = e.textContent.trim(); });
  const bar = document.createElement('div'); bar.className = 'pickbar';
  bar.innerHTML = '<div class="pickline" id="pickline"></div><div class="bar"><button class="btn pri" id="copyPick">선택 결과 복사</button><button class="btn" id="clearPick">다시 고르기</button><span class="note" id="pickmsg"></span></div>';
  document.body.append(bar);
  function summary() {
    return '[시안 ' + ID + '] ' + qs.map(q => {
      const hasOpt = !!document.querySelector('.opt[data-q="' + q + '"]'), t = (chosen['~' + q] || '').trim();
      const pick = hasOpt ? (chosen[q] ? chosen[q].toUpperCase() : '미선택') : '';
      return (titles[q] || q) + ': ' + [pick, t ? '메모 “' + t.replace(/\s+/g, ' ') + '”' : (hasOpt ? '' : '미작성')].filter(Boolean).join(' + ');
    }).join(' / ');
  }
  function render() {
    document.querySelectorAll('.opt').forEach(c => {
      const on = chosen[c.dataset.q] === c.dataset.o;
      c.classList.toggle('on', on);
      const b = c.querySelector('.pick'); if (b) { b.textContent = on ? '✓ 선택함' : '이걸로 선택'; b.setAttribute('aria-pressed', on); }
    });
    document.querySelectorAll('.ans').forEach(a => { if (document.activeElement !== a) a.value = chosen['~' + a.dataset.q] || ''; });
    const n = qs.filter(q => chosen[q] || (chosen['~' + q] || '').trim()).length;
    document.getElementById('pickline').textContent = summary() + '  (' + n + '/' + qs.length + ')';
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('.pick'); if (!b) return;
    const c = b.closest('.opt'); chosen[c.dataset.q] = c.dataset.o; save(); render();
  });
  document.addEventListener('input', e => { const a = e.target.closest('.ans'); if (!a) return; chosen['~' + a.dataset.q] = a.value; save(); render(); });
  document.getElementById('copyPick').onclick = async () => {
    const t = summary(); const m = document.getElementById('pickmsg');
    try { await navigator.clipboard.writeText(t); m.textContent = '복사했어요. 대화에 붙여 넣어 주세요.'; }
    catch (e) { const a = document.createElement('textarea'); a.value = t; document.body.append(a); a.select(); document.execCommand('copy'); a.remove(); m.textContent = '복사했어요.'; }
  };
  document.getElementById('clearPick').onclick = () => { chosen = {}; save(); render(); document.getElementById('pickmsg').textContent = ''; };
  render();
})();

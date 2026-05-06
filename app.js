// ============================================
// NIHONGO PWA - Logique de l'app
// ============================================

const STORAGE_KEY = 'nihongo:progress:v1';

// === SVG icônes ===
const ICONS = {
  flame: '<svg viewBox="0 0 24 24" fill="#C73E3A" stroke="#C73E3A" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="#C9A961" stroke="#C9A961" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg>',
  rotate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>'
};

const inkBrushSvg = (color = '#1a1a1a') => `<svg class="ink-brush" viewBox="0 0 200 20" preserveAspectRatio="none"><path d="M 5 10 Q 50 4, 100 11 T 195 9" stroke="${color}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.85"/></svg>`;

// === STORAGE ===
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    completedLessons: {},
    unlockedLessons: ['ch1-l1']
  };
}

function saveProgress(p) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch (e) {
    console.error('Sauvegarde impossible', e);
  }
}

// === HELPERS ===
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(s) {
  return s.toLowerCase().trim().replace(/[?!.,;:]/g, '').replace(/\s+/g, ' ');
}

function isCorrect(input, answers) {
  const u = normalize(input);
  return answers.some(a => normalize(a) === u);
}

function getAllLessons() {
  return COURSE.flatMap(ch => ch.lessons.map(l => ({
    ...l,
    chapterId: ch.id,
    chapterTitle: ch.title,
    chapterColor: ch.color
  })));
}

function getNextLessonId(currentId) {
  const all = getAllLessons();
  const idx = all.findIndex(l => l.id === currentId);
  if (idx >= 0 && idx < all.length - 1) return all[idx + 1].id;
  return null;
}

function escape(str) {
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[m]);
}

// === ÉTAT GLOBAL ===
let state = {
  view: 'home',
  progress: loadProgress(),
  currentLessonId: null,
  currentSection: 0,
  currentExercise: 0,
  currentScore: 0,
  exerciseState: null
};

const $app = document.getElementById('app');

function render() {
  switch (state.view) {
    case 'home': renderHome(); break;
    case 'lesson': renderLesson(); break;
    case 'exercises': renderExercises(); break;
    case 'complete': renderComplete(); break;
  }
  window.scrollTo(0, 0);
}

// ============================================
// HOME
// ============================================
function renderHome() {
  const { progress } = state;
  const total = getAllLessons().length;
  const done = Object.keys(progress.completedLessons).length;

  let chaptersHtml = COURSE.map((ch, chIdx) => {
    const chDone = ch.lessons.filter(l => progress.completedLessons[l.id]).length;

    const lessonsHtml = ch.lessons.map((lesson, lIdx) => {
      const isDone = !!progress.completedLessons[lesson.id];
      const isUnlocked = progress.unlockedLessons.includes(lesson.id);
      const completion = progress.completedLessons[lesson.id];

      const circleColor = isDone ? ch.color : '#F5F1E8';
      const circleText = isDone ? '#fff' : '#5C5147';
      const borderLeft = isDone ? ch.color : (isUnlocked ? '#C9A961' : '#D5CFC0');

      let metaHtml;
      if (completion) {
        metaHtml = `<div class="lesson-meta">Score : ${completion.score}/${completion.total}${completion.perfect ? ' · ✦ parfait' : ''}</div>`;
      } else if (isUnlocked) {
        metaHtml = `<div class="lesson-meta">${lesson.exercises.length} exercices</div>`;
      } else {
        metaHtml = '';
      }

      const circleContent = !isUnlocked
        ? `<svg class="lesson-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
        : isDone
          ? ICONS.check
          : `<span>${lIdx + 1}</span>`;

      return `
        <button class="lesson-card" data-lesson-id="${lesson.id}" ${!isUnlocked ? 'disabled' : ''}
          style="border-left-color:${borderLeft}; ${isDone ? 'border-color:' + ch.color : ''}">
          <div class="lesson-circle" style="background:${circleColor}; color:${circleText}">${circleContent}</div>
          <div class="lesson-text">
            <div class="lesson-title">${escape(lesson.title)}</div>
            ${metaHtml}
          </div>
          ${isUnlocked && !isDone ? '<svg class="lesson-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>' : ''}
        </button>
      `;
    }).join('');

    return `
      <div class="chapter">
        <div class="chapter-header">
          <span class="chapter-number" style="color:${ch.color}">${String(chIdx + 1).padStart(2, '0')}</span>
          <div class="chapter-info">
            <div class="chapter-title">${escape(ch.title)}</div>
            <div class="chapter-subtitle">${escape(ch.subtitle)} · ${chDone}/${ch.lessons.length}</div>
          </div>
        </div>
        ${inkBrushSvg(ch.color)}
        <div class="lessons">${lessonsHtml}</div>
      </div>
    `;
  }).join('');

  $app.innerHTML = `
    <div class="home">
      <div class="home-header">
        <div class="stats-bar">
          <div class="stat-pill">${ICONS.flame}<span>${progress.streak}</span></div>
          <div class="stat-pill">${ICONS.star}<span>${progress.xp}</span></div>
        </div>
        <div class="title-kanji">
          <span class="black">日</span><span class="red">本</span><span class="black">語</span>
        </div>
        <h1 class="title-romaji">Nihongo</h1>
        <p class="title-subtitle">Le japonais, leçon par leçon</p>
        <div class="progress-summary">
          <span class="stamp">${done}/${total}</span>
          <span>leçons complétées</span>
        </div>
      </div>
      <div class="chapters">${chaptersHtml}</div>
      <div class="home-footer">
        ${inkBrushSvg('#1a1a1a')}
        <p>頑張って · Ganbatte</p>
      </div>
    </div>
  `;

  document.querySelectorAll('.lesson-card[data-lesson-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      const id = btn.dataset.lessonId;
      state.currentLessonId = id;
      state.currentSection = 0;
      state.view = 'lesson';
      render();
    });
  });
}

// ============================================
// LESSON SCREEN
// ============================================
function renderLesson() {
  const all = getAllLessons();
  const lesson = all.find(l => l.id === state.currentLessonId);
  const chapter = COURSE.find(c => c.id === lesson.chapterId);
  const totalSections = lesson.teaching.length;
  const current = lesson.teaching[state.currentSection];

  let sectionContent = '';

  switch (current.type) {
    case 'intro':
      sectionContent = `
        <span class="stamp" style="background:${chapter.color}">introduction</span>
        <p>${escape(current.text)}</p>
      `;
      break;

    case 'rule':
      sectionContent = `
        <span class="stamp" style="background:${chapter.color}">règle</span>
        <h3>${escape(current.title)}</h3>
        ${inkBrushSvg(chapter.color)}
        <p>${escape(current.content)}</p>
      `;
      break;

    case 'examples': {
      const items = current.items.map(item => `
        <div class="example-card">
          <div class="example-jp" style="color:${chapter.color}">${escape(item.jp)}</div>
          <div class="example-fr">${escape(item.fr)}</div>
          ${item.note ? `<div class="example-note">${escape(item.note)}</div>` : ''}
        </div>
      `).join('');
      sectionContent = `
        <span class="stamp" style="background:${chapter.color}">exemples</span>
        <div class="examples-list">${items}</div>
      `;
      break;
    }

    case 'vocab': {
      const items = current.items.map(item => `
        <div class="vocab-card">
          <div class="vocab-jp" style="color:${chapter.color}">${escape(item.jp)}</div>
          <div class="vocab-fr">${escape(item.fr)}</div>
          ${item.note ? `<div class="vocab-note">${escape(item.note)}</div>` : ''}
        </div>
      `).join('');
      sectionContent = `
        <span class="stamp" style="background:${chapter.color}">vocabulaire</span>
        <div class="vocab-list">${items}</div>
      `;
      break;
    }

    case 'tip':
      sectionContent = `
        <span class="stamp" style="background:#C9A961">astuce</span>
        <div class="tip-card">
          <div class="sparkle">${ICONS.sparkles}</div>
          <p>${escape(current.text)}</p>
        </div>
      `;
      break;
  }

  const segments = Array.from({ length: totalSections }).map((_, i) => `
    <div class="progress-segment" style="${i <= state.currentSection ? 'background:' + chapter.color : ''}"></div>
  `).join('');

  const isLast = state.currentSection >= totalSections - 1;

  $app.innerHTML = `
    <div class="lesson-screen">
      <div class="screen-header">
        <div class="screen-header-row">
          <button class="icon-button" id="back-btn">${ICONS.chevronLeft}</button>
          <div class="screen-header-info">
            <div class="screen-chapter-label" style="color:${chapter.color}">${escape(chapter.title)}</div>
            <div class="screen-lesson-label">${escape(lesson.title)}</div>
          </div>
        </div>
        <div class="progress-segments">${segments}</div>
      </div>

      <div class="lesson-content">
        <div class="lesson-content-inner section-content">
          ${sectionContent}
        </div>
      </div>

      <div class="lesson-footer">
        <div class="lesson-footer-inner">
          ${state.currentSection > 0 ? `
            <button class="btn btn-secondary" id="prev-btn">${ICONS.chevronLeft} Précédent</button>
          ` : ''}
          ${isLast ? `
            <button class="btn btn-primary" id="exercises-btn" style="background:${chapter.color}">
              ${ICONS.trophy} Commencer les exercices
            </button>
          ` : `
            <button class="btn btn-primary" id="next-btn" style="background:${chapter.color}">
              Suivant ${ICONS.chevronRight}
            </button>
          `}
        </div>
      </div>
    </div>
  `;

  document.getElementById('back-btn').onclick = () => { state.view = 'home'; render(); };
  if (document.getElementById('prev-btn')) document.getElementById('prev-btn').onclick = () => { state.currentSection--; render(); };
  if (document.getElementById('next-btn')) document.getElementById('next-btn').onclick = () => { state.currentSection++; render(); };
  if (document.getElementById('exercises-btn')) document.getElementById('exercises-btn').onclick = () => {
    state.view = 'exercises';
    state.currentExercise = 0;
    state.currentScore = 0;
    state.exerciseState = null;
    render();
  };
}

// ============================================
// EXERCISES
// ============================================
function renderExercises() {
  const all = getAllLessons();
  const lesson = all.find(l => l.id === state.currentLessonId);
  const chapter = COURSE.find(c => c.id === lesson.chapterId);
  const total = lesson.exercises.length;
  const current = lesson.exercises[state.currentExercise];

  const segments = Array.from({ length: total }).map((_, i) => {
    let bg = '#E5DFD0';
    if (i < state.currentExercise) bg = chapter.color;
    else if (i === state.currentExercise) bg = '#C9A961';
    return `<div class="progress-segment" style="background:${bg}"></div>`;
  }).join('');

  const typeLabel = {
    mcq: 'choix', translate: 'traduction', fill: 'à compléter', order: 'ordonner', match: 'associer'
  }[current.type];

  let exerciseHtml = '';
  switch (current.type) {
    case 'mcq': exerciseHtml = renderMCQ(current); break;
    case 'translate':
    case 'fill': exerciseHtml = renderTextInput(current); break;
    case 'order': exerciseHtml = renderOrder(current); break;
    case 'match': exerciseHtml = renderMatch(current); break;
  }

  $app.innerHTML = `
    <div class="lesson-screen">
      <div class="screen-header">
        <div class="screen-header-row">
          <button class="icon-button" id="quit-btn">${ICONS.x}</button>
          <div class="screen-header-info">
            <div class="progress-segments">${segments}</div>
            <div class="exercise-counter">Exercice ${state.currentExercise + 1} sur ${total}</div>
          </div>
        </div>
      </div>

      <div class="exercise-content">
        <div class="exercise-inner">
          <span class="stamp" style="background:${chapter.color}">${typeLabel}</span>
          <h2 class="exercise-question">${escape(current.question)}</h2>
          <div id="exercise-body">${exerciseHtml}</div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('quit-btn').onclick = () => { state.view = 'home'; render(); };

  // Bind interactions
  switch (current.type) {
    case 'mcq': bindMCQ(current); break;
    case 'translate':
    case 'fill': bindTextInput(current); break;
    case 'order': bindOrder(current); break;
    case 'match': bindMatch(current); break;
  }
}

// === MCQ ===
function renderMCQ(ex) {
  const opts = ex.options.map((opt, i) => `
    <button class="option" data-idx="${i}">
      <span class="option-letter">${String.fromCharCode(65 + i)}</span>
      <span class="option-text">${escape(opt)}</span>
    </button>
  `).join('');
  return `
    <div class="options" id="mcq-options">${opts}</div>
    <button class="submit-btn" id="submit-btn" disabled>Valider</button>
    <div id="feedback-zone"></div>
  `;
}

function bindMCQ(ex) {
  let selected = null;
  let submitted = false;
  const buttons = document.querySelectorAll('#mcq-options .option');
  const submitBtn = document.getElementById('submit-btn');

  buttons.forEach(btn => {
    btn.onclick = () => {
      if (submitted) return;
      selected = parseInt(btn.dataset.idx, 10);
      buttons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      submitBtn.disabled = false;
    };
  });

  submitBtn.onclick = () => {
    if (selected === null || submitted) return;
    submitted = true;

    buttons.forEach((btn, i) => {
      if (i === ex.answer) btn.classList.add('correct');
      else if (i === selected) btn.classList.add('wrong');
      btn.disabled = true;
      // Update icon
      if (i === ex.answer) {
        btn.insertAdjacentHTML('beforeend', `<span class="option-icon" style="color:#2D5F3F">${ICONS.check}</span>`);
      } else if (i === selected) {
        btn.insertAdjacentHTML('beforeend', `<span class="option-icon" style="color:#C73E3A">${ICONS.x}</span>`);
      }
    });

    submitBtn.style.display = 'none';

    const correct = selected === ex.answer;
    const fb = document.getElementById('feedback-zone');
    if (ex.explanation) {
      fb.innerHTML = `
        <div class="feedback ${correct ? 'correct' : 'wrong'}">
          <div class="feedback-label">${correct ? '✓ Correct' : 'Explication'}</div>
          <div class="feedback-text">${escape(ex.explanation)}</div>
        </div>
      `;
    }

    setTimeout(() => handleAnswer(correct), 1800);
  };
}

// === TEXT INPUT (translate / fill) ===
function renderTextInput(ex) {
  return `
    <input type="text" class="text-input" id="text-input" placeholder="Écris ta réponse..." autocomplete="off" autocapitalize="off" spellcheck="false">
    ${ex.hint ? `<p class="hint">💡 ${escape(ex.hint)}</p>` : ''}
    <button class="submit-btn" id="submit-btn" disabled>Valider</button>
    <div id="feedback-zone"></div>
  `;
}

function bindTextInput(ex) {
  const input = document.getElementById('text-input');
  const submitBtn = document.getElementById('submit-btn');
  let submitted = false;

  setTimeout(() => input.focus(), 100);

  input.oninput = () => { submitBtn.disabled = !input.value.trim(); };
  input.onkeydown = (e) => { if (e.key === 'Enter' && !submitted && input.value.trim()) submitBtn.click(); };

  submitBtn.onclick = () => {
    if (submitted || !input.value.trim()) return;
    submitted = true;
    const correct = isCorrect(input.value, ex.answers);

    input.classList.add(correct ? 'correct' : 'wrong');
    input.disabled = true;
    submitBtn.style.display = 'none';

    const fb = document.getElementById('feedback-zone');
    fb.innerHTML = `
      <div class="feedback ${correct ? 'correct' : 'wrong'}">
        <div class="feedback-label">${correct ? '✓ Correct' : '✗ Incorrect'}</div>
        ${!correct ? `<div class="feedback-text">Réponse attendue : <strong>${escape(ex.answers[0])}</strong></div>` : ''}
      </div>
    `;

    setTimeout(() => handleAnswer(correct), 2000);
  };
}

// === ORDER ===
function renderOrder(ex) {
  const shuffled = shuffle(ex.words.map((w, i) => ({ word: w, id: i })));
  state.exerciseState = { available: shuffled, selected: [] };

  return `
    <div class="order-target" id="order-target">
      <span class="order-target-empty">Clique sur les mots dans l'ordre...</span>
    </div>
    <div class="word-pool" id="word-pool"></div>
    <button class="submit-btn" id="submit-btn" disabled>Valider</button>
    <div id="feedback-zone"></div>
  `;
}

function bindOrder(ex) {
  const target = document.getElementById('order-target');
  const pool = document.getElementById('word-pool');
  const submitBtn = document.getElementById('submit-btn');
  let submitted = false;

  function refresh() {
    // Target
    if (state.exerciseState.selected.length === 0) {
      target.innerHTML = `<span class="order-target-empty">Clique sur les mots dans l'ordre...</span>`;
    } else {
      target.innerHTML = state.exerciseState.selected.map((item, idx) =>
        `<button class="word-chip in-target" data-action="unpick" data-idx="${idx}">${escape(item.word)}</button>`
      ).join('');
    }
    // Pool
    pool.innerHTML = state.exerciseState.available.map(item =>
      `<button class="word-chip" data-action="pick" data-id="${item.id}">${escape(item.word)}</button>`
    ).join('');
    // Submit state
    submitBtn.disabled = state.exerciseState.available.length > 0;

    document.querySelectorAll('[data-action="pick"]').forEach(btn => {
      btn.onclick = () => {
        if (submitted) return;
        const id = parseInt(btn.dataset.id, 10);
        const item = state.exerciseState.available.find(x => x.id === id);
        state.exerciseState.selected.push(item);
        state.exerciseState.available = state.exerciseState.available.filter(x => x.id !== id);
        refresh();
      };
    });
    document.querySelectorAll('[data-action="unpick"]').forEach(btn => {
      btn.onclick = () => {
        if (submitted) return;
        const idx = parseInt(btn.dataset.idx, 10);
        const item = state.exerciseState.selected[idx];
        state.exerciseState.available.push(item);
        state.exerciseState.selected = state.exerciseState.selected.filter((_, i) => i !== idx);
        refresh();
      };
    });
  }

  refresh();

  submitBtn.onclick = () => {
    if (submitted) return;
    submitted = true;
    const userArr = state.exerciseState.selected.map(s => s.word);
    const correct = userArr.length === ex.answer.length && userArr.every((w, i) => w === ex.answer[i]);

    target.classList.add(correct ? 'correct' : 'wrong');
    submitBtn.style.display = 'none';

    const fb = document.getElementById('feedback-zone');
    fb.innerHTML = `
      <div class="feedback ${correct ? 'correct' : 'wrong'}">
        <div class="feedback-label">${correct ? '✓ Correct' : '✗ Incorrect'}</div>
        ${!correct ? `<div class="feedback-text">Bonne réponse : <strong>${escape(ex.answer.join(' '))}</strong></div>` : ''}
      </div>
    `;

    setTimeout(() => handleAnswer(correct), 2000);
  };
}

// === MATCH ===
function renderMatch(ex) {
  const shuffledFr = shuffle(ex.pairs.map((p, i) => ({ ...p, id: i })));
  state.exerciseState = { matches: {}, selectedJp: null, shuffledFr };

  return `
    <p class="match-help">Clique sur un mot japonais, puis sa traduction.</p>
    <div class="match-grid">
      <div class="match-col" id="match-jp"></div>
      <div class="match-col" id="match-fr"></div>
    </div>
    <div id="feedback-zone"></div>
  `;
}

function bindMatch(ex) {
  const colJp = document.getElementById('match-jp');
  const colFr = document.getElementById('match-fr');
  let submitted = false;

  function refresh() {
    colJp.innerHTML = ex.pairs.map((pair, i) => {
      const matched = state.exerciseState.matches[i] !== undefined;
      const selected = state.exerciseState.selectedJp === i;
      let cls = 'match-item jp';
      if (matched) cls += ' matched';
      else if (selected) cls += ' selected';
      return `<button class="${cls}" data-jp-id="${i}" ${matched ? 'disabled' : ''}>${escape(pair.jp)}</button>`;
    }).join('');

    colFr.innerHTML = state.exerciseState.shuffledFr.map(pair => {
      const matched = Object.values(state.exerciseState.matches).includes(pair.id);
      let cls = 'match-item';
      if (matched) cls += ' matched';
      return `<button class="${cls}" data-fr-id="${pair.id}" ${matched ? 'disabled' : ''}>${escape(pair.fr)}</button>`;
    }).join('');

    document.querySelectorAll('[data-jp-id]').forEach(btn => {
      btn.onclick = () => {
        if (submitted) return;
        const id = parseInt(btn.dataset.jpId, 10);
        if (state.exerciseState.matches[id] !== undefined) return;
        state.exerciseState.selectedJp = id;
        refresh();
      };
    });

    document.querySelectorAll('[data-fr-id]').forEach(btn => {
      btn.onclick = () => {
        if (submitted) return;
        if (state.exerciseState.selectedJp === null) return;
        const frId = parseInt(btn.dataset.frId, 10);
        if (Object.values(state.exerciseState.matches).includes(frId)) return;

        if (state.exerciseState.selectedJp === frId) {
          state.exerciseState.matches[state.exerciseState.selectedJp] = frId;
          state.exerciseState.selectedJp = null;
          refresh();

          if (Object.keys(state.exerciseState.matches).length === ex.pairs.length) {
            submitted = true;
            const fb = document.getElementById('feedback-zone');
            fb.innerHTML = `
              <div class="feedback correct">
                <div class="feedback-label">✓ Toutes les paires trouvées</div>
              </div>
            `;
            setTimeout(() => handleAnswer(true), 1400);
          }
        } else {
          // Wrong match - flash
          btn.classList.add('wrong');
          const jpBtn = document.querySelector(`[data-jp-id="${state.exerciseState.selectedJp}"]`);
          if (jpBtn) jpBtn.classList.add('wrong');
          setTimeout(() => {
            state.exerciseState.selectedJp = null;
            refresh();
          }, 600);
        }
      };
    });
  }

  refresh();
}

// === Answer handler ===
function handleAnswer(correct) {
  if (correct) state.currentScore++;

  const all = getAllLessons();
  const lesson = all.find(l => l.id === state.currentLessonId);
  const total = lesson.exercises.length;

  if (state.currentExercise + 1 >= total) {
    completeLesson(state.currentScore, total);
  } else {
    state.currentExercise++;
    state.exerciseState = null;
    render();
  }
}

// === Completion logic ===
function completeLesson(score, total) {
  const lessonId = state.currentLessonId;
  const today = new Date().toDateString();
  const passed = score >= Math.ceil(total * 0.7);
  const wasCompleted = !!state.progress.completedLessons[lessonId];

  state.progress.completedLessons[lessonId] = {
    score, total, perfect: score === total
  };
  state.progress.xp += score * 10;

  // Streak
  if (state.progress.lastActiveDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (state.progress.lastActiveDate === yesterday.toDateString()) {
      state.progress.streak += 1;
    } else {
      state.progress.streak = 1;
    }
    state.progress.lastActiveDate = today;
  }

    // Unlock next
  if (passed) {
    const nextId = getNextLessonId(lessonId);
    if (nextId && !state.progress.unlockedLessons.includes(nextId)) {
      state.progress.unlockedLessons.push(nextId);
    }
  }
  

  saveProgress(state.progress);

  state.view = 'complete';
  state.completionScore = score;
  state.completionTotal = total;
  render();
}

// ============================================
// COMPLETION
// ============================================
function renderComplete() {
  const all = getAllLessons();
  const lesson = all.find(l => l.id === state.currentLessonId);
  const chapter = COURSE.find(c => c.id === lesson.chapterId);
  const score = state.completionScore;
  const total = state.completionTotal;
  const perfect = score === total;
  const passed = score >= Math.ceil(total * 0.7);
  const hasNext = !!getNextLessonId(state.currentLessonId);

  let icon, title, jp;
  if (perfect) {
    icon = '✦'; title = 'Parfait !'; jp = '完璧 · kanpeki';
  } else if (passed) {
    icon = '●'; title = 'Bien joué'; jp = 'よくできました · yoku dekimashita';
  } else {
    icon = '○'; title = 'Encore un effort'; jp = '頑張って · ganbatte';
  }

  $app.innerHTML = `
    <div class="completion">
      <div class="completion-inner">
        <div class="completion-icon" style="color:${chapter.color}">${icon}</div>
        <h2 class="completion-title">${title}</h2>
        <p class="completion-jp">${jp}</p>
        ${inkBrushSvg(chapter.color)}

        <div class="score-card">
          <div class="score-grid">
            <div>
              <div class="score-value">${score}/${total}</div>
              <div class="score-label">Score</div>
            </div>
            <div>
              <div class="score-value" style="color:#C9A961">+${score * 10}</div>
              <div class="score-label">XP</div>
            </div>
            <div>
              <div class="score-value" style="color:${chapter.color}">${Math.round((score / total) * 100)}%</div>
              <div class="score-label">Réussite</div>
            </div>
          </div>
        </div>

        <div class="completion-actions">
          ${passed && hasNext ? `
            <button class="btn btn-primary" id="next-lesson-btn" style="background:${chapter.color}">
              Leçon suivante ${ICONS.chevronRight}
            </button>
          ` : passed ? `
            <button class="btn btn-primary" id="back-home-btn" style="background:${chapter.color}">
              Retour à l'accueil
            </button>
          ` : ''}
          <button class="btn btn-secondary" id="retry-btn">${ICONS.rotate} Refaire les exercices</button>
          ${!passed ? `<button class="text-link" id="back-home-btn">Retour à l'accueil</button>` : ''}
        </div>
      </div>
    </div>
  `;

  if (document.getElementById('next-lesson-btn')) {
    document.getElementById('next-lesson-btn').onclick = () => {
      const nextId = getNextLessonId(state.currentLessonId);
      if (nextId && state.progress.unlockedLessons.includes(nextId)) {
        state.currentLessonId = nextId;
        state.currentSection = 0;
        state.view = 'lesson';
        render();
      }
    };
  }
  if (document.getElementById('back-home-btn')) {
    document.getElementById('back-home-btn').onclick = () => { state.view = 'home'; render(); };
  }
  if (document.getElementById('retry-btn')) {
    document.getElementById('retry-btn').onclick = () => {
      state.currentExercise = 0;
      state.currentScore = 0;
      state.exerciseState = null;
      state.view = 'exercises';
      render();
    };
  }
}

// === BOOT ===
render();

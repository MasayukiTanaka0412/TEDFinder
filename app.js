const TAGS = [
  "technology",
  "business",
  "science",
  "education",
  "creativity",
  "society",
  "health",
  "motivation",
  "environment",
  "psychology",
];

const BASE_SPEECHES = {
  en: [
    { title: "Do schools kill creativity?", speaker: "Sir Ken Robinson", year: 2006, tags: ["education", "creativity", "society"], popularity: 99, url: "https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity" },
    { title: "Your body language may shape who you are", speaker: "Amy Cuddy", year: 2012, tags: ["psychology", "motivation"], popularity: 98, url: "https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are" },
    { title: "How great leaders inspire action", speaker: "Simon Sinek", year: 2009, tags: ["business", "motivation"], popularity: 97, url: "https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action" },
    { title: "The power of vulnerability", speaker: "Brené Brown", year: 2010, tags: ["psychology", "society"], popularity: 96, url: "https://www.ted.com/talks/brene_brown_the_power_of_vulnerability" },
    { title: "Inside the mind of a master procrastinator", speaker: "Tim Urban", year: 2016, tags: ["motivation", "psychology"], popularity: 95, url: "https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator" },
    { title: "How to speak so that people want to listen", speaker: "Julian Treasure", year: 2013, tags: ["business", "education", "motivation"], popularity: 94, url: "https://www.ted.com/talks/julian_treasure_how_to_speak_so_that_people_want_to_listen" },
    { title: "The puzzle of motivation", speaker: "Dan Pink", year: 2009, tags: ["business", "psychology", "motivation"], popularity: 93, url: "https://www.ted.com/talks/dan_pink_the_puzzle_of_motivation" },
    { title: "The happy secret to better work", speaker: "Shawn Achor", year: 2011, tags: ["business", "health", "psychology"], popularity: 92, url: "https://www.ted.com/talks/shawn_achor_the_happy_secret_to_better_work" },
    { title: "Looks aren’t everything. Believe me, I’m a model.", speaker: "Cameron Russell", year: 2012, tags: ["society", "motivation"], popularity: 91, url: "https://www.ted.com/talks/cameron_russell_looks_aren_t_everything_believe_me_i_m_a_model" },
    { title: "My philosophy for a happy life", speaker: "Sam Berns", year: 2013, tags: ["health", "motivation"], popularity: 90, url: "https://www.ted.com/talks/sam_berns_my_philosophy_for_a_happy_life" },
  ],
  ja: [
    { title: "学校は創造性を殺してしまっているのか？", speaker: "ケン・ロビンソン", year: 2006, tags: ["education", "creativity", "society"], popularity: 99, url: "https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity" },
    { title: "ボディランゲージがあなたをつくる", speaker: "エイミー・カディ", year: 2012, tags: ["psychology", "motivation"], popularity: 98, url: "https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are" },
    { title: "優れたリーダーはどうやって行動を促すか", speaker: "サイモン・シネック", year: 2009, tags: ["business", "motivation"], popularity: 97, url: "https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action" },
    { title: "弱さの力", speaker: "ブレネー・ブラウン", year: 2010, tags: ["psychology", "society"], popularity: 96, url: "https://www.ted.com/talks/brene_brown_the_power_of_vulnerability" },
    { title: "先延ばしの達人の頭の中", speaker: "ティム・アーバン", year: 2016, tags: ["motivation", "psychology"], popularity: 95, url: "https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator" },
    { title: "人に伝わる話し方", speaker: "ジュリアン・トレジャー", year: 2013, tags: ["business", "education", "motivation"], popularity: 94, url: "https://www.ted.com/talks/julian_treasure_how_to_speak_so_that_people_want_to_listen" },
    { title: "やる気にまつわるパズル", speaker: "ダン・ピンク", year: 2009, tags: ["business", "psychology", "motivation"], popularity: 93, url: "https://www.ted.com/talks/dan_pink_the_puzzle_of_motivation" },
    { title: "幸福が仕事を変える", speaker: "ショーン・エイカー", year: 2011, tags: ["business", "health", "psychology"], popularity: 92, url: "https://www.ted.com/talks/shawn_achor_the_happy_secret_to_better_work" },
    { title: "見た目がすべてじゃない", speaker: "キャメロン・ラッセル", year: 2012, tags: ["society", "motivation"], popularity: 91, url: "https://www.ted.com/talks/cameron_russell_looks_aren_t_everything_believe_me_i_m_a_model" },
    { title: "幸せな人生の哲学", speaker: "サム・バーンズ", year: 2013, tags: ["health", "motivation"], popularity: 90, url: "https://www.ted.com/talks/sam_berns_my_philosophy_for_a_happy_life" },
  ],
};

const QUESTIONS = [
  {
    text: { ja: "いま一番伸ばしたい分野は？", en: "What area do you want to grow most right now?" },
    choices: [
      { label: { ja: "キャリア・仕事", en: "Career & work" }, tags: ["business", "motivation"] },
      { label: { ja: "学び・教育", en: "Learning & education" }, tags: ["education", "science"] },
      { label: { ja: "心と習慣", en: "Mindset & habits" }, tags: ["psychology", "health"] },
    ],
  },
  {
    text: { ja: "どんな話にワクワクする？", en: "What kind of talks excite you?" },
    choices: [
      { label: { ja: "最新テクノロジー", en: "Cutting-edge technology" }, tags: ["technology", "science"] },
      { label: { ja: "人と社会の物語", en: "Human and social stories" }, tags: ["society", "psychology"] },
      { label: { ja: "創造的なアイデア", en: "Creative ideas" }, tags: ["creativity", "education"] },
    ],
  },
  {
    text: { ja: "視聴後に得たいものは？", en: "What do you want after watching?" },
    choices: [
      { label: { ja: "すぐ使える実践ヒント", en: "Practical tips" }, tags: ["business", "health"] },
      { label: { ja: "新しい視点", en: "New perspective" }, tags: ["society", "science"] },
      { label: { ja: "やる気と勇気", en: "Motivation and courage" }, tags: ["motivation", "psychology"] },
    ],
  },
  {
    text: { ja: "興味のあるテーマは？", en: "Which theme interests you most?" },
    choices: [
      { label: { ja: "地球環境・未来", en: "Environment & future" }, tags: ["environment", "science"] },
      { label: { ja: "健康・ウェルビーイング", en: "Health & wellbeing" }, tags: ["health", "psychology"] },
      { label: { ja: "起業・リーダーシップ", en: "Startup & leadership" }, tags: ["business", "technology"] },
    ],
  },
  {
    text: { ja: "どのスタイルが好き？", en: "Which style do you prefer?" },
    choices: [
      { label: { ja: "データで論理的", en: "Data-driven and logical" }, tags: ["science", "technology"] },
      { label: { ja: "体験談中心", en: "Personal stories" }, tags: ["society", "motivation"] },
      { label: { ja: "ユニークで創造的", en: "Unique and creative" }, tags: ["creativity", "education"] },
    ],
  },
  {
    text: { ja: "仕事で活かすなら？", en: "For work impact, you prefer..." },
    choices: [
      { label: { ja: "プレゼン・伝達力", en: "Communication skills" }, tags: ["business", "education"] },
      { label: { ja: "チームづくり", en: "Team building" }, tags: ["business", "psychology"] },
      { label: { ja: "新規発想", en: "Innovation" }, tags: ["creativity", "technology"] },
    ],
  },
  {
    text: { ja: "日常で改善したいことは？", en: "What do you want to improve daily?" },
    choices: [
      { label: { ja: "集中力", en: "Focus" }, tags: ["psychology", "health"] },
      { label: { ja: "学習効率", en: "Learning efficiency" }, tags: ["education", "science"] },
      { label: { ja: "行動力", en: "Execution" }, tags: ["motivation", "business"] },
    ],
  },
  {
    text: { ja: "社会課題への関心は？", en: "Your interest in social issues?" },
    choices: [
      { label: { ja: "教育格差", en: "Education gap" }, tags: ["education", "society"] },
      { label: { ja: "気候変動", en: "Climate change" }, tags: ["environment", "science"] },
      { label: { ja: "働き方の変化", en: "Future of work" }, tags: ["business", "technology"] },
    ],
  },
  {
    text: { ja: "視聴時間の気分は？", en: "How do you feel before watching?" },
    choices: [
      { label: { ja: "落ち着いて学びたい", en: "Calm and reflective" }, tags: ["science", "education"] },
      { label: { ja: "刺激がほしい", en: "Need inspiration" }, tags: ["motivation", "creativity"] },
      { label: { ja: "人間理解を深めたい", en: "Understand people better" }, tags: ["psychology", "society"] },
    ],
  },
  {
    text: { ja: "最後に、今の関心に最も近いのは？", en: "Finally, what best matches your current interest?" },
    choices: [
      { label: { ja: "AI・未来技術", en: "AI & future tech" }, tags: ["technology", "science"] },
      { label: { ja: "生き方・幸福", en: "Life and happiness" }, tags: ["health", "motivation"] },
      { label: { ja: "社会と共感", en: "Society and empathy" }, tags: ["society", "psychology"] },
    ],
  },
];

function generatePool(lang) {
  const items = [...BASE_SPEECHES[lang]];
  const speakerPrefix = lang === "ja" ? "人気講演者" : "Popular Speaker";
  const titlePrefix = lang === "ja" ? "人気スピーチ" : "Popular Speech";

  for (let i = items.length + 1; i <= 100; i += 1) {
    const tag1 = TAGS[(i * 3) % TAGS.length];
    const tag2 = TAGS[(i * 7) % TAGS.length];
    const tag3 = TAGS[(i * 5) % TAGS.length];
    items.push({
      title: `${titlePrefix} #${i}`,
      speaker: `${speakerPrefix} ${i}`,
      year: 2000 + (i % 25),
      tags: Array.from(new Set([tag1, tag2, tag3])),
      popularity: 100 - Math.floor(i / 2),
      url: `https://www.ted.com/search?q=${encodeURIComponent(`${titlePrefix} #${i}`)}`,
    });
  }

  return items;
}

const SPEECHES = {
  ja: generatePool("ja"),
  en: generatePool("en"),
};

const state = {
  lang: "ja",
  questionIndex: 0,
  selectedTags: [],
};

const startBtn = document.getElementById("startBtn");
const retryBtn = document.getElementById("retryBtn");
const quizPanel = document.getElementById("quizPanel");
const resultPanel = document.getElementById("resultPanel");
const progress = document.getElementById("progress");
const questionText = document.getElementById("questionText");
const choicesContainer = document.getElementById("choices");
const recommendations = document.getElementById("recommendations");
const summary = document.getElementById("summary");

function selectedLanguage() {
  return document.querySelector('input[name="lang"]:checked').value;
}

function startQuiz() {
  state.lang = selectedLanguage();
  state.questionIndex = 0;
  state.selectedTags = [];
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[state.questionIndex];
  const lang = state.lang;
  progress.textContent = `${state.questionIndex + 1} / ${QUESTIONS.length}`;
  questionText.textContent = q.text[lang];
  choicesContainer.innerHTML = "";

  q.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.label[lang];
    btn.addEventListener("click", () => answer(choice.tags));
    choicesContainer.appendChild(btn);
  });
}

function answer(tags) {
  state.selectedTags.push(...tags);
  state.questionIndex += 1;

  if (state.questionIndex >= QUESTIONS.length) {
    renderResult();
  } else {
    renderQuestion();
  }
}

function renderResult() {
  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  const scores = new Map();
  for (const tag of state.selectedTags) {
    scores.set(tag, (scores.get(tag) || 0) + 1);
  }

  const ranked = SPEECHES[state.lang]
    .map((speech) => {
      const matchScore = speech.tags.reduce((sum, t) => sum + (scores.get(t) || 0), 0);
      const finalScore = matchScore * 10 + speech.popularity;
      return { ...speech, finalScore, matchScore };
    })
    .sort((a, b) => b.finalScore - a.finalScore)
    .slice(0, 5);

  const topTags = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([tag]) => tag)
    .join(", ");

  summary.textContent =
    state.lang === "ja"
      ? `あなたの関心タグ: ${topTags || "なし"}。おすすめ上位5件です。`
      : `Your top interest tags: ${topTags || "none"}. Here are your top 5 picks.`;

  recommendations.innerHTML = "";
  ranked.forEach((speech) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${speech.title}</strong> - ${speech.speaker}
      <div class="meta">${speech.year} / tags: ${speech.tags.join(", ")} / score: ${speech.finalScore}</div>
      <a href="${speech.url}" target="_blank" rel="noopener noreferrer">${state.lang === "ja" ? "スピーチページを見る" : "Open speech page"}</a>`;
    recommendations.appendChild(li);
  });
}

startBtn.addEventListener("click", startQuiz);
retryBtn.addEventListener("click", startQuiz);

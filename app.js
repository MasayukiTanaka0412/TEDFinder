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

const BASE_SPEECHES_SEED = {
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
    { title: "Popular Speech #11", speaker: "Popular Speaker 11", year: 2011, tags: ["education", "motivation", "society"], popularity: 95, url: "https://www.ted.com/search?q=Popular%20Speech%20%2311" },
    { title: "Popular Speech #12", speaker: "Popular Speaker 12", year: 2012, tags: ["health", "creativity", "technology"], popularity: 94, url: "https://www.ted.com/search?q=Popular%20Speech%20%2312" },
    { title: "Popular Speech #13", speaker: "Popular Speaker 13", year: 2013, tags: ["psychology", "business", "society"], popularity: 94, url: "https://www.ted.com/search?q=Popular%20Speech%20%2313" },
    { title: "Popular Speech #14", speaker: "Popular Speaker 14", year: 2014, tags: ["science", "environment", "technology"], popularity: 93, url: "https://www.ted.com/search?q=Popular%20Speech%20%2314" },
    { title: "Popular Speech #15", speaker: "Popular Speaker 15", year: 2015, tags: ["society"], popularity: 93, url: "https://www.ted.com/search?q=Popular%20Speech%20%2315" },
    { title: "Popular Speech #16", speaker: "Popular Speaker 16", year: 2016, tags: ["environment", "science", "technology"], popularity: 92, url: "https://www.ted.com/search?q=Popular%20Speech%20%2316" },
    { title: "Popular Speech #17", speaker: "Popular Speaker 17", year: 2017, tags: ["business", "psychology", "society"], popularity: 92, url: "https://www.ted.com/search?q=Popular%20Speech%20%2317" },
    { title: "Popular Speech #18", speaker: "Popular Speaker 18", year: 2018, tags: ["creativity", "health", "technology"], popularity: 91, url: "https://www.ted.com/search?q=Popular%20Speech%20%2318" },
    { title: "Popular Speech #19", speaker: "Popular Speaker 19", year: 2019, tags: ["motivation", "education", "society"], popularity: 91, url: "https://www.ted.com/search?q=Popular%20Speech%20%2319" },
    { title: "Popular Speech #20", speaker: "Popular Speaker 20", year: 2020, tags: ["technology"], popularity: 90, url: "https://www.ted.com/search?q=Popular%20Speech%20%2320" },
    { title: "Popular Speech #21", speaker: "Popular Speaker 21", year: 2021, tags: ["education", "motivation", "society"], popularity: 90, url: "https://www.ted.com/search?q=Popular%20Speech%20%2321" },
    { title: "Popular Speech #22", speaker: "Popular Speaker 22", year: 2022, tags: ["health", "creativity", "technology"], popularity: 89, url: "https://www.ted.com/search?q=Popular%20Speech%20%2322" },
    { title: "Popular Speech #23", speaker: "Popular Speaker 23", year: 2023, tags: ["psychology", "business", "society"], popularity: 89, url: "https://www.ted.com/search?q=Popular%20Speech%20%2323" },
    { title: "Popular Speech #24", speaker: "Popular Speaker 24", year: 2024, tags: ["science", "environment", "technology"], popularity: 88, url: "https://www.ted.com/search?q=Popular%20Speech%20%2324" },
    { title: "Popular Speech #25", speaker: "Popular Speaker 25", year: 2000, tags: ["society"], popularity: 88, url: "https://www.ted.com/search?q=Popular%20Speech%20%2325" },
    { title: "Popular Speech #26", speaker: "Popular Speaker 26", year: 2001, tags: ["environment", "science", "technology"], popularity: 87, url: "https://www.ted.com/search?q=Popular%20Speech%20%2326" },
    { title: "Popular Speech #27", speaker: "Popular Speaker 27", year: 2002, tags: ["business", "psychology", "society"], popularity: 87, url: "https://www.ted.com/search?q=Popular%20Speech%20%2327" },
    { title: "Popular Speech #28", speaker: "Popular Speaker 28", year: 2003, tags: ["creativity", "health", "technology"], popularity: 86, url: "https://www.ted.com/search?q=Popular%20Speech%20%2328" },
    { title: "Popular Speech #29", speaker: "Popular Speaker 29", year: 2004, tags: ["motivation", "education", "society"], popularity: 86, url: "https://www.ted.com/search?q=Popular%20Speech%20%2329" },
    { title: "Popular Speech #30", speaker: "Popular Speaker 30", year: 2005, tags: ["technology"], popularity: 85, url: "https://www.ted.com/search?q=Popular%20Speech%20%2330" },
    { title: "Popular Speech #31", speaker: "Popular Speaker 31", year: 2006, tags: ["education", "motivation", "society"], popularity: 85, url: "https://www.ted.com/search?q=Popular%20Speech%20%2331" },
    { title: "Popular Speech #32", speaker: "Popular Speaker 32", year: 2007, tags: ["health", "creativity", "technology"], popularity: 84, url: "https://www.ted.com/search?q=Popular%20Speech%20%2332" },
    { title: "Popular Speech #33", speaker: "Popular Speaker 33", year: 2008, tags: ["psychology", "business", "society"], popularity: 84, url: "https://www.ted.com/search?q=Popular%20Speech%20%2333" },
    { title: "Popular Speech #34", speaker: "Popular Speaker 34", year: 2009, tags: ["science", "environment", "technology"], popularity: 83, url: "https://www.ted.com/search?q=Popular%20Speech%20%2334" },
    { title: "Popular Speech #35", speaker: "Popular Speaker 35", year: 2010, tags: ["society"], popularity: 83, url: "https://www.ted.com/search?q=Popular%20Speech%20%2335" },
    { title: "Popular Speech #36", speaker: "Popular Speaker 36", year: 2011, tags: ["environment", "science", "technology"], popularity: 82, url: "https://www.ted.com/search?q=Popular%20Speech%20%2336" },
    { title: "Popular Speech #37", speaker: "Popular Speaker 37", year: 2012, tags: ["business", "psychology", "society"], popularity: 82, url: "https://www.ted.com/search?q=Popular%20Speech%20%2337" },
    { title: "Popular Speech #38", speaker: "Popular Speaker 38", year: 2013, tags: ["creativity", "health", "technology"], popularity: 81, url: "https://www.ted.com/search?q=Popular%20Speech%20%2338" },
    { title: "Popular Speech #39", speaker: "Popular Speaker 39", year: 2014, tags: ["motivation", "education", "society"], popularity: 81, url: "https://www.ted.com/search?q=Popular%20Speech%20%2339" },
    { title: "Popular Speech #40", speaker: "Popular Speaker 40", year: 2015, tags: ["technology"], popularity: 80, url: "https://www.ted.com/search?q=Popular%20Speech%20%2340" },
    { title: "Popular Speech #41", speaker: "Popular Speaker 41", year: 2016, tags: ["education", "motivation", "society"], popularity: 80, url: "https://www.ted.com/search?q=Popular%20Speech%20%2341" },
    { title: "Popular Speech #42", speaker: "Popular Speaker 42", year: 2017, tags: ["health", "creativity", "technology"], popularity: 79, url: "https://www.ted.com/search?q=Popular%20Speech%20%2342" },
    { title: "Popular Speech #43", speaker: "Popular Speaker 43", year: 2018, tags: ["psychology", "business", "society"], popularity: 79, url: "https://www.ted.com/search?q=Popular%20Speech%20%2343" },
    { title: "Popular Speech #44", speaker: "Popular Speaker 44", year: 2019, tags: ["science", "environment", "technology"], popularity: 78, url: "https://www.ted.com/search?q=Popular%20Speech%20%2344" },
    { title: "Popular Speech #45", speaker: "Popular Speaker 45", year: 2020, tags: ["society"], popularity: 78, url: "https://www.ted.com/search?q=Popular%20Speech%20%2345" },
    { title: "Popular Speech #46", speaker: "Popular Speaker 46", year: 2021, tags: ["environment", "science", "technology"], popularity: 77, url: "https://www.ted.com/search?q=Popular%20Speech%20%2346" },
    { title: "Popular Speech #47", speaker: "Popular Speaker 47", year: 2022, tags: ["business", "psychology", "society"], popularity: 77, url: "https://www.ted.com/search?q=Popular%20Speech%20%2347" },
    { title: "Popular Speech #48", speaker: "Popular Speaker 48", year: 2023, tags: ["creativity", "health", "technology"], popularity: 76, url: "https://www.ted.com/search?q=Popular%20Speech%20%2348" },
    { title: "Popular Speech #49", speaker: "Popular Speaker 49", year: 2024, tags: ["motivation", "education", "society"], popularity: 76, url: "https://www.ted.com/search?q=Popular%20Speech%20%2349" },
    { title: "Popular Speech #50", speaker: "Popular Speaker 50", year: 2000, tags: ["technology"], popularity: 75, url: "https://www.ted.com/search?q=Popular%20Speech%20%2350" },
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
    { title: "人気スピーチ #11", speaker: "人気講演者 11", year: 2011, tags: ["education", "motivation", "society"], popularity: 95, url: "https://www.ted.com/search?q=人気スピーチ%20%2311" },
    { title: "人気スピーチ #12", speaker: "人気講演者 12", year: 2012, tags: ["health", "creativity", "technology"], popularity: 94, url: "https://www.ted.com/search?q=人気スピーチ%20%2312" },
    { title: "人気スピーチ #13", speaker: "人気講演者 13", year: 2013, tags: ["psychology", "business", "society"], popularity: 94, url: "https://www.ted.com/search?q=人気スピーチ%20%2313" },
    { title: "人気スピーチ #14", speaker: "人気講演者 14", year: 2014, tags: ["science", "environment", "technology"], popularity: 93, url: "https://www.ted.com/search?q=人気スピーチ%20%2314" },
    { title: "人気スピーチ #15", speaker: "人気講演者 15", year: 2015, tags: ["society"], popularity: 93, url: "https://www.ted.com/search?q=人気スピーチ%20%2315" },
    { title: "人気スピーチ #16", speaker: "人気講演者 16", year: 2016, tags: ["environment", "science", "technology"], popularity: 92, url: "https://www.ted.com/search?q=人気スピーチ%20%2316" },
    { title: "人気スピーチ #17", speaker: "人気講演者 17", year: 2017, tags: ["business", "psychology", "society"], popularity: 92, url: "https://www.ted.com/search?q=人気スピーチ%20%2317" },
    { title: "人気スピーチ #18", speaker: "人気講演者 18", year: 2018, tags: ["creativity", "health", "technology"], popularity: 91, url: "https://www.ted.com/search?q=人気スピーチ%20%2318" },
    { title: "人気スピーチ #19", speaker: "人気講演者 19", year: 2019, tags: ["motivation", "education", "society"], popularity: 91, url: "https://www.ted.com/search?q=人気スピーチ%20%2319" },
    { title: "人気スピーチ #20", speaker: "人気講演者 20", year: 2020, tags: ["technology"], popularity: 90, url: "https://www.ted.com/search?q=人気スピーチ%20%2320" },
    { title: "人気スピーチ #21", speaker: "人気講演者 21", year: 2021, tags: ["education", "motivation", "society"], popularity: 90, url: "https://www.ted.com/search?q=人気スピーチ%20%2321" },
    { title: "人気スピーチ #22", speaker: "人気講演者 22", year: 2022, tags: ["health", "creativity", "technology"], popularity: 89, url: "https://www.ted.com/search?q=人気スピーチ%20%2322" },
    { title: "人気スピーチ #23", speaker: "人気講演者 23", year: 2023, tags: ["psychology", "business", "society"], popularity: 89, url: "https://www.ted.com/search?q=人気スピーチ%20%2323" },
    { title: "人気スピーチ #24", speaker: "人気講演者 24", year: 2024, tags: ["science", "environment", "technology"], popularity: 88, url: "https://www.ted.com/search?q=人気スピーチ%20%2324" },
    { title: "人気スピーチ #25", speaker: "人気講演者 25", year: 2000, tags: ["society"], popularity: 88, url: "https://www.ted.com/search?q=人気スピーチ%20%2325" },
    { title: "人気スピーチ #26", speaker: "人気講演者 26", year: 2001, tags: ["environment", "science", "technology"], popularity: 87, url: "https://www.ted.com/search?q=人気スピーチ%20%2326" },
    { title: "人気スピーチ #27", speaker: "人気講演者 27", year: 2002, tags: ["business", "psychology", "society"], popularity: 87, url: "https://www.ted.com/search?q=人気スピーチ%20%2327" },
    { title: "人気スピーチ #28", speaker: "人気講演者 28", year: 2003, tags: ["creativity", "health", "technology"], popularity: 86, url: "https://www.ted.com/search?q=人気スピーチ%20%2328" },
    { title: "人気スピーチ #29", speaker: "人気講演者 29", year: 2004, tags: ["motivation", "education", "society"], popularity: 86, url: "https://www.ted.com/search?q=人気スピーチ%20%2329" },
    { title: "人気スピーチ #30", speaker: "人気講演者 30", year: 2005, tags: ["technology"], popularity: 85, url: "https://www.ted.com/search?q=人気スピーチ%20%2330" },
    { title: "人気スピーチ #31", speaker: "人気講演者 31", year: 2006, tags: ["education", "motivation", "society"], popularity: 85, url: "https://www.ted.com/search?q=人気スピーチ%20%2331" },
    { title: "人気スピーチ #32", speaker: "人気講演者 32", year: 2007, tags: ["health", "creativity", "technology"], popularity: 84, url: "https://www.ted.com/search?q=人気スピーチ%20%2332" },
    { title: "人気スピーチ #33", speaker: "人気講演者 33", year: 2008, tags: ["psychology", "business", "society"], popularity: 84, url: "https://www.ted.com/search?q=人気スピーチ%20%2333" },
    { title: "人気スピーチ #34", speaker: "人気講演者 34", year: 2009, tags: ["science", "environment", "technology"], popularity: 83, url: "https://www.ted.com/search?q=人気スピーチ%20%2334" },
    { title: "人気スピーチ #35", speaker: "人気講演者 35", year: 2010, tags: ["society"], popularity: 83, url: "https://www.ted.com/search?q=人気スピーチ%20%2335" },
    { title: "人気スピーチ #36", speaker: "人気講演者 36", year: 2011, tags: ["environment", "science", "technology"], popularity: 82, url: "https://www.ted.com/search?q=人気スピーチ%20%2336" },
    { title: "人気スピーチ #37", speaker: "人気講演者 37", year: 2012, tags: ["business", "psychology", "society"], popularity: 82, url: "https://www.ted.com/search?q=人気スピーチ%20%2337" },
    { title: "人気スピーチ #38", speaker: "人気講演者 38", year: 2013, tags: ["creativity", "health", "technology"], popularity: 81, url: "https://www.ted.com/search?q=人気スピーチ%20%2338" },
    { title: "人気スピーチ #39", speaker: "人気講演者 39", year: 2014, tags: ["motivation", "education", "society"], popularity: 81, url: "https://www.ted.com/search?q=人気スピーチ%20%2339" },
    { title: "人気スピーチ #40", speaker: "人気講演者 40", year: 2015, tags: ["technology"], popularity: 80, url: "https://www.ted.com/search?q=人気スピーチ%20%2340" },
    { title: "人気スピーチ #41", speaker: "人気講演者 41", year: 2016, tags: ["education", "motivation", "society"], popularity: 80, url: "https://www.ted.com/search?q=人気スピーチ%20%2341" },
    { title: "人気スピーチ #42", speaker: "人気講演者 42", year: 2017, tags: ["health", "creativity", "technology"], popularity: 79, url: "https://www.ted.com/search?q=人気スピーチ%20%2342" },
    { title: "人気スピーチ #43", speaker: "人気講演者 43", year: 2018, tags: ["psychology", "business", "society"], popularity: 79, url: "https://www.ted.com/search?q=人気スピーチ%20%2343" },
    { title: "人気スピーチ #44", speaker: "人気講演者 44", year: 2019, tags: ["science", "environment", "technology"], popularity: 78, url: "https://www.ted.com/search?q=人気スピーチ%20%2344" },
    { title: "人気スピーチ #45", speaker: "人気講演者 45", year: 2020, tags: ["society"], popularity: 78, url: "https://www.ted.com/search?q=人気スピーチ%20%2345" },
    { title: "人気スピーチ #46", speaker: "人気講演者 46", year: 2021, tags: ["environment", "science", "technology"], popularity: 77, url: "https://www.ted.com/search?q=人気スピーチ%20%2346" },
    { title: "人気スピーチ #47", speaker: "人気講演者 47", year: 2022, tags: ["business", "psychology", "society"], popularity: 77, url: "https://www.ted.com/search?q=人気スピーチ%20%2347" },
    { title: "人気スピーチ #48", speaker: "人気講演者 48", year: 2023, tags: ["creativity", "health", "technology"], popularity: 76, url: "https://www.ted.com/search?q=人気スピーチ%20%2348" },
    { title: "人気スピーチ #49", speaker: "人気講演者 49", year: 2024, tags: ["motivation", "education", "society"], popularity: 76, url: "https://www.ted.com/search?q=人気スピーチ%20%2349" },
    { title: "人気スピーチ #50", speaker: "人気講演者 50", year: 2000, tags: ["technology"], popularity: 75, url: "https://www.ted.com/search?q=人気スピーチ%20%2350" },
  ],
};

const BASE_SPEECHES = BASE_SPEECHES_SEED;
const SPEECHES = BASE_SPEECHES;

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

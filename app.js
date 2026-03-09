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
    { title: "The power of introverts", speaker: "Susan Cain", year: 2012, tags: ["psychology", "society"], popularity: 89, url: "https://www.ted.com/talks/susan_cain_the_power_of_introverts" },
    { title: "The best stats you've ever seen", speaker: "Hans Rosling", year: 2006, tags: ["science", "society", "education"], popularity: 89, url: "https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen" },
    { title: "My stroke of insight", speaker: "Jill Bolte Taylor", year: 2008, tags: ["science", "health", "psychology"], popularity: 88, url: "https://www.ted.com/talks/jill_bolte_taylor_my_stroke_of_insight" },
    { title: "How to make stress your friend", speaker: "Kelly McGonigal", year: 2013, tags: ["health", "psychology"], popularity: 88, url: "https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend" },
    { title: "Grit: The power of passion and perseverance", speaker: "Angela Lee Duckworth", year: 2013, tags: ["education", "motivation", "psychology"], popularity: 87, url: "https://www.ted.com/talks/angela_lee_duckworth_grit_the_power_of_passion_and_perseverance" },
    { title: "Listening to shame", speaker: "Brené Brown", year: 2012, tags: ["psychology", "society"], popularity: 87, url: "https://www.ted.com/talks/brene_brown_listening_to_shame" },
    { title: "Your elusive creative genius", speaker: "Elizabeth Gilbert", year: 2009, tags: ["creativity", "motivation"], popularity: 86, url: "https://www.ted.com/talks/elizabeth_gilbert_your_elusive_creative_genius" },
    { title: "How I held my breath for 17 minutes", speaker: "David Blaine", year: 2010, tags: ["motivation", "health"], popularity: 86, url: "https://www.ted.com/talks/david_blaine_how_i_held_my_breath_for_17_minutes" },
    { title: "The surprising science of happiness", speaker: "Dan Gilbert", year: 2004, tags: ["psychology", "health"], popularity: 85, url: "https://www.ted.com/talks/dan_gilbert_the_surprising_science_of_happiness" },
    { title: "The paradox of choice", speaker: "Barry Schwartz", year: 2005, tags: ["psychology", "society"], popularity: 85, url: "https://www.ted.com/talks/barry_schwartz_the_paradox_of_choice" },
    { title: "The danger of a single story", speaker: "Chimamanda Ngozi Adichie", year: 2009, tags: ["society", "education"], popularity: 84, url: "https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story" },
    { title: "How to spot a liar", speaker: "Pamela Meyer", year: 2011, tags: ["psychology", "business"], popularity: 84, url: "https://www.ted.com/talks/pamela_meyer_how_to_spot_a_liar" },
    { title: "The hidden power of smiling", speaker: "Ron Gutman", year: 2011, tags: ["health", "psychology"], popularity: 83, url: "https://www.ted.com/talks/ron_gutman_the_hidden_power_of_smiling" },
    { title: "10 ways to have a better conversation", speaker: "Celeste Headlee", year: 2015, tags: ["business", "society", "education"], popularity: 83, url: "https://www.ted.com/talks/celeste_headlee_10_ways_to_have_a_better_conversation" },
    { title: "Inspiring a life of immersion", speaker: "Jacqueline Novogratz", year: 2012, tags: ["society", "motivation"], popularity: 82, url: "https://www.ted.com/talks/jacqueline_novogratz_inspiring_a_life_of_immersion" },
    { title: "The surprising habits of original thinkers", speaker: "Adam Grant", year: 2016, tags: ["business", "creativity", "psychology"], popularity: 82, url: "https://www.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers" },
    { title: "The power of believing that you can improve", speaker: "Carol Dweck", year: 2014, tags: ["education", "motivation", "psychology"], popularity: 81, url: "https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve" },
    { title: "Why good leaders make you feel safe", speaker: "Simon Sinek", year: 2014, tags: ["business", "society"], popularity: 81, url: "https://www.ted.com/talks/simon_sinek_why_good_leaders_make_you_feel_safe" },
    { title: "Why we all need to practice emotional first aid", speaker: "Guy Winch", year: 2015, tags: ["health", "psychology"], popularity: 80, url: "https://www.ted.com/talks/guy_winch_why_we_all_need_to_practice_emotional_first_aid" },
    { title: "Try something new for 30 days", speaker: "Matt Cutts", year: 2011, tags: ["motivation", "health"], popularity: 80, url: "https://www.ted.com/talks/matt_cutts_try_something_new_for_30_days" },
    { title: "The clues to a great story", speaker: "Andrew Stanton", year: 2012, tags: ["creativity", "education"], popularity: 79, url: "https://www.ted.com/talks/andrew_stanton_the_clues_to_a_great_story" },
    { title: "How to make choosing easier", speaker: "Sheena Iyengar", year: 2011, tags: ["psychology", "business"], popularity: 79, url: "https://www.ted.com/talks/sheena_iyengar_how_to_make_choosing_easier" },
    { title: "Want to help someone? Shut up and listen!", speaker: "Ernesto Sirolli", year: 2012, tags: ["business", "society"], popularity: 78, url: "https://www.ted.com/talks/ernesto_sirolli_want_to_help_someone_shut_up_and_listen" },
    { title: "Life lessons from an ad man", speaker: "Rory Sutherland", year: 2009, tags: ["business", "psychology", "creativity"], popularity: 78, url: "https://www.ted.com/talks/rory_sutherland_life_lessons_from_an_ad_man" },
    { title: "Got a meeting? Take a walk", speaker: "Nilofer Merchant", year: 2013, tags: ["health", "business"], popularity: 77, url: "https://www.ted.com/talks/nilofer_merchant_got_a_meeting_take_a_walk" },
    { title: "Build a School in the Cloud", speaker: "Sugata Mitra", year: 2013, tags: ["education", "technology"], popularity: 77, url: "https://www.ted.com/talks/sugata_mitra_build_a_school_in_the_cloud" },
    { title: "How I hacked online dating", speaker: "Amy Webb", year: 2013, tags: ["technology", "society"], popularity: 76, url: "https://www.ted.com/talks/amy_webb_how_i_hacked_online_dating" },
    { title: "Feats of memory anyone can do", speaker: "Joshua Foer", year: 2012, tags: ["education", "psychology"], popularity: 76, url: "https://www.ted.com/talks/joshua_foer_feats_of_memory_anyone_can_do" },
    { title: "The game that can give you 10 extra years of life", speaker: "Jane McGonigal", year: 2012, tags: ["health", "technology", "motivation"], popularity: 75, url: "https://www.ted.com/talks/jane_mcgonigal_the_game_that_can_give_you_10_extra_years_of_life" },
    { title: "What makes us feel good about our work?", speaker: "Dan Ariely", year: 2012, tags: ["business", "psychology"], popularity: 75, url: "https://www.ted.com/talks/dan_ariely_what_makes_us_feel_good_about_our_work" },
    { title: "Why we have too few women leaders", speaker: "Sheryl Sandberg", year: 2010, tags: ["business", "society"], popularity: 74, url: "https://www.ted.com/talks/sheryl_sandberg_why_we_have_too_few_women_leaders" },
    { title: "3 lessons on success from an Arab businesswoman", speaker: "Leila Hoteit", year: 2013, tags: ["business", "motivation"], popularity: 74, url: "https://www.ted.com/talks/leila_hoteit_3_lessons_on_success_from_an_arab_businesswoman" },
    { title: "How to live before you die", speaker: "Steve Jobs", year: 2005, tags: ["motivation", "creativity", "business"], popularity: 73, url: "https://www.ted.com/talks/steve_jobs_how_to_live_before_you_die" },
    { title: "The riddle of experience vs. memory", speaker: "Daniel Kahneman", year: 2010, tags: ["psychology", "science"], popularity: 73, url: "https://www.ted.com/talks/daniel_kahneman_the_riddle_of_experience_vs_memory" },
    { title: "The case for optimism on climate change", speaker: "Al Gore", year: 2016, tags: ["environment", "science", "society"], popularity: 72, url: "https://www.ted.com/talks/al_gore_the_case_for_optimism_on_climate_change" },
    { title: "The next outbreak? We’re not ready", speaker: "Bill Gates", year: 2015, tags: ["health", "science", "society"], popularity: 72, url: "https://www.ted.com/talks/bill_gates_the_next_outbreak_we_re_not_ready" },
    { title: "The future we're building -- and boring", speaker: "Elon Musk", year: 2017, tags: ["technology", "business", "science"], popularity: 71, url: "https://www.ted.com/talks/elon_musk_the_future_we_re_building_and_boring" },
    { title: "Can we build AI without losing control over it?", speaker: "Sam Harris", year: 2016, tags: ["technology", "science", "society"], popularity: 71, url: "https://www.ted.com/talks/sam_harris_can_we_build_ai_without_losing_control_over_it" },
    { title: "How a handful of tech companies control billions of minds every day", speaker: "Tristan Harris", year: 2017, tags: ["technology", "society", "psychology"], popularity: 70, url: "https://www.ted.com/talks/tristan_harris_how_a_handful_of_tech_companies_control_billions_of_minds_every_day" },
    { title: "What explains the rise of humans?", speaker: "Yuval Noah Harari", year: 2015, tags: ["science", "society", "education"], popularity: 70, url: "https://www.ted.com/talks/yuval_noah_harari_what_explains_the_rise_of_humans" },
  ],
  ja: [
    { title: "学校は創造性を殺してしまっているのか？", speaker: "Sir Ken Robinson", year: 2006, tags: ["education", "creativity", "society"], popularity: 99, url: "https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity" },
    { title: "ボディランゲージがあなたをつくる", speaker: "Amy Cuddy", year: 2012, tags: ["psychology", "motivation"], popularity: 98, url: "https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are" },
    { title: "優れたリーダーはどうやって行動を促すか", speaker: "Simon Sinek", year: 2009, tags: ["business", "motivation"], popularity: 97, url: "https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action" },
    { title: "弱さの力", speaker: "Brené Brown", year: 2010, tags: ["psychology", "society"], popularity: 96, url: "https://www.ted.com/talks/brene_brown_the_power_of_vulnerability" },
    { title: "先延ばしの達人の頭の中", speaker: "Tim Urban", year: 2016, tags: ["motivation", "psychology"], popularity: 95, url: "https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator" },
    { title: "人に伝わる話し方", speaker: "Julian Treasure", year: 2013, tags: ["business", "education", "motivation"], popularity: 94, url: "https://www.ted.com/talks/julian_treasure_how_to_speak_so_that_people_want_to_listen" },
    { title: "やる気にまつわるパズル", speaker: "Dan Pink", year: 2009, tags: ["business", "psychology", "motivation"], popularity: 93, url: "https://www.ted.com/talks/dan_pink_the_puzzle_of_motivation" },
    { title: "幸福が仕事を変える", speaker: "Shawn Achor", year: 2011, tags: ["business", "health", "psychology"], popularity: 92, url: "https://www.ted.com/talks/shawn_achor_the_happy_secret_to_better_work" },
    { title: "見た目がすべてじゃない", speaker: "Cameron Russell", year: 2012, tags: ["society", "motivation"], popularity: 91, url: "https://www.ted.com/talks/cameron_russell_looks_aren_t_everything_believe_me_i_m_a_model" },
    { title: "幸せな人生の哲学", speaker: "Sam Berns", year: 2013, tags: ["health", "motivation"], popularity: 90, url: "https://www.ted.com/talks/sam_berns_my_philosophy_for_a_happy_life" },
    { title: "内向型の力", speaker: "Susan Cain", year: 2012, tags: ["psychology", "society"], popularity: 89, url: "https://www.ted.com/talks/susan_cain_the_power_of_introverts" },
    { title: "最高の統計グラフ", speaker: "Hans Rosling", year: 2006, tags: ["science", "society", "education"], popularity: 89, url: "https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen" },
    { title: "脳卒中から学んだこと", speaker: "Jill Bolte Taylor", year: 2008, tags: ["science", "health", "psychology"], popularity: 88, url: "https://www.ted.com/talks/jill_bolte_taylor_my_stroke_of_insight" },
    { title: "ストレスを味方にする方法", speaker: "Kelly McGonigal", year: 2013, tags: ["health", "psychology"], popularity: 88, url: "https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend" },
    { title: "やり抜く力", speaker: "Angela Lee Duckworth", year: 2013, tags: ["education", "motivation", "psychology"], popularity: 87, url: "https://www.ted.com/talks/angela_lee_duckworth_grit_the_power_of_passion_and_perseverance" },
    { title: "恥を受け入れて生きる", speaker: "Brené Brown", year: 2012, tags: ["psychology", "society"], popularity: 87, url: "https://www.ted.com/talks/brene_brown_listening_to_shame" },
    { title: "創造性という天才との付き合い方", speaker: "Elizabeth Gilbert", year: 2009, tags: ["creativity", "motivation"], popularity: 86, url: "https://www.ted.com/talks/elizabeth_gilbert_your_elusive_creative_genius" },
    { title: "17分間息を止めた理由", speaker: "David Blaine", year: 2010, tags: ["motivation", "health"], popularity: 86, url: "https://www.ted.com/talks/david_blaine_how_i_held_my_breath_for_17_minutes" },
    { title: "幸福の意外な科学", speaker: "Dan Gilbert", year: 2004, tags: ["psychology", "health"], popularity: 85, url: "https://www.ted.com/talks/dan_gilbert_the_surprising_science_of_happiness" },
    { title: "選択肢が多すぎる時代のパラドックス", speaker: "Barry Schwartz", year: 2005, tags: ["psychology", "society"], popularity: 85, url: "https://www.ted.com/talks/barry_schwartz_the_paradox_of_choice" },
    { title: "シングルストーリーの危険性", speaker: "Chimamanda Ngozi Adichie", year: 2009, tags: ["society", "education"], popularity: 84, url: "https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story" },
    { title: "ウソを見抜く方法", speaker: "Pamela Meyer", year: 2011, tags: ["psychology", "business"], popularity: 84, url: "https://www.ted.com/talks/pamela_meyer_how_to_spot_a_liar" },
    { title: "笑顔の隠れた力", speaker: "Ron Gutman", year: 2011, tags: ["health", "psychology"], popularity: 83, url: "https://www.ted.com/talks/ron_gutman_the_hidden_power_of_smiling" },
    { title: "より良い会話の10のコツ", speaker: "Celeste Headlee", year: 2015, tags: ["business", "society", "education"], popularity: 83, url: "https://www.ted.com/talks/celeste_headlee_10_ways_to_have_a_better_conversation" },
    { title: "没入して生きるということ", speaker: "Jacqueline Novogratz", year: 2012, tags: ["society", "motivation"], popularity: 82, url: "https://www.ted.com/talks/jacqueline_novogratz_inspiring_a_life_of_immersion" },
    { title: "オリジナルな人の意外な習慣", speaker: "Adam Grant", year: 2016, tags: ["business", "creativity", "psychology"], popularity: 82, url: "https://www.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers" },
    { title: "成長できると信じる力", speaker: "Carol Dweck", year: 2014, tags: ["education", "motivation", "psychology"], popularity: 81, url: "https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve" },
    { title: "良いリーダーが安心をつくる理由", speaker: "Simon Sinek", year: 2014, tags: ["business", "society"], popularity: 81, url: "https://www.ted.com/talks/simon_sinek_why_good_leaders_make_you_feel_safe" },
    { title: "心の応急処置が必要な理由", speaker: "Guy Winch", year: 2015, tags: ["health", "psychology"], popularity: 80, url: "https://www.ted.com/talks/guy_winch_why_we_all_need_to_practice_emotional_first_aid" },
    { title: "30日チャレンジのすすめ", speaker: "Matt Cutts", year: 2011, tags: ["motivation", "health"], popularity: 80, url: "https://www.ted.com/talks/matt_cutts_try_something_new_for_30_days" },
    { title: "良いストーリーの手がかり", speaker: "Andrew Stanton", year: 2012, tags: ["creativity", "education"], popularity: 79, url: "https://www.ted.com/talks/andrew_stanton_the_clues_to_a_great_story" },
    { title: "選びやすくする方法", speaker: "Sheena Iyengar", year: 2011, tags: ["psychology", "business"], popularity: 79, url: "https://www.ted.com/talks/sheena_iyengar_how_to_make_choosing_easier" },
    { title: "助けたいなら黙って聴く", speaker: "Ernesto Sirolli", year: 2012, tags: ["business", "society"], popularity: 78, url: "https://www.ted.com/talks/ernesto_sirolli_want_to_help_someone_shut_up_and_listen" },
    { title: "広告マンが語る人生の教訓", speaker: "Rory Sutherland", year: 2009, tags: ["business", "psychology", "creativity"], popularity: 78, url: "https://www.ted.com/talks/rory_sutherland_life_lessons_from_an_ad_man" },
    { title: "会議を歩きながらやろう", speaker: "Nilofer Merchant", year: 2013, tags: ["health", "business"], popularity: 77, url: "https://www.ted.com/talks/nilofer_merchant_got_a_meeting_take_a_walk" },
    { title: "クラウドの中の学校をつくる", speaker: "Sugata Mitra", year: 2013, tags: ["education", "technology"], popularity: 77, url: "https://www.ted.com/talks/sugata_mitra_build_a_school_in_the_cloud" },
    { title: "オンラインデーティングをハックした話", speaker: "Amy Webb", year: 2013, tags: ["technology", "society"], popularity: 76, url: "https://www.ted.com/talks/amy_webb_how_i_hacked_online_dating" },
    { title: "誰でもできる記憶術", speaker: "Joshua Foer", year: 2012, tags: ["education", "psychology"], popularity: 76, url: "https://www.ted.com/talks/joshua_foer_feats_of_memory_anyone_can_do" },
    { title: "寿命を延ばすゲーム", speaker: "Jane McGonigal", year: 2012, tags: ["health", "technology", "motivation"], popularity: 75, url: "https://www.ted.com/talks/jane_mcgonigal_the_game_that_can_give_you_10_extra_years_of_life" },
    { title: "仕事にやりがいを感じるのはなぜか", speaker: "Dan Ariely", year: 2012, tags: ["business", "psychology"], popularity: 75, url: "https://www.ted.com/talks/dan_ariely_what_makes_us_feel_good_about_our_work" },
    { title: "女性リーダーが少ない理由", speaker: "Sheryl Sandberg", year: 2010, tags: ["business", "society"], popularity: 74, url: "https://www.ted.com/talks/sheryl_sandberg_why_we_have_too_few_women_leaders" },
    { title: "アラブ女性経営者の成功の3つの教訓", speaker: "Leila Hoteit", year: 2013, tags: ["business", "motivation"], popularity: 74, url: "https://www.ted.com/talks/leila_hoteit_3_lessons_on_success_from_an_arab_businesswoman" },
    { title: "死ぬ前にどう生きるか", speaker: "Steve Jobs", year: 2005, tags: ["motivation", "creativity", "business"], popularity: 73, url: "https://www.ted.com/talks/steve_jobs_how_to_live_before_you_die" },
    { title: "経験と記憶の謎", speaker: "Daniel Kahneman", year: 2010, tags: ["psychology", "science"], popularity: 73, url: "https://www.ted.com/talks/daniel_kahneman_the_riddle_of_experience_vs_memory" },
    { title: "気候変動に楽観できる理由", speaker: "Al Gore", year: 2016, tags: ["environment", "science", "society"], popularity: 72, url: "https://www.ted.com/talks/al_gore_the_case_for_optimism_on_climate_change" },
    { title: "次の感染症に備える", speaker: "Bill Gates", year: 2015, tags: ["health", "science", "society"], popularity: 72, url: "https://www.ted.com/talks/bill_gates_the_next_outbreak_we_re_not_ready" },
    { title: "私たちが築く未来", speaker: "Elon Musk", year: 2017, tags: ["technology", "business", "science"], popularity: 71, url: "https://www.ted.com/talks/elon_musk_the_future_we_re_building_and_boring" },
    { title: "AIを制御できるか", speaker: "Sam Harris", year: 2016, tags: ["technology", "science", "society"], popularity: 71, url: "https://www.ted.com/talks/sam_harris_can_we_build_ai_without_losing_control_over_it" },
    { title: "テック企業が心を支配する仕組み", speaker: "Tristan Harris", year: 2017, tags: ["technology", "society", "psychology"], popularity: 70, url: "https://www.ted.com/talks/tristan_harris_how_a_handful_of_tech_companies_control_billions_of_minds_every_day" },
    { title: "人類の台頭を説明するもの", speaker: "Yuval Noah Harari", year: 2015, tags: ["science", "society", "education"], popularity: 70, url: "https://www.ted.com/talks/yuval_noah_harari_what_explains_the_rise_of_humans" },
  ],
};

const BASE_SPEECHES = BASE_SPEECHES_SEED;
const SPEECHES = BASE_SPEECHES;


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

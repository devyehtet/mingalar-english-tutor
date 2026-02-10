import { ListeningLesson, PracticeMode } from '../types';

const TOTAL_DAYS = 90;

const expandLessons = (base: ListeningLesson[], totalDays: number): ListeningLesson[] => {
  if (base.length === 0) return [];
  return Array.from({ length: totalDays }, (_, idx) => {
    const lesson = base[idx % base.length];
    return {
      ...lesson,
      vocabulary: lesson.vocabulary.map((item) => ({ ...item })),
      questions: lesson.questions.map((item) => ({ ...item }))
    };
  });
};

const daily: ListeningLesson[] = [
  {
    title: 'Hello, I am Aye',
    story: 'Aye says, Hello. She is a student. She smiles and says her name again.',
    burmese_translation: 'အေးက မင်္ဂလာပါ လို့ ပြောပါတယ်။ သူမက ကျောင်းသူပါ။ သူမ ပြုံးပြီး နာမည်ကို ပြန်ပြောပါတယ်။',
    vocabulary: [
      { word: 'student', meaning: 'ကျောင်းသား/ကျောင်းသူ' },
      { word: 'smile', meaning: 'ပြုံးသည်' },
      { word: 'name', meaning: 'နာမည်' }
    ],
    questions: [
      { question: 'Who says hello?', answer: 'Aye says hello.' },
      { question: 'Is she a student?', answer: 'Yes, she is a student.' }
    ]
  },
  {
    title: 'My Family',
    story: 'Ko Min has a big family. He loves his mother and father. He plays with his little sister.',
    burmese_translation: 'ကိုမင်းမှာ မိသားစုကြီးတစ်ခုရှိပါတယ်။ သူ့အမေ၊အဖေကို ချစ်ပါတယ်။ သူ့ညီမငယ်နဲ့ ကစားပါတယ်။',
    vocabulary: [
      { word: 'family', meaning: 'မိသားစု' },
      { word: 'mother', meaning: 'အမေ' },
      { word: 'sister', meaning: 'ညီမ/အစ်မ' }
    ],
    questions: [
      { question: 'Does Ko Min have a big family?', answer: 'Yes, he does.' },
      { question: 'Who does he play with?', answer: 'He plays with his little sister.' }
    ]
  },
  {
    title: 'Morning Routine',
    story: 'May wakes up at six. She washes her face and eats breakfast. She goes to school at seven.',
    burmese_translation: 'မေက ၆ နာရီမှာ နိုးတယ်။ မျက်နှာဆေးပြီး မနက်စာစားတယ်။ ၇ နာရီမှာ ကျောင်းသွားတယ်။',
    vocabulary: [
      { word: 'wake up', meaning: 'နိုးထသည်' },
      { word: 'breakfast', meaning: 'မနက်စာ' },
      { word: 'school', meaning: 'ကျောင်း' }
    ],
    questions: [
      { question: 'What time does May wake up?', answer: 'She wakes up at six.' },
      { question: 'What does she do before school?', answer: 'She washes her face and eats breakfast.' }
    ]
  },
  {
    title: 'Lunch Time',
    story: 'They eat rice and chicken. The food is hot and tasty. They drink water after lunch.',
    burmese_translation: 'သူတို့က ထမင်းနဲ့ ကြက်သားစားတယ်။ အစားအစာက ပူပူနဲ့ အရသာရှိတယ်။ ထမင်းစားပြီးရင် ရေသောက်တယ်။',
    vocabulary: [
      { word: 'rice', meaning: 'ထမင်း' },
      { word: 'tasty', meaning: 'အရသာရှိသော' },
      { word: 'water', meaning: 'ရေ' }
    ],
    questions: [
      { question: 'What do they eat?', answer: 'They eat rice and chicken.' },
      { question: 'What do they drink after lunch?', answer: 'They drink water.' }
    ]
  },
  {
    title: 'At the Shop',
    story: 'Nandar goes to a small shop. She buys soap and snacks. She pays and goes home.',
    burmese_translation: 'နန္ဒာက ဆိုင်လေးတစ်ဆိုင်ကို သွားတယ်။ ဆပ်ပြာနဲ့ မုန့်ဝယ်တယ်။ ငွေပေးပြီး အိမ်ပြန်တယ်။',
    vocabulary: [
      { word: 'shop', meaning: 'ဆိုင်' },
      { word: 'soap', meaning: 'ဆပ်ပြာ' },
      { word: 'snack', meaning: 'မုန့်' }
    ],
    questions: [
      { question: 'Where does Nandar go?', answer: 'She goes to a small shop.' },
      { question: 'What does she buy?', answer: 'She buys soap and snacks.' }
    ]
  },
  {
    title: 'Finding the Bank',
    story: 'The bank is next to the market. Ko Ko asks for directions. A man points to the right.',
    burmese_translation: 'ဘဏ်က စျေးဘေးမှာ ရှိပါတယ်။ ကိုကိုက လမ်းမေးတယ်။ လူတစ်ယောက်က ညာဘက်ကို ညွှန်ပြတယ်။',
    vocabulary: [
      { word: 'bank', meaning: 'ဘဏ်' },
      { word: 'direction', meaning: 'လမ်းညွှန်ချက်' },
      { word: 'right', meaning: 'ညာဘက်' }
    ],
    questions: [
      { question: 'Where is the bank?', answer: 'It is next to the market.' },
      { question: 'What does the man do?', answer: 'He points to the right.' }
    ]
  },
  {
    title: 'Meeting Time',
    story: 'The meeting is at three o clock. Hnin sets an alarm. She arrives on time.',
    burmese_translation: 'အစည်းအဝေးက ၃ နာရီမှာပါ။ ဟန့်က အိပ်ရာထမိန့် အသံသတ်မှတ်တယ်။ သူမ အချိန်မှန် ရောက်တယ်။',
    vocabulary: [
      { word: 'meeting', meaning: 'အစည်းအဝေး' },
      { word: 'alarm', meaning: 'နှိုးစက်' },
      { word: 'on time', meaning: 'အချိန်မှန်' }
    ],
    questions: [
      { question: 'What time is the meeting?', answer: 'It is at three o clock.' },
      { question: 'Does Hnin arrive late?', answer: 'No, she arrives on time.' }
    ]
  },
  {
    title: 'Rainy Day',
    story: 'It is raining today. Maung wears a raincoat. He carries an umbrella.',
    burmese_translation: 'ဒီနေ့ မိုးရွာနေပါတယ်။ မောင်က မိုးအကာဝတ်တယ်။ ထီးကိုင်တယ်။',
    vocabulary: [
      { word: 'rain', meaning: 'မိုး' },
      { word: 'raincoat', meaning: 'မိုးကာအင်္ကျီ' },
      { word: 'umbrella', meaning: 'ထီး' }
    ],
    questions: [
      { question: 'What is the weather like?', answer: 'It is raining.' },
      { question: 'What does Maung carry?', answer: 'He carries an umbrella.' }
    ]
  },
  {
    title: 'My Hobby',
    story: 'Su likes drawing. She draws a flower and a house. Her brother says, Beautiful.',
    burmese_translation: 'စုက ပုံဆွဲတာကြိုက်ပါတယ်။ ပန်းနဲ့ အိမ်တစ်လုံး ဆွဲတယ်။ သူ့အစ်ကိုက လှတယ် လို့ ပြောတယ်။',
    vocabulary: [
      { word: 'draw', meaning: 'ပုံဆွဲသည်' },
      { word: 'flower', meaning: 'ပန်း' },
      { word: 'house', meaning: 'အိမ်' }
    ],
    questions: [
      { question: 'What does Su like?', answer: 'She likes drawing.' },
      { question: 'What does she draw?', answer: 'She draws a flower and a house.' }
    ]
  },
  {
    title: 'At the Clinic',
    story: 'Ko Aung feels sick. He goes to the clinic. The nurse gives him medicine.',
    burmese_translation: 'ကိုအောင် နေမကောင်းဘူး။ သူက ဆေးခန်းကို သွားတယ်။ နာပြန်က ဆေးပေးတယ်။',
    vocabulary: [
      { word: 'sick', meaning: 'နေမကောင်း' },
      { word: 'clinic', meaning: 'ဆေးခန်း' },
      { word: 'medicine', meaning: 'ဆေး' }
    ],
    questions: [
      { question: 'How does Ko Aung feel?', answer: 'He feels sick.' },
      { question: 'Where does he go?', answer: 'He goes to the clinic.' }
    ]
  },
  {
    title: 'Homework Time',
    story: 'May and Moe do homework. They read a book and write answers. They finish and rest.',
    burmese_translation: 'မေ နဲ့ မိုးက အိမ်စာလုပ်တယ်။ စာအုပ်ဖတ်ပြီး အဖြေ ရေးတယ်။ ပြီးတော့ အနားယူတယ်။',
    vocabulary: [
      { word: 'homework', meaning: 'အိမ်စာ' },
      { word: 'answer', meaning: 'အဖြေ' },
      { word: 'rest', meaning: 'အနားယူ' }
    ],
    questions: [
      { question: 'What do they do?', answer: 'They do homework.' },
      { question: 'What do they write?', answer: 'They write answers.' }
    ]
  },
  {
    title: 'Travel Day',
    story: 'The family travels by bus. They see mountains and rivers. They take photos.',
    burmese_translation: 'မိသားစုက ဘတ်စ်ကားနဲ့ ခရီးသွားတယ်။ တောင်တွေနဲ့ မြစ်တွေကို မြင်တယ်။ ဓာတ်ပုံရိုက်တယ်။',
    vocabulary: [
      { word: 'travel', meaning: 'ခရီးသွား' },
      { word: 'mountain', meaning: 'တောင်' },
      { word: 'river', meaning: 'မြစ်' }
    ],
    questions: [
      { question: 'How do they travel?', answer: 'They travel by bus.' },
      { question: 'What do they see?', answer: 'They see mountains and rivers.' }
    ]
  },
  {
    title: 'Feelings Today',
    story: 'Mya is happy today. She gets a good score. She smiles all day.',
    burmese_translation: 'မြက ဒီနေ့ ပျော်ပါတယ်။ သူမ အမှတ်ကောင်းရတယ်။ တစ်နေ့လုံး ပြုံးနေတယ်။',
    vocabulary: [
      { word: 'happy', meaning: 'ပျော်ရွှင်' },
      { word: 'score', meaning: 'အမှတ်' },
      { word: 'smile', meaning: 'ပြုံး' }
    ],
    questions: [
      { question: 'How does Mya feel?', answer: 'She feels happy.' },
      { question: 'Why is she happy?', answer: 'She gets a good score.' }
    ]
  },
  {
    title: 'Simple Opinion',
    story: 'Ko Ko watches a movie. He thinks it is good. He tells his friend.',
    burmese_translation: 'ကိုကိုက ရုပ်ရှင်ကြည့်တယ်။ ကောင်းတယ်လို့ ထင်တယ်။ သူငယ်ချင်းကို ပြောတယ်။',
    vocabulary: [
      { word: 'movie', meaning: 'ရုပ်ရှင်' },
      { word: 'think', meaning: 'ထင်သည်' },
      { word: 'friend', meaning: 'သူငယ်ချင်း' }
    ],
    questions: [
      { question: 'What does Ko Ko watch?', answer: 'He watches a movie.' },
      { question: 'What does he think?', answer: 'He thinks it is good.' }
    ]
  }
];

const slang: ListeningLesson[] = [
  {
    title: 'Yo, Nice to Meet You',
    story: 'Yo, I meet a new friend on the block. We say wassup and share our names. We smile and keep it chill.',
    burmese_translation: 'ဘလောက်ပေါ်မှာ မိတ်ဆွေအသစ်နဲ့ တွေ့တယ်။ wassup လို့ ပြောပြီး နာမည်တွေ မျှဝေတယ်။ ပြုံးပြီး အေးဆေးနေတယ်။',
    vocabulary: [
      { word: 'yo', meaning: 'နှုတ်ဆက်စကား' },
      { word: 'wassup', meaning: 'ဘာဖြစ်နေလဲ' },
      { word: 'block', meaning: 'လမ်းတန်း/အနီးအနား' }
    ],
    questions: [
      { question: 'Where do they meet?', answer: 'They meet on the block.' },
      { question: 'What do they share?', answer: 'They share their names.' }
    ]
  },
  {
    title: 'My Fam',
    story: 'My fam comes for dinner. We talk about our day and laugh. Everyone feels close and happy.',
    burmese_translation: 'ငါ့ fam က ညစာစားဖို့ လာတယ်။ ဒီနေ့အကြောင်း ပြောပြီး ရယ်တယ်။ လူတိုင်း နီးစပ်ပြီး ပျော်တယ်။',
    vocabulary: [
      { word: 'fam', meaning: 'နီးစပ်သူ' },
      { word: 'close', meaning: 'နီးစပ်' },
      { word: 'laugh', meaning: 'ရယ်' }
    ],
    questions: [
      { question: 'Who comes for dinner?', answer: 'His fam comes for dinner.' },
      { question: 'How does everyone feel?', answer: 'Everyone feels close and happy.' }
    ]
  },
  {
    title: 'Morning Grind',
    story: 'I wake up early and start my grind. I drink coffee and then hit the train. I stay focused and move quick.',
    burmese_translation: 'မနက်စောစော နိုးပြီး ကြိုးစားမှု စတင်တယ်။ ကော်ဖီသောက်ပြီး ရထားကို စီးတယ်။ အာရုံစိုက်ပြီး လျင်မြန်စွာ လှုပ်ရှားတယ်။',
    vocabulary: [
      { word: 'grind', meaning: 'ကြိုးစားမှု' },
      { word: 'train', meaning: 'ရထား' },
      { word: 'focused', meaning: 'အာရုံစိုက်' }
    ],
    questions: [
      { question: 'When does he start his grind?', answer: 'He starts early.' },
      { question: 'What does he take?', answer: 'He takes the train.' }
    ]
  },
  {
    title: 'Bodega Snack',
    story: 'After work I stop at the bodega. I grab a snack and a drink. The shop owner knows my name.',
    burmese_translation: 'အလုပ်ပြီးတော့ bodega ကို ဝင်တယ်။ မုန့်နဲ့ အချိုရည် တစ်ခု ယူတယ်။ ဆိုင်ပိုင်ရှင်က နာမည်ကို သိတယ်။',
    vocabulary: [
      { word: 'bodega', meaning: 'အနီးကပ်ဆိုင်' },
      { word: 'snack', meaning: 'မုန့်' },
      { word: 'owner', meaning: 'ပိုင်ရှင်' }
    ],
    questions: [
      { question: 'Where does he stop?', answer: 'He stops at the bodega.' },
      { question: 'What does he grab?', answer: 'He grabs a snack and a drink.' }
    ]
  },
  {
    title: 'Shopping Deals',
    story: 'We go to the market for deals. My homie checks the price and says it is fair. We pay and bounce.',
    burmese_translation: 'စျေးနှုန်းကောင်းတွေ ရှာဖို့ စျေးသွားတယ်။ ငါ့ homie က ဈေးကို စစ်ပြီး သင့်တော်တယ်လို့ ပြောတယ်။ ငွေပေးပြီး ထွက်သွားတယ်။',
    vocabulary: [
      { word: 'homie', meaning: 'နီးစပ်မိတ်ဆွေ' },
      { word: 'price', meaning: 'ဈေးနှုန်း' },
      { word: 'bounce', meaning: 'ထွက်သွား' }
    ],
    questions: [
      { question: 'What does the homie check?', answer: 'He checks the price.' },
      { question: 'What do they do after paying?', answer: 'They bounce.' }
    ]
  },
  {
    title: 'Directions on the Block',
    story: 'I ask for directions on the block. A neighbor says the park is near the bridge. I thank him and keep moving.',
    burmese_translation: 'ဘလောက်ပေါ်မှာ လမ်းမေးတယ်။ အိမ်နီးချင်းက ပန်းခြံက တံတားနီးနားမှာ လို့ ပြောတယ်။ ကျေးဇူးတင်ပြီး ဆက်သွားတယ်။',
    vocabulary: [
      { word: 'direction', meaning: 'လမ်းညွှန်ချက်' },
      { word: 'neighbor', meaning: 'အိမ်နီးချင်း' },
      { word: 'bridge', meaning: 'တံတား' }
    ],
    questions: [
      { question: 'Who gives directions?', answer: 'A neighbor gives directions.' },
      { question: 'Where is the park?', answer: 'It is near the bridge.' }
    ]
  },
  {
    title: 'Time Check',
    story: 'I check the time and set an alarm. The meet up is at seven o clock. I do not want to be late.',
    burmese_translation: 'အချိန်ကို စစ်ပြီး နှိုးစက် သတ်မှတ်တယ်။ မိတ်ဆုံပွဲက ခုနစ်နာရီပါ။ နောက်ကျ မဖြစ်ချင်ဘူး။',
    vocabulary: [
      { word: 'time', meaning: 'အချိန်' },
      { word: 'alarm', meaning: 'နှိုးစက်' },
      { word: 'late', meaning: 'နောက်ကျ' }
    ],
    questions: [
      { question: 'What time is the meet up?', answer: 'It is at seven o clock.' },
      { question: 'Why does he set an alarm?', answer: 'He does not want to be late.' }
    ]
  },
  {
    title: 'Rainy Vibe',
    story: 'It rains in the afternoon and the vibe is calm. I wear a hoodie and carry an umbrella. We stay inside and chill.',
    burmese_translation: 'နေ့လယ်ပိုင်း မိုးရွာပြီး vibe က တိတ်ဆိတ်တယ်။ hoodie ဝတ်ပြီး ထီးကိုင်တယ်။ အိမ်တွင်းမှာ နေပြီး အေးဆေးနေတယ်။',
    vocabulary: [
      { word: 'vibe', meaning: 'အခြေအနေ/ခံစားချက်' },
      { word: 'hoodie', meaning: 'ဟူဒီအင်္ကျီ' },
      { word: 'umbrella', meaning: 'ထီး' }
    ],
    questions: [
      { question: 'What is the vibe like?', answer: 'It is calm.' },
      { question: 'What does he wear?', answer: 'He wears a hoodie.' }
    ]
  },
  {
    title: 'Music Hobby',
    story: 'My hobby is making beats. I practice with headphones and write a hook. My crew listens and gives feedback.',
    burmese_translation: 'ငါ့ ဟိုဘီက beats လုပ်ခြင်းပါ။ headphones နဲ့ လေ့ကျင့်ပြီး hook ရေးတယ်။ crew က နားထောင်ပြီး အကြံပြုတယ်။',
    vocabulary: [
      { word: 'beats', meaning: 'ဘီတ်သံ' },
      { word: 'hook', meaning: 'ကပ်လိုင်း' },
      { word: 'crew', meaning: 'အဖွဲ့' }
    ],
    questions: [
      { question: 'What is the hobby?', answer: 'Making beats.' },
      { question: 'Who gives feedback?', answer: 'His crew gives feedback.' }
    ]
  },
  {
    title: 'Health Check',
    story: 'I feel tired so I drink water and rest. My friend reminds me to stretch. We talk about staying healthy.',
    burmese_translation: 'ပင်ပန်းလို့ ရေသောက်ပြီး အနားယူတယ်။ သူငယ်ချင်းက stretch လုပ်ဖို့ သတိပေးတယ်။ ကျန်းမာရေးအကြောင်း ပြောကြတယ်။',
    vocabulary: [
      { word: 'rest', meaning: 'အနားယူ' },
      { word: 'stretch', meaning: 'လေ့ကျင့်ထိန်းချုပ်' },
      { word: 'healthy', meaning: 'ကျန်းမာ' }
    ],
    questions: [
      { question: 'What does he do when tired?', answer: 'He drinks water and rests.' },
      { question: 'What does his friend remind him?', answer: 'To stretch.' }
    ]
  },
  {
    title: 'Work and Study',
    story: 'I work in the morning and study at night. I keep a notebook for new words. The grind stays steady.',
    burmese_translation: 'မနက်မှာ အလုပ်လုပ်ပြီး ညမှာ လေ့လာတယ်။ စကားလုံးအသစ်တွေအတွက် မှတ်စုစာအုပ် ထားတယ်။ ကြိုးစားမှုက တည်ငြိမ်နေတယ်။',
    vocabulary: [
      { word: 'study', meaning: 'လေ့လာ' },
      { word: 'notebook', meaning: 'မှတ်စုစာအုပ်' },
      { word: 'steady', meaning: 'တည်ငြိမ်' }
    ],
    questions: [
      { question: 'When does he study?', answer: 'He studies at night.' },
      { question: 'What does he keep for new words?', answer: 'A notebook.' }
    ]
  },
  {
    title: 'City Travel',
    story: 'We travel across the city on the subway. The ride is long but smooth. We take photos and enjoy the view.',
    burmese_translation: 'မြို့တလွှားကို subway နဲ့ သွားတယ်။ စီးနင်းမှုက ရှည်ပေမယ့် ချောမွေ့တယ်။ ဓာတ်ပုံရိုက်ပြီး မြင်ကွင်းကို ခံစားတယ်။',
    vocabulary: [
      { word: 'subway', meaning: 'မြေအောက်ရထား' },
      { word: 'ride', meaning: 'စီးနင်း' },
      { word: 'view', meaning: 'မြင်ကွင်း' }
    ],
    questions: [
      { question: 'How do they travel?', answer: 'They travel on the subway.' },
      { question: 'What do they do during the ride?', answer: 'They take photos and enjoy the view.' }
    ]
  },
  {
    title: 'Feelings',
    story: 'I feel proud today because I finished my task. My fam says good job and I feel strong. The energy is positive.',
    burmese_translation: 'ဒီနေ့ ငါ့အလုပ် ပြီးလို့ ဂုဏ်ယူတယ်။ fam က ကောင်းတယ်လို့ ပြောပြီး ငါလည်း ခိုင်မာတယ်။ စွမ်းအင်က အပြုသဘောပဲ။',
    vocabulary: [
      { word: 'proud', meaning: 'ဂုဏ်ယူ' },
      { word: 'strong', meaning: 'ခိုင်မာ' },
      { word: 'energy', meaning: 'စွမ်းအင်' }
    ],
    questions: [
      { question: 'Why does he feel proud?', answer: 'Because he finished his task.' },
      { question: 'How is the energy?', answer: 'It is positive.' }
    ]
  },
  {
    title: 'Simple Opinion',
    story: 'I think this track is good. The beat is clean and the flow is strong. My friends agree with me.',
    burmese_translation: 'ဒီသီချင်းက ကောင်းတယ်လို့ ထင်တယ်။ beat က သန့်ရှင်းပြီး flow က ခိုင်မာတယ်။ သူငယ်ချင်းတွေ သဘောတူတယ်။',
    vocabulary: [
      { word: 'track', meaning: 'သီချင်း' },
      { word: 'beat', meaning: 'ဘီတ်' },
      { word: 'flow', meaning: 'ဖလိုး' }
    ],
    questions: [
      { question: 'What does he think about the track?', answer: 'He thinks it is good.' },
      { question: 'Who agrees with him?', answer: 'His friends agree with him.' }
    ]
  }
];

const business: ListeningLesson[] = [
  {
    title: 'First Meeting',
    story: 'I greet the team in the meeting room. We introduce ourselves and share roles. The manager starts the agenda.',
    burmese_translation: 'အစည်းအဝေးခန်းမှာ အဖွဲ့ကို မင်္ဂလာပါ ပြောတယ်။ ကိုယ့်ကိုယ်ကို မိတ်ဆက်ပြီး တာဝန်တွေ မျှဝေတယ်။ မန်နေဂျာက အစီအစဉ်ကို စတင်တယ်။',
    vocabulary: [
      { word: 'meeting', meaning: 'အစည်းအဝေး' },
      { word: 'introduce', meaning: 'မိတ်ဆက်' },
      { word: 'agenda', meaning: 'အစီအစဉ်' }
    ],
    questions: [
      { question: 'Where do they meet?', answer: 'They meet in the meeting room.' },
      { question: 'Who starts the agenda?', answer: 'The manager starts the agenda.' }
    ]
  },
  {
    title: 'Team Support',
    story: 'My team helps each other every day. We share updates and solve problems. The office feels friendly.',
    burmese_translation: 'ငါ့အဖွဲ့က နေ့တိုင်း အချင်းချင်း ကူညီတယ်။ အပ်ဒိတ်တွေ မျှဝေပြီး ပြဿနာတွေ ဖြေရှင်းတယ်။ ရုံးက မိတ်ဆွေ့ဆန်တယ်။',
    vocabulary: [
      { word: 'team', meaning: 'အဖွဲ့' },
      { word: 'update', meaning: 'အပ်ဒိတ်' },
      { word: 'solve', meaning: 'ဖြေရှင်း' }
    ],
    questions: [
      { question: 'What does the team share?', answer: 'They share updates.' },
      { question: 'How does the office feel?', answer: 'It feels friendly.' }
    ]
  },
  {
    title: 'Daily Schedule',
    story: 'I check my schedule in the morning. I answer emails and prepare tasks. I finish the first report before lunch.',
    burmese_translation: 'မနက်မှာ အချိန်ဇယားကို စစ်တယ်။ အီးမေးလ်တွေ ပြန်ပြီး လုပ်ငန်းတွေ ပြင်ဆင်တယ်။ ထမင်းစားခါနီး ပထမ အစီရင်ခံစာကို ပြီးစီးတယ်။',
    vocabulary: [
      { word: 'schedule', meaning: 'အချိန်ဇယား' },
      { word: 'email', meaning: 'အီးမေးလ်' },
      { word: 'report', meaning: 'အစီရင်ခံစာ' }
    ],
    questions: [
      { question: 'When does she check the schedule?', answer: 'In the morning.' },
      { question: 'What does she finish before lunch?', answer: 'The first report.' }
    ]
  },
  {
    title: 'Project Lunch',
    story: 'We eat lunch in the company cafe. We talk about a new project. After lunch we return to work.',
    burmese_translation: 'ကုမ္ပဏီ ကော်ဖီဆိုင်မှာ နေ့လယ်စာ စားတယ်။ ပရောဂျက်အသစ်အကြောင်း ပြောကြတယ်။ စားပြီးရင် အလုပ်ပြန်လုပ်တယ်။',
    vocabulary: [
      { word: 'project', meaning: 'ပရောဂျက်' },
      { word: 'cafe', meaning: 'ကော်ဖီဆိုင်' },
      { word: 'return', meaning: 'ပြန်လာ' }
    ],
    questions: [
      { question: 'Where do they eat lunch?', answer: 'In the company cafe.' },
      { question: 'What do they talk about?', answer: 'They talk about a new project.' }
    ]
  },
  {
    title: 'Office Supplies',
    story: 'We compare prices for office supplies. We choose a vendor and place an order. The invoice arrives by email.',
    burmese_translation: 'ရုံးသုံးပစ္စည်း အတွက် ဈေးနှုန်းတွေ နှိုင်းယှဉ်တယ်။ vendor တစ်ဦး ရွေးပြီး အော်ဒါတင်တယ်။ invoice က အီးမေးလ်နဲ့ လာတယ်။',
    vocabulary: [
      { word: 'vendor', meaning: 'ပေးသွင်းသူ' },
      { word: 'order', meaning: 'အော်ဒါတင်' },
      { word: 'invoice', meaning: 'ငွေတောင်းစာ' }
    ],
    questions: [
      { question: 'What do they compare?', answer: 'They compare prices for supplies.' },
      { question: 'How does the invoice arrive?', answer: 'It arrives by email.' }
    ]
  },
  {
    title: 'Client Visit',
    story: 'I visit a client office across town. The receptionist gives directions to the meeting room. I arrive on time.',
    burmese_translation: 'မြို့တစ်ဖက်က client ရုံးကို သွားတယ်။ reception က အစည်းအဝေးခန်းကို လမ်းညွှန်တယ်။ အချိန်မှန် ရောက်တယ်။',
    vocabulary: [
      { word: 'client', meaning: 'ဖောက်သည်' },
      { word: 'receptionist', meaning: 'ကြိုဆိုရေးအလုပ်သမား' },
      { word: 'arrive', meaning: 'ရောက်ရှိ' }
    ],
    questions: [
      { question: 'Where does he visit?', answer: 'He visits a client office.' },
      { question: 'Who gives directions?', answer: 'The receptionist gives directions.' }
    ]
  },
  {
    title: 'Deadline Focus',
    story: 'The deadline is at five o clock. I set reminders and focus on details. I submit the file before the end of the day.',
    burmese_translation: 'deadline က ညနေ ငါးနာရီပါ။ သတိပေးချက်တွေ သတ်မှတ်ပြီး အသေးစိတ်ကို အာရုံစိုက်တယ်။ နေ့ကုန်ခါနီး ဖိုင်ကို တင်ပို့တယ်။',
    vocabulary: [
      { word: 'deadline', meaning: 'အဆုံးသတ်ချိန်' },
      { word: 'reminder', meaning: 'သတိပေးချက်' },
      { word: 'submit', meaning: 'တင်ပို့' }
    ],
    questions: [
      { question: 'What time is the deadline?', answer: 'It is at five o clock.' },
      { question: 'What does he submit?', answer: 'He submits the file.' }
    ]
  },
  {
    title: 'Rainy Commute',
    story: 'It rains in the morning so I carry an umbrella. The traffic is slow. I still arrive on time.',
    burmese_translation: 'မနက်မှာ မိုးရွာလို့ ထီးကိုင်တယ်။ လမ်းကြပ်တယ်။ ဒါပေမယ့် အချိန်မှန် ရောက်တယ်။',
    vocabulary: [
      { word: 'traffic', meaning: 'ယာဉ်ကြပ်' },
      { word: 'umbrella', meaning: 'ထီး' },
      { word: 'commute', meaning: 'သွားလာခရီး' }
    ],
    questions: [
      { question: 'Why does he carry an umbrella?', answer: 'Because it rains.' },
      { question: 'How is the traffic?', answer: 'It is slow.' }
    ]
  },
  {
    title: 'Office Club',
    story: 'After work I join a company club. We read books and discuss ideas. It helps my communication skills.',
    burmese_translation: 'အလုပ်ပြီးရင် ကုမ္ပဏီ club ကို ဝင်တယ်။ စာဖတ်ပြီး အကြံတွေ ဆွေးနွေးတယ်။ ဆက်သွယ်ရေးစွမ်းရည်က ပိုကောင်းလာတယ်။',
    vocabulary: [
      { word: 'club', meaning: 'အဖွဲ့' },
      { word: 'discuss', meaning: 'ဆွေးနွေး' },
      { word: 'skills', meaning: 'စွမ်းရည်' }
    ],
    questions: [
      { question: 'What do they do in the club?', answer: 'They read and discuss ideas.' },
      { question: 'What improves?', answer: 'Communication skills improve.' }
    ]
  },
  {
    title: 'Healthy Desk',
    story: 'I drink water and stretch at my desk. I take short breaks to rest my eyes. This keeps me healthy.',
    burmese_translation: 'စားပွဲမှာ ရေသောက်ပြီး stretch လုပ်တယ်။ မျက်စိအနားယူဖို့ ခဏခဏ အနားယူတယ်။ ဒါက ကျန်းမာစေတယ်။',
    vocabulary: [
      { word: 'desk', meaning: 'စားပွဲ' },
      { word: 'break', meaning: 'အနားယူချိန်' },
      { word: 'healthy', meaning: 'ကျန်းမာ' }
    ],
    questions: [
      { question: 'Where does he stretch?', answer: 'At his desk.' },
      { question: 'Why does he take breaks?', answer: 'To rest his eyes.' }
    ]
  },
  {
    title: 'Training Course',
    story: 'I study a short course after work. I take notes and practice presentations. The new skills help my job.',
    burmese_translation: 'အလုပ်ပြီးရင် သင်တန်းတိုတစ်ခု လေ့လာတယ်။ မှတ်စုရေးပြီး presentation လေ့ကျင့်တယ်။ စွမ်းရည်အသစ်တွေက အလုပ်ကို ကူညီတယ်။',
    vocabulary: [
      { word: 'course', meaning: 'သင်တန်း' },
      { word: 'presentation', meaning: 'တင်ပြချက်' },
      { word: 'notes', meaning: 'မှတ်စု' }
    ],
    questions: [
      { question: 'When does he study the course?', answer: 'After work.' },
      { question: 'What helps his job?', answer: 'The new skills help his job.' }
    ]
  },
  {
    title: 'Business Travel',
    story: 'I travel to another city for a conference. I meet new partners and exchange cards. The trip is useful.',
    burmese_translation: 'ကွန်ဖရင့်အတွက် မြို့တစ်မြို့သို့ သွားတယ်။ မိတ်ဖက်အသစ်တွေ တွေ့ပြီး ကတ်တွေ လဲလှယ်တယ်။ ခရီးက အသုံးဝင်တယ်။',
    vocabulary: [
      { word: 'conference', meaning: 'ကွန်ဖရင့်' },
      { word: 'partner', meaning: 'မိတ်ဖက်' },
      { word: 'exchange', meaning: 'လဲလှယ်' }
    ],
    questions: [
      { question: 'Why does he travel?', answer: 'For a conference.' },
      { question: 'What do they exchange?', answer: 'They exchange cards.' }
    ]
  },
  {
    title: 'Presentation Feelings',
    story: 'I feel nervous before a presentation. I breathe slowly and stay calm. After I speak, I feel confident.',
    burmese_translation: 'presentation မတိုင်ခင် စိတ်လှုပ်ရှားတယ်။ ရှိုက်ရှိုက်ရှိုက် လေထုတ်ပြီး တည်ငြိမ်နေတယ်။ ပြောပြီးရင် ယုံကြည်မှုရှိလာတယ်။',
    vocabulary: [
      { word: 'nervous', meaning: 'စိတ်လှုပ်ရှား' },
      { word: 'calm', meaning: 'တည်ငြိမ်' },
      { word: 'confident', meaning: 'ယုံကြည်မှုရှိ' }
    ],
    questions: [
      { question: 'How does he feel before the presentation?', answer: 'He feels nervous.' },
      { question: 'How does he feel after speaking?', answer: 'He feels confident.' }
    ]
  },
  {
    title: 'Proposal Opinion',
    story: 'I think this proposal is clear. The goals are realistic and the budget is fair. I recommend approval.',
    burmese_translation: 'ဒီအဆိုတင်ပြချက်က ရှင်းတယ်လို့ ထင်တယ်။ ရည်မှန်းချက်တွေက လက်တွေ့ကျပြီး ဘတ်ဂျက်က သင့်တော်တယ်။ အတည်ပြုဖို့ အကြံပေးတယ်။',
    vocabulary: [
      { word: 'proposal', meaning: 'အဆိုတင်ပြချက်' },
      { word: 'budget', meaning: 'ဘတ်ဂျက်' },
      { word: 'approval', meaning: 'အတည်ပြုချက်' }
    ],
    questions: [
      { question: 'What does he think about the proposal?', answer: 'He thinks it is clear.' },
      { question: 'What does he recommend?', answer: 'He recommends approval.' }
    ]
  }
];

const partySchool: ListeningLesson[] = [
  {
    title: 'Campus Greeting',
    story: 'I meet classmates on campus and say hello. We share our names and plan the day. Everyone is friendly.',
    burmese_translation: 'ကျောင်းဝင်းမှာ အတန်းဖော်တွေကို တွေ့ပြီး မင်္ဂလာပါ ပြောတယ်။ နာမည်တွေ မျှဝေပြီး ဒီနေ့ အစီအစဉ် ချတယ်။ လူတိုင်း မိတ်ဆွေ့ဆန်တယ်။',
    vocabulary: [
      { word: 'campus', meaning: 'ကျောင်းဝင်း' },
      { word: 'classmate', meaning: 'အတန်းဖော်' },
      { word: 'plan', meaning: 'အစီအစဉ်' }
    ],
    questions: [
      { question: 'Where do they meet?', answer: 'They meet on campus.' },
      { question: 'What do they plan?', answer: 'They plan the day.' }
    ]
  },
  {
    title: 'Study Group',
    story: 'My friends meet for a study group. We help each other and share notes. It feels like family.',
    burmese_translation: 'သူငယ်ချင်းတွေ စာလေ့လာအဖွဲ့အတွက် တွေ့ကြတယ်။ အချင်းချင်း ကူညီပြီး မှတ်စုတွေ မျှဝေတယ်။ မိသားစုလို ခံစားရတယ်။',
    vocabulary: [
      { word: 'study group', meaning: 'စာလေ့လာအဖွဲ့' },
      { word: 'notes', meaning: 'မှတ်စု' },
      { word: 'help', meaning: 'ကူညီ' }
    ],
    questions: [
      { question: 'Why do they meet?', answer: 'For a study group.' },
      { question: 'What do they share?', answer: 'They share notes.' }
    ]
  },
  {
    title: 'Morning Class',
    story: 'I wake up early for class. I eat breakfast and pack my bag. I arrive before the bell.',
    burmese_translation: 'အတန်းအတွက် မနက်စောစော နိုးတယ်။ မနက်စာစားပြီး အိတ်ထည့်တယ်။ ခေါင်းလောင်းမတိုင်ခင် ရောက်တယ်။',
    vocabulary: [
      { word: 'class', meaning: 'အတန်း' },
      { word: 'bag', meaning: 'အိတ်' },
      { word: 'bell', meaning: 'ခေါင်းလောင်း' }
    ],
    questions: [
      { question: 'Why does she wake up early?', answer: 'For class.' },
      { question: 'When does she arrive?', answer: 'Before the bell.' }
    ]
  },
  {
    title: 'Cafeteria Lunch',
    story: 'We eat lunch in the cafeteria. I choose rice and soup. We talk and laugh.',
    burmese_translation: 'စားသောက်ဆိုင်မှာ နေ့လယ်စာ စားတယ်။ ထမင်းနဲ့ စုပ် ကို ရွေးတယ်။ ပြောဆိုပြီး ရယ်တယ်။',
    vocabulary: [
      { word: 'cafeteria', meaning: 'စားသောက်ဆိုင်' },
      { word: 'soup', meaning: 'စုပ်' },
      { word: 'laugh', meaning: 'ရယ်' }
    ],
    questions: [
      { question: 'Where do they eat lunch?', answer: 'In the cafeteria.' },
      { question: 'What does she choose?', answer: 'She chooses rice and soup.' }
    ]
  },
  {
    title: 'Party Snacks',
    story: 'We shop for snacks for a small party. We buy juice and chips. The cashier is kind.',
    burmese_translation: 'ပွဲသေးအတွက် မုန့်ဝယ်တယ်။ အရည်နဲ့ chips ဝယ်တယ်။ ငွေကောင်တာက သဘောကောင်းတယ်။',
    vocabulary: [
      { word: 'snacks', meaning: 'မုန့်' },
      { word: 'juice', meaning: 'အရည်' },
      { word: 'cashier', meaning: 'ငွေကောင်တာ' }
    ],
    questions: [
      { question: 'Why do they shop?', answer: 'For snacks for a party.' },
      { question: 'Who is kind?', answer: 'The cashier is kind.' }
    ]
  },
  {
    title: 'Find the Hall',
    story: 'I ask for directions to the school hall. A teacher points to the left. I walk past the library.',
    burmese_translation: 'ကျောင်းဟောလ်ကို လမ်းမေးတယ်။ ဆရာက ဘယ်ဘက်ကို ညွှန်ပြတယ်။ စာကြည့်တိုက်ကို ကျော်ပြီး သွားတယ်။',
    vocabulary: [
      { word: 'hall', meaning: 'ဟောလ်' },
      { word: 'teacher', meaning: 'ဆရာ/ဆရာမ' },
      { word: 'library', meaning: 'စာကြည့်တိုက်' }
    ],
    questions: [
      { question: 'Where does he want to go?', answer: 'To the school hall.' },
      { question: 'What does he pass?', answer: 'He walks past the library.' }
    ]
  },
  {
    title: 'Event Time',
    story: 'The party starts at seven o clock. I set an alarm and get ready. I do not want to be late.',
    burmese_translation: 'ပွဲက ညနေ ခုနစ်နာရီမှာ စတင်တယ်။ နှိုးစက် သတ်မှတ်ပြီး ပြင်ဆင်တယ်။ နောက်ကျ မဖြစ်ချင်ဘူး။',
    vocabulary: [
      { word: 'party', meaning: 'ပွဲ' },
      { word: 'alarm', meaning: 'နှိုးစက်' },
      { word: 'late', meaning: 'နောက်ကျ' }
    ],
    questions: [
      { question: 'What time does the party start?', answer: 'It starts at seven o clock.' },
      { question: 'Why set an alarm?', answer: 'To avoid being late.' }
    ]
  },
  {
    title: 'Rainy Break',
    story: 'It rains so we stay indoors during break. We play a small game in the classroom. The mood is calm.',
    burmese_translation: 'မိုးရွာလို့ အနားချိန်မှာ အိမ်တွင်းမှာ နေတယ်။ classroom ထဲမှာ ပွဲသေးတစ်ခု ကစားတယ်။ အခြေအနေက တိတ်ဆိတ်တယ်။',
    vocabulary: [
      { word: 'indoors', meaning: 'အိမ်တွင်း' },
      { word: 'break', meaning: 'အနားချိန်' },
      { word: 'classroom', meaning: 'စာသင်ခန်း' }
    ],
    questions: [
      { question: 'Where do they stay during break?', answer: 'They stay indoors.' },
      { question: 'Where do they play a game?', answer: 'In the classroom.' }
    ]
  },
  {
    title: 'Music Club',
    story: 'I join the music club after class. We practice songs and share ideas. The club is fun.',
    burmese_translation: 'အတန်းပြီးရင် သီချင်း club ကို ဝင်တယ်။ သီချင်းတွေ လေ့ကျင့်ပြီး အကြံတွေ မျှဝေတယ်။ club က ပျော်စရာကောင်းတယ်။',
    vocabulary: [
      { word: 'club', meaning: 'အဖွဲ့' },
      { word: 'practice', meaning: 'လေ့ကျင့်' },
      { word: 'fun', meaning: 'ပျော်စရာ' }
    ],
    questions: [
      { question: 'When does he join the club?', answer: 'After class.' },
      { question: 'What do they practice?', answer: 'They practice songs.' }
    ]
  },
  {
    title: 'Sports Day',
    story: 'We play basketball in the yard. I drink water and rest after the game. My body feels good.',
    burmese_translation: 'အဝင်းထဲမှာ ဘတ်စကက်ဘော ကစားတယ်။ ကစားပြီးရင် ရေသောက်ပြီး အနားယူတယ်။ ခန္ဓာကိုယ်က ကောင်းတယ်လို့ ခံစားရတယ်။',
    vocabulary: [
      { word: 'basketball', meaning: 'ဘတ်စကက်ဘော' },
      { word: 'yard', meaning: 'အဝင်း' },
      { word: 'body', meaning: 'ခန္ဓာကိုယ်' }
    ],
    questions: [
      { question: 'Where do they play basketball?', answer: 'In the yard.' },
      { question: 'How does he feel after the game?', answer: 'His body feels good.' }
    ]
  },
  {
    title: 'Homework Time',
    story: 'I do homework in the evening. I check the instructions and finish my tasks. I feel proud.',
    burmese_translation: 'ညနေပိုင်းမှာ အလုပ်စာ လုပ်တယ်။ ညွှန်ကြားချက်တွေ စစ်ပြီး လုပ်ငန်းတွေ ပြီးစီးတယ်။ ဂုဏ်ယူတယ်။',
    vocabulary: [
      { word: 'homework', meaning: 'အလုပ်စာ' },
      { word: 'instructions', meaning: 'ညွှန်ကြားချက်' },
      { word: 'tasks', meaning: 'လုပ်ငန်းများ' }
    ],
    questions: [
      { question: 'When does she do homework?', answer: 'In the evening.' },
      { question: 'How does she feel?', answer: 'She feels proud.' }
    ]
  },
  {
    title: 'School Trip',
    story: 'Our class takes a trip to a museum. We travel by bus and take notes. The trip is exciting.',
    burmese_translation: 'အတန်းက မျိုးဝတ်ပြတိုက်ကို ခရီးသွားတယ်။ ဘတ်စ်ကားနဲ့ သွားပြီး မှတ်စုရေးတယ်။ ခရီးက စိတ်လှုပ်ရှားစရာကောင်းတယ်။',
    vocabulary: [
      { word: 'museum', meaning: 'ပြတိုက်' },
      { word: 'bus', meaning: 'ဘတ်စ်ကား' },
      { word: 'notes', meaning: 'မှတ်စု' }
    ],
    questions: [
      { question: 'Where do they go?', answer: 'They go to a museum.' },
      { question: 'How do they travel?', answer: 'They travel by bus.' }
    ]
  },
  {
    title: 'Party Feelings',
    story: 'I feel excited before the party. I meet new friends and smile. The night is happy.',
    burmese_translation: 'ပွဲမတိုင်ခင် စိတ်လှုပ်ရှားတယ်။ မိတ်ဆွေအသစ်တွေ တွေ့ပြီး ပြုံးတယ်။ ညအချိန်က ပျော်တယ်။',
    vocabulary: [
      { word: 'excited', meaning: 'စိတ်လှုပ်ရှား' },
      { word: 'smile', meaning: 'ပြုံး' },
      { word: 'happy', meaning: 'ပျော်' }
    ],
    questions: [
      { question: 'How does she feel before the party?', answer: 'She feels excited.' },
      { question: 'How is the night?', answer: 'The night is happy.' }
    ]
  },
  {
    title: 'Opinion of Event',
    story: 'I think the event is great. The music is good and the people are kind. I want to join again.',
    burmese_translation: 'ဒီပွဲက ကောင်းတယ်လို့ ထင်တယ်။ သီချင်းက ကောင်းပြီး လူတွေက သဘောကောင်းတယ်။ ပြန်ပါဝင်ချင်တယ်။',
    vocabulary: [
      { word: 'event', meaning: 'ပွဲ' },
      { word: 'music', meaning: 'သီချင်း' },
      { word: 'join', meaning: 'ပါဝင်' }
    ],
    questions: [
      { question: 'What does he think about the event?', answer: 'He thinks it is great.' },
      { question: 'What does he want to do again?', answer: 'He wants to join again.' }
    ]
  }
];

const dailyExpanded = expandLessons(daily, TOTAL_DAYS);
const slangExpanded = expandLessons(slang, TOTAL_DAYS);
const businessExpanded = expandLessons(business, TOTAL_DAYS);
const partySchoolExpanded = expandLessons(partySchool, TOTAL_DAYS);

export const listeningLessonsByMode: Record<PracticeMode, ListeningLesson[]> = {
  daily: dailyExpanded,
  slang: slangExpanded,
  business: businessExpanded,
  party_school: partySchoolExpanded
};

export const listeningLessons = listeningLessonsByMode.daily;

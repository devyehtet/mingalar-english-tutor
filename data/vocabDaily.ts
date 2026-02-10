import { DailyVocabSet, PracticeMode } from '../types';

const TOTAL_DAYS = 90;

const expandVocabSets = (base: DailyVocabSet[], totalDays: number): DailyVocabSet[] => {
  if (base.length === 0) return [];
  return Array.from({ length: totalDays }, (_, idx) =>
    base[idx % base.length].map((entry) => ({ ...entry }))
  );
};

const daily: DailyVocabSet[] = [
  [
    {
      word: 'hello',
      phonetic: '/heh-loh/',
      meaning_burmese: 'မင်္ဂလာပါ',
      example: 'Hello, nice to meet you.',
      example_burmese: 'မင်္ဂလာပါ၊ တွေ့ရတာ ဝမ်းသာပါတယ်။'
    },
    {
      word: 'name',
      phonetic: '/neym/',
      meaning_burmese: 'နာမည်',
      example: 'My name is Aye.',
      example_burmese: 'ကျွန်မနာမည် အေး ပါ။'
    },
    {
      word: 'from',
      phonetic: '/frum/',
      meaning_burmese: 'မှ',
      example: 'I am from Yangon.',
      example_burmese: 'ကျွန်တော် ရန်ကုန်ကပါ။'
    },
    {
      word: 'student',
      phonetic: '/stoo-dent/',
      meaning_burmese: 'ကျောင်းသား/ကျောင်းသူ',
      example: 'She is a student.',
      example_burmese: 'သူမက ကျောင်းသူပါ။'
    },
    {
      word: 'friend',
      phonetic: '/frend/',
      meaning_burmese: 'မိတ်ဆွေ',
      example: 'He is my friend.',
      example_burmese: 'သူက ကျွန်တော့်မိတ်ဆွေပါ။'
    }
  ],
  [
    {
      word: 'family',
      phonetic: '/fa-mi-lee/',
      meaning_burmese: 'မိသားစု',
      example: 'I love my family.',
      example_burmese: 'ကျွန်တော် မိသားစုကို ချစ်ပါတယ်။'
    },
    {
      word: 'mother',
      phonetic: '/muh-thur/',
      meaning_burmese: 'အမေ',
      example: 'My mother cooks well.',
      example_burmese: 'အမေက အစားအစာ ကောင်းကောင်းချက်တယ်။'
    },
    {
      word: 'father',
      phonetic: '/fa-ther/',
      meaning_burmese: 'အဖေ',
      example: 'My father is kind.',
      example_burmese: 'အဖေက သဘောကောင်းပါတယ်။'
    },
    {
      word: 'brother',
      phonetic: '/bruh-ther/',
      meaning_burmese: 'အစ်ကို/ညီ',
      example: 'My brother is tall.',
      example_burmese: 'အစ်ကိုက အရပ်ရှည်တယ်။'
    },
    {
      word: 'sister',
      phonetic: '/sis-ter/',
      meaning_burmese: 'ညီမ/အစ်မ',
      example: 'My sister likes music.',
      example_burmese: 'ညီမက သီချင်းကြိုက်တယ်။'
    }
  ],
  [
    {
      word: 'wake',
      phonetic: '/wayk/',
      meaning_burmese: 'နိုးထ',
      example: 'I wake up at six.',
      example_burmese: 'ကျွန်တော် ၆ နာရီမှာ နိုးတယ်။'
    },
    {
      word: 'breakfast',
      phonetic: '/brek-fast/',
      meaning_burmese: 'မနက်စာ',
      example: 'We eat breakfast at seven.',
      example_burmese: 'မနက်စာကို ၇ နာရီမှာ စားတယ်။'
    },
    {
      word: 'go',
      phonetic: '/goh/',
      meaning_burmese: 'သွား',
      example: 'He goes to school.',
      example_burmese: 'သူက ကျောင်းသွားတယ်။'
    },
    {
      word: 'work',
      phonetic: '/wurk/',
      meaning_burmese: 'အလုပ်',
      example: 'She works at an office.',
      example_burmese: 'သူမ ရုံးမှာ အလုပ်လုပ်တယ်။'
    },
    {
      word: 'study',
      phonetic: '/stu-dee/',
      meaning_burmese: 'လေ့လာ',
      example: 'I study English.',
      example_burmese: 'ကျွန်တော် အင်္ဂလိပ်စာ လေ့လာတယ်။'
    }
  ],
  [
    {
      word: 'rice',
      phonetic: '/rais/',
      meaning_burmese: 'ထမင်း',
      example: 'I eat rice every day.',
      example_burmese: 'နေ့တိုင်း ထမင်းစားတယ်။'
    },
    {
      word: 'water',
      phonetic: '/wah-ter/',
      meaning_burmese: 'ရေ',
      example: 'Please drink water.',
      example_burmese: 'ရေ သောက်ပါ။'
    },
    {
      word: 'chicken',
      phonetic: '/chi-ken/',
      meaning_burmese: 'ကြက်သား',
      example: 'She likes chicken soup.',
      example_burmese: 'သူမ ကြက်သားဟင်းချိုကို ကြိုက်တယ်။'
    },
    {
      word: 'tea',
      phonetic: '/tee/',
      meaning_burmese: 'လက်ဖက်ရည်',
      example: 'I drink tea in the morning.',
      example_burmese: 'မနက်မှာ လက်ဖက်ရည် သောက်တယ်။'
    },
    {
      word: 'hungry',
      phonetic: '/hun-gree/',
      meaning_burmese: 'ဗိုက်ဆာ',
      example: 'I am hungry now.',
      example_burmese: 'အခု ဗိုက်ဆာနေတယ်။'
    }
  ],
  [
    {
      word: 'price',
      phonetic: '/prais/',
      meaning_burmese: 'ဈေးနှုန်း',
      example: 'What is the price?',
      example_burmese: 'ဈေးဘယ်လောက်လဲ။'
    },
    {
      word: 'buy',
      phonetic: '/bai/',
      meaning_burmese: 'ဝယ်',
      example: 'I buy a new bag.',
      example_burmese: 'အိတ်အသစ် ဝယ်တယ်။'
    },
    {
      word: 'cheap',
      phonetic: '/cheep/',
      meaning_burmese: 'စျေးပေါ',
      example: 'This is cheap.',
      example_burmese: 'ဒါက စျေးပေါတယ်။'
    },
    {
      word: 'market',
      phonetic: '/mar-kit/',
      meaning_burmese: 'စျေး',
      example: 'We go to the market.',
      example_burmese: 'စျေးသွားကြတယ်။'
    },
    {
      word: 'shop',
      phonetic: '/shop/',
      meaning_burmese: 'ဆိုင်',
      example: 'The shop is small.',
      example_burmese: 'ဆိုင်က သေးသေးလေး။'
    }
  ],
  [
    {
      word: 'left',
      phonetic: '/left/',
      meaning_burmese: 'ဘယ်ဘက်',
      example: 'Turn left at the corner.',
      example_burmese: 'ထောင့်မှာ ဘယ်ဘက်ကွေ့ပါ။'
    },
    {
      word: 'right',
      phonetic: '/rait/',
      meaning_burmese: 'ညာဘက်',
      example: 'The bank is on the right.',
      example_burmese: 'ဘဏ်က ညာဘက်မှာ ပါ။'
    },
    {
      word: 'near',
      phonetic: '/neer/',
      meaning_burmese: 'နီး',
      example: 'My house is near the school.',
      example_burmese: 'အိမ်က ကျောင်းနီးတယ်။'
    },
    {
      word: 'far',
      phonetic: '/far/',
      meaning_burmese: 'ဝေး',
      example: 'The bus stop is far.',
      example_burmese: 'ဘတ်စ်ကားမှတ်တိုင်က ဝေးတယ်။'
    },
    {
      word: 'street',
      phonetic: '/street/',
      meaning_burmese: 'လမ်း',
      example: 'The street is busy.',
      example_burmese: 'လမ်းက လူများတယ်။'
    }
  ],
  [
    {
      word: 'morning',
      phonetic: '/mor-ning/',
      meaning_burmese: 'မနက်',
      example: 'Good morning.',
      example_burmese: 'မနက်ခင်း မင်္ဂလာပါ။'
    },
    {
      word: 'evening',
      phonetic: '/eev-ning/',
      meaning_burmese: 'ညနေ',
      example: 'Good evening.',
      example_burmese: 'ညနေခင်း မင်္ဂလာပါ။'
    },
    {
      word: 'today',
      phonetic: '/to-day/',
      meaning_burmese: 'ဒီနေ့',
      example: 'Today is Monday.',
      example_burmese: 'ဒီနေ့ တနင်္လာနေ့ပါ။'
    },
    {
      word: 'tomorrow',
      phonetic: '/to-mor-row/',
      meaning_burmese: 'မနက်ဖြန်',
      example: 'I will go tomorrow.',
      example_burmese: 'မနက်ဖြန် သွားမယ်။'
    },
    {
      word: 'time',
      phonetic: '/taim/',
      meaning_burmese: 'အချိန်',
      example: 'What time is it?',
      example_burmese: 'ဘယ်အချိန်လဲ။'
    }
  ],
  [
    {
      word: 'hot',
      phonetic: '/hot/',
      meaning_burmese: 'ပူ',
      example: 'It is hot today.',
      example_burmese: 'ဒီနေ့ ပူတယ်။'
    },
    {
      word: 'cold',
      phonetic: '/cold/',
      meaning_burmese: 'အေး',
      example: 'The water is cold.',
      example_burmese: 'ရေက အေးတယ်။'
    },
    {
      word: 'rain',
      phonetic: '/rain/',
      meaning_burmese: 'မိုး',
      example: 'It will rain.',
      example_burmese: 'မိုးရွာမယ်။'
    },
    {
      word: 'sunny',
      phonetic: '/sun-nee/',
      meaning_burmese: 'နေသာ',
      example: 'It is sunny.',
      example_burmese: 'နေသာတယ်။'
    },
    {
      word: 'wind',
      phonetic: '/wind/',
      meaning_burmese: 'လေ',
      example: 'The wind is strong.',
      example_burmese: 'လေတိုက်ပြင်းတယ်။'
    }
  ],
  [
    {
      word: 'hobby',
      phonetic: '/hob-bee/',
      meaning_burmese: 'ဝါသနာ',
      example: 'My hobby is drawing.',
      example_burmese: 'ငါ့ဝါသနာက ပုံဆွဲတာပါ။'
    },
    {
      word: 'music',
      phonetic: '/myoo-zik/',
      meaning_burmese: 'ဂီတ',
      example: 'He likes music.',
      example_burmese: 'သူ ဂီတကြိုက်တယ်။'
    },
    {
      word: 'read',
      phonetic: '/reed/',
      meaning_burmese: 'ဖတ်',
      example: 'I read a book.',
      example_burmese: 'စာအုပ်ဖတ်တယ်။'
    },
    {
      word: 'play',
      phonetic: '/play/',
      meaning_burmese: 'ကစား',
      example: 'We play football.',
      example_burmese: 'ဘောလုံးကစားတယ်။'
    },
    {
      word: 'travel',
      phonetic: '/tra-vel/',
      meaning_burmese: 'ခရီးသွား',
      example: 'They travel by bus.',
      example_burmese: 'ဘတ်စ်ကားနဲ့ ခရီးသွားတယ်။'
    }
  ],
  [
    {
      word: 'healthy',
      phonetic: '/hel-thee/',
      meaning_burmese: 'ကျန်းမာ',
      example: 'She is healthy.',
      example_burmese: 'သူမ ကျန်းမာပါတယ်။'
    },
    {
      word: 'sick',
      phonetic: '/sik/',
      meaning_burmese: 'နေမကောင်း',
      example: 'I feel sick.',
      example_burmese: 'နေမကောင်းဘူး။'
    },
    {
      word: 'headache',
      phonetic: '/hed-ake/',
      meaning_burmese: 'ခေါင်းကိုက်',
      example: 'He has a headache.',
      example_burmese: 'သူ ခေါင်းကိုက်နေတယ်။'
    },
    {
      word: 'medicine',
      phonetic: '/med-uh-sin/',
      meaning_burmese: 'ဆေး',
      example: 'Take your medicine.',
      example_burmese: 'ဆေးသောက်ပါ။'
    },
    {
      word: 'rest',
      phonetic: '/rest/',
      meaning_burmese: 'အနားယူ',
      example: 'You should rest.',
      example_burmese: 'နားယူသင့်တယ်။'
    }
  ],
  [
    {
      word: 'work',
      phonetic: '/wurk/',
      meaning_burmese: 'အလုပ်',
      example: 'He works in an office.',
      example_burmese: 'သူ ရုံးမှာ အလုပ်လုပ်တယ်။'
    },
    {
      word: 'office',
      phonetic: '/of-fis/',
      meaning_burmese: 'ရုံး',
      example: 'The office is quiet.',
      example_burmese: 'ရုံးမှာ တိတ်ဆိတ်တယ်။'
    },
    {
      word: 'teacher',
      phonetic: '/tee-cher/',
      meaning_burmese: 'ဆရာ/ဆရာမ',
      example: 'The teacher is kind.',
      example_burmese: 'ဆရာမက သဘောကောင်းတယ်။'
    },
    {
      word: 'class',
      phonetic: '/klas/',
      meaning_burmese: 'အတန်း',
      example: 'Class starts at nine.',
      example_burmese: 'အတန်း ၉ နာရီမှာ စတယ်။'
    },
    {
      word: 'exam',
      phonetic: '/eg-zam/',
      meaning_burmese: 'စာမေးပွဲ',
      example: 'We have an exam.',
      example_burmese: 'စာမေးပွဲရှိတယ်။'
    }
  ],
  [
    {
      word: 'ticket',
      phonetic: '/tik-et/',
      meaning_burmese: 'လက်မှတ်',
      example: 'I buy a bus ticket.',
      example_burmese: 'ဘတ်စ်ကားလက်မှတ် ဝယ်တယ်။'
    },
    {
      word: 'bus',
      phonetic: '/bus/',
      meaning_burmese: 'ဘတ်စ်ကား',
      example: 'The bus is full.',
      example_burmese: 'ဘတ်စ်ကား လူပြည့်တယ်။'
    },
    {
      word: 'train',
      phonetic: '/train/',
      meaning_burmese: 'ရထား',
      example: 'We go by train.',
      example_burmese: 'ရထားနဲ့ သွားတယ်။'
    },
    {
      word: 'hotel',
      phonetic: '/ho-tel/',
      meaning_burmese: 'ဟိုတယ်',
      example: 'The hotel is clean.',
      example_burmese: 'ဟိုတယ် သန့်ရှင်းတယ်။'
    },
    {
      word: 'map',
      phonetic: '/map/',
      meaning_burmese: 'မြေပုံ',
      example: 'Check the map.',
      example_burmese: 'မြေပုံကြည့်ပါ။'
    }
  ],
  [
    {
      word: 'happy',
      phonetic: '/ha-pee/',
      meaning_burmese: 'ပျော်',
      example: 'I am happy today.',
      example_burmese: 'ဒီနေ့ ပျော်တယ်။'
    },
    {
      word: 'sad',
      phonetic: '/sad/',
      meaning_burmese: 'ဝမ်းနည်း',
      example: 'She feels sad.',
      example_burmese: 'သူမ ဝမ်းနည်းနေတယ်။'
    },
    {
      word: 'angry',
      phonetic: '/ang-gree/',
      meaning_burmese: 'စိတ်ဆိုး',
      example: 'He is angry.',
      example_burmese: 'သူ စိတ်ဆိုးနေတယ်။'
    },
    {
      word: 'tired',
      phonetic: '/tie-erd/',
      meaning_burmese: 'ပင်ပန်း',
      example: 'I am tired now.',
      example_burmese: 'အခု ပင်ပန်းတယ်။'
    },
    {
      word: 'calm',
      phonetic: '/kalm/',
      meaning_burmese: 'အေးဆေး',
      example: 'She is calm.',
      example_burmese: 'သူမ အေးဆေးတယ်။'
    }
  ],
  [
    {
      word: 'like',
      phonetic: '/laik/',
      meaning_burmese: 'ကြိုက်',
      example: 'I like this book.',
      example_burmese: 'ဒီစာအုပ်ကို ကြိုက်တယ်။'
    },
    {
      word: 'dislike',
      phonetic: '/dis-laik/',
      meaning_burmese: 'မကြိုက်',
      example: 'I dislike loud music.',
      example_burmese: 'သံကြီးဂီတ မကြိုက်ဘူး။'
    },
    {
      word: 'think',
      phonetic: '/think/',
      meaning_burmese: 'ထင်',
      example: 'I think it is good.',
      example_burmese: 'ကောင်းတယ်လို့ ထင်တယ်။'
    },
    {
      word: 'good',
      phonetic: '/good/',
      meaning_burmese: 'ကောင်း',
      example: 'This is good.',
      example_burmese: 'ဒါက ကောင်းတယ်။'
    },
    {
      word: 'bad',
      phonetic: '/bad/',
      meaning_burmese: 'မကောင်း',
      example: 'This is bad.',
      example_burmese: 'ဒါက မကောင်းဘူး။'
    }
  ]
];

const slang: DailyVocabSet[] = [
  [
    {
      word: 'yo',
      phonetic: '/yo/',
      meaning_burmese: 'နီးစပ်နှုတ်ဆက်ချက်',
      example: 'Yo, good to see you.',
      example_burmese: 'ယို၊ တွေ့ရတာ ဝမ်းသာပါတယ်။'
    },
    {
      word: 'wassup',
      phonetic: '/wuh-sup/',
      meaning_burmese: 'ဘာဖြစ်နေလဲ',
      example: 'Wassup, fam?',
      example_burmese: 'ဘာဖြစ်နေလဲ မိတ်?'
    },
    {
      word: 'fam',
      phonetic: '/fam/',
      meaning_burmese: 'နီးစပ်သူ',
      example: 'You are my fam.',
      example_burmese: 'မင်းက ငါ့ fam ပါ။'
    },
    {
      word: 'homie',
      phonetic: '/ho-mee/',
      meaning_burmese: 'နီးစပ်မိတ်ဆွေ',
      example: 'That is my homie.',
      example_burmese: 'အဲဒါ ငါ့ homie ပါ။'
    },
    {
      word: 'my bad',
      phonetic: '/my bad/',
      meaning_burmese: 'တောင်းပန်ပါတယ်',
      example: 'My bad, I am late.',
      example_burmese: 'တောင်းပန်ပါတယ်၊ နောက်ကျသွားတယ်။'
    }
  ],
  [
    {
      word: 'crew',
      phonetic: '/kroo/',
      meaning_burmese: 'အဖွဲ့',
      example: 'My crew is small but strong.',
      example_burmese: 'ငါ့ crew က နည်းပေမယ့် ခိုင်မာတယ်။'
    },
    {
      word: 'squad',
      phonetic: '/skwad/',
      meaning_burmese: 'သူငယ်ချင်းအဖွဲ့',
      example: 'The squad is here.',
      example_burmese: 'squad ရောက်လာပြီ။'
    },
    {
      word: 'real one',
      phonetic: '/reel one/',
      meaning_burmese: 'ယုံကြည်ရသူ',
      example: 'She is a real one.',
      example_burmese: 'သူမက real one ပါ။'
    },
    {
      word: 'tight',
      phonetic: '/tite/',
      meaning_burmese: 'နီးစပ်',
      example: 'We are tight friends.',
      example_burmese: 'ကျွန်တော်တို့ နီးစပ်တဲ့ မိတ်ဆွေတွေပါ။'
    },
    {
      word: 'ride',
      phonetic: '/ride/',
      meaning_burmese: 'အတူသွား',
      example: 'We ride together.',
      example_burmese: 'ကျွန်တော်တို့ အတူတူ သွားကြတယ်။'
    }
  ],
  [
    {
      word: 'grind',
      phonetic: '/grind/',
      meaning_burmese: 'ကြိုးစားမှု',
      example: 'I grind every day.',
      example_burmese: 'နေ့တိုင်း ကြိုးစားတယ်။'
    },
    {
      word: 'hustle',
      phonetic: '/hus-sul/',
      meaning_burmese: 'ခက်ခဲလည်း ကြိုးစားလုပ်',
      example: 'We hustle for a better life.',
      example_burmese: 'ဘဝကောင်းဖို့ ကြိုးစားတယ်။'
    },
    {
      word: 'bag',
      phonetic: '/bag/',
      meaning_burmese: 'ပိုက်ဆံ (slang)',
      example: 'I need the bag.',
      example_burmese: 'ပိုက်ဆံလိုတယ်။'
    },
    {
      word: 'clock in',
      phonetic: '/clock in/',
      meaning_burmese: 'အလုပ်စတင်',
      example: 'I clock in at nine.',
      example_burmese: '၉ နာရီမှာ အလုပ်စတင်တယ်။'
    },
    {
      word: 'bounce',
      phonetic: '/bounce/',
      meaning_burmese: 'ထွက်သွား',
      example: 'I will bounce after work.',
      example_burmese: 'အလုပ်ပြီးရင် ထွက်သွားမယ်။'
    }
  ],
  [
    {
      word: 'bodega',
      phonetic: '/bo-day-ga/',
      meaning_burmese: 'အနီးကပ်ဆိုင်',
      example: 'I hit the bodega for a snack.',
      example_burmese: 'အနီးကပ်ဆိုင်မှာ မုန့်ဝယ်တယ်။'
    },
    {
      word: 'chop',
      phonetic: '/chop/',
      meaning_burmese: 'အစားအစာ',
      example: 'This chop is good.',
      example_burmese: 'ဒီအစားအစာက ကောင်းတယ်။'
    },
    {
      word: 'snack',
      phonetic: '/snack/',
      meaning_burmese: 'အဆာစား',
      example: 'I want a snack.',
      example_burmese: 'အဆာစားချင်တယ်။'
    },
    {
      word: 'mad hungry',
      phonetic: '/mad hungry/',
      meaning_burmese: 'အရမ်းဗိုက်ဆာ',
      example: 'I am mad hungry.',
      example_burmese: 'အရမ်းဗိုက်ဆာနေတယ်။'
    },
    {
      word: 'on the go',
      phonetic: '/on the go/',
      meaning_burmese: 'အမြန်သွားလာ',
      example: 'I eat on the go.',
      example_burmese: 'အမြန်သွားလာနေတဲ့အချိန် စားတယ်။'
    }
  ],
  [
    {
      word: 'drip',
      phonetic: '/drip/',
      meaning_burmese: 'အဝတ်အစားအလှ',
      example: 'Your drip is clean.',
      example_burmese: 'မင်းအဝတ်အစားအလှက ကောင်းတယ်။'
    },
    {
      word: 'fit',
      phonetic: '/fit/',
      meaning_burmese: 'ဝတ်စုံ',
      example: 'This fit is fire.',
      example_burmese: 'ဒီဝတ်စုံက မိုက်တယ်။'
    },
    {
      word: 'cop',
      phonetic: '/cop/',
      meaning_burmese: 'ဝယ်',
      example: 'I will cop new sneakers.',
      example_burmese: 'ဘိနပ်အသစ် ဝယ်မယ်။'
    },
    {
      word: 'flex',
      phonetic: '/flex/',
      meaning_burmese: 'ဂုဏ်ပြ',
      example: 'Do not flex too hard.',
      example_burmese: 'အရမ်းမဖျော်ပြပါနဲ့။'
    },
    {
      word: 'clean',
      phonetic: '/clean/',
      meaning_burmese: 'လှတယ်',
      example: 'Those shoes are clean.',
      example_burmese: 'အဲဒီဘိနပ်တွေ လှတယ်။'
    }
  ],
  [
    {
      word: 'uptown',
      phonetic: '/up-town/',
      meaning_burmese: 'မြို့အပေါ်ပိုင်း',
      example: 'He lives uptown.',
      example_burmese: 'သူ မြို့အပေါ်ပိုင်းမှာ နေတယ်။'
    },
    {
      word: 'downtown',
      phonetic: '/down-town/',
      meaning_burmese: 'မြို့အောက်ပိုင်း',
      example: 'We go downtown.',
      example_burmese: 'မြို့အောက်ပိုင်းသွားမယ်။'
    },
    {
      word: 'block',
      phonetic: '/block/',
      meaning_burmese: 'လမ်းပိုင်း',
      example: 'The store is on my block.',
      example_burmese: 'ဆိုင်က ငါ့ block မှာပဲ။'
    },
    {
      word: 'corner',
      phonetic: '/kor-ner/',
      meaning_burmese: 'လမ်းထောင့်',
      example: 'Meet me at the corner.',
      example_burmese: 'လမ်းထောင့်မှာ တွေ့မယ်။'
    },
    {
      word: 'pull up',
      phonetic: '/pull up/',
      meaning_burmese: 'ရောက်လာ',
      example: 'Pull up at six.',
      example_burmese: 'ခြောက်နာရီမှာ ရောက်လာပါ။'
    }
  ],
  [
    {
      word: 'on time',
      phonetic: '/on time/',
      meaning_burmese: 'အချိန်မှန်',
      example: 'Be on time.',
      example_burmese: 'အချိန်မှန်လာပါ။'
    },
    {
      word: 'late',
      phonetic: '/late/',
      meaning_burmese: 'နောက်ကျ',
      example: 'Do not be late.',
      example_burmese: 'နောက်ကျမလာပါနဲ့။'
    },
    {
      word: 'link',
      phonetic: '/link/',
      meaning_burmese: 'တွေ့ဆုံ',
      example: 'We link at seven.',
      example_burmese: 'ခုနှစ်နာရီမှာ တွေ့မယ်။'
    },
    {
      word: 'slide',
      phonetic: '/slide/',
      meaning_burmese: 'တိတ်တိတ်လေး သွား',
      example: 'I will slide after class.',
      example_burmese: 'အတန်းပြီးရင် သွားမယ်။'
    },
    {
      word: 'in a minute',
      phonetic: '/in a minute/',
      meaning_burmese: 'ခဏအတွင်း',
      example: 'I will come in a minute.',
      example_burmese: 'ခဏအတွင်း လာမယ်။'
    }
  ],
  [
    {
      word: 'brick',
      phonetic: '/brick/',
      meaning_burmese: 'အရမ်းအေး',
      example: 'It is brick today.',
      example_burmese: 'ဒီနေ့ အရမ်းအေးတယ်။'
    },
    {
      word: 'heat',
      phonetic: '/heat/',
      meaning_burmese: 'အပူ',
      example: 'The heat is wild.',
      example_burmese: 'အပူက ပြင်းတယ်။'
    },
    {
      word: 'sunny',
      phonetic: '/sun-nee/',
      meaning_burmese: 'နေသာ',
      example: 'It is sunny.',
      example_burmese: 'နေသာတယ်။'
    },
    {
      word: 'rainy',
      phonetic: '/ray-nee/',
      meaning_burmese: 'မိုးရွာ',
      example: 'It is rainy.',
      example_burmese: 'မိုးရွာတယ်။'
    },
    {
      word: 'chill',
      phonetic: '/chill/',
      meaning_burmese: 'အေးဆေး',
      example: 'The weather is chill.',
      example_burmese: 'ရာသီဥတု အေးဆေးတယ်။'
    }
  ],
  [
    {
      word: 'vibe',
      phonetic: '/vibe/',
      meaning_burmese: 'စိတ်ခံစားမှု',
      example: 'This song has a good vibe.',
      example_burmese: 'ဒီသီချင်း vibe က ကောင်းတယ်။'
    },
    {
      word: 'chill',
      phonetic: '/chill/',
      meaning_burmese: 'အေးဆေးနား',
      example: 'I chill after work.',
      example_burmese: 'အလုပ်ပြီးရင် အေးဆေးနားတယ်။'
    },
    {
      word: 'jam',
      phonetic: '/jam/',
      meaning_burmese: 'ဂီတနဲ့ ပျော်',
      example: 'We jam to music.',
      example_burmese: 'သီချင်းနဲ့ ပျော်ကြတယ်။'
    },
    {
      word: 'freestyle',
      phonetic: '/free-style/',
      meaning_burmese: 'ဖရီးစတိုင်',
      example: 'He can freestyle well.',
      example_burmese: 'သူ freestyle ကောင်းတယ်။'
    },
    {
      word: 'studio',
      phonetic: '/stu-dee-oh/',
      meaning_burmese: 'စတူဒီယို',
      example: 'We go to the studio.',
      example_burmese: 'စတူဒီယို သွားကြတယ်။'
    }
  ],
  [
    {
      word: 'sick',
      phonetic: '/sik/',
      meaning_burmese: 'နေမကောင်း',
      example: 'I feel sick.',
      example_burmese: 'နေမကောင်းဘူး။'
    },
    {
      word: 'tired',
      phonetic: '/tie-erd/',
      meaning_burmese: 'ပင်ပန်း',
      example: 'I am tired today.',
      example_burmese: 'ဒီနေ့ ပင်ပန်းတယ်။'
    },
    {
      word: 'burnt',
      phonetic: '/bernt/',
      meaning_burmese: 'အရမ်းပင်ပန်း',
      example: 'I am burnt.',
      example_burmese: 'အရမ်းပင်ပန်းတယ်။'
    },
    {
      word: 'energy',
      phonetic: '/en-er-jee/',
      meaning_burmese: 'စွမ်းအား',
      example: 'I need more energy.',
      example_burmese: 'စွမ်းအားပိုလိုတယ်။'
    },
    {
      word: 'bounce back',
      phonetic: '/bounce back/',
      meaning_burmese: 'ပြန်ကောင်းလာ',
      example: 'I will bounce back soon.',
      example_burmese: 'မကြာခင် ပြန်ကောင်းလာမယ်။'
    }
  ],
  [
    {
      word: 'focus',
      phonetic: '/fo-kus/',
      meaning_burmese: 'အာရုံစိုက်',
      example: 'I need to focus.',
      example_burmese: 'အာရုံစိုက်ဖို့လိုတယ်။'
    },
    {
      word: 'deadline',
      phonetic: '/dead-line/',
      meaning_burmese: 'နောက်ဆုံးရက်',
      example: 'The deadline is tomorrow.',
      example_burmese: 'နောက်ဆုံးရက် မနက်ဖြန်ပါ။'
    },
    {
      word: 'level up',
      phonetic: '/level up/',
      meaning_burmese: 'အဆင့်မြှင့်',
      example: 'I want to level up.',
      example_burmese: 'အဆင့်မြှင့်ချင်တယ်။'
    },
    {
      word: 'boss up',
      phonetic: '/boss up/',
      meaning_burmese: 'ကိုယ့်ကို မြှင့်တင်',
      example: 'Time to boss up.',
      example_burmese: 'boss up လုပ်ချိန်ပဲ။'
    },
    {
      word: 'grind',
      phonetic: '/grind/',
      meaning_burmese: 'ကြိုးစားမှု',
      example: 'Keep the grind going.',
      example_burmese: 'ကြိုးစားမှုကို ဆက်လုပ်ပါ။'
    }
  ],
  [
    {
      word: 'subway',
      phonetic: '/sub-way/',
      meaning_burmese: 'မြေအောက်ရထား',
      example: 'We take the subway.',
      example_burmese: 'မြေအောက်ရထားစီးတယ်။'
    },
    {
      word: 'train',
      phonetic: '/train/',
      meaning_burmese: 'ရထား',
      example: 'The train is fast.',
      example_burmese: 'ရထားမြန်တယ်။'
    },
    {
      word: 'fare',
      phonetic: '/fair/',
      meaning_burmese: 'လက်မှတ်ခ',
      example: 'I pay the fare.',
      example_burmese: 'လက်မှတ်ခ ပေးတယ်။'
    },
    {
      word: 'ride',
      phonetic: '/ride/',
      meaning_burmese: 'စီးနင်းမှု',
      example: 'It is a long ride.',
      example_burmese: 'ခရီးရှည်တယ်။'
    },
    {
      word: 'map',
      phonetic: '/map/',
      meaning_burmese: 'မြေပုံ',
      example: 'Check the map.',
      example_burmese: 'မြေပုံကြည့်ပါ။'
    }
  ],
  [
    {
      word: 'hyped',
      phonetic: '/hyped/',
      meaning_burmese: 'စိတ်လှုပ်ရှား',
      example: 'I am hyped today.',
      example_burmese: 'ဒီနေ့ စိတ်လှုပ်ရှားတယ်။'
    },
    {
      word: 'salty',
      phonetic: '/sal-tee/',
      meaning_burmese: 'စိတ်မကောင်း',
      example: 'He is salty.',
      example_burmese: 'သူ စိတ်မကောင်းနေတယ်။'
    },
    {
      word: 'mad',
      phonetic: '/mad/',
      meaning_burmese: 'အရမ်း',
      example: 'That is mad good.',
      example_burmese: 'အဲဒါ အရမ်းကောင်းတယ်။'
    },
    {
      word: 'low key',
      phonetic: '/low key/',
      meaning_burmese: 'တိတ်တိတ်လေး',
      example: 'I am low key tired.',
      example_burmese: 'တိတ်တိတ်လေး ပင်ပန်းနေတယ်။'
    },
    {
      word: 'high key',
      phonetic: '/high key/',
      meaning_burmese: 'အပြည့်အဝ',
      example: 'I am high key happy.',
      example_burmese: 'အပြည့်အဝ ပျော်နေတယ်။'
    }
  ],
  [
    {
      word: 'dope',
      phonetic: '/dope/',
      meaning_burmese: 'အရမ်းကောင်း',
      example: 'That song is dope.',
      example_burmese: 'ဒီသီချင်းက အရမ်းကောင်းတယ်။'
    },
    {
      word: 'fire',
      phonetic: '/fire/',
      meaning_burmese: 'အရမ်းမိုက်',
      example: 'This beat is fire.',
      example_burmese: 'ဒီ beat က မိုက်တယ်။'
    },
    {
      word: 'wack',
      phonetic: '/wack/',
      meaning_burmese: 'မကောင်း',
      example: 'That movie is wack.',
      example_burmese: 'ဒီရုပ်ရှင် မကောင်းဘူး။'
    },
    {
      word: 'facts',
      phonetic: '/facts/',
      meaning_burmese: 'မှန်ပါတယ်',
      example: 'Facts, that is true.',
      example_burmese: 'မှန်ပါတယ်၊ အဲဒါမှန်တယ်။'
    },
    {
      word: 'cap',
      phonetic: '/cap/',
      meaning_burmese: 'မဟုတ်တာ',
      example: 'That is cap.',
      example_burmese: 'အဲဒါ မဟုတ်တာပဲ။'
    }
  ]
];

const business: DailyVocabSet[] = [
  [
    {
      word: 'meeting',
      phonetic: '/meet-ing/',
      meaning_burmese: 'အစည်းအဝေး',
      example: 'We have a meeting today.',
      example_burmese: 'ဒီနေ့ အစည်းအဝေး ရှိပါတယ်။'
    },
    {
      word: 'agenda',
      phonetic: '/a-jen-da/',
      meaning_burmese: 'အစီအစဉ်စာရင်း',
      example: 'Please share the agenda.',
      example_burmese: 'အစီအစဉ်စာရင်း မျှဝေပါ။'
    },
    {
      word: 'schedule',
      phonetic: '/shed-yool/',
      meaning_burmese: 'အချိန်ဇယား',
      example: 'The schedule is tight.',
      example_burmese: 'အချိန်ဇယား တိတိကျကျပါ။'
    },
    {
      word: 'minute',
      phonetic: '/min-it/',
      meaning_burmese: 'အစည်းအဝေးမှတ်တမ်း',
      example: 'Please send the minutes.',
      example_burmese: 'မှတ်တမ်းကို ပို့ပေးပါ။'
    },
    {
      word: 'follow up',
      phonetic: '/fol-low up/',
      meaning_burmese: 'နောက်ဆက်တွဲလုပ်ဆောင်',
      example: 'I will follow up tomorrow.',
      example_burmese: 'မနက်ဖြန် နောက်ဆက်တွဲလုပ်မယ်။'
    }
  ],
  [
    {
      word: 'email',
      phonetic: '/ee-mail/',
      meaning_burmese: 'အီးမေးလ်',
      example: 'Please check your email.',
      example_burmese: 'အီးမေးလ်ကို စစ်ပါ။'
    },
    {
      word: 'reply',
      phonetic: '/re-ply/',
      meaning_burmese: 'ပြန်ကြား',
      example: 'I will reply soon.',
      example_burmese: 'မကြာခင် ပြန်ကြားမယ်။'
    },
    {
      word: 'attach',
      phonetic: '/at-tach/',
      meaning_burmese: 'ပူးတွဲ',
      example: 'I attach the file.',
      example_burmese: 'ဖိုင်ကို ပူးတွဲထားပါတယ်။'
    },
    {
      word: 'subject',
      phonetic: '/sub-ject/',
      meaning_burmese: 'ခေါင်းစဉ်',
      example: 'Use a clear subject.',
      example_burmese: 'ခေါင်းစဉ်ကို ရှင်းလင်းစွာ သုံးပါ။'
    },
    {
      word: 'confirm',
      phonetic: '/con-firm/',
      meaning_burmese: 'အတည်ပြု',
      example: 'Please confirm the time.',
      example_burmese: 'အချိန်ကို အတည်ပြုပါ။'
    }
  ],
  [
    {
      word: 'proposal',
      phonetic: '/pro-po-sal/',
      meaning_burmese: 'တင်ပြစာ',
      example: 'We sent a proposal.',
      example_burmese: 'တင်ပြစာ ပို့ထားပါတယ်။'
    },
    {
      word: 'budget',
      phonetic: '/bud-get/',
      meaning_burmese: 'ဘတ်ဂျက်',
      example: 'The budget is limited.',
      example_burmese: 'ဘတ်ဂျက် အကန့်အသတ်ရှိတယ်။'
    },
    {
      word: 'quote',
      phonetic: '/kwoat/',
      meaning_burmese: 'စျေးနှုန်းပြန်စာ',
      example: 'Please send a quote.',
      example_burmese: 'စျေးနှုန်းပြန်စာ ပို့ပါ။'
    },
    {
      word: 'invoice',
      phonetic: '/in-voice/',
      meaning_burmese: 'ဘေလ်',
      example: 'We received the invoice.',
      example_burmese: 'ဘေလ် ရရှိပါတယ်။'
    },
    {
      word: 'payment',
      phonetic: '/pay-ment/',
      meaning_burmese: 'ငွေပေးချေမှု',
      example: 'Payment is due next week.',
      example_burmese: 'နောက်အပတ် ငွေပေးချေရပါမယ်။'
    }
  ],
  [
    {
      word: 'deadline',
      phonetic: '/dead-line/',
      meaning_burmese: 'နောက်ဆုံးရက်',
      example: 'The deadline is Friday.',
      example_burmese: 'နောက်ဆုံးရက်က သောကြာနေ့ပါ။'
    },
    {
      word: 'deliverable',
      phonetic: '/de-liv-er-a-ble/',
      meaning_burmese: 'တင်ပို့ရမည့်အရာ',
      example: 'The deliverable is a report.',
      example_burmese: 'တင်ပို့ရမည့်အရာက အစီရင်ခံစာပါ။'
    },
    {
      word: 'milestone',
      phonetic: '/mile-stone/',
      meaning_burmese: 'အဆင့်အထိမ်းအမှတ်',
      example: 'We reached a milestone.',
      example_burmese: 'အဆင့်တစ်ခု ရောက်ပြီ။'
    },
    {
      word: 'risk',
      phonetic: '/risk/',
      meaning_burmese: 'အန္တရာယ်',
      example: 'There is a risk here.',
      example_burmese: 'ဒီမှာ အန္တရာယ်ရှိတယ်။'
    },
    {
      word: 'update',
      phonetic: '/up-date/',
      meaning_burmese: 'အပ်ဒိတ်',
      example: 'Please give an update.',
      example_burmese: 'အပ်ဒိတ် ပြောပေးပါ။'
    }
  ],
  [
    {
      word: 'client',
      phonetic: '/cli-ent/',
      meaning_burmese: 'ဖောက်သည်',
      example: 'The client approved it.',
      example_burmese: 'ဖောက်သည်က အတည်ပြုပါတယ်။'
    },
    {
      word: 'stakeholder',
      phonetic: '/stake-hol-der/',
      meaning_burmese: 'စိတ်ဝင်စားသူအုပ်စု',
      example: 'We met the stakeholders.',
      example_burmese: 'စိတ်ဝင်စားသူတွေကို တွေ့ခဲ့တယ်။'
    },
    {
      word: 'feedback',
      phonetic: '/feed-back/',
      meaning_burmese: 'ပြန်လည်တုံ့ပြန်ချက်',
      example: 'Thanks for the feedback.',
      example_burmese: 'ပြန်လည်တုံ့ပြန်ချက်အတွက် ကျေးဇူးတင်ပါတယ်။'
    },
    {
      word: 'revision',
      phonetic: '/re-vi-zhun/',
      meaning_burmese: 'ပြင်ဆင်မှု',
      example: 'We need a revision.',
      example_burmese: 'ပြင်ဆင်မှု လိုပါတယ်။'
    },
    {
      word: 'approve',
      phonetic: '/ap-proov/',
      meaning_burmese: 'အတည်ပြု',
      example: 'Please approve the plan.',
      example_burmese: 'အစီအစဉ်ကို အတည်ပြုပါ။'
    }
  ],
  [
    {
      word: 'report',
      phonetic: '/re-port/',
      meaning_burmese: 'အစီရင်ခံစာ',
      example: 'I sent the report.',
      example_burmese: 'အစီရင်ခံစာ ပို့ထားပါတယ်။'
    },
    {
      word: 'summary',
      phonetic: '/sum-ma-ree/',
      meaning_burmese: 'အကျဉ်းချုပ်',
      example: 'Here is a summary.',
      example_burmese: 'ဒီမှာ အကျဉ်းချုပ်ပါ။'
    },
    {
      word: 'action item',
      phonetic: '/ac-tion i-tem/',
      meaning_burmese: 'လုပ်ဆောင်ရမည့်အချက်',
      example: 'We have two action items.',
      example_burmese: 'လုပ်ဆောင်ရမည့် အချက် ၂ ခုရှိပါတယ်။'
    },
    {
      word: 'priority',
      phonetic: '/pri-or-i-ty/',
      meaning_burmese: 'ဦးစားပေး',
      example: 'This is a priority.',
      example_burmese: 'ဒါက ဦးစားပေးပါ။'
    },
    {
      word: 'resource',
      phonetic: '/re-source/',
      meaning_burmese: 'အရင်းအမြစ်',
      example: 'We need more resources.',
      example_burmese: 'အရင်းအမြစ် ပိုလိုတယ်။'
    }
  ],
  [
    {
      word: 'call',
      phonetic: '/call/',
      meaning_burmese: 'ဖုန်းခေါ်',
      example: 'Can we have a call?',
      example_burmese: 'ဖုန်းခေါ်နိုင်မလား။'
    },
    {
      word: 'conference',
      phonetic: '/con-fer-ence/',
      meaning_burmese: 'ညီလာခံ',
      example: 'The conference is next week.',
      example_burmese: 'ညီလာခံက နောက်အပတ်ပါ။'
    },
    {
      word: 'presentation',
      phonetic: '/pre-zen-ta-tion/',
      meaning_burmese: 'တင်ပြမှု',
      example: 'I will give a presentation.',
      example_burmese: 'တင်ပြမှု လုပ်မယ်။'
    },
    {
      word: 'slide',
      phonetic: '/slide/',
      meaning_burmese: 'စလိုက်',
      example: 'The slide is clear.',
      example_burmese: 'စလိုက်က ရှင်းလင်းတယ်။'
    },
    {
      word: 'note',
      phonetic: '/note/',
      meaning_burmese: 'မှတ်ချက်',
      example: 'Please note this.',
      example_burmese: 'ဒီအချက်ကို မှတ်ထားပါ။'
    }
  ],
  [
    {
      word: 'team',
      phonetic: '/team/',
      meaning_burmese: 'အဖွဲ့',
      example: 'The team is ready.',
      example_burmese: 'အဖွဲ့ အဆင်သင့်ပါ။'
    },
    {
      word: 'role',
      phonetic: '/role/',
      meaning_burmese: 'တာဝန်',
      example: 'My role is design.',
      example_burmese: 'ကျွန်တော့်တာဝန်က ဒီဇိုင်းပါ။'
    },
    {
      word: 'task',
      phonetic: '/task/',
      meaning_burmese: 'လုပ်ငန်း',
      example: 'This task is simple.',
      example_burmese: 'ဒီလုပ်ငန်းက လွယ်ကူပါတယ်။'
    },
    {
      word: 'progress',
      phonetic: '/prog-ress/',
      meaning_burmese: 'တိုးတက်မှု',
      example: 'Progress is good.',
      example_burmese: 'တိုးတက်မှုက ကောင်းပါတယ်။'
    },
    {
      word: 'blocker',
      phonetic: '/block-er/',
      meaning_burmese: 'တားဆီးချက်',
      example: 'We have no blockers.',
      example_burmese: 'တားဆီးချက် မရှိပါ။'
    }
  ],
  [
    {
      word: 'contract',
      phonetic: '/con-tract/',
      meaning_burmese: 'စာချုပ်',
      example: 'The contract is signed.',
      example_burmese: 'စာချုပ် လက်မှတ်ထိုးပြီးပါပြီ။'
    },
    {
      word: 'policy',
      phonetic: '/pol-i-see/',
      meaning_burmese: 'မူဝါဒ',
      example: 'Please follow the policy.',
      example_burmese: 'မူဝါဒကို လိုက်နာပါ။'
    },
    {
      word: 'compliance',
      phonetic: '/com-pli-ance/',
      meaning_burmese: 'လိုက်နာမှု',
      example: 'Compliance is required.',
      example_burmese: 'လိုက်နာမှု လိုအပ်ပါတယ်။'
    },
    {
      word: 'review',
      phonetic: '/re-view/',
      meaning_burmese: 'ပြန်လည်သုံးသပ်',
      example: 'We will review it.',
      example_burmese: 'ပြန်လည်သုံးသပ်မယ်။'
    },
    {
      word: 'approve',
      phonetic: '/ap-proov/',
      meaning_burmese: 'အတည်ပြု',
      example: 'Please approve this.',
      example_burmese: 'ဒါကို အတည်ပြုပါ။'
    }
  ],
  [
    {
      word: 'growth',
      phonetic: '/groth/',
      meaning_burmese: 'တိုးတက်မှု',
      example: 'We want growth.',
      example_burmese: 'တိုးတက်မှု လိုချင်တယ်။'
    },
    {
      word: 'goal',
      phonetic: '/goal/',
      meaning_burmese: 'ရည်မှန်းချက်',
      example: 'Our goal is clear.',
      example_burmese: 'ရည်မှန်းချက် ရှင်းတယ်။'
    },
    {
      word: 'plan',
      phonetic: '/plan/',
      meaning_burmese: 'အစီအစဉ်',
      example: 'We need a plan.',
      example_burmese: 'အစီအစဉ် လိုပါတယ်။'
    },
    {
      word: 'strategy',
      phonetic: '/stra-te-gy/',
      meaning_burmese: 'မဟာဗျူဟာ',
      example: 'The strategy works.',
      example_burmese: 'မဟာဗျူဟာ အလုပ်လုပ်တယ်။'
    },
    {
      word: 'result',
      phonetic: '/re-sult/',
      meaning_burmese: 'ရလဒ်',
      example: 'We need results.',
      example_burmese: 'ရလဒ် လိုပါတယ်။'
    }
  ],
  [
    {
      word: 'client call',
      phonetic: '/cli-ent call/',
      meaning_burmese: 'ဖောက်သည် ဖုန်းခေါ်',
      example: 'We have a client call.',
      example_burmese: 'ဖောက်သည် ဖုန်းခေါ်မှု ရှိတယ်။'
    },
    {
      word: 'timeline',
      phonetic: '/time-line/',
      meaning_burmese: 'အချိန်ဇယားလိုင်း',
      example: 'The timeline is tight.',
      example_burmese: 'အချိန်ဇယားက တိတိကျကျပါ။'
    },
    {
      word: 'scope',
      phonetic: '/scope/',
      meaning_burmese: 'အကျယ်အဝန်း',
      example: 'The scope is large.',
      example_burmese: 'အကျယ်အဝန်းက ကြီးတယ်။'
    },
    {
      word: 'estimate',
      phonetic: '/es-ti-mate/',
      meaning_burmese: 'ခန့်မှန်း',
      example: 'We need an estimate.',
      example_burmese: 'ခန့်မှန်းချက် လိုပါတယ်။'
    },
    {
      word: 'sign off',
      phonetic: '/sign off/',
      meaning_burmese: 'အတည်ပြုပိတ်သိမ်း',
      example: 'Please sign off the work.',
      example_burmese: 'အလုပ်ကို အတည်ပြုပိတ်သိမ်းပါ။'
    }
  ],
  [
    {
      word: 'support',
      phonetic: '/sup-port/',
      meaning_burmese: 'ထောက်ပံ့မှု',
      example: 'Thanks for your support.',
      example_burmese: 'ထောက်ပံ့မှုအတွက် ကျေးဇူးတင်ပါတယ်။'
    },
    {
      word: 'request',
      phonetic: '/re-quest/',
      meaning_burmese: 'တောင်းဆိုမှု',
      example: 'I have a request.',
      example_burmese: 'တောင်းဆိုမှု တစ်ခုရှိတယ်။'
    },
    {
      word: 'issue',
      phonetic: '/ish-yoo/',
      meaning_burmese: 'ပြဿနာ',
      example: 'We have an issue.',
      example_burmese: 'ပြဿနာ ရှိတယ်။'
    },
    {
      word: 'resolve',
      phonetic: '/re-zolve/',
      meaning_burmese: 'ဖြေရှင်း',
      example: 'We will resolve it.',
      example_burmese: 'ဒါကို ဖြေရှင်းမယ်။'
    },
    {
      word: 'escalate',
      phonetic: '/es-ca-late/',
      meaning_burmese: 'အဆင့်မြှင့်တင်',
      example: 'We will escalate this.',
      example_burmese: 'ဒါကို အဆင့်မြှင့်တင်မယ်။'
    }
  ],
  [
    {
      word: 'summary',
      phonetic: '/sum-ma-ree/',
      meaning_burmese: 'အကျဉ်းချုပ်',
      example: 'Send a summary, please.',
      example_burmese: 'အကျဉ်းချုပ် ပို့ပေးပါ။'
    },
    {
      word: 'decision',
      phonetic: '/de-ci-sion/',
      meaning_burmese: 'ဆုံးဖြတ်ချက်',
      example: 'We made a decision.',
      example_burmese: 'ဆုံးဖြတ်ချက် ချခဲ့တယ်။'
    },
    {
      word: 'owner',
      phonetic: '/o-ner/',
      meaning_burmese: 'တာဝန်ခံ',
      example: 'Assign an owner.',
      example_burmese: 'တာဝန်ခံ တင်ပါ။'
    },
    {
      word: 'next step',
      phonetic: '/next step/',
      meaning_burmese: 'နောက်အဆင့်',
      example: 'What is the next step?',
      example_burmese: 'နောက်အဆင့် ဘာလဲ။'
    },
    {
      word: 'timeline',
      phonetic: '/time-line/',
      meaning_burmese: 'အချိန်ဇယား',
      example: 'Confirm the timeline.',
      example_burmese: 'အချိန်ဇယားကို အတည်ပြုပါ။'
    }
  ]
];

const partySchool: DailyVocabSet[] = [
  [
    {
      word: 'invite',
      phonetic: '/in-vite/',
      meaning_burmese: 'ဖိတ်ကြား',
      example: 'I got an invite.',
      example_burmese: 'ဖိတ်ကြားချက် ရခဲ့တယ်။'
    },
    {
      word: 'hangout',
      phonetic: '/hang-out/',
      meaning_burmese: 'အတူတူချိန်ကုန်',
      example: 'We hangout after class.',
      example_burmese: 'အတန်းပြီးရင် အတူတူချိန်ကုန်တယ်။'
    },
    {
      word: 'friend group',
      phonetic: '/friend group/',
      meaning_burmese: 'သူငယ်ချင်းအဖွဲ့',
      example: 'My friend group is fun.',
      example_burmese: 'ငါ့ သူငယ်ချင်းအဖွဲ့ ပျော်စရာကောင်းတယ်။'
    },
    {
      word: 'chill',
      phonetic: '/chill/',
      meaning_burmese: 'အေးဆေးနေ',
      example: 'We chill at the park.',
      example_burmese: 'ပန်းခြံမှာ အေးဆေးနေတယ်။'
    },
    {
      word: 'plan',
      phonetic: '/plan/',
      meaning_burmese: 'အစီအစဉ်',
      example: 'We have a plan.',
      example_burmese: 'အစီအစဉ် ရှိတယ်။'
    }
  ],
  [
    {
      word: 'class',
      phonetic: '/class/',
      meaning_burmese: 'အတန်း',
      example: 'Class starts at nine.',
      example_burmese: 'အတန်း ၉ နာရီမှာ စတယ်။'
    },
    {
      word: 'assignment',
      phonetic: '/a-sign-ment/',
      meaning_burmese: 'စာမေးပွဲမဟုတ်သော အလုပ်',
      example: 'We have an assignment.',
      example_burmese: 'အလုပ်တစ်ခု ရှိတယ်။'
    },
    {
      word: 'group work',
      phonetic: '/group work/',
      meaning_burmese: 'အဖွဲ့လိုက်လုပ်',
      example: 'We do group work.',
      example_burmese: 'အဖွဲ့လိုက်လုပ်တယ်။'
    },
    {
      word: 'club',
      phonetic: '/club/',
      meaning_burmese: 'အသင်း/ကလပ်',
      example: 'I joined a club.',
      example_burmese: 'ကလပ်တစ်ခု join လုပ်တယ်။'
    },
    {
      word: 'semester',
      phonetic: '/se-mes-ter/',
      meaning_burmese: 'သင်တန်းကာလ',
      example: 'This semester is busy.',
      example_burmese: 'ဒီသင်တန်းကာလ အလုပ်များတယ်။'
    }
  ],
  [
    {
      word: 'party',
      phonetic: '/par-tee/',
      meaning_burmese: 'ပါတီ',
      example: 'The party is tonight.',
      example_burmese: 'ဒီည ပါတီရှိတယ်။'
    },
    {
      word: 'music',
      phonetic: '/myoo-zik/',
      meaning_burmese: 'သီချင်း',
      example: 'The music is loud.',
      example_burmese: 'သီချင်းအသံကြီးတယ်။'
    },
    {
      word: 'dance',
      phonetic: '/dance/',
      meaning_burmese: 'ကခုန်',
      example: 'We dance all night.',
      example_burmese: 'ညလုံး ကခုန်တယ်။'
    },
    {
      word: 'dress',
      phonetic: '/dress/',
      meaning_burmese: 'အဝတ်အစား',
      example: 'I wear a dress.',
      example_burmese: 'အဝတ်အစား ဝတ်တယ်။'
    },
    {
      word: 'photo',
      phonetic: '/pho-to/',
      meaning_burmese: 'ဓာတ်ပုံ',
      example: 'Take a photo.',
      example_burmese: 'ဓာတ်ပုံ ရိုက်ပါ။'
    }
  ],
  [
    {
      word: 'invite list',
      phonetic: '/in-vite list/',
      meaning_burmese: 'ဖိတ်ကြားစာရင်း',
      example: 'Check the invite list.',
      example_burmese: 'ဖိတ်ကြားစာရင်းကို စစ်ပါ။'
    },
    {
      word: 'entry',
      phonetic: '/en-try/',
      meaning_burmese: 'ဝင်ခွင့်',
      example: 'Entry is free.',
      example_burmese: 'ဝင်ခွင့် အခမဲ့ပါ။'
    },
    {
      word: 'late',
      phonetic: '/late/',
      meaning_burmese: 'နောက်ကျ',
      example: 'Do not be late.',
      example_burmese: 'နောက်ကျမလာပါနဲ့။'
    },
    {
      word: 'ride',
      phonetic: '/ride/',
      meaning_burmese: 'စီးနင်းမှု',
      example: 'We get a ride.',
      example_burmese: 'စီးနင်းမှု ရမယ်။'
    },
    {
      word: 'meet',
      phonetic: '/meet/',
      meaning_burmese: 'တွေ့',
      example: 'Meet at seven.',
      example_burmese: 'ခုနှစ်နာရီမှာ တွေ့မယ်။'
    }
  ],
  [
    {
      word: 'library',
      phonetic: '/li-bra-ry/',
      meaning_burmese: 'စာကြည့်တိုက်',
      example: 'I study in the library.',
      example_burmese: 'စာကြည့်တိုက်မှာ စာလေ့လာတယ်။'
    },
    {
      word: 'note',
      phonetic: '/note/',
      meaning_burmese: 'မှတ်စု',
      example: 'I write notes.',
      example_burmese: 'မှတ်စုရေးတယ်။'
    },
    {
      word: 'quiz',
      phonetic: '/kwiz/',
      meaning_burmese: 'သေးငယ်စာမေးပွဲ',
      example: 'We have a quiz today.',
      example_burmese: 'ဒီနေ့ quiz ရှိတယ်။'
    },
    {
      word: 'lecture',
      phonetic: '/lec-cher/',
      meaning_burmese: 'သင်ခန်းစာ',
      example: 'The lecture is long.',
      example_burmese: 'သင်ခန်းစာ ကြာတယ်။'
    },
    {
      word: 'break',
      phonetic: '/break/',
      meaning_burmese: 'အနားယူချိန်',
      example: 'We take a break.',
      example_burmese: 'အနားယူတယ်။'
    }
  ],
  [
    {
      word: 'campus',
      phonetic: '/cam-pus/',
      meaning_burmese: 'ကျောင်းဝင်း',
      example: 'The campus is big.',
      example_burmese: 'ကျောင်းဝင်းကြီးတယ်။'
    },
    {
      word: 'cafeteria',
      phonetic: '/caf-e-te-ria/',
      meaning_burmese: 'စားဖိုဆောင်',
      example: 'We eat at the cafeteria.',
      example_burmese: 'စားဖိုဆောင်မှာ စားတယ်။'
    },
    {
      word: 'project',
      phonetic: '/pro-ject/',
      meaning_burmese: 'ပရောဂျက်',
      example: 'The project is due.',
      example_burmese: 'ပရောဂျက် တင်ရမယ်။'
    },
    {
      word: 'deadline',
      phonetic: '/dead-line/',
      meaning_burmese: 'နောက်ဆုံးရက်',
      example: 'Deadline is Friday.',
      example_burmese: 'နောက်ဆုံးရက် သောကြာနေ့ပါ။'
    },
    {
      word: 'partner',
      phonetic: '/part-ner/',
      meaning_burmese: 'အဖွဲ့ဖော်',
      example: 'I work with my partner.',
      example_burmese: 'အဖွဲ့ဖော်နဲ့ လုပ်တယ်။'
    }
  ],
  [
    {
      word: 'performance',
      phonetic: '/per-for-mance/',
      meaning_burmese: 'ပြင်ဆင်ဖျော်ဖြေမှု',
      example: 'The performance is great.',
      example_burmese: 'ဖျော်ဖြေမှုက ကောင်းတယ်။'
    },
    {
      word: 'stage',
      phonetic: '/stage/',
      meaning_burmese: 'စင်မြင့်',
      example: 'Go to the stage.',
      example_burmese: 'စင်မြင့်ကို သွားပါ။'
    },
    {
      word: 'ticket',
      phonetic: '/tik-et/',
      meaning_burmese: 'လက်မှတ်',
      example: 'I bought a ticket.',
      example_burmese: 'လက်မှတ် ဝယ်တယ်။'
    },
    {
      word: 'line',
      phonetic: '/line/',
      meaning_burmese: 'တန်းစီ',
      example: 'Wait in line.',
      example_burmese: 'တန်းစီစောင့်ပါ။'
    },
    {
      word: 'entry',
      phonetic: '/en-try/',
      meaning_burmese: 'ဝင်ခွင့်',
      example: 'Entry is open.',
      example_burmese: 'ဝင်ခွင့် ဖွင့်ထားတယ်။'
    }
  ],
  [
    {
      word: 'exam',
      phonetic: '/eg-zam/',
      meaning_burmese: 'စာမေးပွဲ',
      example: 'The exam is hard.',
      example_burmese: 'စာမေးပွဲ ခက်တယ်။'
    },
    {
      word: 'result',
      phonetic: '/re-sult/',
      meaning_burmese: 'ရလဒ်',
      example: 'The result is good.',
      example_burmese: 'ရလဒ်က ကောင်းတယ်။'
    },
    {
      word: 'grade',
      phonetic: '/grade/',
      meaning_burmese: 'အမှတ်',
      example: 'My grade is high.',
      example_burmese: 'အမှတ်မြင့်တယ်။'
    },
    {
      word: 'fail',
      phonetic: '/fail/',
      meaning_burmese: 'မအောင်',
      example: 'I do not want to fail.',
      example_burmese: 'မအောင်ချင်ဘူး။'
    },
    {
      word: 'pass',
      phonetic: '/pass/',
      meaning_burmese: 'အောင်',
      example: 'I want to pass.',
      example_burmese: 'အောင်ချင်တယ်။'
    }
  ],
  [
    {
      word: 'game',
      phonetic: '/game/',
      meaning_burmese: 'ကစားပွဲ',
      example: 'We watch the game.',
      example_burmese: 'ကစားပွဲ ကြည့်တယ်။'
    },
    {
      word: 'team',
      phonetic: '/team/',
      meaning_burmese: 'အသင်း',
      example: 'Our team is ready.',
      example_burmese: 'အသင်း အဆင်သင့်ပါ။'
    },
    {
      word: 'cheer',
      phonetic: '/cheer/',
      meaning_burmese: 'အားပေး',
      example: 'We cheer loudly.',
      example_burmese: 'အားပေးကြီးကြီးလုပ်တယ်။'
    },
    {
      word: 'win',
      phonetic: '/win/',
      meaning_burmese: 'အနိုင်ရ',
      example: 'We win today.',
      example_burmese: 'ဒီနေ့ အနိုင်ရတယ်။'
    },
    {
      word: 'lose',
      phonetic: '/lose/',
      meaning_burmese: 'ရှုံး',
      example: 'We do not want to lose.',
      example_burmese: 'မရှုံးချင်ဘူး။'
    }
  ],
  [
    {
      word: 'birthday',
      phonetic: '/birth-day/',
      meaning_burmese: 'မွေးနေ့',
      example: 'Happy birthday.',
      example_burmese: 'မွေးနေ့ကို ကောင်းမွန်ပါစေ။'
    },
    {
      word: 'gift',
      phonetic: '/gift/',
      meaning_burmese: 'လက်ဆောင်',
      example: 'I got a gift.',
      example_burmese: 'လက်ဆောင်ရတယ်။'
    },
    {
      word: 'surprise',
      phonetic: '/sur-prise/',
      meaning_burmese: 'အံ့ဩမှု',
      example: 'It is a surprise.',
      example_burmese: 'အံ့ဩစရာပါ။'
    },
    {
      word: 'photo',
      phonetic: '/pho-to/',
      meaning_burmese: 'ဓာတ်ပုံ',
      example: 'Take a photo.',
      example_burmese: 'ဓာတ်ပုံ ရိုက်ပါ။'
    },
    {
      word: 'memory',
      phonetic: '/mem-ory/',
      meaning_burmese: 'အမှတ်တရ',
      example: 'This is a good memory.',
      example_burmese: 'ဒီက အမှတ်တရ ကောင်းတယ်။'
    }
  ],
  [
    {
      word: 'promise',
      phonetic: '/pro-mise/',
      meaning_burmese: 'ကတိ',
      example: 'I promise to come.',
      example_burmese: 'လာမယ်လို့ ကတိပေးတယ်။'
    },
    {
      word: 'apology',
      phonetic: '/a-po-lo-gy/',
      meaning_burmese: 'တောင်းပန်မှု',
      example: 'I want to say sorry.',
      example_burmese: 'တောင်းပန်ချင်တယ်။'
    },
    {
      word: 'thanks',
      phonetic: '/thanks/',
      meaning_burmese: 'ကျေးဇူးတင်',
      example: 'Thanks a lot.',
      example_burmese: 'ကျေးဇူးတင်ပါတယ်။'
    },
    {
      word: 'congrats',
      phonetic: '/con-grats/',
      meaning_burmese: 'ဂုဏ်ယူပါတယ်',
      example: 'Congrats on your win.',
      example_burmese: 'အနိုင်ရတာ ဂုဏ်ယူပါတယ်။'
    },
    {
      word: 'good luck',
      phonetic: '/good luck/',
      meaning_burmese: 'ကံကောင်းပါစေ',
      example: 'Good luck on your exam.',
      example_burmese: 'စာမေးပွဲ ကံကောင်းပါစေ။'
    }
  ],
  [
    {
      word: 'opinion',
      phonetic: '/o-pin-ion/',
      meaning_burmese: 'အမြင်',
      example: 'What is your opinion?',
      example_burmese: 'သင့်အမြင် ဘာလဲ။'
    },
    {
      word: 'agree',
      phonetic: '/a-gree/',
      meaning_burmese: 'သဘောတူ',
      example: 'I agree with you.',
      example_burmese: 'ငါ သဘောတူတယ်။'
    },
    {
      word: 'disagree',
      phonetic: '/dis-a-gree/',
      meaning_burmese: 'မသဘောတူ',
      example: 'I disagree.',
      example_burmese: 'ငါ မသဘောတူဘူး။'
    },
    {
      word: 'suggest',
      phonetic: '/sug-gest/',
      meaning_burmese: 'အကြံပြု',
      example: 'I suggest we go.',
      example_burmese: 'သွားဖို့ အကြံပြုတယ်။'
    },
    {
      word: 'decide',
      phonetic: '/de-cide/',
      meaning_burmese: 'ဆုံးဖြတ်',
      example: 'We decide together.',
      example_burmese: 'အတူတူ ဆုံးဖြတ်တယ်။'
    }
  ]
];

const dailyExpanded = expandVocabSets(daily, TOTAL_DAYS);
const slangExpanded = expandVocabSets(slang, TOTAL_DAYS);
const businessExpanded = expandVocabSets(business, TOTAL_DAYS);
const partySchoolExpanded = expandVocabSets(partySchool, TOTAL_DAYS);

export const vocabDailyByMode: Record<PracticeMode, DailyVocabSet[]> = {
  daily: dailyExpanded,
  slang: slangExpanded,
  business: businessExpanded,
  party_school: partySchoolExpanded
};

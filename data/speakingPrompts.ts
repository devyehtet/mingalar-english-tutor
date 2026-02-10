import { PracticeMode, SpeakingPrompt } from '../types';

const TOTAL_DAYS = 90;

const expandPromptSets = (base: SpeakingPrompt[][], totalDays: number): SpeakingPrompt[][] => {
  if (base.length === 0) return [];
  return Array.from({ length: totalDays }, (_, dayIdx) => {
    const source = base[dayIdx % base.length];
    const dayNumber = dayIdx + 1;
    return source.map((prompt) => ({
      ...prompt,
      id: `${prompt.id}-day${dayNumber}`,
      targetKeywords: [...prompt.targetKeywords]
    }));
  });
};

const daily: SpeakingPrompt[][] = [
  [
    {
      id: 'daily-d1-beg',
      difficulty: 'beginner',
      title: 'Simple Greeting',
      prompt_en: 'Say hello and your name.',
      prompt_mm: 'မင်္ဂလာပါ ပြောပြီး နာမည်ပြောပါ။',
      targetKeywords: ['hello', 'name'],
      modelAnswer_en: 'Hello, my name is Aye.',
      modelAnswer_mm: 'မင်္ဂလာပါ၊ ကျွန်မနာမည် အေးပါ။'
    },
    {
      id: 'daily-d1-int',
      difficulty: 'intermediate',
      title: 'Short Intro',
      prompt_en: 'Introduce yourself in two sentences.',
      prompt_mm: 'ဝါကျ ၂ ကြောင်းနဲ့ မိတ်ဆက်ပါ။',
      targetKeywords: ['name', 'from'],
      modelAnswer_en: 'My name is Min. I am from Yangon.',
      modelAnswer_mm: 'ကျွန်တော်နာမည် မင်းပါ။ ရန်ကုန်ကပါ။'
    }
  ],
  [
    {
      id: 'daily-d2-beg',
      difficulty: 'beginner',
      title: 'Family',
      prompt_en: 'Talk about your mother or father.',
      prompt_mm: 'အမေ သို့မဟုတ် အဖေ အကြောင်းပြောပါ။',
      targetKeywords: ['mother', 'father'],
      modelAnswer_en: 'My mother is kind.',
      modelAnswer_mm: 'အမေက သဘောကောင်းတယ်။'
    },
    {
      id: 'daily-d2-int',
      difficulty: 'intermediate',
      title: 'Family Routine',
      prompt_en: 'Describe a family routine at night.',
      prompt_mm: 'ညပိုင်း မိသားစုအလေ့အကျင့်ကို ပြောပါ။',
      targetKeywords: ['family', 'dinner'],
      modelAnswer_en: 'My family eats dinner together.',
      modelAnswer_mm: 'မိသားစုက ညစာအတူစားတယ်။'
    }
  ],
  [
    {
      id: 'daily-d3-beg',
      difficulty: 'beginner',
      title: 'Morning',
      prompt_en: 'Say what you do in the morning.',
      prompt_mm: 'မနက်မှာ ဘာလုပ်တယ် ဆိုတာ ပြောပါ။',
      targetKeywords: ['wake', 'breakfast'],
      modelAnswer_en: 'I wake up and eat breakfast.',
      modelAnswer_mm: 'နိုးပြီး မနက်စာစားတယ်။'
    },
    {
      id: 'daily-d3-int',
      difficulty: 'intermediate',
      title: 'Daily Routine',
      prompt_en: 'Describe your daily routine.',
      prompt_mm: 'နေ့စဉ် လုပ်ဆောင်မှုကို ပြောပါ။',
      targetKeywords: ['work', 'evening'],
      modelAnswer_en: 'I work in the afternoon and rest in the evening.',
      modelAnswer_mm: 'နေ့လယ် အလုပ်လုပ်ပြီး ညနေမှာ အနားယူတယ်။'
    }
  ],
  [
    {
      id: 'daily-d4-beg',
      difficulty: 'beginner',
      title: 'Food',
      prompt_en: 'Say your favorite food.',
      prompt_mm: 'ကြိုက်တဲ့ အစားအစာကို ပြောပါ။',
      targetKeywords: ['rice', 'tea'],
      modelAnswer_en: 'I like rice and tea.',
      modelAnswer_mm: 'ထမင်းနဲ့ လက်ဖက်ရည်ကြိုက်တယ်။'
    },
    {
      id: 'daily-d4-int',
      difficulty: 'intermediate',
      title: 'Order Food',
      prompt_en: 'Order a simple meal politely.',
      prompt_mm: 'ယဉ်ယဉ်ကျေးကျေး အစားအစာမှာပါ။',
      targetKeywords: ['want', 'please'],
      modelAnswer_en: 'I want chicken soup, please.',
      modelAnswer_mm: 'ကြက်သားဟင်းချို တစ်ပွဲလိုချင်ပါတယ်။'
    }
  ],
  [
    {
      id: 'daily-d5-beg',
      difficulty: 'beginner',
      title: 'Shopping',
      prompt_en: 'Say you want to buy a bag.',
      prompt_mm: 'အိတ်ဝယ်ချင်တယ်လို့ ပြောပါ။',
      targetKeywords: ['buy', 'bag'],
      modelAnswer_en: 'I want to buy a bag.',
      modelAnswer_mm: 'အိတ်တစ်လုံး ဝယ်ချင်တယ်။'
    },
    {
      id: 'daily-d5-int',
      difficulty: 'intermediate',
      title: 'Ask Price',
      prompt_en: 'Ask the price politely.',
      prompt_mm: 'ဈေးကို ယဉ်ယဉ်ကျေးကျေး မေးပါ။',
      targetKeywords: ['price', 'please'],
      modelAnswer_en: 'What is the price, please?',
      modelAnswer_mm: 'ဈေးဘယ်လောက်လဲ။'
    }
  ],
  [
    {
      id: 'daily-d6-beg',
      difficulty: 'beginner',
      title: 'Direction',
      prompt_en: 'Ask where the bank is.',
      prompt_mm: 'ဘဏ် ဘယ်မှာလဲ မေးပါ။',
      targetKeywords: ['bank', 'where'],
      modelAnswer_en: 'Where is the bank?',
      modelAnswer_mm: 'ဘဏ် ဘယ်မှာလဲ။'
    },
    {
      id: 'daily-d6-int',
      difficulty: 'intermediate',
      title: 'Give Directions',
      prompt_en: 'Give simple directions.',
      prompt_mm: 'လမ်းညွှန်ပေးပါ။',
      targetKeywords: ['turn', 'left', 'right'],
      modelAnswer_en: 'Go straight and turn left.',
      modelAnswer_mm: 'တန်းတန်းသွားပြီး ဘယ်ဘက်ကွေ့ပါ။'
    }
  ],
  [
    {
      id: 'daily-d7-beg',
      difficulty: 'beginner',
      title: 'Time',
      prompt_en: 'Say the time.',
      prompt_mm: 'အချိန်ပြောပါ။',
      targetKeywords: ['time'],
      modelAnswer_en: 'It is three o clock.',
      modelAnswer_mm: 'သုံးနာရီ ဖြစ်ပါတယ်။'
    },
    {
      id: 'daily-d7-int',
      difficulty: 'intermediate',
      title: 'Schedule',
      prompt_en: 'Describe your schedule for tomorrow.',
      prompt_mm: 'မနက်ဖြန် အချိန်ဇယားကို ပြောပါ။',
      targetKeywords: ['tomorrow', 'morning'],
      modelAnswer_en: 'Tomorrow morning I will study.',
      modelAnswer_mm: 'မနက်ဖြန် မနက်မှာ စာလေ့လာမယ်။'
    }
  ],
  [
    {
      id: 'daily-d8-beg',
      difficulty: 'beginner',
      title: 'Weather',
      prompt_en: 'Describe the weather today.',
      prompt_mm: 'ဒီနေ့ ရာသီဥတုကို ပြောပါ။',
      targetKeywords: ['hot', 'cold', 'rain'],
      modelAnswer_en: 'It is hot today.',
      modelAnswer_mm: 'ဒီနေ့ ပူတယ်။'
    },
    {
      id: 'daily-d8-int',
      difficulty: 'intermediate',
      title: 'Rainy Day',
      prompt_en: 'Say what you do on a rainy day.',
      prompt_mm: 'မိုးရွာတဲ့နေ့မှာ ဘာလုပ်လဲ ပြောပါ။',
      targetKeywords: ['rain', 'home'],
      modelAnswer_en: 'When it rains, I stay at home.',
      modelAnswer_mm: 'မိုးရွာရင် အိမ်မှာနေတယ်။'
    }
  ],
  [
    {
      id: 'daily-d9-beg',
      difficulty: 'beginner',
      title: 'Hobby',
      prompt_en: 'Say your hobby.',
      prompt_mm: 'သင့်ဝါသနာကို ပြောပါ။',
      targetKeywords: ['hobby'],
      modelAnswer_en: 'My hobby is drawing.',
      modelAnswer_mm: 'ဝါသနာက ပုံဆွဲတာပါ။'
    },
    {
      id: 'daily-d9-int',
      difficulty: 'intermediate',
      title: 'Weekend',
      prompt_en: 'Talk about your weekend activity.',
      prompt_mm: 'အားလပ်ရက် လုပ်တာကို ပြောပါ။',
      targetKeywords: ['play', 'friends'],
      modelAnswer_en: 'I play football with friends.',
      modelAnswer_mm: 'မိတ်ဆွေနဲ့ ဘောလုံးကစားတယ်။'
    }
  ],
  [
    {
      id: 'daily-d10-beg',
      difficulty: 'beginner',
      title: 'Feelings',
      prompt_en: 'Say how you feel today.',
      prompt_mm: 'ဒီနေ့ ဘယ်လိုခံစားရလဲ ပြောပါ။',
      targetKeywords: ['tired', 'happy'],
      modelAnswer_en: 'I am tired today.',
      modelAnswer_mm: 'ဒီနေ့ ပင်ပန်းတယ်။'
    },
    {
      id: 'daily-d10-int',
      difficulty: 'intermediate',
      title: 'At the Clinic',
      prompt_en: 'Tell the doctor your problem.',
      prompt_mm: 'ဆရာဝန်ကို ပြဿနာပြောပါ။',
      targetKeywords: ['headache', 'medicine'],
      modelAnswer_en: 'I have a headache. I need medicine.',
      modelAnswer_mm: 'ခေါင်းကိုက်နေတယ်။ ဆေးလိုတယ်။'
    }
  ],
  [
    {
      id: 'daily-d11-beg',
      difficulty: 'beginner',
      title: 'Study',
      prompt_en: 'Say you study English every day.',
      prompt_mm: 'နေ့တိုင်း အင်္ဂလိပ်စာ လေ့လာတယ် လို့ပြောပါ။',
      targetKeywords: ['study', 'English'],
      modelAnswer_en: 'I study English every day.',
      modelAnswer_mm: 'နေ့တိုင်း အင်္ဂလိပ်စာ လေ့လာတယ်။'
    },
    {
      id: 'daily-d11-int',
      difficulty: 'intermediate',
      title: 'Class',
      prompt_en: 'Talk about your class.',
      prompt_mm: 'သင့်အတန်းအကြောင်း ပြောပါ။',
      targetKeywords: ['class', 'teacher'],
      modelAnswer_en: 'My class starts at nine. The teacher is kind.',
      modelAnswer_mm: 'အတန်း ၉ နာရီမှာ စတယ်။ ဆရာမ သဘောကောင်းတယ်။'
    }
  ],
  [
    {
      id: 'daily-d12-beg',
      difficulty: 'beginner',
      title: 'Travel',
      prompt_en: 'Say you want to travel.',
      prompt_mm: 'ခရီးသွားချင်တယ် လို့ပြောပါ။',
      targetKeywords: ['travel'],
      modelAnswer_en: 'I want to travel.',
      modelAnswer_mm: 'ခရီးသွားချင်တယ်။'
    },
    {
      id: 'daily-d12-int',
      difficulty: 'intermediate',
      title: 'Bus Ticket',
      prompt_en: 'Buy a bus ticket.',
      prompt_mm: 'ဘတ်စ်ကား လက်မှတ်ဝယ်ပါ။',
      targetKeywords: ['ticket', 'bus'],
      modelAnswer_en: 'I want a bus ticket, please.',
      modelAnswer_mm: 'ဘတ်စ်ကားလက်မှတ် တစ်စောင်လိုချင်ပါတယ်။'
    }
  ],
  [
    {
      id: 'daily-d13-beg',
      difficulty: 'beginner',
      title: 'Happy',
      prompt_en: 'Say you are happy today.',
      prompt_mm: 'ဒီနေ့ ပျော်တယ် လို့ပြောပါ။',
      targetKeywords: ['happy'],
      modelAnswer_en: 'I am happy today.',
      modelAnswer_mm: 'ဒီနေ့ ပျော်တယ်။'
    },
    {
      id: 'daily-d13-int',
      difficulty: 'intermediate',
      title: 'Reason',
      prompt_en: 'Say why you are happy.',
      prompt_mm: 'ဘာကြောင့် ပျော်တာ ပြောပါ။',
      targetKeywords: ['because', 'happy'],
      modelAnswer_en: 'I am happy because I finished my work.',
      modelAnswer_mm: 'အလုပ်ပြီးလို့ ပျော်တယ်။'
    }
  ],
  [
    {
      id: 'daily-d14-beg',
      difficulty: 'beginner',
      title: 'Opinion',
      prompt_en: 'Say you like this book.',
      prompt_mm: 'ဒီစာအုပ်ကို ကြိုက်တယ် လို့ပြောပါ။',
      targetKeywords: ['like', 'book'],
      modelAnswer_en: 'I like this book.',
      modelAnswer_mm: 'ဒီစာအုပ်ကို ကြိုက်တယ်။'
    },
    {
      id: 'daily-d14-int',
      difficulty: 'intermediate',
      title: 'Simple Opinion',
      prompt_en: 'Give your opinion about a movie.',
      prompt_mm: 'ရုပ်ရှင်အကြောင်း အမြင်ပြောပါ။',
      targetKeywords: ['think', 'good'],
      modelAnswer_en: 'I think the movie is good.',
      modelAnswer_mm: 'ဒီရုပ်ရှင် ကောင်းတယ်လို့ ထင်တယ်။'
    }
  ]
];

const slang: SpeakingPrompt[][] = [
  [
    {
      id: 'slang-d1-beg',
      difficulty: 'beginner',
      title: 'NYC Greeting',
      prompt_en: 'Say hi in NYC slang and tell your name.',
      prompt_mm: 'NYC slang နဲ့ မင်္ဂလာပါ ပြောပြီး နာမည်ပြောပါ။',
      targetKeywords: ['yo', 'name', 'wassup'],
      modelAnswer_en: 'Yo, my name is Aye. Wassup.',
      modelAnswer_mm: 'ယို၊ ကျွန်မနာမည် အေးပါ။'
    },
    {
      id: 'slang-d1-int',
      difficulty: 'intermediate',
      title: 'Short Intro',
      prompt_en: 'Introduce yourself with slang in two sentences.',
      prompt_mm: 'slang သုံးပြီး ဝါကျ ၂ ကြောင်း မိတ်ဆက်ပါ။',
      targetKeywords: ['yo', 'from', 'fam'],
      modelAnswer_en: 'Yo, I am Min from Yangon. I chill with my fam.',
      modelAnswer_mm: 'ယို၊ ရန်ကုန်က မင်းပါ။ fam နဲ့ အေးဆေးနေတယ်။'
    }
  ],
  [
    {
      id: 'slang-d2-beg',
      difficulty: 'beginner',
      title: 'Crew',
      prompt_en: 'Say one line about your crew or squad.',
      prompt_mm: 'crew သို့မဟုတ် squad အကြောင်း ၁ ကြောင်း ပြောပါ။',
      targetKeywords: ['crew', 'squad'],
      modelAnswer_en: 'My crew is small but strong.',
      modelAnswer_mm: 'ငါ့ crew က နည်းပေမယ့် ခိုင်မာတယ်။'
    },
    {
      id: 'slang-d2-int',
      difficulty: 'intermediate',
      title: 'Real One',
      prompt_en: 'Say why a friend is a real one.',
      prompt_mm: 'real one ဖြစ်ရတဲ့အကြောင်း ပြောပါ။',
      targetKeywords: ['real one', 'tight'],
      modelAnswer_en: 'She is a real one. We are tight.',
      modelAnswer_mm: 'သူမက real one ပါ။ နီးစပ်တယ်။'
    }
  ],
  [
    {
      id: 'slang-d3-beg',
      difficulty: 'beginner',
      title: 'Daily Grind',
      prompt_en: 'Say you grind every day.',
      prompt_mm: 'နေ့တိုင်း grind လုပ်တယ်လို့ ပြောပါ။',
      targetKeywords: ['grind'],
      modelAnswer_en: 'I grind every day.',
      modelAnswer_mm: 'နေ့တိုင်း grind လုပ်တယ်။'
    },
    {
      id: 'slang-d3-int',
      difficulty: 'intermediate',
      title: 'Get the Bag',
      prompt_en: 'Describe your hustle for the bag.',
      prompt_mm: 'ပိုက်ဆံအတွက် hustle လုပ်တာကို ပြောပါ။',
      targetKeywords: ['hustle', 'bag'],
      modelAnswer_en: 'I hustle every day to get the bag.',
      modelAnswer_mm: 'bag ရဖို့ နေ့တိုင်း hustle လုပ်တယ်။'
    }
  ],
  [
    {
      id: 'slang-d4-beg',
      difficulty: 'beginner',
      title: 'Bodega',
      prompt_en: 'Say you go to the bodega for a snack.',
      prompt_mm: 'bodega သွားပြီး snack ဝယ်တယ်လို့ ပြောပါ။',
      targetKeywords: ['bodega', 'snack'],
      modelAnswer_en: 'I go to the bodega for a snack.',
      modelAnswer_mm: 'bodega သွားပြီး snack ဝယ်တယ်။'
    },
    {
      id: 'slang-d4-int',
      difficulty: 'intermediate',
      title: 'Mad Hungry',
      prompt_en: 'Say you are mad hungry and want some chop.',
      prompt_mm: 'အရမ်းဗိုက်ဆာပြီး chop လိုတယ်လို့ ပြောပါ။',
      targetKeywords: ['mad hungry', 'chop'],
      modelAnswer_en: 'I am mad hungry. I want some chop.',
      modelAnswer_mm: 'အရမ်းဗိုက်ဆာတယ်။ chop လိုတယ်။'
    }
  ],
  [
    {
      id: 'slang-d5-beg',
      difficulty: 'beginner',
      title: 'Clean Fit',
      prompt_en: 'Say your fit is clean.',
      prompt_mm: 'fit လှတယ်လို့ ပြောပါ။',
      targetKeywords: ['fit', 'clean'],
      modelAnswer_en: 'My fit is clean.',
      modelAnswer_mm: 'ငါ့ fit လှတယ်။'
    },
    {
      id: 'slang-d5-int',
      difficulty: 'intermediate',
      title: 'Drip Talk',
      prompt_en: 'Say you will cop new shoes and flex a little.',
      prompt_mm: 'ဘိနပ်အသစ် ဝယ်ပြီး နည်းနည်း flex မယ်လို့ ပြောပါ။',
      targetKeywords: ['cop', 'flex', 'drip'],
      modelAnswer_en: 'I will cop new shoes and flex a little. My drip is clean.',
      modelAnswer_mm: 'ဘိနပ်အသစ် ဝယ်ပြီး flex မယ်။ drip လှတယ်။'
    }
  ],
  [
    {
      id: 'slang-d6-beg',
      difficulty: 'beginner',
      title: 'Block',
      prompt_en: 'Say the store is on your block.',
      prompt_mm: 'ဆိုင်က ကိုယ့္ block မှာဆိုတာ ပြောပါ။',
      targetKeywords: ['block'],
      modelAnswer_en: 'The store is on my block.',
      modelAnswer_mm: 'ဆိုင်က ငါ့ block မှာပဲ။'
    },
    {
      id: 'slang-d6-int',
      difficulty: 'intermediate',
      title: 'Pull Up',
      prompt_en: 'Tell your friend to pull up at the corner.',
      prompt_mm: 'လမ်းထောင့်မှာ pull up လို့ပြောပါ။',
      targetKeywords: ['pull up', 'corner'],
      modelAnswer_en: 'Pull up at the corner at six.',
      modelAnswer_mm: 'ခြောက်နာရီမှာ လမ်းထောင့်ကို pull up လာပါ။'
    }
  ],
  [
    {
      id: 'slang-d7-beg',
      difficulty: 'beginner',
      title: 'On Time',
      prompt_en: 'Say you will be on time.',
      prompt_mm: 'အချိန်မှန်လာမယ်လို့ ပြောပါ။',
      targetKeywords: ['on time'],
      modelAnswer_en: 'I will be on time.',
      modelAnswer_mm: 'အချိန်မှန်လာမယ်။'
    },
    {
      id: 'slang-d7-int',
      difficulty: 'intermediate',
      title: 'Link Up',
      prompt_en: 'Say you will link at seven and slide after.',
      prompt_mm: 'ခုနှစ်နာရီမှာ link လုပ်ပြီး နောက်ပိုင်း slide မယ်လို့ ပြောပါ။',
      targetKeywords: ['link', 'slide'],
      modelAnswer_en: 'We link at seven. I will slide after.',
      modelAnswer_mm: 'ခုနှစ်နာရီမှာ link လုပ်မယ်။ နောက်ပိုင်း slide မယ်။'
    }
  ],
  [
    {
      id: 'slang-d8-beg',
      difficulty: 'beginner',
      title: 'Brick Weather',
      prompt_en: 'Say it is brick today.',
      prompt_mm: 'ဒီနေ့ brick ဖြစ်တယ်လို့ ပြောပါ။',
      targetKeywords: ['brick'],
      modelAnswer_en: 'It is brick today.',
      modelAnswer_mm: 'ဒီနေ့ အရမ်းအေးတယ်။'
    },
    {
      id: 'slang-d8-int',
      difficulty: 'intermediate',
      title: 'Weather Talk',
      prompt_en: 'Describe the weather with slang.',
      prompt_mm: 'slang သုံးပြီး ရာသီဥတုကို ပြောပါ။',
      targetKeywords: ['heat', 'chill'],
      modelAnswer_en: 'The heat is wild but the night is chill.',
      modelAnswer_mm: 'နေ့ခင်း ပူတယ်၊ ညမှာ အေးဆေးတယ်။'
    }
  ],
  [
    {
      id: 'slang-d9-beg',
      difficulty: 'beginner',
      title: 'Vibe',
      prompt_en: 'Say the song has a good vibe.',
      prompt_mm: 'သီချင်း vibe က ကောင်းတယ်လို့ ပြောပါ။',
      targetKeywords: ['vibe'],
      modelAnswer_en: 'This song has a good vibe.',
      modelAnswer_mm: 'ဒီသီချင်း vibe က ကောင်းတယ်။'
    },
    {
      id: 'slang-d9-int',
      difficulty: 'intermediate',
      title: 'Freestyle',
      prompt_en: 'Say you go to the studio and freestyle.',
      prompt_mm: 'စတူဒီယိုသွားပြီး freestyle လုပ်တယ်လို့ ပြောပါ။',
      targetKeywords: ['studio', 'freestyle'],
      modelAnswer_en: 'I go to the studio and freestyle.',
      modelAnswer_mm: 'စတူဒီယိုသွားပြီး freestyle လုပ်တယ်။'
    }
  ],
  [
    {
      id: 'slang-d10-beg',
      difficulty: 'beginner',
      title: 'Tired',
      prompt_en: 'Say you are tired today.',
      prompt_mm: 'ဒီနေ့ ပင်ပန်းတယ် လို့ပြောပါ။',
      targetKeywords: ['tired'],
      modelAnswer_en: 'I am tired today.',
      modelAnswer_mm: 'ဒီနေ့ ပင်ပန်းတယ်။'
    },
    {
      id: 'slang-d10-int',
      difficulty: 'intermediate',
      title: 'Bounce Back',
      prompt_en: 'Say you are burnt but you will bounce back.',
      prompt_mm: 'ပင်ပန်းပေမယ့် ပြန်ကောင်းမယ်လို့ ပြောပါ။',
      targetKeywords: ['burnt', 'bounce back'],
      modelAnswer_en: 'I am burnt but I will bounce back.',
      modelAnswer_mm: 'ပင်ပန်းတယ်၊ ဒါပေမယ့် ပြန်ကောင်းမယ်။'
    }
  ],
  [
    {
      id: 'slang-d11-beg',
      difficulty: 'beginner',
      title: 'Focus',
      prompt_en: 'Say you need to focus and grind.',
      prompt_mm: 'focus နဲ့ grind လိုတယ်လို့ ပြောပါ။',
      targetKeywords: ['focus', 'grind'],
      modelAnswer_en: 'I need to focus and grind.',
      modelAnswer_mm: 'focus နဲ့ grind လုပ်ဖို့လိုတယ်။'
    },
    {
      id: 'slang-d11-int',
      difficulty: 'intermediate',
      title: 'Level Up',
      prompt_en: 'Say you want to level up and boss up.',
      prompt_mm: 'level up နဲ့ boss up လုပ်ချင်တယ်လို့ ပြောပါ။',
      targetKeywords: ['level up', 'boss up'],
      modelAnswer_en: 'I want to level up and boss up.',
      modelAnswer_mm: 'level up နဲ့ boss up လုပ်ချင်တယ်။'
    }
  ],
  [
    {
      id: 'slang-d12-beg',
      difficulty: 'beginner',
      title: 'Subway',
      prompt_en: 'Say you take the subway.',
      prompt_mm: 'subway စီးတယ်လို့ ပြောပါ။',
      targetKeywords: ['subway'],
      modelAnswer_en: 'I take the subway.',
      modelAnswer_mm: 'subway စီးတယ်။'
    },
    {
      id: 'slang-d12-int',
      difficulty: 'intermediate',
      title: 'Fare',
      prompt_en: 'Say you pay the fare and check the map.',
      prompt_mm: 'fare ပေးပြီး map ကြည့်တယ်လို့ ပြောပါ။',
      targetKeywords: ['fare', 'map'],
      modelAnswer_en: 'I pay the fare and check the map.',
      modelAnswer_mm: 'fare ပေးပြီး map ကြည့်တယ်။'
    }
  ],
  [
    {
      id: 'slang-d13-beg',
      difficulty: 'beginner',
      title: 'Hyped',
      prompt_en: 'Say you are hyped today.',
      prompt_mm: 'ဒီနေ့ hyped ဖြစ်တယ်လို့ ပြောပါ။',
      targetKeywords: ['hyped'],
      modelAnswer_en: 'I am hyped today.',
      modelAnswer_mm: 'ဒီနေ့ စိတ်လှုပ်ရှားတယ်။'
    },
    {
      id: 'slang-d13-int',
      difficulty: 'intermediate',
      title: 'Low Key',
      prompt_en: 'Say you are low key tired but still mad good.',
      prompt_mm: 'low key ပင်ပန်းပေမယ့် mad good လို့ပြောပါ။',
      targetKeywords: ['low key', 'mad'],
      modelAnswer_en: 'I am low key tired but I feel mad good.',
      modelAnswer_mm: 'low key ပင်ပန်းပေမယ့် စိတ်ခံစားမှု ကောင်းတယ်။'
    }
  ],
  [
    {
      id: 'slang-d14-beg',
      difficulty: 'beginner',
      title: 'Dope or Wack',
      prompt_en: 'Say a song is dope and not wack.',
      prompt_mm: 'သီချင်းက dope ဖြစ်ပြီး wack မဟုတ်ဘူးလို့ ပြောပါ။',
      targetKeywords: ['dope', 'wack'],
      modelAnswer_en: 'That song is dope, not wack.',
      modelAnswer_mm: 'ဒီသီချင်း dope ပါ၊ wack မဟုတ်ဘူး။'
    },
    {
      id: 'slang-d14-int',
      difficulty: 'intermediate',
      title: 'Facts',
      prompt_en: 'Say the beat is fire and say facts.',
      prompt_mm: 'beat က fire ဖြစ်တယ်လို့ ပြောပြီး facts လို့ပြောပါ။',
      targetKeywords: ['fire', 'facts'],
      modelAnswer_en: 'This beat is fire. Facts.',
      modelAnswer_mm: 'ဒီ beat က fire ပါ။ facts။'
    }
  ]
];

const business: SpeakingPrompt[][] = [
  [
    {
      id: 'biz-d1-beg',
      difficulty: 'beginner',
      title: 'Meeting Time',
      prompt_en: 'Say we have a meeting today.',
      prompt_mm: 'ဒီနေ့ အစည်းအဝေးရှိတယ်လို့ ပြောပါ။',
      targetKeywords: ['meeting', 'today'],
      modelAnswer_en: 'We have a meeting today.',
      modelAnswer_mm: 'ဒီနေ့ အစည်းအဝေး ရှိတယ်။'
    },
    {
      id: 'biz-d1-int',
      difficulty: 'intermediate',
      title: 'Agenda',
      prompt_en: 'Ask for the agenda politely.',
      prompt_mm: 'အစီအစဉ်စာရင်းကို ယဉ်ယဉ်ကျေးကျေး မေးပါ။',
      targetKeywords: ['agenda', 'please'],
      modelAnswer_en: 'Could you share the agenda, please?',
      modelAnswer_mm: 'အစီအစဉ်စာရင်း မျှဝေပေးပါလား။'
    }
  ],
  [
    {
      id: 'biz-d2-beg',
      difficulty: 'beginner',
      title: 'Email',
      prompt_en: 'Say you sent an email.',
      prompt_mm: 'အီးမေးလ်ပို့ခဲ့တယ်လို့ ပြောပါ။',
      targetKeywords: ['email', 'sent'],
      modelAnswer_en: 'I sent an email.',
      modelAnswer_mm: 'အီးမေးလ် ပို့ထားတယ်။'
    },
    {
      id: 'biz-d2-int',
      difficulty: 'intermediate',
      title: 'Follow Up',
      prompt_en: 'Say you will follow up tomorrow.',
      prompt_mm: 'မနက်ဖြန် နောက်ဆက်တွဲလုပ်မယ်လို့ ပြောပါ။',
      targetKeywords: ['follow up', 'tomorrow'],
      modelAnswer_en: 'I will follow up tomorrow.',
      modelAnswer_mm: 'မနက်ဖြန် နောက်ဆက်တွဲလုပ်မယ်။'
    }
  ],
  [
    {
      id: 'biz-d3-beg',
      difficulty: 'beginner',
      title: 'Proposal',
      prompt_en: 'Say you will send a proposal.',
      prompt_mm: 'တင်ပြစာ ပို့မယ်လို့ ပြောပါ။',
      targetKeywords: ['proposal'],
      modelAnswer_en: 'I will send a proposal.',
      modelAnswer_mm: 'တင်ပြစာ ပို့မယ်။'
    },
    {
      id: 'biz-d3-int',
      difficulty: 'intermediate',
      title: 'Budget',
      prompt_en: 'Say the budget is limited.',
      prompt_mm: 'ဘတ်ဂျက် အကန့်အသတ်ရှိတယ်လို့ ပြောပါ။',
      targetKeywords: ['budget', 'limited'],
      modelAnswer_en: 'The budget is limited.',
      modelAnswer_mm: 'ဘတ်ဂျက် အကန့်အသတ်ရှိတယ်။'
    }
  ],
  [
    {
      id: 'biz-d4-beg',
      difficulty: 'beginner',
      title: 'Deadline',
      prompt_en: 'Say the deadline is Friday.',
      prompt_mm: 'နောက်ဆုံးရက်က သောကြာနေ့ လို့ပြောပါ။',
      targetKeywords: ['deadline', 'Friday'],
      modelAnswer_en: 'The deadline is Friday.',
      modelAnswer_mm: 'နောက်ဆုံးရက်က သောကြာနေ့ပါ။'
    },
    {
      id: 'biz-d4-int',
      difficulty: 'intermediate',
      title: 'Deliverable',
      prompt_en: 'Say the deliverable is a report.',
      prompt_mm: 'deliverable က အစီရင်ခံစာ လို့ပြောပါ။',
      targetKeywords: ['deliverable', 'report'],
      modelAnswer_en: 'The deliverable is a report.',
      modelAnswer_mm: 'deliverable က အစီရင်ခံစာပါ။'
    }
  ],
  [
    {
      id: 'biz-d5-beg',
      difficulty: 'beginner',
      title: 'Client',
      prompt_en: 'Say the client approved it.',
      prompt_mm: 'ဖောက်သည်က အတည်ပြုခဲ့တယ်လို့ ပြောပါ။',
      targetKeywords: ['client', 'approved'],
      modelAnswer_en: 'The client approved it.',
      modelAnswer_mm: 'ဖောက်သည်က အတည်ပြုခဲ့တယ်။'
    },
    {
      id: 'biz-d5-int',
      difficulty: 'intermediate',
      title: 'Feedback',
      prompt_en: 'Say thanks for the feedback.',
      prompt_mm: 'feedback အတွက် ကျေးဇူးတင်တယ်လို့ ပြောပါ။',
      targetKeywords: ['feedback', 'thanks'],
      modelAnswer_en: 'Thanks for the feedback.',
      modelAnswer_mm: 'feedback အတွက် ကျေးဇူးတင်ပါတယ်။'
    }
  ],
  [
    {
      id: 'biz-d6-beg',
      difficulty: 'beginner',
      title: 'Report',
      prompt_en: 'Say you sent the report.',
      prompt_mm: 'အစီရင်ခံစာ ပို့ခဲ့တယ်လို့ ပြောပါ။',
      targetKeywords: ['report', 'sent'],
      modelAnswer_en: 'I sent the report.',
      modelAnswer_mm: 'အစီရင်ခံစာ ပို့ခဲ့တယ်။'
    },
    {
      id: 'biz-d6-int',
      difficulty: 'intermediate',
      title: 'Action Items',
      prompt_en: 'Say we have two action items.',
      prompt_mm: 'လုပ်ဆောင်ရမည့် အချက် ၂ ခု ရှိတယ်လို့ ပြောပါ။',
      targetKeywords: ['action item', 'two'],
      modelAnswer_en: 'We have two action items.',
      modelAnswer_mm: 'လုပ်ဆောင်ရမည့် အချက် ၂ ခု ရှိတယ်။'
    }
  ],
  [
    {
      id: 'biz-d7-beg',
      difficulty: 'beginner',
      title: 'Call',
      prompt_en: 'Say we can have a call.',
      prompt_mm: 'ဖုန်းခေါ်နိုင်တယ်လို့ ပြောပါ။',
      targetKeywords: ['call'],
      modelAnswer_en: 'We can have a call.',
      modelAnswer_mm: 'ဖုန်းခေါ်နိုင်တယ်။'
    },
    {
      id: 'biz-d7-int',
      difficulty: 'intermediate',
      title: 'Presentation',
      prompt_en: 'Say you will give a presentation.',
      prompt_mm: 'တင်ပြမှု လုပ်မယ်လို့ ပြောပါ။',
      targetKeywords: ['presentation'],
      modelAnswer_en: 'I will give a presentation.',
      modelAnswer_mm: 'တင်ပြမှု လုပ်မယ်။'
    }
  ],
  [
    {
      id: 'biz-d8-beg',
      difficulty: 'beginner',
      title: 'Team',
      prompt_en: 'Say the team is ready.',
      prompt_mm: 'အဖွဲ့ အဆင်သင့် လို့ပြောပါ။',
      targetKeywords: ['team', 'ready'],
      modelAnswer_en: 'The team is ready.',
      modelAnswer_mm: 'အဖွဲ့ အဆင်သင့်ပါ။'
    },
    {
      id: 'biz-d8-int',
      difficulty: 'intermediate',
      title: 'Progress',
      prompt_en: 'Say progress is good.',
      prompt_mm: 'တိုးတက်မှု ကောင်းတယ်လို့ ပြောပါ။',
      targetKeywords: ['progress', 'good'],
      modelAnswer_en: 'Progress is good.',
      modelAnswer_mm: 'တိုးတက်မှု ကောင်းတယ်။'
    }
  ],
  [
    {
      id: 'biz-d9-beg',
      difficulty: 'beginner',
      title: 'Contract',
      prompt_en: 'Say the contract is signed.',
      prompt_mm: 'စာချုပ် လက်မှတ်ထိုးပြီးပါပြီ လို့ပြောပါ။',
      targetKeywords: ['contract', 'signed'],
      modelAnswer_en: 'The contract is signed.',
      modelAnswer_mm: 'စာချုပ် လက်မှတ်ထိုးပြီးပါပြီ။'
    },
    {
      id: 'biz-d9-int',
      difficulty: 'intermediate',
      title: 'Review',
      prompt_en: 'Say we will review it.',
      prompt_mm: 'ပြန်လည်သုံးသပ်မယ် လို့ပြောပါ။',
      targetKeywords: ['review'],
      modelAnswer_en: 'We will review it.',
      modelAnswer_mm: 'ပြန်လည်သုံးသပ်မယ်။'
    }
  ],
  [
    {
      id: 'biz-d10-beg',
      difficulty: 'beginner',
      title: 'Goal',
      prompt_en: 'Say our goal is clear.',
      prompt_mm: 'ရည်မှန်းချက် ရှင်းတယ် လို့ပြောပါ။',
      targetKeywords: ['goal', 'clear'],
      modelAnswer_en: 'Our goal is clear.',
      modelAnswer_mm: 'ရည်မှန်းချက် ရှင်းတယ်။'
    },
    {
      id: 'biz-d10-int',
      difficulty: 'intermediate',
      title: 'Strategy',
      prompt_en: 'Say the strategy works.',
      prompt_mm: 'မဟာဗျူဟာ အလုပ်လုပ်တယ် လို့ပြောပါ။',
      targetKeywords: ['strategy', 'works'],
      modelAnswer_en: 'The strategy works.',
      modelAnswer_mm: 'မဟာဗျူဟာ အလုပ်လုပ်တယ်။'
    }
  ],
  [
    {
      id: 'biz-d11-beg',
      difficulty: 'beginner',
      title: 'Request',
      prompt_en: 'Say you have a request.',
      prompt_mm: 'တောင်းဆိုမှု ရှိတယ်လို့ ပြောပါ။',
      targetKeywords: ['request'],
      modelAnswer_en: 'I have a request.',
      modelAnswer_mm: 'တောင်းဆိုမှု ရှိတယ်။'
    },
    {
      id: 'biz-d11-int',
      difficulty: 'intermediate',
      title: 'Resolve Issue',
      prompt_en: 'Say we will resolve the issue.',
      prompt_mm: 'ပြဿနာကို ဖြေရှင်းမယ်လို့ ပြောပါ။',
      targetKeywords: ['issue', 'resolve'],
      modelAnswer_en: 'We will resolve the issue.',
      modelAnswer_mm: 'ပြဿနာကို ဖြေရှင်းမယ်။'
    }
  ],
  [
    {
      id: 'biz-d12-beg',
      difficulty: 'beginner',
      title: 'Summary',
      prompt_en: 'Ask for a summary.',
      prompt_mm: 'အကျဉ်းချုပ်ကို မေးပါ။',
      targetKeywords: ['summary'],
      modelAnswer_en: 'Please send a summary.',
      modelAnswer_mm: 'အကျဉ်းချုပ် ပို့ပေးပါ။'
    },
    {
      id: 'biz-d12-int',
      difficulty: 'intermediate',
      title: 'Next Step',
      prompt_en: 'Ask for the next step.',
      prompt_mm: 'နောက်အဆင့်ကို မေးပါ။',
      targetKeywords: ['next step'],
      modelAnswer_en: 'What is the next step?',
      modelAnswer_mm: 'နောက်အဆင့် ဘာလဲ။'
    }
  ],
  [
    {
      id: 'biz-d13-beg',
      difficulty: 'beginner',
      title: 'Decision',
      prompt_en: 'Say we made a decision.',
      prompt_mm: 'ဆုံးဖြတ်ချက် ချခဲ့တယ်လို့ ပြောပါ။',
      targetKeywords: ['decision'],
      modelAnswer_en: 'We made a decision.',
      modelAnswer_mm: 'ဆုံးဖြတ်ချက် ချခဲ့တယ်။'
    },
    {
      id: 'biz-d13-int',
      difficulty: 'intermediate',
      title: 'Owner',
      prompt_en: 'Say we assigned an owner.',
      prompt_mm: 'တာဝန်ခံ တင်လိုက်တယ်လို့ ပြောပါ။',
      targetKeywords: ['owner'],
      modelAnswer_en: 'We assigned an owner.',
      modelAnswer_mm: 'တာဝန်ခံ တင်လိုက်တယ်။'
    }
  ],
  [
    {
      id: 'biz-d14-beg',
      difficulty: 'beginner',
      title: 'Timeline',
      prompt_en: 'Say the timeline is confirmed.',
      prompt_mm: 'အချိန်ဇယား အတည်ပြုထားတယ်လို့ ပြောပါ။',
      targetKeywords: ['timeline'],
      modelAnswer_en: 'The timeline is confirmed.',
      modelAnswer_mm: 'အချိန်ဇယား အတည်ပြုထားတယ်။'
    },
    {
      id: 'biz-d14-int',
      difficulty: 'intermediate',
      title: 'Sign Off',
      prompt_en: 'Ask to sign off the work.',
      prompt_mm: 'အလုပ်ကို အတည်ပြုပိတ်သိမ်းဖို့ မေးပါ။',
      targetKeywords: ['sign off'],
      modelAnswer_en: 'Please sign off the work.',
      modelAnswer_mm: 'အလုပ်ကို အတည်ပြုပိတ်သိမ်းပါ။'
    }
  ]
];

const partySchool: SpeakingPrompt[][] = [
  [
    {
      id: 'ps-d1-beg',
      difficulty: 'beginner',
      title: 'Invite',
      prompt_en: 'Say you got an invite.',
      prompt_mm: 'ဖိတ်ကြားချက် ရခဲ့တယ်လို့ ပြောပါ။',
      targetKeywords: ['invite'],
      modelAnswer_en: 'I got an invite.',
      modelAnswer_mm: 'ဖိတ်ကြားချက် ရခဲ့တယ်။'
    },
    {
      id: 'ps-d1-int',
      difficulty: 'intermediate',
      title: 'Hangout',
      prompt_en: 'Ask friends to hangout after class.',
      prompt_mm: 'အတန်းပြီးရင် hangout လုပ်ဖို့ မေးပါ။',
      targetKeywords: ['hangout', 'class'],
      modelAnswer_en: 'Do you want to hangout after class?',
      modelAnswer_mm: 'အတန်းပြီးရင် hangout လုပ်မလား။'
    }
  ],
  [
    {
      id: 'ps-d2-beg',
      difficulty: 'beginner',
      title: 'Assignment',
      prompt_en: 'Say you have an assignment.',
      prompt_mm: 'အလုပ်တစ်ခု ရှိတယ်လို့ ပြောပါ။',
      targetKeywords: ['assignment'],
      modelAnswer_en: 'I have an assignment.',
      modelAnswer_mm: 'အလုပ်တစ်ခု ရှိတယ်။'
    },
    {
      id: 'ps-d2-int',
      difficulty: 'intermediate',
      title: 'Group Work',
      prompt_en: 'Say we do group work today.',
      prompt_mm: 'ဒီနေ့ အဖွဲ့လိုက်လုပ်တယ်လို့ ပြောပါ။',
      targetKeywords: ['group work', 'today'],
      modelAnswer_en: 'We do group work today.',
      modelAnswer_mm: 'ဒီနေ့ အဖွဲ့လိုက်လုပ်တယ်။'
    }
  ],
  [
    {
      id: 'ps-d3-beg',
      difficulty: 'beginner',
      title: 'Party',
      prompt_en: 'Say the party is tonight.',
      prompt_mm: 'ဒီည ပါတီရှိတယ်လို့ ပြောပါ။',
      targetKeywords: ['party', 'tonight'],
      modelAnswer_en: 'The party is tonight.',
      modelAnswer_mm: 'ဒီည ပါတီရှိတယ်။'
    },
    {
      id: 'ps-d3-int',
      difficulty: 'intermediate',
      title: 'Music and Dance',
      prompt_en: 'Say you will dance at the party.',
      prompt_mm: 'ပါတီမှာ ကခုန်မယ်လို့ ပြောပါ။',
      targetKeywords: ['dance', 'party'],
      modelAnswer_en: 'I will dance at the party.',
      modelAnswer_mm: 'ပါတီမှာ ကခုန်မယ်။'
    }
  ],
  [
    {
      id: 'ps-d4-beg',
      difficulty: 'beginner',
      title: 'Meet',
      prompt_en: 'Say meet at seven.',
      prompt_mm: 'ခုနှစ်နာရီမှာ တွေ့မယ်လို့ ပြောပါ။',
      targetKeywords: ['meet', 'seven'],
      modelAnswer_en: 'Meet at seven.',
      modelAnswer_mm: 'ခုနှစ်နာရီမှာ တွေ့မယ်။'
    },
    {
      id: 'ps-d4-int',
      difficulty: 'intermediate',
      title: 'Ride',
      prompt_en: 'Say we will get a ride together.',
      prompt_mm: 'အတူတူ စီးနင်းမှုယူမယ်လို့ ပြောပါ။',
      targetKeywords: ['ride', 'together'],
      modelAnswer_en: 'We will get a ride together.',
      modelAnswer_mm: 'အတူတူ စီးနင်းမှုယူမယ်။'
    }
  ],
  [
    {
      id: 'ps-d5-beg',
      difficulty: 'beginner',
      title: 'Library',
      prompt_en: 'Say you study in the library.',
      prompt_mm: 'စာကြည့်တိုက်မှာ စာလေ့လာတယ်လို့ ပြောပါ။',
      targetKeywords: ['library', 'study'],
      modelAnswer_en: 'I study in the library.',
      modelAnswer_mm: 'စာကြည့်တိုက်မှာ စာလေ့လာတယ်။'
    },
    {
      id: 'ps-d5-int',
      difficulty: 'intermediate',
      title: 'Quiz',
      prompt_en: 'Say we have a quiz today.',
      prompt_mm: 'ဒီနေ့ quiz ရှိတယ်လို့ ပြောပါ။',
      targetKeywords: ['quiz', 'today'],
      modelAnswer_en: 'We have a quiz today.',
      modelAnswer_mm: 'ဒီနေ့ quiz ရှိတယ်။'
    }
  ],
  [
    {
      id: 'ps-d6-beg',
      difficulty: 'beginner',
      title: 'Campus',
      prompt_en: 'Say the campus is big.',
      prompt_mm: 'ကျောင်းဝင်းကြီးတယ် လို့ပြောပါ။',
      targetKeywords: ['campus', 'big'],
      modelAnswer_en: 'The campus is big.',
      modelAnswer_mm: 'ကျောင်းဝင်းကြီးတယ်။'
    },
    {
      id: 'ps-d6-int',
      difficulty: 'intermediate',
      title: 'Project',
      prompt_en: 'Say the project is due Friday.',
      prompt_mm: 'ပရောဂျက် သောကြာနေ့ တင်ရမယ်လို့ ပြောပါ။',
      targetKeywords: ['project', 'Friday'],
      modelAnswer_en: 'The project is due Friday.',
      modelAnswer_mm: 'ပရောဂျက် သောကြာနေ့ တင်ရမယ်။'
    }
  ],
  [
    {
      id: 'ps-d7-beg',
      difficulty: 'beginner',
      title: 'Stage',
      prompt_en: 'Say go to the stage.',
      prompt_mm: 'စင်မြင့်ကို သွားပါလို့ ပြောပါ။',
      targetKeywords: ['stage'],
      modelAnswer_en: 'Go to the stage.',
      modelAnswer_mm: 'စင်မြင့်ကို သွားပါ။'
    },
    {
      id: 'ps-d7-int',
      difficulty: 'intermediate',
      title: 'Performance',
      prompt_en: 'Say the performance is great.',
      prompt_mm: 'ဖျော်ဖြေမှုက ကောင်းတယ်လို့ ပြောပါ။',
      targetKeywords: ['performance', 'great'],
      modelAnswer_en: 'The performance is great.',
      modelAnswer_mm: 'ဖျော်ဖြေမှုက ကောင်းတယ်။'
    }
  ],
  [
    {
      id: 'ps-d8-beg',
      difficulty: 'beginner',
      title: 'Exam',
      prompt_en: 'Say the exam is hard.',
      prompt_mm: 'စာမေးပွဲ ခက်တယ်လို့ ပြောပါ။',
      targetKeywords: ['exam', 'hard'],
      modelAnswer_en: 'The exam is hard.',
      modelAnswer_mm: 'စာမေးပွဲ ခက်တယ်။'
    },
    {
      id: 'ps-d8-int',
      difficulty: 'intermediate',
      title: 'Grades',
      prompt_en: 'Say your grade is high.',
      prompt_mm: 'အမှတ်မြင့်တယ်လို့ ပြောပါ။',
      targetKeywords: ['grade', 'high'],
      modelAnswer_en: 'My grade is high.',
      modelAnswer_mm: 'အမှတ်မြင့်တယ်။'
    }
  ],
  [
    {
      id: 'ps-d9-beg',
      difficulty: 'beginner',
      title: 'Game',
      prompt_en: 'Say we watch the game.',
      prompt_mm: 'ကစားပွဲ ကြည့်တယ်လို့ ပြောပါ။',
      targetKeywords: ['game'],
      modelAnswer_en: 'We watch the game.',
      modelAnswer_mm: 'ကစားပွဲ ကြည့်တယ်။'
    },
    {
      id: 'ps-d9-int',
      difficulty: 'intermediate',
      title: 'Cheer',
      prompt_en: 'Say we cheer loudly for our team.',
      prompt_mm: 'အသင်းအတွက် အားပေးတယ်လို့ ပြောပါ။',
      targetKeywords: ['cheer', 'team'],
      modelAnswer_en: 'We cheer loudly for our team.',
      modelAnswer_mm: 'အသင်းအတွက် အားပေးတယ်။'
    }
  ],
  [
    {
      id: 'ps-d10-beg',
      difficulty: 'beginner',
      title: 'Birthday',
      prompt_en: 'Say happy birthday.',
      prompt_mm: 'မွေးနေ့ကို ကောင်းမွန်ပါစေလို့ ပြောပါ။',
      targetKeywords: ['birthday'],
      modelAnswer_en: 'Happy birthday.',
      modelAnswer_mm: 'မွေးနေ့ကို ကောင်းမွန်ပါစေ။'
    },
    {
      id: 'ps-d10-int',
      difficulty: 'intermediate',
      title: 'Surprise',
      prompt_en: 'Say it is a surprise.',
      prompt_mm: 'အံ့ဩစရာပါလို့ ပြောပါ။',
      targetKeywords: ['surprise'],
      modelAnswer_en: 'It is a surprise.',
      modelAnswer_mm: 'အံ့ဩစရာပါ။'
    }
  ],
  [
    {
      id: 'ps-d11-beg',
      difficulty: 'beginner',
      title: 'Thanks',
      prompt_en: 'Say thanks a lot.',
      prompt_mm: 'ကျေးဇူးတင်ပါတယ် လို့ပြောပါ။',
      targetKeywords: ['thanks'],
      modelAnswer_en: 'Thanks a lot.',
      modelAnswer_mm: 'ကျေးဇူးတင်ပါတယ်။'
    },
    {
      id: 'ps-d11-int',
      difficulty: 'intermediate',
      title: 'Congrats',
      prompt_en: 'Say congrats on your win.',
      prompt_mm: 'အနိုင်ရတာ ဂုဏ်ယူပါတယ် လို့ပြောပါ။',
      targetKeywords: ['congrats', 'win'],
      modelAnswer_en: 'Congrats on your win.',
      modelAnswer_mm: 'အနိုင်ရတာ ဂုဏ်ယူပါတယ်။'
    }
  ],
  [
    {
      id: 'ps-d12-beg',
      difficulty: 'beginner',
      title: 'Opinion',
      prompt_en: 'Ask for an opinion.',
      prompt_mm: 'အမြင်မေးပါ။',
      targetKeywords: ['opinion'],
      modelAnswer_en: 'What is your opinion?',
      modelAnswer_mm: 'သင့်အမြင် ဘာလဲ။'
    },
    {
      id: 'ps-d12-int',
      difficulty: 'intermediate',
      title: 'Agree',
      prompt_en: 'Say I agree with you.',
      prompt_mm: 'သဘောတူတယ်လို့ ပြောပါ။',
      targetKeywords: ['agree'],
      modelAnswer_en: 'I agree with you.',
      modelAnswer_mm: 'ငါ သဘောတူတယ်။'
    }
  ],
  [
    {
      id: 'ps-d13-beg',
      difficulty: 'beginner',
      title: 'Suggest',
      prompt_en: 'Say I suggest we go.',
      prompt_mm: 'သွားဖို့ အကြံပြုတယ်လို့ ပြောပါ။',
      targetKeywords: ['suggest'],
      modelAnswer_en: 'I suggest we go.',
      modelAnswer_mm: 'သွားဖို့ အကြံပြုတယ်။'
    },
    {
      id: 'ps-d13-int',
      difficulty: 'intermediate',
      title: 'Decide',
      prompt_en: 'Say we decide together.',
      prompt_mm: 'အတူတူ ဆုံးဖြတ်တယ်လို့ ပြောပါ။',
      targetKeywords: ['decide', 'together'],
      modelAnswer_en: 'We decide together.',
      modelAnswer_mm: 'အတူတူ ဆုံးဖြတ်တယ်။'
    }
  ],
  [
    {
      id: 'ps-d14-beg',
      difficulty: 'beginner',
      title: 'Good Luck',
      prompt_en: 'Say good luck on your exam.',
      prompt_mm: 'စာမေးပွဲ ကံကောင်းပါစေ လို့ပြောပါ။',
      targetKeywords: ['good luck', 'exam'],
      modelAnswer_en: 'Good luck on your exam.',
      modelAnswer_mm: 'စာမေးပွဲ ကံကောင်းပါစေ။'
    },
    {
      id: 'ps-d14-int',
      difficulty: 'intermediate',
      title: 'Promise',
      prompt_en: 'Say I promise to come.',
      prompt_mm: 'လာမယ်လို့ ကတိပေးတယ်လို့ ပြောပါ။',
      targetKeywords: ['promise'],
      modelAnswer_en: 'I promise to come.',
      modelAnswer_mm: 'လာမယ်လို့ ကတိပေးတယ်။'
    }
  ]
];

const dailyExpanded = expandPromptSets(daily, TOTAL_DAYS);
const slangExpanded = expandPromptSets(slang, TOTAL_DAYS);
const businessExpanded = expandPromptSets(business, TOTAL_DAYS);
const partySchoolExpanded = expandPromptSets(partySchool, TOTAL_DAYS);

export const speakingPromptsByMode: Record<PracticeMode, SpeakingPrompt[][]> = {
  daily: dailyExpanded,
  slang: slangExpanded,
  business: businessExpanded,
  party_school: partySchoolExpanded
};

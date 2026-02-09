import { GrammarLesson } from '../types';

export const grammarLessons: GrammarLesson[] = [
  {
    topic: 'Articles (a / an / the)',
    explanation_en: 'Use a/an for one thing, and the for a specific thing.',
    explanation_mm: 'a/an ကို တစ်ခုတည်းအတွက်သုံးပြီး the ကို သတ်မှတ်ထားတဲ့အရာအတွက် သုံးပါတယ်။',
    detailed_explanation_mm:
      'a/an ကို အပြင်လူနားမသိသေးတဲ့ တစ်ခုတည်းသောအရာအတွက် သုံးပါတယ်။ "a" ကို သာမန်အသံ (consonant sound) နဲ့ စတဲ့ စကားလုံးမတိုင်ခင်၊ "an" ကို သက်ဝင်အသံ (vowel sound) နဲ့ စတဲ့ စကားလုံးမတိုင်ခင် သုံးပါတယ်။\n\n"the" ကို စကားပြောသူနှစ်ဦးစလုံး သိပြီးသား အရာ၊ သတ်မှတ်ထားတဲ့အရာ၊ သွားပြီးသား နေရာတွေကို ပြောတဲ့အခါ သုံးပါတယ်။\n\nနာမည်ပေါင်းအများ (plural) များနဲ့ မရေရာအကြောင်း (general) ပြောတဲ့အခါ article မလိုနိုင်ပါ။',
    examples: ['I am a student.', 'She has an apple.', 'The book is on the table.'],
    quizzes: [
      {
        question: '___ apple is red.',
        options: ['A', 'An', 'The'],
        correctAnswer: 1,
        explanation: '"Apple" သည် vowel sound နဲ့စတဲ့အတွက် "an" သုံးပါတယ်။'
      },
      {
        question: 'We visited ___ temple near the river.',
        options: ['a', 'an', 'the'],
        correctAnswer: 2,
        explanation: 'သတ်မှတ်ထားတဲ့ temple ကို ပြောနေတာမို့ "the" သုံးပါတယ်။'
      },
      {
        question: 'I want ___ cup of tea.',
        options: ['a', 'an', 'the'],
        correctAnswer: 0,
        explanation: 'မရေရာသော တစ်ခွက် ကို ပြောနေတာမို့ "a" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Subject-Verb Agreement',
    explanation_en: 'The verb changes with singular and plural subjects.',
    explanation_mm: 'Subject တစ်ခုတည်း/အများအတွက် verb ပုံစံကွာပါတယ်။',
    detailed_explanation_mm:
      'He/She/It တစ်ခုတည်းဆိုရင် verb အနောက်မှာ -s/-es ပေါင်းပါတယ်။ I/You/We/They နဲ့ plural subject တွေမှာ -s မပေါင်းပါ။\n\nBe verb မှာ I am, He/She/It is, You/We/They are လို့ ကွာပါတယ်။\n\nSubject ကိုမှန်မှန် သိပြီး verb ကိုအလိုက်သုံးရင် စကားပြောနဲ့ စာရေးရာ အမှားလျော့လာပါလိမ့်မယ်။',
    examples: ['He plays football.', 'They play football.', 'My brother and I are friends.'],
    quizzes: [
      {
        question: 'She ___ to school every day.',
        options: ['go', 'goes', 'going'],
        correctAnswer: 1,
        explanation: 'She တစ်ခုတည်းမို့ "goes" သုံးပါတယ်။'
      },
      {
        question: 'They ___ happy today.',
        options: ['is', 'are', 'am'],
        correctAnswer: 1,
        explanation: 'They နဲ့ "are" သုံးပါတယ်။'
      },
      {
        question: 'My friends ___ English.',
        options: ['study', 'studies', 'studying'],
        correctAnswer: 0,
        explanation: 'Plural subject ဖြစ်လို့ "study" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Present Simple',
    explanation_en: 'Use it for habits and general facts.',
    explanation_mm: 'နေ့စဉ်အလေ့အကျင့်နဲ့ ယေဘုယျအမှန်တွေမှာ သုံးပါတယ်။',
    detailed_explanation_mm:
      'Present Simple ကို လုပ်လေ့ရှိတဲ့အလုပ်၊ အချိန်ဇယားနဲ့ ယေဘုယျ အမှန်တွေကို ပြောတဲ့အခါ သုံးပါတယ်။\n\nHe/She/It နဲ့ verb မှာ -s/-es ပေါင်းရပါတယ်။ I/You/We/They နဲ့တော့ မပေါင်းပါ။\n\nအချိန်ကိန်းအဖြစ် always, usually, often, every day စတဲ့ စကားလုံးတွေကို တိုးပြီးသုံးတတ်ကြပါတယ်။',
    examples: ['I get up at 6.', 'She drinks tea every morning.', 'The sun rises in the east.'],
    quizzes: [
      {
        question: 'He ___ to work by bus.',
        options: ['go', 'goes', 'going'],
        correctAnswer: 1,
        explanation: 'He နဲ့ -s ပေါင်းပြီး "goes" သုံးပါတယ်။'
      },
      {
        question: 'We ___ English on Mondays.',
        options: ['study', 'studies', 'studying'],
        correctAnswer: 0,
        explanation: 'We နဲ့ verb base form "study" သုံးပါတယ်။'
      },
      {
        question: 'The store ___ at 9 AM.',
        options: ['open', 'opens', 'opening'],
        correctAnswer: 1,
        explanation: 'The store တစ်ခုတည်းမို့ "opens" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Present Continuous',
    explanation_en: 'Use it for actions happening now.',
    explanation_mm: 'လက်ရှိ ဖြစ်နေတဲ့အလုပ်တွေမှာ သုံးပါတယ်။',
    detailed_explanation_mm:
      'Present Continuous ကို "now" လက်ရှိဖြစ်နေတဲ့အလုပ်များအတွက် သုံးပါတယ်။ ပုံစံက be (am/is/are) + verb-ing ဖြစ်ပါတယ်။\n\nI am + ing, He/She/It is + ing, You/We/They are + ing လို့ သုံးရပါတယ်။\n\n"now", "right now", "at the moment" စတဲ့ အချိန်ပြ စကားလုံးတွေ မကြာခဏ တွေ့ရပါတယ်။',
    examples: ['I am studying now.', 'She is cooking dinner.', 'They are playing outside.'],
    quizzes: [
      {
        question: 'He ___ TV right now.',
        options: ['watch', 'watches', 'is watching'],
        correctAnswer: 2,
        explanation: 'Present Continuous ဖြစ်လို့ "is watching" သုံးပါတယ်။'
      },
      {
        question: 'We ___ lunch at the moment.',
        options: ['eat', 'eats', 'are eating'],
        correctAnswer: 2,
        explanation: 'We နဲ့ "are eating" သုံးပါတယ်။'
      },
      {
        question: 'I ___ a call now.',
        options: ['am making', 'make', 'made'],
        correctAnswer: 0,
        explanation: 'I နဲ့ "am making" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Past Simple',
    explanation_en: 'Use it for finished actions in the past.',
    explanation_mm: 'ပြီးသွားတဲ့ အတိတ်အလုပ်တွေကို ပြောတဲ့အခါ သုံးပါတယ်။',
    detailed_explanation_mm:
      'Past Simple ကို အတိတ်မှာပြီးဆုံးသွားတဲ့လုပ်ဆောင်မှုများအတွက် သုံးပါတယ်။ Regular verbs တွေမှာ -ed ပေါင်းပြီး, irregular verbs တွေမှာ ပုံစံပြောင်းပါတယ်။\n\nYesterday, last night, last week စတဲ့ အတိတ်အချိန်ပြ စကားလုံးတွေ အတူတကွ တွေ့ရပါတယ်။\n\nမေးခွန်း၊ အပယ်ဝါကျမှာ did/didn\'t ကို သုံးပြီး verb base form ပြန်သုံးပါတယ်။',
    examples: ['I visited my aunt yesterday.', 'She cooked rice.', 'They went to the market.'],
    quizzes: [
      {
        question: 'We ___ football last Sunday.',
        options: ['play', 'played', 'playing'],
        correctAnswer: 1,
        explanation: 'Past Simple ဖြစ်လို့ "played" သုံးပါတယ်။'
      },
      {
        question: 'He ___ to school yesterday.',
        options: ['go', 'went', 'goes'],
        correctAnswer: 1,
        explanation: 'go ရဲ့ past ပုံစံ "went" သုံးပါတယ်။'
      },
      {
        question: 'Did you ___ the movie?',
        options: ['watched', 'watch', 'watching'],
        correctAnswer: 1,
        explanation: 'Did နဲ့ verb base form "watch" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Future with will',
    explanation_en: 'Use will for future plans or predictions.',
    explanation_mm: 'အနာဂတ်အစီအစဉ်/ခန့်မှန်းချက်တွေမှာ will သုံးပါတယ်။',
    detailed_explanation_mm:
      'Future tense မှာ will + verb base form နဲ့ သုံးပါတယ်။ အနာဂတ်အစီအစဉ် သို့မဟုတ် ခန့်မှန်းချက်တွေကို ပြောရာမှာ သက်ဝင်ပါတယ်။\n\nမေးခွန်းမှာ Will + subject + verb, အပယ်မှာ will not (won\'t) သုံးပါတယ်။\n\nTomorrow, next week စတဲ့ အနာဂတ်အချိန်ပြ စကားလုံးတွေကို တွေ့ရနိုင်ပါတယ်။',
    examples: ['I will call you tomorrow.', 'It will rain today.', 'We will study after dinner.'],
    quizzes: [
      {
        question: 'She ___ help you later.',
        options: ['will', 'is', 'was'],
        correctAnswer: 0,
        explanation: 'Future ဖြစ်လို့ "will" သုံးပါတယ်။'
      },
      {
        question: 'They ___ not be late.',
        options: ['will', 'do', 'did'],
        correctAnswer: 0,
        explanation: 'Future negative မှာ will not သုံးပါတယ်။'
      },
      {
        question: 'Will you ___ me tomorrow?',
        options: ['calling', 'call', 'called'],
        correctAnswer: 1,
        explanation: 'Will နဲ့ verb base form "call" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Countable / Uncountable',
    explanation_en: 'Countable nouns use many; uncountable use much.',
    explanation_mm: 'ရေတွက်ရတဲ့ နာမဝိသေသနှင့် မရေတွက်ရတဲ့ နာမဝိသေသကွာပါတယ်။',
    detailed_explanation_mm:
      'Countable nouns (book, apple) ကို တစ်ခု၊ နှစ်ခု လို့ ရေတွက်နိုင်ပါတယ်။ Uncountable nouns (water, rice) ကို ရေတွက်လို့ မရပါ။\n\nCountable နဲ့ many/few သုံးပြီး, uncountable နဲ့ much/little သုံးပါတယ်။\n\nSome/any ကို နှစ်မျိုးလုံးနဲ့ အသုံးပြုနိုင်ပါတယ်။',
    examples: ['I have many books.', 'She drinks much water.', 'We need some rice.'],
    quizzes: [
      {
        question: 'How ___ sugar do you want?',
        options: ['many', 'much', 'few'],
        correctAnswer: 1,
        explanation: 'Sugar က uncountable ဖြစ်လို့ "much" သုံးပါတယ်။'
      },
      {
        question: 'There are ___ chairs in the room.',
        options: ['much', 'many', 'little'],
        correctAnswer: 1,
        explanation: 'Chairs က countable ဖြစ်လို့ "many" သုံးပါတယ်။'
      },
      {
        question: 'We need ___ water.',
        options: ['some', 'many', 'few'],
        correctAnswer: 0,
        explanation: 'Water က uncountable ဖြစ်ပြီး "some" သုံးနိုင်ပါတယ်။'
      }
    ]
  },
  {
    topic: 'Prepositions of Place',
    explanation_en: 'Use in/on/at to show place.',
    explanation_mm: 'နေရာကို ဖော်ပြရာမှာ in/on/at သုံးပါတယ်။',
    detailed_explanation_mm:
      'In ကို အတွင်းပိုင်းနေရာ (room, city) တွေနဲ့ သုံးပါတယ်။ On ကို မျက်နှာပြင်ပေါ် (table, wall) နဲ့ သုံးပါတယ်။ At ကို သတ်မှတ်ထားတဲ့နေရာ (bus stop, school) နဲ့ သုံးပါတယ်။\n\nBesides, next to, between, under စတဲ့ prepositions တွေက အရာအစား အနေအထားကို ဖော်ပြပါတယ်။\n\nနေရာဖော်ပြရာမှာ အရာနှစ်ခုရဲ့ ဆက်နွယ်မှုကို စဉ်းစားပြီး preposition ကို ရွေးချယ်ရပါတယ်။',
    examples: ['The cat is under the chair.', 'The book is on the table.', 'She is at the bus stop.'],
    quizzes: [
      {
        question: 'The keys are ___ the bag.',
        options: ['in', 'on', 'at'],
        correctAnswer: 0,
        explanation: 'Bag အတွင်းမှာဆို "in" သုံးပါတယ်။'
      },
      {
        question: 'The picture is ___ the wall.',
        options: ['in', 'on', 'at'],
        correctAnswer: 1,
        explanation: 'Wall ပေါ်မှာဆို "on" သုံးပါတယ်။'
      },
      {
        question: 'He is waiting ___ the door.',
        options: ['at', 'in', 'on'],
        correctAnswer: 0,
        explanation: 'သတ်မှတ်ထားတဲ့နေရာမှာဆို "at" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Prepositions of Time',
    explanation_en: 'Use at/on/in for time expressions.',
    explanation_mm: 'အချိန်ပြောရာမှာ at/on/in သုံးပါတယ်။',
    detailed_explanation_mm:
      'At ကို တိတိကျကျအချိန် (at 7:00) နဲ့ သုံးပါတယ်။ On ကို နေ့ရက် (on Monday) နဲ့ သုံးပါတယ်။ In ကို လ/နှစ်/နာရီပိုင်း (in June, in 2025, in the morning) နဲ့ သုံးပါတယ်။\n\nBefore/after ကို အချိန်ရှေ့/နောက် အစီအစဉ်ပြဖို့ သုံးပါတယ်။\n\nအချိန်ဆိုတာ အကွာအဝေးအလိုက် preposition ကို ရွေးချယ်ရပါတယ်။',
    examples: ['I wake up at 6.', 'We meet on Friday.', 'She studies in the evening.'],
    quizzes: [
      {
        question: 'We have class ___ Monday.',
        options: ['at', 'on', 'in'],
        correctAnswer: 1,
        explanation: 'နေ့ရက်ဆို "on" သုံးပါတယ်။'
      },
      {
        question: 'He sleeps ___ night.',
        options: ['at', 'in', 'on'],
        correctAnswer: 1,
        explanation: 'ညကာလဆို "in" သုံးပါတယ်။'
      },
      {
        question: 'She arrives ___ 7:30.',
        options: ['at', 'on', 'in'],
        correctAnswer: 0,
        explanation: 'တိတိကျကျအချိန်ဆို "at" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Adjective Order',
    explanation_en: 'Adjectives follow a common order before the noun.',
    explanation_mm: 'Adjective တွေကို စဉ်လိုက်ပေါင်းရပါတယ်။',
    detailed_explanation_mm:
      'Adjective တွေကို အစဉ်လိုက် စီစဉ်ရင် စာနားလည်လွယ်ပါတယ်။ အများအားဖြင့် Opinion > Size > Age > Color > Noun အစဉ်အတိုင်း သုံးပါတယ်။\n\nဥပမာ "a beautiful small old white house" လို့ ပြောရင် ပိုမိုသဘာဝကျပါတယ်။\n\nလုံးဝမရောလို့မဟုတ်ပေမယ့် အစဉ်လိုက်သုံးရင် အင်္ဂလိပ်အသံထွက်သဘာဝကျလာပါတယ်။',
    examples: ['She has a beautiful small bag.', 'He bought a big old car.', 'We saw a cute white cat.'],
    quizzes: [
      {
        question: 'a ___ red car',
        options: ['red small', 'small red', 'small old red'],
        correctAnswer: 1,
        explanation: 'Size မတိုင်ခင် Color ဖြစ်လို့ "small red" သုံးပါတယ်။'
      },
      {
        question: 'a ___ old house',
        options: ['beautiful old', 'old beautiful', 'red old'],
        correctAnswer: 0,
        explanation: 'Opinion က Age မတိုင်ခင်ဖြစ်လို့ "beautiful old" သုံးပါတယ်။'
      },
      {
        question: 'a ___ bag',
        options: ['new small', 'small new', 'small blue new'],
        correctAnswer: 1,
        explanation: 'Size က Age မတိုင်ခင်ဖြစ်လို့ "small new" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Comparatives',
    explanation_en: 'Use -er or more to compare two things.',
    explanation_mm: 'နှစ်ခုကို နှိုင်းယှဉ်ရာမှာ -er / more သုံးပါတယ်။',
    detailed_explanation_mm:
      'Adjective တစ်လုံး သို့မဟုတ် အတို adjective တွေမှာ -er ပေါင်းပြီး "than" နဲ့ နှိုင်းယှဉ်ပါတယ် (taller than)။\n\nအရှည် adjective တွေမှာ more + adjective သုံးပါတယ် (more beautiful than)။\n\nနှိုင်းယှဉ်ရာမှာ နှိုင်းယှဉ်အရာနှစ်ခုကိုရှင်းလင်းစွာ ဖော်ပြပါ။',
    examples: ['This book is cheaper than that one.', 'He is taller than me.', 'My phone is more expensive than yours.'],
    quizzes: [
      {
        question: 'The river is ___ than the lake.',
        options: ['longer', 'more long', 'longest'],
        correctAnswer: 0,
        explanation: 'Short adjective ဖြစ်လို့ "longer" သုံးပါတယ်။'
      },
      {
        question: 'She is ___ than her sister.',
        options: ['more careful', 'carefuler', 'most careful'],
        correctAnswer: 0,
        explanation: 'Long adjective ဖြစ်လို့ "more careful" သုံးပါတယ်။'
      },
      {
        question: 'This bag is ___ than that bag.',
        options: ['heavier', 'heavyest', 'more heavy'],
        correctAnswer: 0,
        explanation: 'Short adjective ဖြစ်လို့ "heavier" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Imperatives',
    explanation_en: 'Use the base verb to give commands.',
    explanation_mm: 'အမိန့်/တောင်းဆိုမှုအတွက် base verb သုံးပါတယ်။',
    detailed_explanation_mm:
      'Imperative sentence တွေမှာ subject မပါဘဲ verb base form နဲ့ စပါသည်။ "Sit down." "Open the door." လိုမျိုးပါ။\n\nမလုပ်ရန် တားမြစ်ချင်ရင် "Don\'t + verb" သုံးပါတယ်။\n\nအမိန့်မဟုတ်ဘဲ ယဉ်ကျေးမှုရှိစေဖို့ "Please" ထည့်ပြီး သုံးနိုင်ပါတယ်။',
    examples: ['Please sit down.', 'Open the window.', 'Don\'t touch that.'],
    quizzes: [
      {
        question: '___ your homework.',
        options: ['Do', 'Doing', 'Does'],
        correctAnswer: 0,
        explanation: 'Imperative ဖြစ်လို့ base verb "Do" သုံးပါတယ်။'
      },
      {
        question: '___ run in the hallway.',
        options: ['Don\'t', 'Doesn\'t', 'Didn\'t'],
        correctAnswer: 0,
        explanation: 'တားမြစ်ရင် "Don\'t" သုံးပါတယ်။'
      },
      {
        question: 'Please ___ the door.',
        options: ['close', 'closed', 'closing'],
        correctAnswer: 0,
        explanation: 'Please နဲ့ base verb "close" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'Modal can / can\'t',
    explanation_en: 'Use can for ability and can\'t for inability.',
    explanation_mm: 'လုပ်နိုင်မှုအတွက် can, မလုပ်နိုင်မှုအတွက် can\'t သုံးပါတယ်။',
    detailed_explanation_mm:
      'Can ကို လုပ်နိုင်တဲ့စွမ်းရည်၊ ခွင့်ပြုချက်ကို ပြောရာမှာ သုံးပါတယ်။ Can\'t (cannot) ကို မလုပ်နိုင်မှု သို့မဟုတ် မခွင့်ပြုမှုကို ပြောရာမှာ သုံးပါတယ်။\n\nCan/Can\'t နောက်မှာ verb base form သုံးပါတယ်။\n\nမေးခွန်းမှာ "Can you…?" လို့ စတင်မေးပြီး အဖြေမှာ "Yes, I can." "No, I can\'t." လို့ ဖြေနိုင်ပါတယ်။',
    examples: ['I can swim.', 'She can\'t drive.', 'Can you help me?'],
    quizzes: [
      {
        question: 'He ___ play the guitar.',
        options: ['can', 'cans', 'can\'t to'],
        correctAnswer: 0,
        explanation: 'Can နောက်မှာ base verb သုံးပါတယ်။'
      },
      {
        question: 'I ___ see without glasses.',
        options: ['can\'t', 'can', 'cans'],
        correctAnswer: 0,
        explanation: 'မလုပ်နိုင်မှုဖြစ်လို့ "can\'t" သုံးပါတယ်။'
      },
      {
        question: '___ you speak English?',
        options: ['Can', 'Do', 'Are'],
        correctAnswer: 0,
        explanation: 'စွမ်းရည်မေးတာမို့ "Can" သုံးပါတယ်။'
      }
    ]
  },
  {
    topic: 'WH-Questions',
    explanation_en: 'Use what/where/when/who/why/how to ask questions.',
    explanation_mm: 'မေးခွန်းကို what/where/when/who/why/how နဲ့ မေးပါတယ်။',
    detailed_explanation_mm:
      'What (ဘာ), Where (ဘယ်မှာ), When (ဘယ်အချိန်), Who (ဘယ်သူ), Why (ဘာကြောင့်), How (ဘယ်လို) ဆိုတဲ့ WH words တွေကို မေးခွန်းမှာ သုံးပါတယ်။\n\nပုံမှန်ပုံစံက WH + auxiliary + subject + verb ဖြစ်ပါတယ်။\n\nWH question တွေကို လေ့ကျင့်ရင် အပြောလေ့ကျင့်မှု ပိုတိုးတက်လာပါတယ်။',
    examples: ['Where do you live?', 'What is your name?', 'Why are you late?'],
    quizzes: [
      {
        question: '___ do you go to school?',
        options: ['When', 'Why', 'How'],
        correctAnswer: 0,
        explanation: 'အချိန်မေးခြင်းမို့ "When" သုံးပါတယ်။'
      },
      {
        question: '___ is she?',
        options: ['Who', 'Where', 'What'],
        correctAnswer: 0,
        explanation: 'လူကိုမေးတာမို့ "Who" သုံးပါတယ်။'
      },
      {
        question: '___ do you feel today?',
        options: ['How', 'Why', 'When'],
        correctAnswer: 0,
        explanation: 'အခြေအနေမေးတာမို့ "How" သုံးပါတယ်။'
      }
    ]
  }
];

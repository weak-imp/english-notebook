export const content = {
  simple: {
    past: {
      affirmative: {
        schema: ["Subject + V2"],
        example: [
          "They watched a movie yesterday.",
          "She wrote a letter last night.",
        ],
        explanation: [],
      },
      negative: {
        schema: ["Subject + did + not + verb"],
        example: [
          "They didn't watch a movie yesterday.",
          "She didn't write a letter last night.",
        ],
        explanation: [],
      },
      question: {
        schema: ["(Question word) + did + subject + verb?"],
        example: ["Did they watch a movie yesterday?", "What did she write?"],
        explanation: [],
      },
    },
    present: {
      affirmative: {
        schema: ["I/You/We/They + verb", "He/She/It + verb-s/es"],
        example: [
          "She reads books every day.",
          "They play football on weekends.",
        ],
        explanation: [],
      },
      negative: {
        schema: [
          "I/You/We/They + do + not + verb",
          "He/She/It + does + not + verb",
        ],
        example: [
          "She doesn't read books every day.",
          "They don't play football on weekends.",
        ],
        explanation: [],
      },
      question: {
        schema: [
          "(Question word) + do + I/You/We/They + verb?",
          "(Question word) + does + He/She/It + verb?",
        ],
        example: [
          "Does she read books every day?",
          "Where do they play football?",
        ],
        explanation: [],
      },
    },
    future: {
      affirmative: {
        schema: ["Subject + will + verb"],
        example: [
          "She will call you tomorrow.",
          "They will travel to Spain next year.",
        ],
        explanation: [],
      },
      negative: {
        schema: ["Subject + will + not + verb"],
        example: [
          "She won’t call you tomorrow.",
          "They won’t travel to Spain next year.",
        ],
        explanation: [],
      },
      question: {
        schema: ["(Question word) + will + subject + verb?"],
        example: [
          "Will she call you tomorrow?",
          "Where will they travel next year?",
        ],
        explanation: [],
      },
    },
  },
  continuous: {
    past: {
      affirmative: {
        schema: [
          "I/He/She/It + was + verb-ing",
          "You/We/They + were + verb-ing",
        ],
        example: [
          "I was reading a book at 8 PM yesterday.",
          "They were playing football when it started to rain.",
        ],
        explanation: [],
      },
      negative: {
        schema: [
          "I/He/She/It + was + not + verb-ing",
          "You/We/They + were + not + verb-ing",
        ],
        example: [
          "I wasn’t reading a book at 8 PM.",
          "They weren’t playing football when it rained.",
        ],
        explanation: [],
      },
      question: {
        schema: [
          "(Question word) + was + I/He/She/It + verb-ing?",
          "(Question word) + were + You/We/They + verb-ing?",
        ],
        example: ["Was I reading a book at 8 PM?", "Where were they playing?"],
        explanation: [],
      },
    },
    present: {
      affirmative: {
        schema: ["Subject + am/is/are + verb-ing"],
        example: [
          "She is watching TV right now.",
          "They are studying for their exams.",
        ],
        explanation: [],
      },
      negative: {
        schema: ["Subject + am/is/are + not + verb-ing"],
        example: [
          "She isn’t watching TV right now.",
          "They aren’t studying for their exams.",
        ],
        explanation: [],
      },
      question: {
        schema: ["(Question word) + am/is/are + subject + verb-ing?"],
        example: ["Is she watching TV?", "Why aren’t they studying?"],
        explanation: [],
      },
    },
    future: {
      affirmative: {
        schema: ["Subject + will + be + verb-ing"],
        example: [
          "She will be sleeping at midnight.",
          "They will be traveling to Italy this time next week.",
        ],
        explanation: [],
      },
      negative: {
        schema: ["Subject + will + not + be + verb-ing"],
        example: [
          "She won’t be sleeping at midnight.",
          "They won’t be traveling to Italy next week.",
        ],
        explanation: [],
      },
      question: {
        schema: ["(Question word) + will + subject + be + verb-ing?"],
        example: [
          "Will she be sleeping at midnight?",
          "Where will they be traveling?",
        ],
        explanation: [],
      },
    },
  },
  perfect: {
    past: {
      affirmative: {
        schema: ["Subject + had + past participle (V3)"],
        example: [
          "She had finished her work before the meeting started.",
          "They had visited Paris twice before moving there.",
        ],
        explanation: [],
      },
      negative: {
        schema: ["Subject + had + not + past participle (V3)"],
        example: [
          "She hadn’t finished her work before the meeting.",
          "They hadn’t visited Paris before last year.",
        ],
        explanation: [],
      },
      question: {
        schema: ["(Question word) + had + subject + past participle (V3)"],
        example: [
          "Why hadn’t she finished it earlier?",
          "Had they visited Paris before?",
        ],
        explanation: [],
      },
    },
    present: {
      affirmative: {
        schema: [
          "I/You/We/They + have + past participle (V3)",
          "He/She/It + has + past participle (V3)",
        ],
        example: [
          "She has written three books so far.",
          "They have traveled to five countries this year.",
        ],
        explanation: [],
      },
      negative: {
        schema: [
          "I/You/We/They + have + not + past participle (V3)",
          "He/She/It + has + not + past participle (V3)",
        ],
        example: [
          "She hasn’t written any books yet.",
          "They haven’t traveled abroad this year.",
        ],
        explanation: [],
      },
      question: {
        schema: [
          "(Question word) + have + I/You/We/They + past participle (V3)",
          "(Question word) + has + He/She/It + past participle (V3)",
        ],
        example: [
          "How many books has she written?",
          "Have they traveled this year?",
        ],
        explanation: [],
      },
    },
    future: {
      affirmative: {
        schema: ["Subject + will + have + past participle (V3)"],
        example: [
          "They will have saved enough money for a house in two years.",
          "He will have worked here for a decade by 2025.",
        ],
        explanation: [],
      },
      negative: {
        schema: ["Subject + will + not + have + past participle (V3)"],
        example: [
          "They won’t have saved enough money by next year.",
          "He won’t have retired by 2030.",
        ],
        explanation: [],
      },
      question: {
        schema: [
          "(Question word) + will + subject  + have + past participle (V3)",
        ],
        example: [
          "How much will they have saved?",
          "Will he have worked here for 10 years?",
        ],
        explanation: [],
      },
    },
  },
  "perfect continuous": {
    past: {
      affirmative: {
        schema: ["Subject + had + been + verb-ing"],
        example: [
          "She had been studying for hours before the exam.",
          "They had been waiting at the airport for three hours.",
        ],
        explanation: [],
      },
      negative: {
        schema: ["Subject + had + not + been + verb-ing"],
        example: ["She hadn’t been studying long before the exam."],
        explanation: [],
      },
      question: {
        schema: [
          "(Question) + had + subject + been + verb-ing?",
          "They hadn’t been waiting for more than an hour.",
        ],
        example: [
          "Had she been studying long?",
          "Why had they been waiting so long?",
        ],
        explanation: [],
      },
    },
    present: {
      affirmative: {
        schema: [
          "I/You/We/They + have + been + verb-ing",
          "He/She/It + has + been + verb-ing",
        ],
        example: [
          "She has been painting all morning.",
          "They have been living in Berlin since 2020.",
        ],
        explanation: [],
      },
      negative: {
        schema: [
          "I/You/We/They + have + not + been + verb-ing",
          "He/She/It + has + not + been + verb-ing",
        ],
        example: [
          "She hasn’t been painting lately.",
          "They haven’t been living there for long.",
        ],
        explanation: [],
      },
      question: {
        schema: [
          "(Question word) + have + I/You/We/They + been + verb-ing?",
          "(Question word) + has + He/She/It + been + verb-ing?",
        ],
        example: [
          "Has she been painting long?",
          "How long have they been living there?",
        ],
        explanation: [],
      },
    },
    future: {
      affirmative: {
        schema: ["Subject + will + have + been + verb-ing"],
        example: [
          "She will have been working here for 5 years by next month.",
          "They will have been traveling for a year by next summer.",
        ],
        explanation: [],
      },
      negative: {
        schema: ["Subject + will + not + have + been + verb-ing"],
        example: [
          "She won’t have been working here for long by then.",
          "They won’t have been traveling for a full year yet.",
        ],
        explanation: [],
      },
      question: {
        schema: ["(Question word) + will + subject + have + been + verb-ing?"],
        example: [
          "Will she have been working here for 5 years?",
          "Where will they have been traveling?",
        ],
        explanation: [],
      },
    },
  },
};

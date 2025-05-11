import { CONTENT_TYPES, SENTENCE_TYPES, TENSES } from "./const";

export type ContentType = (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES];
type Tense = (typeof TENSES)[keyof typeof TENSES];
type SentenceType = (typeof SENTENCE_TYPES)[keyof typeof SENTENCE_TYPES];

export function isContentType(value: string): value is ContentType {
  return ["schema", "example", "explanation"].includes(value);
}
export type Tenses = keyof ContentTense;
export type SentenceForms = keyof ContentSentenceForms;
export type AspectNames = keyof ContentStructure;

type ContentData = {
  [key in ContentType]: string[];
};

export interface ContentSentenceForms {
  affirmative: ContentData;
  negative: ContentData;
  question: ContentData;
}

export type ContentTense = {
  past: ContentSentenceForms;
  present: ContentSentenceForms;
  future: ContentSentenceForms;
};

export type ContentStructure = {
  simple: ContentTense;
  continuous: ContentTense;
  perfect: ContentTense;
  "perfect continuous": ContentTense;
};

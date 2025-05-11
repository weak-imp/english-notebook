import clsx from "clsx";
import classes from "./classes.module.css";
import { content } from "src/04_entities/tense-chart/model/content";
import {
  SENTENCE_TYPES,
  TENSES,
} from "src/04_entities/tense-chart/model/const";
import {
  AspectNames,
  ContentTense,
  ContentType,
  SentenceForms,
  Tenses,
} from "src/04_entities/tense-chart/model/types";
import { capitalize } from "src/05_shared/lib";
import { ReactNode } from "react";
import { useContentTypeContext } from "src/04_entities/tense-chart/model/content-type-context";

export function TenseChart() {
  const { contentType, setContentType } = useContentTypeContext();

  return (
    <>
      <div
        className={clsx(
          classes["table-container"],
          classes["table-container--desktop"]
        )}
      >
        <HeaderRow />

        <AspectBlock
          aspectName="simple"
          content={content.simple}
          contentType={contentType}
        />
        <AspectBlock
          aspectName="continuous"
          content={content.continuous}
          contentType={contentType}
        />
        <AspectBlock
          aspectName="perfect"
          content={content.perfect}
          contentType={contentType}
        />
        <AspectBlock
          aspectName="perfect continuous"
          content={content["perfect continuous"]}
          contentType={contentType}
        />
      </div>

      <div
        className={clsx(
          classes["table-container"],
          classes["table-container--mobile"]
        )}
      >
        <AspectMainMobile aspect="simple" contentType={contentType} />
        <AspectMainMobile aspect="continuous" contentType={contentType} />
        <AspectMainMobile aspect="perfect" contentType={contentType} />
        <AspectMainMobile
          aspect="perfect continuous"
          contentType={contentType}
        />
      </div>
    </>
  );
}

function HeaderRow() {
  return (
    <>
      <Cell className={classes["header-cell"]}></Cell>
      <Cell className={classes["header-cell"]}></Cell>
      <VerbTenseHeader tense={TENSES.PAST} />
      <VerbTenseHeader tense={TENSES.PRESENT} />
      <VerbTenseHeader tense={TENSES.FUTURE} />
    </>
  );
}

function AspectMainMobile({
  aspect,
  contentType,
}: {
  aspect: AspectNames;
  contentType: ContentType;
}) {
  return (
    <>
      <TenseBlockMobile
        aspect={aspect}
        contentType={contentType}
        tense={TENSES.PAST}
      />
      <TenseBlockMobile
        aspect={aspect}
        contentType={contentType}
        tense={TENSES.PRESENT}
      />
      <TenseBlockMobile
        aspect={aspect}
        contentType={contentType}
        tense={TENSES.FUTURE}
      />
    </>
  );
}

function TenseBlockMobile({
  tense,
  aspect,
  contentType,
}: {
  tense: Tenses;
  aspect: AspectNames;
  contentType: ContentType;
}) {
  return (
    <>
      <Cell className={classes["header-cell"]}></Cell>
      <Cell className={classes["header-cell"]}></Cell>
      <VerbTenseHeader tense={tense} />

      <AspectBlockMobile
        aspectName={capitalize(aspect)}
        content={content[aspect]}
        contentType={contentType}
        tense={tense}
      />
    </>
  );
}

function AspectBlock({
  aspectName,
  content,
  contentType,
}: {
  aspectName: AspectNames;
  content: ContentTense;
  contentType: ContentType;
}) {
  return (
    <>
      <Cell className={classes["aspect"]}>
        <RotatedText text={aspectName} />
      </Cell>

      <AspectSentenceForm
        content={content}
        contentType={contentType}
        sentenceType={SENTENCE_TYPES.AFFIRMATIVE}
      />
      <AspectSentenceForm
        content={content}
        contentType={contentType}
        sentenceType={SENTENCE_TYPES.NEGATIVE}
      />
      <AspectSentenceForm
        content={content}
        contentType={contentType}
        sentenceType={SENTENCE_TYPES.QUESTION}
      />

      <HeaderRow />
    </>
  );
}

function AspectBlockMobile({
  aspectName,
  content,
  contentType,
  tense,
}: {
  aspectName: string;
  content: ContentTense;
  contentType: ContentType;
  tense: Tenses;
}) {
  return (
    <>
      <Cell className={classes["aspect"]}>
        <RotatedText text={aspectName} />
      </Cell>

      <AspectSentenceFormMobile
        content={content}
        contentType={contentType}
        sentenceType={SENTENCE_TYPES.AFFIRMATIVE}
        tense={tense}
      />
      <AspectSentenceFormMobile
        content={content}
        contentType={contentType}
        sentenceType={SENTENCE_TYPES.NEGATIVE}
        tense={tense}
      />
      <AspectSentenceFormMobile
        content={content}
        contentType={contentType}
        sentenceType={SENTENCE_TYPES.QUESTION}
        tense={tense}
      />
    </>
  );
}

function AspectSentenceForm({
  content,
  contentType,
  sentenceType,
}: {
  content: ContentTense;
  contentType: ContentType;
  sentenceType: SentenceForms;
}) {
  return (
    <>
      <Cell className={classes["sentence-type"]}>
        <RotatedText text={sentenceType} />
      </Cell>
      <ContentCell
        contentType={contentType}
        content={content}
        tense={TENSES.PAST}
        sentenceForm={sentenceType}
      />
      <ContentCell
        contentType={contentType}
        content={content}
        tense={TENSES.PRESENT}
        sentenceForm={sentenceType}
      />
      <ContentCell
        contentType={contentType}
        content={content}
        tense={TENSES.FUTURE}
        sentenceForm={sentenceType}
      />
    </>
  );
}

function AspectSentenceFormMobile({
  content,
  contentType,
  sentenceType,
  tense,
}: {
  content: ContentTense;
  contentType: ContentType;
  sentenceType: SentenceForms;
  tense: Tenses;
}) {
  return (
    <>
      <Cell className={classes["sentence-type"]}>
        <RotatedText text={sentenceType} />
      </Cell>
      <ContentCell
        contentType={contentType}
        content={content}
        tense={tense}
        sentenceForm={sentenceType}
      />
    </>
  );
}

function ContentCell({
  contentType,
  content,
  tense,
  sentenceForm,
}: {
  contentType: ContentType;
  content: ContentTense;
  tense: Tenses;
  sentenceForm: SentenceForms;
}) {
  return (
    <Cell>
      <div className={classes["content-cell-wrap"]}>
        {content[tense][sentenceForm][contentType].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </Cell>
  );
}
function Cell({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return <div className={clsx(classes.cell, className)}>{children}</div>;
}

const VerbTenseHeader = ({ tense }: { tense: Tenses }) => (
  <Cell className={classes["header-cell"]}>{capitalize(tense)}</Cell>
);

const RotatedText = ({ text }: { text: string }) => (
  <div className={classes["rotated-text-wrapper"]}>{text}</div>
);

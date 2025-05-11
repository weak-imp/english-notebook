import { ActionIcon, Container, SegmentedControl, Text, Title } from "@mantine/core";
import { useContentTypeContext } from "src/04_entities/tense-chart/model/content-type-context";
import { BottomBar } from "src/05_shared/ui/bottom-bar";
import { TenseChart } from "../../../02_widgets/tense-chart";
import { ScrollButton } from "../../../03_features/scroll-button";
import { CONTENT_TYPES } from "../../../04_entities/tense-chart/model/const";
import { ContentType } from "../../../04_entities/tense-chart/model/types";
import { BaseContainer } from "../../../05_shared/ui/base-container";
import { capitalize } from "../../../05_shared/lib";
import classes from "./classes.module.css";

export function HomePage() {
  const { contentType, setContentType } = useContentTypeContext();

  return (
    <div>
      <main>
        <div className={classes.intro}>
          <Container>
            <Title order={1}>The 12 Basic English Tenses</Title>
            {/* <Text>description</Text> */}
            {/* <Text>Legend: Subject, question word, verb, V2, V3 (past participle), verb-s/es, verb-ing</Text> */}
          </Container>
        </div>

        <BaseContainer>
          <TenseChart />
        </BaseContainer>
        <BottomBar>
          <ContentTypeSelector
            setContentType={setContentType}
            value={contentType}
          />
          <ActionIcon.Group>
            <ScrollButton scrollTo="bottom" />
            <ScrollButton scrollTo="top" />
          </ActionIcon.Group>
        </BottomBar>
      </main>
    </div>
  );
}

const ContentTypeSelector = ({
  value,
  setContentType,
}: {
  value: ContentType;
  setContentType: (value: ContentType) => void;
}) => (
  <SegmentedControl
    value={value}
    onChange={(value) => {
      if (Object.values(CONTENT_TYPES).includes(value as ContentType)) {
        setContentType(value as ContentType);
      }
    }}
    data={Object.values(CONTENT_TYPES).map((type) => ({
      label: capitalize(type),
      value: type,
    }))}
  />
);

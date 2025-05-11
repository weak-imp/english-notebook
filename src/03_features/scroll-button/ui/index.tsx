import { ActionIcon } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export function ScrollButton({ scrollTo }: { scrollTo: "top" | "bottom" }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollTo === "top" ? (
        <ActionIcon onClick={scrollToTop} variant="subtle" m={"0 5px"}>
          <IconChevronUp />
        </ActionIcon>
      ) : (
        <ActionIcon onClick={scrollToBottom} variant="subtle" m={"0 5px"}>
          <IconChevronDown />
        </ActionIcon>
      )}
    </>
  );
}

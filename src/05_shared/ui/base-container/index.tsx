import { Container } from "@mantine/core";
import { ReactNode } from "react";
import classes from "./classes.module.css";

export function BaseContainer({ children }: { children: ReactNode }) {
  return (
    <Container className={classes.container} size={"md"}>
      {children}
    </Container>
  );
}

import { ReactNode } from "react";
import { BaseContainer } from "../base-container";
import classes from "./classes.module.css";

export function BottomBar({ children }: { children: ReactNode }) {
  return (
    <div className={classes["bottom-bar"]}>
      <BaseContainer>
        <div className={classes["content"]}>{children}</div>
        {/* <Button.Group className={classes["btn-group"]}>{children}</Button.Group> */}
      </BaseContainer>
    </div>
  );
}

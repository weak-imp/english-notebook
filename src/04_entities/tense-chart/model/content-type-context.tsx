import { createContext, useContext, useState, ReactNode } from "react";
import { ContentType } from "./types";
import { CONTENT_TYPES } from "./const";

type ContentTypeContextValue = {
  contentType: ContentType;
  setContentType: (value: ContentType) => void;
};

const ContentTypeContext = createContext<ContentTypeContextValue | undefined>(
  undefined
);

export function ContentTypeProvider({ children }: { children: ReactNode }) {
  const [contentType, setContentType] = useState<ContentType>(
    CONTENT_TYPES.SCHEMA
  );

  return (
    <ContentTypeContext.Provider value={{ contentType, setContentType }}>
      {children}
    </ContentTypeContext.Provider>
  );
}

export function useContentTypeContext() {
  const context = useContext(ContentTypeContext);

  if (context === undefined) {
    throw new Error(
      "useContentTypeContext must be used within a ContentTypeProvider"
    );
  }

  return context;
}

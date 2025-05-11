import { ContentTypeProvider } from "src/04_entities/tense-chart/model/content-type-context";
import { HomePage } from "../01_pages/home";
import "./style.css";

const App = () => {
  return (
    <ContentTypeProvider>
      <HomePage />
    </ContentTypeProvider>
  );
};

export default App;

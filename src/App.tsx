import { Container } from "components/Container";
import { Search } from "components/Search";
import { Header } from "components/TheHeader";

function App() {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => {}} />
    </Container>
  );
}

export default App;

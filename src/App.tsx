import { Container } from "components/Container";
import { Search } from "components/Search";
import { Header } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";

function App() {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => {}} />
      <UserCard {...defaultUser} />
    </Container>
  );
}

export default App;

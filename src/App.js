import Header from "./components/Header";
import styled from "styled-components";

const Container = styled.div`
  margin: -7px;
`
function App() {
  return (
    <Container>
      <Header/>
    </Container>
  );
}

export default App;

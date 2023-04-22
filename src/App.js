import Header from "./components/Header";
import Info from "./pages/Info";
import Home from "./pages/Home";

import styled from "styled-components";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Container = styled.div`
  margin: -8px;
`

const StyledBox = styled.div`
  margin: 20px;
`

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header/>
        <StyledBox>
        <Routes>
          <Route path="/info/:num" element={<Info/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        </StyledBox>
      </BrowserRouter>
    </Container>
  );
}

export default App;

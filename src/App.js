import Header from "./components/Header";
import Info from "./pages/Info";
import Home from "./pages/Home";

import styled from "styled-components";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Container = styled.div`
  margin: -8px;
`
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/info/:num" element={<Info/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

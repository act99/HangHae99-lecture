import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BucketListDetail from "./pages/BucketListDetail";
import styled, { keyframes } from "styled-components";
import Progress from "./components/Progress";
function App() {
  return (
    <>
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Progress />
          <Box />
          <Line />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/:id/*" element={<BucketListDetail />} />
          </Routes>
        </Container>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          위로가기
        </button>
      </div>
    </>
  );
}

export default App;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const boxAnimation = keyframes`
  0% {
    border-radius: 0px;
    top: 20px;
    left: 20px;
  }
  50% {
    border-radius: 50px;
    top: 200px;
    left: 200px;
  }
  50% {
    border-radius: 50px;
    top: 700px;
    left: 700px;
  }
  100% {
    border-radius: 0px;
    top: 800px;
    left: 800px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: green;
  border-radius: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 2s 1s infinite linear alternate;
`;

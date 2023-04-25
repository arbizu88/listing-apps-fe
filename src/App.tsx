import styled from "styled-components";
import "./App.css";
import { AppRouter } from "./routes/Router/AppRouter";

function App() {
  return (
    <ContainerDiv className="App">
      <AppRouter />
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(126, 64, 246, 1),
    rgba(80, 139, 252, 1)
  );
`;

export default App;

import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const Advice = styled.div`
  color: var(--Neon-Green, #52ffa8);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  padding-bottom: 24px;
`;
const Border = styled.div`
  width: 200px;
  border-bottom: 1px solid white;
  @media (max-width: 768px) {
    width: 100px;
  }
`;
const BottomLayer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-top: 40px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border: 0px;
  border-radius: 32px;
  background: var(--Neon-Green, #52ffa8);

  @media (max-width: 768px) {
  }
`;
const splashAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`;
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const AnimatedContainer = styled.div`
  animation: ${fadeInAnimation} 2s linear forwards;
`;
const Light = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--Neon-Green, #52ffa8);
  animation: ${splashAnimation} 0.8s linear forwards;
`;
const ButtonDiv = styled.div`
  height: 332px;
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  margin-top: 115px;
`;
const Text = styled.div`
  /* height: 100px; */
  color: var(--Light-Cyan, #cee3e9);
  text-align: center;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.28px;
  padding: 0 24px;
  @media (max-width: 768px) {
    font-size: 24px;
    padding: 0;
  }
`;
interface AdviceData {
  slip: {
    id: number;
    advice: string;
  };
}
function App() {
  const [data, setData] = useState<AdviceData>();

  useEffect((): void => {
    const fetchData = async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      setData(data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <AnimatedContainer className="container">
        <Advice>Advice {data?.slip?.id}</Advice>
        <Text>{data?.slip?.advice}</Text>
        <BottomLayer>
          <Border></Border>
          <img src="./assets/sto.svg" />
          <Border></Border>
        </BottomLayer>
        <ButtonDiv>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            <img src="./assets/asd.svg" />
            <Light className="light-circle" />
          </Button>
        </ButtonDiv>
      </AnimatedContainer>
    </>
  );
}

export default App;

import styled, { keyframes } from "styled-components";


export const LogoAnimation = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["green-500"]};
  background-size: 200%;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
    opacity: 0.9;
    transition: opacity 0.2s;
  }
`;

export const LogoStyled = styled.p`
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(90deg, #00b37e, #00875f, #015f43);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${LogoAnimation} 3s linear infinite;
`;

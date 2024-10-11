import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { RightArrow } from "../assets";

interface ButtonProp {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ children, disabled, onClick }: ButtonProp) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container onClick={onClick} disabled={disabled}>
      {children}
      {width > 1000 && <img src={RightArrow} />}
    </Container>
  );
};

const Container = styled.div<{ disabled?: boolean }>`
  font-size: 28px;
  font-weight: 600;
  padding: 24px 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  gap: 12px;
  width: 100%;
  cursor: pointer;
  color: #000;
  @media (max-width: 1000px) {
    font-size: 16px;
    padding: 14px;
    border-radius: 8px;
  }
  background-color: ${({ disabled }) => (disabled ? "#DED3FB" : "#AE96F5")};
`;

import { styled } from "styled-components";
import { CareersValue } from "../../../utils/Careers";
import { CareerContent } from "../../../components/CareerContent";

export const CareerComponent = () => {
  return (
    <Careers>
      <CareerTitle>
        Team PiCK
        <br />
        인재상
      </CareerTitle>
      <CareerContentWrap>
        {CareersValue.map((item) => (
          <CareerContent {...item} />
        ))}
      </CareerContentWrap>
    </Careers>
  );
};

const CareerContentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 160px;
  row-gap: 110px;
`;

const Careers = styled.div`
  background-color: #242424;
  padding: 180px 120px 180px 200px;
  display: flex;
  gap: 150px;
`;

const CareerTitle = styled.p`
  color: white;
  font-size: 52px;
  font-weight: 600;
  white-space: nowrap;
`;

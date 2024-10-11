import { styled } from "styled-components";
import { CoreVale } from "../../../utils/coreValue";
import { CoreValueContent } from "../../../components/coreValue";

export const CoreValueComponent = () => {
  return (
    <CoreValues>
      <CoreValueTitle>
        Team PiCK
        <br />
        핵심가치
      </CoreValueTitle>
      <CoreValueContentWrap>
        {CoreVale.map((item) => (
          <CoreValueContent {...item} />
        ))}
      </CoreValueContentWrap>
    </CoreValues>
  );
};

const CoreValueContentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 160px;
  row-gap: 110px;
`;

const CoreValues = styled.div`
  background-color: #242424;
  padding: 180px 120px 180px 200px;
  display: flex;
  gap: 150px;
`;

const CoreValueTitle = styled.p`
  color: white;
  font-size: 52px;
  font-weight: 600;
  white-space: nowrap;
`;

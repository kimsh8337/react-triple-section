import styled, { keyframes } from "styled-components";

import { palette } from "../../modules/defines/styles";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 5%); 
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const TripleImgWrapper = styled.div`
  width: 400px;
  height: 338px;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 280px;
  font-size: 15px;
  text-align: center;
  color: ${palette.gray["0"]};
  animation: ${fadeIn} 700ms ease-in-out 0s;
`;

const SectionRightWrapper = styled.div`
  position: relative;
  width: 417px;
  display: flex;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  height: 190px;
  font-size: 36px;
  margin-bottom: ${props => (props.state < 2 && '54px')};
  animation: ${fadeIn} 700ms ease-in-out 0s;
`;

const InfoText = styled.div`
  margin-bottom: 20px;
`;

const InfoMedalImgWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeIn} 700ms ease-in-out 0s;
`;

const ImgTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InfoMedalImg = styled.div`
  width: 54px;
  height: 54px;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 8px;
`;

const InfoMedalText = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: ${palette.gray["1"]};
`;

export const SectionLeftForms = ({ url }) => (
  <TripleImgWrapper url={url}>
    <span>2021년 12년 기준</span>
  </TripleImgWrapper>
);

export const SectionRightFroms = ({ state, info, playstore, applestore, traveler, review, schedule }) => (
  <SectionRightWrapper>
      {state >= 1 && (
      <InfoWrapper state={state}>
        {info.map((value, index) => (
          <InfoText key={index}>
            <strong>
              {index === 0 && value.count - traveler}
              {index === 1 && value.count - review}
              {index === 2 && value.count - schedule}
              {value.border}
            </strong>
            <span>{value.text}</span>
          </InfoText>
        ))}
      </InfoWrapper>
      )}
      {state >= 2 && (
      <InfoMedalImgWrapper>
          <ImgTextWrapper>
            <InfoMedalImg url={playstore} />
            <InfoMedalText>
              2018 구글 플레이스토어 <br />
              올해의 앱 최우수상 수상
            </InfoMedalText>
          </ImgTextWrapper>
          <ImgTextWrapper>
            <InfoMedalImg url={applestore} />
            <InfoMedalText>
              2018 애플 앱스토어 <br />
              오늘의 여행앱 선정
            </InfoMedalText>
          </ImgTextWrapper>
      </InfoMedalImgWrapper>
      )}
  </SectionRightWrapper>
);
import { useEffect, useState } from "react";
import { SectionWrapper } from "../../components/forms/SectionForms.js";
import TripleImg from "../../assets/triple2x.png";
import PlayStore from "../../assets/play-store2x.png";
import AppleStore from "../../assets/badge-apple4x.png";
import { SectionLeftForms, SectionRightFroms } from "../../components/section/Section.js";

const SectionContainer = () => {
  const COUNT_TIME = {
    default: 2000,
    delay: 600,
    delayCnt: 3
  };
  const [state, setState] = useState(0); // 애니매이션 순서
  const [init, setInit] = useState(false);
  const [traveler, setTraveler] = useState(700);
  const [review, setReivew] = useState(100);
  const [schedule, setSchedule] = useState(470);
  const [visible, setVisible] = useState(); // state animation setInterval 값
  const info = [
    {
      count: 700,
      border: "만 명",
      text: "의 여행자",
    },
    {
      count: 100,
      border: "만 개",
      text: "의 여행 리뷰",
    },
    {
      count: 470,
      border: "만 개",
      text: "의 여행 일정",
    },
  ];

  const myInterval = (callback, interval, delay, endpoint) => {
    const tick = (count, duration) => {
      setTimeout(() => {
        if (endpoint && count >= endpoint) {
          return count;
        }
        callback();
        // delay부분에 도달하면 count duration 값 변경
        if (delay && count === delay) {
          tick(count + 1, COUNT_TIME.delay / (endpoint - delay)) 
        } else {
          tick(count + 1, duration);
        }
      }, duration);
    };
    return tick(0, interval);
  };


  useEffect(() => {
    setInit(true);
  }, []);

  useEffect(() => {
    if (init) {
      // 14 ~ 16ms 이하는 브라우져가 인식을 잘 하지 못하기 때문에 끝나는 시점 맞추기 위해 travel 먼저 시작
      const interval = (COUNT_TIME.default - COUNT_TIME.delay) / (info[0].count - COUNT_TIME.delayCnt); // (기본 시간 - 지연 시간) / (기본 값 - 지연시킬 값)
      const delay = info[0].count - COUNT_TIME.delayCnt; // 지연될 위치 값

      myInterval(() => {
        setTraveler(prev => prev - 1);
      }, interval, delay, info[0].count);

      // interval 800ms(애니매이션 동작시간 700ms + 간격 100ms) 설정
      setVisible(setInterval(() => {
        setState(prev => (prev + 1));
      }, 800));

      return () => clearInterval(visible);
    }
  }, [init]);

  useEffect(() => {
    if (state === 1) {
      info.map((value, index) => {
        const interval = (COUNT_TIME.default - COUNT_TIME.delay) / (value.count - COUNT_TIME.delayCnt);
        const delay = value.count - COUNT_TIME.delayCnt;
        if (index === 0) {
          return value;
        } else if (index === 1) {
          myInterval(() => {
            setReivew(prev => prev - 1);
          }, interval, delay, value.count);
        } else if (index === 2) {
          myInterval(() => {
            setSchedule(prev => prev - 1);
          }, interval, delay, value.count);
        }
        return value;
      });
    }
    if (state >= 2) {
      clearInterval(visible);
    }
  }, [state]);

  return (
    <SectionWrapper>
      <SectionLeftForms
        url={TripleImg}
      />
      <SectionRightFroms 
        state={state}
        info={info}
        playstore={PlayStore}
        applestore={AppleStore}
        traveler={traveler}
        review={review}
        schedule={schedule}
      />
    </SectionWrapper>
  );
};

export default SectionContainer;

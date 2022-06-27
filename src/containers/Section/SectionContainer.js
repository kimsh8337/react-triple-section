import { useEffect, useState } from "react";
import { SectionWrapper } from "../../components/forms/SectionForms.js";
import TripleImg from "../../assets/triple2x.png";
import PlayStore from "../../assets/play-store2x.png";
import AppleStore from "../../assets/badge-apple4x.png";
import { SectionLeftForms, SectionRightFroms } from "../../components/section/Section.js";

const SectionContainer = () => {
  const [state, setState] = useState(0);
  const [init, setInit] = useState(false);
  const [traveler, setTraveler] = useState(700);
  const [review, setReivew] = useState(100);
  const [schedule, setSchedule] = useState(470);
  const [timerT, setTimerT] = useState();
  const [timerR, setTimerR] = useState();
  const [timerS, setTimerS] = useState();
  const [visible, setVisible] = useState();
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

  useEffect(() => {
    setInit(true);
  }, []);

  useEffect(() => {
    if (init) {
      setVisible(setInterval(() => {
        setState(prev => (prev + 1));
      }, 800));
      return () => clearInterval(visible);
    }
  }, [init]);

  const handleCounter = (name, type) => {
    if (type === 'start') {
      if (name === 'traveler') {
        const duration = 1700 / (traveler - 2);
        setTimerT(setInterval(() => {
          setTraveler(prev => (prev - 1));
        }, duration));
      } else if (name === 'review') {
        const duration = 1700 / (review - 2);
        setTimerR(setInterval(() => {
          setReivew(prev => (prev - 1));
        }, duration));
      } else if (name === 'schedule') {
        const duration = 1700 / (schedule - 2);
        setTimerS(setInterval(() => {
          setSchedule(prev => (prev - 1));
        }, duration));
      }
    } else if (type === 'end') {
      if (name === 'traveler') {
        clearInterval(timerT);
        const duration = 300 / 2;
        setTimerT(setInterval(() => {
          setTraveler(prev => (prev - 1));
        }, duration));
        return () => clearInterval(timerT);
      } else if (name === 'review') {
        clearInterval(timerR);
        const duration = 300 / 2;
        setTimerR(setInterval(() => {
          setReivew(prev => (prev - 1));
        }, duration));
        return () => clearInterval(timerR);
      } else if (name === 'schedule') {
        clearInterval(timerS);
        const duration = 300 / 2;
        setTimerS(setInterval(() => {
          setSchedule(prev => (prev - 1));
        }, duration));
        return () => clearInterval(timerS);
      }
    }
  };

  useEffect(() => {
    if (state === 1) {
      handleCounter('review', 'start');
      handleCounter('schedule', 'start');
      handleCounter('traveler', 'start');
    }
    if (state >= 2) {
      clearInterval(visible);
    }
  }, [state]);

  useEffect(() => {
    if (traveler === 0) {
      clearInterval(timerT);
    }
    if (traveler ===5) {
      handleCounter('traveler', 'end');
    }
  }, [traveler]);
  useEffect(() => {
    if (review === 0) {
      clearInterval(timerR);
    }
    if (review ===5) {
      handleCounter('review', 'end');
    }
  }, [review]);
  useEffect(() => {
    if (schedule === 0) {
      clearInterval(timerS);
    }
    if (schedule ===5) {
      handleCounter('schedule', 'end');
    }
  }, [schedule]);

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

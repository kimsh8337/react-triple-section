## Triple 사전 과제

### 개발 환경
- React
- JavaScript
- titicacadev/eslint-config-triple

### 프로젝트 실행 방법
```yarn start test:snapshot```

### 사용한 기술과 선택한 이유
- JavaScript: Front-end 개발의 가장 기본이고, 가장 많이 쓰이기 때문에

### 구조
- src
  - components: 스타일 코드
    - form: 전체적인 화면 form style
    - section: section page에 실제로 들어가는 style
  - containers: 로직 코드
    - section: section page에 사용될 로직
  - modules: 모듈화 시켜서 사용할 코드
    - defines: 미리 정의해서 사용할 코드(ex. styles, paths 등)
  - pages: page 

### myInterval
- countup시 setInterval을 쓰지 않고 myInterval이란 함수를 새로 만들어서 사용한 이유는, setInterval은 정확한 delay시간을 보장해 주지않기 때문에, setTimeout + 재귀함수를 이용해 그나마 정확한 delay를 보장해주는 myInterval함수를 구현해서 사용하였다.
- 2초안에 0부터 시작해서 숫자를 countup 시켜주는 duration = (2000 / 숫자)인데 숫자가 클 경우 duration 값은 매우 작아진다. 예를들어, 사전과제에 나온 700은 (2000 / 700) = 2.85...라는 값와 duration 값은 2.85ms로 들어가지만 결과적으로는 2.85ms마다 동작하진 않는다. 그 이유는, 브라우져 및 환경 상태마다 조금씩은 다르지만 보통 14ms ~ 16ms 이하로는 인식을 하지 못하기 때문에 설정해준 2초보다 조금 더 걸린다. 처음에는 동시에 끝나게 하게 위해서 3숫자 모두 100만큼만(600, 0, 370 시작) 카운팅을 해줬는데 명세서상 0부터 시작하라고 나와있어서 수정을 했다. 하지만 큰 숫자의 경우 2초이상 걸리는 부분은 잡지 못해서 700의 경우 먼저 counting을 시작해주는 방법을 택했다.

### 해결방법
- 1씩 증가되는 것이 아니라 0에서 시작점에서는 값이 많이 증가되고 점점 줄어드는 계산식을 이용해 구현
```
useEffect(() => {
      if (init) {
          setIntervalState(setInterval(() => {
              setState(value => value + 1);
          }, 800));
          return () => clearInterval(intervalState);
      }
  }, [init]);

  const counter = (value, max) => {
      let now = max;

      const handle = setInterval(() => {
          if (value === 'travel') {
              setTraveler(Math.ceil(max - now));
          } else if (value === 'review') {
              setReview(Math.ceil(max - now));
          } else if (value === 'schedule') {
              setSchedule(Math.ceil(max - now));
          }

          if (now < 0) {
              clearInterval(handle);
          }

          const step = now / 10;

          now -= step;
      }, 50);
  };

  useEffect(() => {
      if (state === 1) {
          counter('travel', 350);
          counter('review', 21);
          counter('schedule', 650);
      }
      if (state >= 2) {
          clearInterval(intervalState);
      }
  }, [state]);
```

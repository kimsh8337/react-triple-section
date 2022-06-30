## Triple 사전 과제

### 개발 환경
- React
- titicacadev/eslint-config-triple

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
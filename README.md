# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

- 위의 Repository를 포크(`fork`) 하여 개발 URL 제출해주세요.
  - [URL 제출 링크](https://forms.gle/LcXnfrgtQp5MRrdU8)

## 과제 참고 이미지
[참고 이미지 링크](https://bclef25.notion.site/1ed6d5b2192b45eeb4104a67f6a77250)

과제 완료!
남은 할일 : 더미데이터 보완, 로직 개선

## 진행 가이드

- fork 레파지토리 명은 `wanted-pre-onboarding-fe`로 생성해 주세요. ✅
- README.md를 꼭 작성해 주세요. 본인에 대한 소개나 과제 풀이에 관한 것 등 자유롭게 작성해주시면 됩니다. ✅
- 함수형 컴포넌트로 개발해주세요. (React Hooks) ✅

# :: 과제 안내


## Assignment 1 - `Login`

- 로그인 컴포넌트를 개발합니다. (최소화 - `input` 2개, `button` 1개) ✅
- 약간의 렌더링 최적화를 고려해주세요. (Hint: Ref 사용) ✅

- 기능 구현 : 로그인
  - Local Storage 에 로그인 정보 저장 (다시 접속했을 경우에 정보가 유지되게 = assignment3과 연동) ✅
  - 메인 페이지로 이동합니다.(로그인이 완료되면 = assignment4와 연동) ✅

## Assignment2 - `GNB`

- 메인페이지 반응형으로 구현 (=assignment5와 연동)
- 세부조건
  - gnb = 네비게이션 구현 시 스크롤에 관계 없이 화면 상단에 고정되는 `sticky`로 구현해주세요. ✅
  - 모바일 사이즈의 경우 gnb 가운데 있는 Input 창이 사라지면서 space-between 정렬 되게 ✅
  - gnb의 가장 오른쪽 아이콘은 Logout으로 변경해주세요. ✅
    - (gnb 가운데 `input`은 기능 X) ✅
    - (아이콘은 자유롭게 사용하셔도 괜찮습니다. 아이콘 라이브러리 설치 O) ✅

## Assignment3 - `Validation` 

- 이메일과 비밀번호 유효성검사 (=assignment1과 연동) ✅
  - 이메일 조건 - `@` , `.` 포함 ✅
  - 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상 ✅
  - 로그인 시 이메일과 비밀번호가 등록되어 있는 것과 일치 여부 확인 ✅
  - 정규표현식을 사용하고 Validation은 따로 분리해둘 것 ✅

- Validation 상태를 CSS로 표현해주세요. ✅
  - Email Input ✅
    Validation Check를 통해 Email 형식이 아닌 경우 border가 red색상으로 변경되게 ✅
  - Password Input ✅
    Validation Check를 통해 Password 형식이 아닌 경우 border가 red색상으로 변경되게 ✅
    
  - Login Button ✅
    Validation Check가 실패했을때는 button에 disabled 적용하기 ✅


## Assignment4 - `Routing`

- 로그인,로그아웃 시 history를 이용하지 않고 라우팅 로직만을 통해 페이지가 이동 되도록 구현해주세요. ✅
- 더미 유저 데이터를 만들고, localstorage에 유저 정보를 저장해서 로그인 유지 기능 구현 ✅
- 로그인하면 라우터에서 Main Page로 이동 ✅
- 로그아웃하면 Login Page로 이동 ✅

## Assignment5 - `Feeds`

- 반응형으로 피드 컴포넌트를 개발합니다. (=assignment2와 연동) ✅
  - Feed는 화면 중앙에 위치 해야하며 모바일 대응이 가능해야 합니다. ✅
  - 각 Feed의 정보는 public/data 디렉토리에 json형식으로 구성하여 fetch, axios 등으로 받아오기 ✅
 
- Feed 더미 데이터는 최소 3개 이상 ✅
  - 이미지는 자유롭게 사용하시되 이미지들의 사이즈가 각각 달라야 합니다. (ex. 정사각형, 세로가 긴 것, 가로가 긴 것 등) ✅
  - Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 해주세요! ✅

- 댓글기능 만들기
  - 각각의 Feed에 댓글을 추가할 수 있도록 개발해주세요. (Enter나 클릭으로 게시 가능하도록) ✅
  - 게시 후 Input은 초기화 되어야 합니다. ✅




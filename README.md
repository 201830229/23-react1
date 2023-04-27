# 장호성
## 7주차 04/13
## 훅이란
클래스 컴포넌트에서는 생성자에서 state를 정의하고 setState()함수를 통해 state를 업데이트한다  
하지만 기존 함수 컴포넌트는 별도로 state를 정의해서 사용하거나 컴포넌트의 생명주기에 맞춰  
어떤 코드가 실행되도록 할 수 없었다  
따라서 함수 컴포넌트에 이런 기능을 지원하기 위해서 나온 것이 훅이다  
리액트의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 것,  
이때 실행되는 함수를 훅이라 부른다
훅의 이름은 모두 use로 시작한다  
개발자가 직접 커스텀 훅을 만들어서 사용할 수 있다
<br><br>

## useState
useState는 함수 컴포넌트에서 클래스 컴포넌트처럼 state를 사용하기 위해 useState()훅을 사용한다  

-사용법
```js
const [변수명, set함수명] = useState(초깃값);
```
useState()를 호출할 때에는 파라미터로 선언할 state의 초깃값이 들어간다  
useState()를 호출하면 리턴 값으로 배열이 나온다  
첫 번째 항목은 state로 선언된 변수고 두 번째 항목은 해당 state의 set함수이다
<br><br>

## useEffect
useState()와 함께 가장 많이 사용되는 훅이다  
useEffect()는 사이드 이펙트(side effect)를 수행하기 위한 훅이다  
사이드 이펙트는 부작용이란 뜻을 가지고 있다(부가적 작용)  
리액트에서 말하는 사이드 이펙트는 효과 혹은 여향을 뜻하는 이펙트의 의미  
예를 들어 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미한다   
결국 사이드 이펙트는 렌더링 외에 실행해야 하는 부수적인 코드이다  

-사용법
```js
useEffect(이펙트 함수, [의존성 배열]);
```
이펙트함수는 처음 컴포넌트가 렌더링 된 이후 그리고 재 렌더링 이후에 실행된다  
의존성 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행된다  
의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행된다  
의존성 배열 생략 시 컴포넌트가 업데이트될 때마다 호출된다  
useEffect()에서 리턴하는 함수는 컴포넌트 마운트가 해제될 때 호출된다
<br><br>

## useMome
useMemo() 혹은 Memoized value를 리턴하는 훅이다  
이전 계산값을 가지고 있기 때문에 연산량이 많은 작업의 반복을 피할수 있다  
렌더링이 일어나는 동안 실행된다  
따라서 렌더링이 일어나는 동안 실행되서는 안되는 작업을 넣지 않는다 ex) useEffect()
<br><br>

## useCallback
useMemo() 훅과 유사한 역할을 한다  
차이점은 값이 아닌 함수를 반환한다는 점이다
<br><br>

## useRef
useRef()훅은 레퍼런스를 사용하는 훅이다  
리액트에서 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미한다  
useRef()훅은 이 레퍼런스 객체를 반환한다  
컴포넌트의 라이프타임 전체에 걸쳐서 유지한다 즉 컴포넌트가 마운트 해제 전까지 계속 유지된다
<br><br>

## 훅의 규칙
-첫번째 규칙  
훅은 무조건 최상위 레벨에서만 호출해야 한다  
반복문이나 조건문 또는 중첩된 함수를 안에서 훅을 호출하면 안 된다  
이 규칙에 따라 훅은 컴포넌트가 렌더링 될 떄마다 매번 같은 순서로 호출되어야 한다  

-두번쨰 규칙  
리액트 함수 컴포넌트에서 호출하거나 직접 만든 커스텀 훅에서만 호출할 수 있다  
일반적인 자바스크립트 함수에서 훅을 호출하면 안 된다
<br><br>

## 나만의 훅 만들기
필요한 기능이 있다면 직접 훅을 만들어서 사용할 수 있다  
이것을 커스텀 훅이라 한다  
여러 컴포넌트에서 반복적으로 사용되는 로직을 훅을 만들어 재상용하기 위함이다  

-커스텀 훅 추출하기  
이름이 use로 시작하고 내부에서 다른 훅을 호출하는 하나의 자바스크립트 함수를 만드면 된다  
다른 훅을 호출하는 것은 무조건 최상위 레벨이여야 한다  

-커스텀 훅 사용하기  
만약 이름이 use로 시작하지 않는다면 특정 함수의 내부에서 훅을 호출하는지를 알 수 없기 때문에  
훅의 규칙 위반 여부를 자동으로 확인할 수 없다

*** 
## 6주차 04/06
## 컴포넌트 추출
복잡한 컴포넌트를 쪼개서 여러개의 컴포넌트를 나눌 수 있다  
큰 컴포넌트에서 일부를 추출해서새로운 컴포넌트를 만드는 것이다  
기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋다  
실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋다  

* src에서는 이미지를 넣을 때는 모든 이미지를  import로 넣는다  
그렇게에 public에 이미지 폴더를 만들어 넣어주고 경로는 index.html를 기준으로 한다
<br><br>

## State란
state는 리액트 컴포넌트의 상태를 의미한다  
상태의 의미는 정상인지 비정상인지를 나타내는 것이라기 보다 리액트 컴포넌트의 데이터를 의미한다  
쉽게 말해 리액트 컴포넌트으 변경가능한 데이터를 말한다  
state가 변하면 다시 렌더링 되기 떄문에 렌더링과 관련된 값만 state에 포함되어야 한다
<br><br>

## State의 특징
리액트만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐이다  
state는 수정은 가능하나 직접 수정해서는 안된다  
state는 직접적인 변경은 불가능하다고 생각하는 것이 좋다  
그래서 state를 변경하고자 할 떄에는 setState()함수를 사용한다  
* Element -> 재료 
* Component -> 빵틀  
* Instance -> 재료를 빵틀에 넣고 만든 빵
<br><br>

## 생명주기에 대해 알아보자
생명주기는 컴포넌트의 생성시점, 사용시점, 종료시점을 나타내는 것이다  

컴포넌트가 생성되는 시점, 이 과정을 마운트라 부른다  
생성직후 componentDidMount()함수를 호출한다  

리액트 컴포넌트가 생애 동안 변화를 겪으면서 여러번 렌더링되는데 이것을 업데이트 과정이라 할 수 있다  
렌더링이 끝나면 compotentDidUpdate()함수를 호출한다  

리액트 컴포넌트가 결국 사라지는 과정을 언마운트라 한다  
언마운트 되면 compotentWillUnmount()함수를 호출한다  

컴포넌트가 계속 존재하는 것이 아니라 사간의 흐름에 따라 생성된고 업데이트되다가 사라진다

***
## 5주차 03/30
## 엘리먼트의 정의
엘리먼트는 리액트앱을 구성하는 요소를 의미한다  
리액트 공식 홈페이지는 '엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들'라고 정의한다  
기존의 웹사이트의 경우는 DOM엘리먼트를 의미하며 HTML의 요소이다  

-차이  
리액트 엘리먼트는 DOM 엘리먼트의 가상 표현으로 Virtual DOM의 형태를 취한다  
DOM엘리먼트는 리액트 엘리먼트에 비해 많은 정보를 담고 있어서 느리고 무겁다
<br><br>

## 엘리먼트 생김새
리액트 엘리먼트는 자바스크립트 객체의 형태로 존재한다  
마음대로 변경할 수 없는 불변성을 갖고 있다  
컴포넌트, 속성, 및 내부의 모든 children을 포함하고 있는 일반 js객체이다  

(여담: 한 파일에는 하나의 컴포넌트만 들어가야 한다)
<br><br>

## 엘리먼트의 특징
리액트 엘리먼트의 가장 큰 특징은 불변성이다  
한번 생성되면 엘리먼트의 children나 속성을 바꿀 수 없다  
내용이 바뀌었다면 컴포넌트를 통해 새로운 엘리먼트를 만들어 기존의 엘리먼트와 바꿔치기해야 한다
<br><br>

## 엘리먼트 렌더링 하기
```js
<div id="root"><div>
```  
div태그 안에 리액트 엘리먼트들이 렌더링 되며 이것을 Root DOM node라 부른다  
Virtual DOM그림의 최상단 동그라미가 Root DOM node을 의미한다  
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <element>
  );
```
root div에 리액트 엘리먼트를 렌더링하기 위해 사용
<br><br>

## 렌더링된 엘리먼트 업데이트하기
새로운 엘리먼트를 생성해서 바뀌치기하는 것이다  
불변성 떄문에 엘리먼트의 업데이트하기 위해서는 새로만들어야 한다
<br><br>

## 컴포넌트에 대해 알아보기
리액트는 컴포넌트 기반의 구조를 같는다  
작은 컴포넌트들이 모여 하나의 컴포넌트를 구성하고 이러한 컴포넌트들이 모여 하나의 페이지를 구성한다  
어떠한 속성들을 입력으로 받아서 그에 맞는 리액트 컴포넌트를 생성하여 리턴해주는 것이다
<br><br>

## Props에 대해 알아보기
리액트 컴포넌트의 속성이다  
컴포넌트에 어떤 props를 넣느냐에 따라 속성이 다른 엘리먼트가 출력된다  
props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체이다
<br><br>

## Props의 특징
읽기 전용으로 변경 할 수 없다는 의미이다  
모든 리액트 컴포넌트는 그들의 props에 관해서는 Pure함수 같은 역할을 한다  
-Pure함수  
함수의 입력값인 파라미터를 바꿀 수 없다는 의미  
리액트 컴포넌트의 props는 바꿀 수 없고, 같은 props가 들어오면 항상 같은 엘리먼트를 리턴해야 한다
<br><br>

## 컴포넌트 만들기
리액트의 컴포넌트를 일종의 함수이다  
리액트 초기에는 클래스형 컴포넌트를 주로 사용했다  
이후 훅이라는 개념이 나오면서 함수형 컴포넌트를 주로 사용한다
<br><br>

## 컴포넌트 이름 짓기
항상 컴포넌트의 이름은 대문자로 시작해야 된다  
소문자로 시작하는 컴포넌를 DOM태그로 인식해서이다
<br><br>

## 컴포넌트 합성
여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트로 만드는 것이다  
리액트는 컴포넌트안에 또 다른 컴포넌트를 사용 할 수 있기 때문에 복잡한 화면을 여러개의  
컴포넌트로 나누어 구현 할 수 있다
***
## 4주차 03/23
## JSX란
JSX는 자바스크립트의 확장 문법으로 JavaScript와 XML,HTML을 합친 것으로 봐도 된다  
-XML  
html에서 미리 정의되 있지 않아 쓸 수 없었던걸 사용자 정의를 가능케 한다
<br><br>

## JSX의 역할
JSX는 내부적으로 XML,HTML 코드를 자바스크립트로 변환한다  
JSX 문법을 사용하면 리액트에서는 내부적으로 모두 createElement라는 함수를 사용해 변환된다  
JSX가 필수는 아니나 더욱 간결해지는 코드로 생산성과 가독성을 높여준다
<br><br>

## JSX의 장점
-코드가 간결해진다  
동일한 작업등에서 createElement()함수를 안쓰므로서 간결한 코드를 얻을 수 있다  

-가독성이 향상된다  
간결한 코드, 빠르게 와닿는 의미  
가독성 향상은 유지보수 관점에서도 중요하다  

-Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안성이 올라간다
<br><br>

## JSX 사용법
모든 자바스크립트 문법을 지원하며 추가로 XML, HTML을 섞어 사용한다  
JSX에서는 중괄호{}를 사용하면 무조건 자바스크립트 코드가 들어간다  
JSX에서는 HTML과 다르게 싱글태그에도 꼭 />를 이용해 닫아줘야 한다

***
## 3주차 03/16
## 개발 환경 설정
Chocolatey  
윈도우 소프트웨어를 위한 패키지 관리자  
버전 관리에 용이하다  

Node.js와 VScode 설치  
설치 후 > node --version으로 빠른 확인가능
<br><br>

## 리액트란
리액트 공식 웹사이트에서는 사용자 <인터페이스를 만들기 위한 JavaScript 라이브러리>라고 정의한다  
여기서 라이브러리란  
자주 사용되는 기능(함수등)을 정리해 모아 놓은 것이다 ex)C의 printf

-리액트 개념  
리액트는 복잡한 사이트를 쉽고 빠르게 만들고 관리해준다  
SPA를 쉽고빠르게 만들수 있도록 해주는 도구이다  
SPA - 하나의 페이지만 존재하는 웹사이트를 의미
<br><br>

## 리액트의 장점
-빠른 업데이트와 렌더링 속도  
동기식  
클라이언트가 서버에 요청시 전체 페이지를 보내주는 것  
비동기식  
요청시 필요한 한 부분만 보내주는 것

DOM  
각 항목을 계층구조로 표현하여 생성한 것  
Virtual DOM  
DOM의 조작이 비효율적이라 속도가 느려 고안된 방법  

DOM은 동기식, Virtual DOM은 비동기식으로 리액트는 Virtual DOM을 사용
<br><br>

-컴포넌트 기반 구조  
컴포넌트  
페이지에서 하나의 구역을 의미  

리액트의 모든 페이지는 컨포넌트로 구성되어 있다  
하나의 컴포넌트는 다른 여러개의 컴포넌트의 조합으로 구성되 있으며  
하나의 구성(컴포넌트)를 만들어 놓고 레고 블럭 조립하듯 재사용이 가능하다  
그래서 재사용성이 뛰어나다
<br><br>

-재사용성  
반복작업을 줄여 생산성을 높여준다  
유지보수가 용이하다  
재사용이 가능 할려면 해당 모듈의 의존성이 없어야 한다  
의존성이 낮다면 각 부분들은 잘 분리되어 있고 각 부분들의 문제점(버그등)을 찾아 수정하기 쉽다
<br><br>

-든든한 지원군  
메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어서 계속 발전하고 있다
<br><br>

-활발한 지식 공유 & 커뮤니티  
다양하고 활성화 된 커뮤니티에서 내가 모르는 점들이나 정보등을 얻기가 쉽다
<br><br>

-모바일 앱 개발 가능  
리액트 네이티브라는 모바일 환경 프레임워크를 사용하면 크로스 플렛폼 앱을 개발 가능하다
<br><br>

## 리액트 단점
-방대한 학습량  
기존과는 다른 방식의 UI 라이브러리이기 떄문에 배워야 할 것들이 많다  
그렇지만 자바스크립트를 알면 도움이 되지만 몰라도 큰 상관은 없다
<br><br>

-높은 상태 관리 복잡도  
성능 최적화를 위한 state 관리가 어려울 수 있다  
복잡하고 어려운 외부 상태 관리 라이브러리
<br><br>

## create-react-app
처음부터 리액트가 적용된 프로젝트를 만드는 방법  
VScode의 터미널에서 > create-react-app <프로젝트 이름>을 입력  
다운로드가 끝나면 > cd <프로젝트 이름> > npm start 입력  
리액트 로고창이 뜨면 성공!

***
- README 작성요령
1. 이름(h1)
2. 강의날짜(h2)
3. 학습내용(필수-h2이하)
4. 작성코드(선택)
5. 최근 내용이 위에 오도록 작성
6. 날짜별 구분이 잘가도록 작성
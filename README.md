# 장호성
## 12주차 05/18
## 합성에 대해 알아보기
합성이란 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것을 말한다  

-Containment  
특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법이다  
범용적인 박스 역할을 하는 사이드바, 다이얼로그 같은 컴포넌트에는 어떤 자식 엘리먼트가 들어올지 미리  
예상 할 수가 없는 경우도 있다 이런 경우에 Containment 방법을 사용하여 합성한다  

Containmnet를 사용하는 방법은 리액트 컴포넌트의 props에 기본적으로 들어있는 children속성을 사용한다
```js
React.createElement(
    type,
    [props],
    [...children]
)
```
여기에서 세 번째에 들어가는 파라미터가 children이다  
children이 배열로 되어 있는것은 여러개의 하위 컴포넌트를 위한 것이다

리액트에서는 props.children를 통해 하위 컴포넌트를 하나로 모아서 제공한다  
여러 개의 children 집합이 필요한 경우에는 별도로 props를 정의해서 각각 원하는 컴포넌트를 넣어 주면 된다  

-Specialization  
Specialization은 전문화, 특수화라는 뜻을 가지고 있다
**-웰컴다이얼로그는 다이얼로그의 특별한 케이스이다-**  
범용적인 개념을 구별이 되게 구체화하는 것을 Specialization이라고 한다  

객체 지향 언어에서는 상속을 사용하여 특수화를 구현한다  
리액트에서는 합성을 사용하여 특수화를 구현한다  
Specialization은 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수화 시켜서 컴포넌트를 사용하는  
합성 방식이다

-Containment와 Specialization을 같이 사용하기  
Containment를 위해서는 props.children을 사용하고 Specialization을 위해 직접 정의한 props를 사용하면 된다
<br><br>

## 상속에 대해 알아보기
합성과 대비되는 개념으로 상속이 있다  
자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 된다  
하지만 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성한다  

복잡한 컴포넌트를 쪼개 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합하여 새로운 컴포넌트를 만들자
<br><br>

## 컨텍스트란 무엇인가?
기존의 일반적인 리액트 애플리케이션에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단방향  
전달이 되었다  
컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신  
컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운방식을 제공한다  
이를 통해 어떤 컴포넌트든지 데이터에 쉽게 접근할 수 있다  
컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를  
전달할 수 있다
<br><br>

## 언제 컨텍스트를 사용해야 할까?
여러 컴포넌트에서 자주 필요로 하는 데이터로는 사용자의 로그인 여부, 로그인 정보, UI테마, 현재 선택된 언어등이 있다  
props를 통해서 데이터를 전달하는 기존 방식은 실제 데이터를 필요로하는 컴포넌트까지의 깊이가 깊어질수록 복잡해진다  
그리고 반복적인 코드를 계속해서 작성해 주어야 하기 때문에 비효율적이고 직관적이지 않다  
컨텍스트를 사용하면 이러한 방식을 깔끔하게 개선할 수 있다
<br><br>

## 컨텍스트를 사용하기 전에 고려할 점
컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우에 주로 사용한다  
하지만 무조건 컨텍스트를 사용하는 것이 좋은것은 아니다  
왜냐하면 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 떄문이다  
따라서 다른 레벨의 컴포넌트가 데이터를 필요로 하는 경우가 아니라면 props를 통해 데이터를 전달하는  
컴포넌트합성 방법이 더 적합하다  
하지만 어떤 경우에는 하나의 데이터에 다양한 레벨에 있는 중첩된 컴포넌트들의 접근이 필요 할 수 있다  
이러한 경우에는 컨텍스트를 사용해야 한다  
컨텍스트를 사용하기에 적합한 데이터의 대표적인 예로 현재 지역 정보, UI테마, 캐싱된 데이터등이 있다
<br><br>

## 컨텍스트 API
-React.createContext  
컨텍스트를 생성하기 위한 함수이다 
```js
const MyContext = React.createContext(기본값);
```
파라미터에 기본값을 넣어준다  
만약 상위 레벨에 매칭되는 Provider가 없다면, 이 경우에만 기본값이 사용된다  

-Context.Provider  
Context.Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에  
접근할 수 있게 된다  
```js
<MyContext.Provider value={/*some value*/}>
```
Provider 컴포넌트에는 value라는 prop이 있으며, 이것은 Provider 컴포넌트 하위에 있는 컴포넌트에게 전달된다  
그리고 하위 컴포넌트들이 이 값을 사용하게 되는데 하위 컴포넌트를 consumer 컴포넌트라고 부른다  

-Class.contextType  
Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용한다  

-Context.Conusmer  
함수형 컴포넌트에서 Context.Conusmer를 사용하여 컨텍스트를 구독 할 수 있다  
```js
<MyContext.Consumer>
    {value => /*컨텍스트의 값에 따라서 컴포넌트들을 렌더링*/}
</MyContext.Consumer>
```
컴포넌트의 자식으로 함수가 올 수 있는데 이것을 function as a child라고 부른다  
Context.Consumer로 감싸주면 자식으로 들어간 함수가 현재 컨텍스트의 value를 받아서리 리액트 노드로 리턴한다  
함수로 전달되는 value는 Provider의 value prop과 동일하다  

-Context.displayName  
컨텍스트 객체는 displayName이라는 문자열 속성을 가진다  
크롬의 리액트 개발자 도구에서는 컨텍스트의 Provider나 Consumer를 표시할 때 이 displayName을 함께 표시해 준다
***
## 11주차 05/11
## Shared State
Shared State는 어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로  
사용하는 경우를 말한다  
ex)부모 컴포넌트의 state에서 온도를 받아 자식 컴포넌트A에는 섭씨온도를 컴포넌트B에는 화씨온도를 표시
<br><br>

## 하위 컴포넌트에서 State 공유하기
-Shared State 적용하기  
state를 상위 컴포넌트로 올린다는 것을 'State 끌어올리기'라고 표현한다
```html
return (
	...
		<!-- 변경 전: <input value={temperature} onChange={handleChange} /> -->
		<input value={props.temperature} onChange={handleChange} />
	...
)
```
이렇게 하면 온도 값을 컴포넌트의 state에서 가져오는 것이 아닌 props를 통해서 가져오게 된다

또한 컴포넌트의 state를 사용하지 않게 되기 떄문에 입력값이 변경되었을 때 상위 컴포넌트로 변경된 값을  
전달해 줘야 한다  
이를 위해 handleChange() 함수를 변경한다
```js
const handleChang = (event) => {
	// 변경 전: setTemperature(event.target.value);
	props.onTemperatureChange(event.target.value);
}
```
사용자가 온도 값을 변경할 때 마다 props에 있는 onTemperatureChange()함수를 통해 변경된 온도 값이  
상위 컴포넌트로 전달된다  

최종적으로 완성된 TemperatureInput 컴포넌트 모습
```js
function TemperatureInput(props){
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value)
    }

    return(
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]})
            </legend>
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    )
}
```
오로지 상위 컴포넌트에서 전달받은 값만을 사용하고 있다  

-Calculator 컴포넌트 변경하기
변경된 TemperatureInput 컴포넌트에 맞춰서 Calculator 컴포넌트를 변경해 줘야 한다  
변경된 Calculator 컴포넌트 모습
```js
function Calculator(props){
    const [temperature, setTemperature] = useState("")
    const [scale, setScale] = useState("c")

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature)
        setScale("c")
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature)
        setScale("f")
    }

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature

    return(
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    )
}
```
state로 temperature와 scale을 선언하여 온도 값과 단위를 각각 저장한다  
TemperatureInput 컴포넌트를 사용하는 부분에서는 각 단위로 변환된 온도 값과 단위를 props로 넣어 주었고,  
값이 변경되었을 때 업데이트하기 위한 함수를 onTemperatureChange에 넣었다  
따라서 섭씨온도가 변경되면 단위가 ' c '로 변경되고, 화씨온도가 변경되면 단위가 ' f '로 변경된다  

상위 컴포넌트인 Calculator에서 온도 값과 단위를 각각의 state로 가지고 있으며, 두 개의 하위 컴포넌트는 각각  
섭씨와 화씨로 변환된 온도 값과 단위 그리고 온도를 업데이트하기 위한 함수를 props로 갖고 있다  
이처럼 각 컴포넌트가 state에 값을 갖고 있는 것이 아니라 공통된 상위 컴포넌트로 올려서 공유하는 방법을  
사용하면 리액트에서 더욱 간결하고 효율적인 개발을 할 수 있다
***
## 10주차 05/04
## 리스트와 키란 무엇인가?
리스트란 자바스크립트의 변수나 객체를 하나의 변수로 묶어놓은 것을 말한다  
키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미한다  
배열과 키를 사용하여 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있다
<br><br>

## 여러 개의 컴포넌트 렌더링하기
같은 컴포넌트를 반복적으로 사용하기 위해 배열에 들어있는 엘리먼트를 map()함수를 이용하여 렌더링 한다  
```js
const doubled = numbers.map((number) => number * 2)
```
위 코드는 map()함수를 사용하여 numbers배열에 들어있는 각 숫자를 2를 곱한 값이 들어간 double라는  
배열에 생성하는 코드이다  
이처럼 map()함수는 배열의 첫 번째 아이템부터 순서대로 각 아이템에 어떠한 연산을 수행한  
뒤에 최종 결과를 배열로 만들어서 리턴해준다  
리스트의 이름은 보통 복수형(s)을 변수는 리스트의 단수형을 사용한다
<br><br>

## 기본적인 리스트 컴포넌트
리스트 컴포넌트에 키를 사용하지 않으면 개발자 도구의 콘솔탭에 '리스트 아이템에는 무조건 키가 있어야 한다'는  
경고문이 나온다
<br><br>

## 리스트의 키에 대해 알아보기
키는 리스트에서 아이템을 구분하기 위한 고유한 문자열이다  
키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구별하기 위해 사용한다  
리액트에서의 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 된다

-키값을 id를 사용하는 방식  
id의 의미 자체가 고유한 값이라는 것이기 때문에 키값으로 사용하기에 적합하다  

-키값으로 인덱스를 사용하는 방법  
```js
const todoItems = todos.map((todo, index) => 
        //아이템들의 고유한 ID가 없을 경우에만 사용해야 함
        <li key={index}>
            {todo.text}
        </li>
)
```
인덱스 값도 고유한 값이기 때문에 키값으로 사용해도 되지만,  
배열에서 아이템의 순서가 바뀔 수 있는 경우에는 키값으로 인덱스를 사용하는 것을 권장하지 않는다  
리액트에서는 키를 명시적으로 넣어 주지 않으면 기본적으로 이 인뎃스 값을 키값으로 사용한다  

키는 명시적으로 넣어주는 것이 좋다
<br><br>

## 폼이란 무엇인가?
폼은 사용자로부터 입력을 받기 위해 사용하는 것이다  

-HTML과 리액트 폼의 차이  
HTML은 엘리먼트 내부에 각각의 state가 존재한다  
리액트는 컴포넌트 내부에서 state를 통해 데이터를 관리한다
<br><br>

## 제어 컴포넌트
제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트이다  

-예시-
```js
function NameForm(props) {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        alert('입력한 이름: ' + value)
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={value} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
```
handleChange 함수에서는 setValue()함수를 사용하여 새롭게 변경된 값을 value라는 이름의 state에 저장한다  
event.target은 현재 발생한 이벤트의 타겟을 의미하며, event.target.value는 해당 타겟의 value 속성값을 의미한다
<br><br>

## textarea 태그
state를 통해 태그에 value라는 attribute를 사용하여 텍스트를 표시한다

-예시-
```js
function RequestForm(props) {
    const [value, setValue] = useState('요청사항을 입력하세요.')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        alert('입력한 요청사항: ' + value)
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항:
                <textarea value={value} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
```
state로는 value가 있고, 이 값을 textarea태그의 value라는 attribute에 넣어줌으로써 화면에 나타나게 된다
<br><br>

## select 태그
select태그도 textarea태그와 동일하다

-예시-
```js
function FruiSelect(props) {
    const [value, setValue] = useState('grape')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        alert('선택한 괴일: ' + value)
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="vatermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
```
<br><br>

## file input 태그
```html
<input type="file"/>
```
file input태그는 값이 읽기전용이기 때문에 리액트에서는 비제어 컴포넌트이다
<br><br>

## 여러 개의 입력 다루기
여러 개의 state를 선언하여 각각의 입력에 대해 사용하면 된다
<br><br>

## Input Null Value
제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없다  
만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값에 undefined 또는 null을 넣어 주면 된다
***
## 9주차 04/27
## 이벤트 처리하기
-DOM과 리액트의 차이   
이벤트 이름이 onclick에서 onClick으로 카멜 표기법이 적용됐다  
DOM에서는 이벤트를 처리할 함수를 문자열로 전달하지만 리액트에서는 함수 그대로 전달한다  

어떤 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 이벤트 핸들러라 한다  
또는 이벤트 리스너라고도 한다  

-클래스 컴포넌트  
bind를 하는 이유는 자바스크립트에서는 기본적으로 클래스 함수들이 바운드되지 않기 때문이다  
bind를 하지 않으면 this.handleClick은 글로벌 스코프에서 호출되는데 글로벌 스코프에서 this.handleClick은  
undefined이므로 사용할 수가 없다  
bind를 사용하지 않으려면 arrow function을 사용하는 방법도 있다  
클래스 컴포넌트는 거의 사용하지 않으니 참고만 하자  

-함수 컴포넌트  
this를 사용하지 않는다  
onCilck에서 handleClick으로 바로 넘기면 된다  
- 방법1. 함수 안에 함수로 정의
- 방법2. arrow function을 사용하여 정의

-카멜 표기법  
낙타의 등 모양을 보고 이름을 지은 것  
첫 글자는 소문자로 시작하되, 중간에 나오는 새로운 단어의 첫 글자는 대문자로 사용하는 방법
<br><br>

## Arguments 전달하기
함수를 정의할떄는 파라미터 혹은 매개변수, 함수를 사용할떄는 아귀먼트 혹은 인수라 부른다  

이벤트 핸들러에 매개변수를 전달해야 하는 경우는 굉장히 많다  
ex) 특정 사용자 프로필을 클릭했을 때 해당 사용자의 아이디를 매개변수로 전달해서 정해진 작업 처리  

```js
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```
event라는 매개변수는 리액트의 이벤트 객체를 의미한다  

두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event가 전달 된다  

첫 번째 화살표 함수를 사용한 방법은 명시적으로 event를 두 번쨰 매개변수로 넣어 주었고  
두 번째 Function.prototype.bind를 사용한 방법은 event가 자동으로 id 이후의 두번째 매개변수로 전달된다  
이 방법은 클래스 컴포넌트에서 사용하는 방식이다

함수 컴포넌트는 아래와 같이 한다
```js
<button onClick={(event) => handleDelete(1, event)}>삭제하기</button>
```
<br>

## 조건부 렌더링이란?
조건부 렌더링은 어떠한 조건에 따라서 렌더링이 달라지는 것을 의미한다  
조건문의 소괄호 안에 들어가는 것으로 true 아니면 false가 나오는 결과에 따라서 렌더링을 다르게 하는 것  

-자바스크립트의 Truthy와 Falsy  
truthy  
- true
- {} (empty object)
- [] (empty array)
- 42 (nuber, not zero)
- "0", "false" (string, not empty)  

falsy  
- false
- 0, -0 (zero, minus zero)
- 0n (BigInt zero)
- '', "", `` (empty string)
- null
- undefined
- NaN (not a number)
<br><br>

## 엘리먼트 변수
렌더링 해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수이다
<br><br>

## 인라인 조건
필요한 곳에 조건문을 직접 넣어 사용하는 방법

-인라인 if  
if문을 사용하지 않고 동일한 효과를 위해 &&라는 논리 연산자를 사용한다  
&& 연산자는 흔히 AND 연산으로 모든 조건이 참일 때만 참이 된다  
첫번째 조건이 거짓이면 두번째 조건은 판단 할 필요가 없다  
이것을 단축 평가라고 한다  
판단만 하지 않는 것이고 결과값은 그대로 리턴한다  

첫번째 조건문의 값에 따른 && 연산자의 결괏값을 나타내는 방법
```js
true && expression -> expression
false && expression -> false
```

-인라인 if-else  
삼항 연산자를 사용한다  
```
조건문 ? 참일 경우 : 거짓일 경우
```
문자열이나 엘리먼트를 넣어서 사용할 수도 있다  
<br>

## 컴포넌트 렌더링 막기
특정 컴포넌트를 렌더링하고 싶지 않을 경우 null을 리턴하면 된다

***
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
리액트에서 말하는 사이드 이펙트는 효과 혹은 영향을 뜻하는 이펙트의 의미  
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
여러 컴포넌트에서 반복적으로 사용되는 로직을 훅을 만들어 재사용하기 위함이다  

-커스텀 훅 추출하기  
이름이 use로 시작하고 내부에서 다른 훅을 호출하는 하나의 자바스크립트 함수를 만들면 된다  
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
쉽게 말해 리액트 컴포넌트의 변경가능한 데이터를 말한다  
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
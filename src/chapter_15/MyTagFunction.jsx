const name = '인제';
const region = '서울';

function myTagFunction(strings, nameExp, regionExp) {
    let str0 = strings[0];
    let str1 = strings[1];
    let str2 = strings[2];

    return `${str0}${nameExp}${str1}${regionExp}${str2}`
}

const output = myTagFunction`제 이름은 ${name}이고, 사는 곳은 ${region}입니다.`

console.log(output);
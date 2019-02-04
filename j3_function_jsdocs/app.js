const one = function one() {
    window.alert("hello");
};

// one();

const hello = function hello() {
    console.log("hello!");
};

// console.log("2 / --------------");
// console.log(hello()); // affiche une

const dummyReturn = function dummyReturn(p) {
    return p;
}

// console.log("3 / --------------");
// console.log(dummyReturn("ola"));
// console.log(dummyReturn("hello"));
// console.log(dummyReturn("salut"));
// console.log(dummyReturn("salam"));
// console.log(dummyReturn("shalom"));

const doubleString = function doubleString(str) {
    return str + " " + str;
    // return `${str} ${str}`;
};

const multiplyString = function multiplyString(str, nbLoops) {
    var tmp = "";
    for (let i = 0; i < nbLoops; i += 1) {
        tmp += " " + str;
    }
    return tmp;
};
console.log("multiplyString / --------------/");
console.log(multiplyString("hello", 5));


// console.log("doubleString / --------------");
// doubleString("hello");
// doubleString("halloween");

    // ^ _ ^   ===========> | ^ _ ^
    // (^ _ ^) <=========== T (^ _ ^)


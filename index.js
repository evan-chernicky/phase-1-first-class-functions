
//1
function receivesAFunction(callBack) {
    return callBack();
}

function callBack() {
    return "Hello from inside the callback";
}

//2
function returnsANamedFunction() {
    return callBack;
}

//3
function returnsAnAnonymousFunction() {
    return function() {
        return "Hello from inside an anonymous function"
    }
}
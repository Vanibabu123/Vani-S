//  Difference between call(), apply() and bind()
//1. call means add another function directly using another context 
//   and also add arguments in object
//2. apply means we have to give the arguments in array format within the context
//3. bind means add the explicit object for window object

// Example of call  |  apply  |  bind 

// call
function myfun1() {

    console.log(this);
}
let object = {
    name : "aaa"
};
myfun1.call(object)

// apply
function myfun2(a, b) {

    console.log(this, a + b);
}
let objectapp = {
    name : "aaa"
};
myfun2.apply(objectapp, [1, 2])


// bind
function myfun3() {

    console.log(this);
}
let obj = {
    name : "aaa"
};
myfun3 = myfun3.bind(obj)
myfun3();


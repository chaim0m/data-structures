var Stack = function () {
  this.stack = [];
  this.minValueStack =[];
  this.minValue = function(){
    return this.minValueStack[this.minValueStack.length-1] ;
  }

  this.print = function () {
    console.log(this.stack);
  }

  this.push = function (x) {
    //your code here (adds x to the top of the stack)
    this.stack[this.stack.length] = x;
    if (!this.isEmpty()) {
      if (x < this.stack[this.stack.length - 1]) {
        if (x <this.minValueStack[minValueStack.length - 1]) {
          this.minValueStack[this.minValueStack.length] = x;
          return this.minValueStack;
        }
      }
    }
  }
  this.isEmpty = function () {
    //your code here (tests if the Stack is empty)
    if (this.stack.length == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  this.peek = function () {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1]
    }
  }
  this.pop = function () {
    if (!this.isEmpty()) {
      if (this.stack[this.stack.length - 1] == this.minValueStack[this.minValueStack.length - 1]) {
        this.minValueStack.splice(minValueStack.length - 1, 1)[0];
        return this.minValueStack;
      }
      return this.stack.splice(this.stack.length - 1, 1)[0];

    }
    return null;
  }
  this.popMinValue = function(){

  }
}
//Use this code to test your stack:

var myStack = new Stack();
console.log(myStack.isEmpty());    //true
console.log(myStack.print());      //[]
console.log(myStack.push(2));
console.log(myStack.isEmpty());     //false
console.log(myStack.push(4));
console.log(myStack.print());      //[2,4]
console.log(myStack.peek());       //4
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());       //null
console.log(myStack.isEmpty());    
console.log(myStack.popMinValue());
console.log(myStack.minValue());
const a = 10;

class Test{
  constructor ( name = 'noname'){
    this.name = name;
  }
  say() {
    console.log(this.name)
  }
}

const test = new Test('tomonari');
test.say();

import members from './name.js';

class Test{
  constructor ( name = 'noname'){
    this.name = name;
  }
  say() {
    console.log(this.name)
  }
}

members.forEach((name) => {
  console.log(name);
});

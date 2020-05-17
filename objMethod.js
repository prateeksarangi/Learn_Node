const person = {
  name: 'Prateek',
  age: 21
}

console.log(person)

const personGreet = {
  name: 'Prateek',
  age: 21,
  greet: function () {
    console.log('Hello!! My name is ' + this.name)
  }
  /*
    greet() {
        console.log('Hello!! My name is ' + this.name)
    }
    */
}

personGreet.greet()

const printName = ({ name, age }) => {
  console.log(name + ', ' + age)
}

printName(person)

const { name, age } = person
console.log(name, age)

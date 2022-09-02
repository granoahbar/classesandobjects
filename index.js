//////////////////// create a person object ////////////////////

let person = 
{
    firstName: 'Noah',
    lastName: 'Humphreys',
    age: 23
}

// console.log (person.firstName)
// console.log (person.lastName)
// console.log (person.age)



//////////////////// destructuring (does not remove the values) ////////////////////

let meal = 
{
    appetizer: 'chips and salsa',
    entree: 'steak and bean burrito',
    dessert: 'fried ice cream',
    drink: 'dr. pepper'
}

// // how to destruct

// let dessert = meal.dessert 

// // how to destruct multiple at the same time 

// let {dessert, entree, drink} = meal

// // how to change the key name

// let {drink: bestSodaEver} = meal



// For in loops
for (let food in meal)
{
console.log (`For my ${food} I had ${meal[food]}`)
}


//////////////////// adding, changing, and deleting properties from objects ////////////////////
//adding and changing
person.occupation = 'Full time student'
console.log (person)
//delete
delete person.lastName
console.log (person)

//////////////////// classes and extending classes ////////////////////
class pet 
{   
    constructor (name, age)
    {
        this.name = name,
        this.age = age
    }
}

// let lassie = new pet ('Lassie', 7)

// console.log (lassie.name)

// extending class

class Dog extends pet
{
    constructor (name, age, breed)
    {
        super (name, age)

        this.breed = breed 
    }

    bark()
    {
        console.log (`Bark, my name is ${this.name}`)
    }
}

let lassie = new Dog ('Lassie', 7, 'Collie')

console.log (lassie)
lassie.bark()

class Cat extends pet 
{
    constructor (name, age, color)
    {
        super (name, age)
        this.color = color,
        this.temperment = 'mean'
    }

    beNice()
    {
        this.temperment = 'nice'
        console.log (`${this.name} is now a nice cat!`)
    }
}

let macy = new Cat('macy', 2, 'grey')

macy.beNice()
console.log (macy.temperment)

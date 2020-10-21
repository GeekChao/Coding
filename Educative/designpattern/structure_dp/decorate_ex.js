class SuperHero {
    constructor(name,power) {
      this.name = name
      this.power = power
    }
}

SuperHero.prototype.hasSuperSpeed = function(){
  if (this.sword)
    return `${this.name}'s power is ${this.power}, and he also has the super speed now.`
}

SuperHero.prototype.hasSword = function() {
  if (this.speed)
    return `${this.name}'s power is ${this.power}, and he also has a sword now.`
}

function SuperHeroWithSword(superHero) {
    superHero.sword = true

    return superHero
}

function SuperHeroWithSuperSpeed(superHero) {
  superHero.speed = true

  return superHero
}

function SuperHeroWithSpeedandSword(superHero) {
  return SuperHeroWithSuperSpeed(SuperHeroWithSword(superHero))
}

var superhero1 = new SuperHero("Fire Man", "Fire")
SuperHeroWithSword(superhero1)
SuperHeroWithSuperSpeed(superhero1)

var superhero2 = new SuperHero("Ice Man", "Ice")
SuperHeroWithSpeedandSword(superhero2)

console.log(superhero1, superhero1.hasSuperSpeed(), superhero1.hasSword())

console.log(superhero2, superhero2.hasSuperSpeed(), superhero2.hasSword())

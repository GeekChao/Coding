const ninja = {
    points: 100,
    setName(name) {
        this.name = name
    },
    punch(otherNinja) {
        if(otherNinja.points > 0 && this.points > 0){
            otherNinja.points -= 20
            return `${otherNinja.name}'s points are ${otherNinja.points}`
          }else{
            return `Can't punch ${otherNinja.name}`
          }
    },
    kick(otherNinja) {
        if(otherNinja.points > 0 && this.points > 0){
            otherNinja.points -= 50
            return `${otherNinja.name}'s points are ${otherNinja.points}`
          }else{
            return `Can't kick ${otherNinja.name}`
          }
    }
  }

  const ninja1 = Object.create(ninja)
  ninja1.setName('Ninja1')

  const ninja2 = Object.create(ninja)
  ninja2.setName('Ninja2')

  console.log(ninja1.kick(ninja2))
  console.log(ninja2.punch(ninja1))
  console.log(ninja1.kick(ninja2))
  console.log(ninja1.punch(ninja2))
  console.log(ninja2.kick(ninja1))

  console.log(ninja1.kick === ninja2.kick)
  console.log(ninja1.punch === ninja2.punch)  
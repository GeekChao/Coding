//Component
class Employee {
  constructor(name, position, progress) {
    this.name = name;
    this.position = position;
    this.progress = progress;
  }
  getProgress() {}
}

//Leaf subclass
class Developers extends Employee {
  constructor(name, position, progress) {
    super(name, position, progress);
  }
  getProgress() {
    return this.progress;
  }
}

//Leaf subclass
class FreeLanceDev extends Employee {
  constructor(name, position, progress) {
    super(name, position, progress);
  }
  getProgress() {
    return this.progress;
  }
}

//Composite subclass
class DevTeamLead extends Employee {
  constructor(name, position) {
    super(name, position);
    this.teamMembers = [];
  }
  addMember(employee) {
    this.teamMembers.push(employee);
  }

  removeMember(employee) {
    for (var i = 0; i < this.teamMembers.length; i++) {
      if (this.teamMembers[i] == employee) {
        this.teamMembers.splice(i, 1);
      }
    }
    return this.teamMembers;
  }

  getProgress() {
    for (var i = 0; i < this.teamMembers.length; i++) {
      console.log(this.teamMembers[i].getProgress());
    }
  }

  showTeam() {
    for (var i = 0; i < this.teamMembers.length; i++) {
      console.log(this.teamMembers[i].name);
    }
  }
}

const seniorDev = new Developers("Rachel", "Senior Developer", "60%");
const juniorDev = new Developers("Joey", "Junior Developer", "50%");
const teamLead = new DevTeamLead("Regina", "Dev Team Lead", "90%");

teamLead.addMember(seniorDev);
teamLead.addMember(juniorDev);

console.log("Team members list:");
teamLead.showTeam();
console.log("Get Team members progress:");
teamLead.getProgress();
console.log("Removing Rachel from team:");
teamLead.removeMember(seniorDev);
console.log("Updated team members list:");
teamLead.showTeam();

const freelanceDev = new Developers("Ross", "Free Lancer", "80%");
console.log("Get freelance developer's progress:");
console.log(freelanceDev.getProgress());

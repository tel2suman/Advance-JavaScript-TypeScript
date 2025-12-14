
class GymMember {
  constructor(name, age, membershipPlan) {
    this.name = name;
    this.age = age;
    this.membershipPlan = membershipPlan;
    this.attendance = 0;
  }

  attendClass() {
    this.attendance += 1;
        console.log(`${this.name} attended a Today. Total attendance: ${this.attendance} and age is ${this.age}`);
  }

  canAccessPremium() {
    return this.membershipPlan === "Premium";
  }
}

const member2 = new GymMember("Karim", 22, "Premium");

member2.attendClass();
console.log(member2.canAccessPremium());
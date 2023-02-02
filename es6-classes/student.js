/* exported Student */

class Student {
  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  getFullName() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
  }

  getIntroduction() {
    const { subject } = this;
    const fullName = this.getFullName();
    return `Hello, my name is ${fullName} and I am studying ${subject}.`;
  }
}

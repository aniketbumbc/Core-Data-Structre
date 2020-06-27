class Student {
  constructor(fName, Lname) {
    this.fName = fName;
    this.Lname = Lname;
    this.score = []
  }
  fullName(){
    console.log("Hello Student Name is  " +this.fName,"",this.Lname);
  }
  calculateScore(){
    let sumScore = this.score.reduce((a,b)=> a+b);
    let  totalDigit = this.score.length;
  console.log( "Average Score",Math.floor(sumScore/totalDigit));
  }
}
let firstStudent = new Student ("Bunny","Steele");
firstStudent.fullName();
firstStudent.score.push(10,34,50);
firstStudent.calculateScore();

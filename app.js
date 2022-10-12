function User(userName) {
  (this.theNameOfTheUser = userName),
    (this.followers = []),
    (this.ifollow = []),
    (this.followAfter = function (member) {
      this.ifollow.push(member);
      member.followers.push(this);
    });

  this.sendMessage = function (iSend) {
    this.followers.forEach((someone) => {
      someone.getMessage(
        someone.theNameOfTheUser +
          " got a message from " +
          this.theNameOfTheUser +
          ": " +
          iSend
      );
    });
  };

  this.getMessage = function (gotSend) {
    console.log(gotSend);
  };
}

let userNumber1 = new User("Shiran");
let userNumber2 = new User("Lial");
let userNumber3 = new User("Hila");
let userNumber4 = new User("Liran");

userNumber1.followAfter(userNumber2);
userNumber1.followAfter(userNumber3);
userNumber1.followAfter(userNumber4);
userNumber2.followAfter(userNumber1);
userNumber2.followAfter(userNumber3);
userNumber2.followAfter(userNumber4);
userNumber3.followAfter(userNumber1);
userNumber3.followAfter(userNumber2);
userNumber3.followAfter(userNumber4);
userNumber4.followAfter(userNumber1);
userNumber4.followAfter(userNumber2);
userNumber4.followAfter(userNumber3);

userNumber1.sendMessage("Hello from Shiran");
//userNumber2.getMessage(....);
//userNumber3.getMessage(....);
//userNumber4.getMessage(....);
userNumber2.sendMessage("Hello from Lial");
//userNumber1.getMessage(....);
//userNumber3.getMessage(....);
//userNumber4.getMessage(....);
userNumber3.sendMessage("Hello from Hila");
//userNumber1.getMessage(....);
//userNumber2.getMessage(....);
//userNumber4.getMessage(....);
userNumber4.sendMessage("Hello from Liran");
//userNumber1.getMessage(....);
//userNumber2.getMessage(....);
//userNumber3.getMessage(....);

console.log(userNumber1);
console.log(userNumber2);
console.log(userNumber3);
console.log(userNumber4);

function BankAccount(myName, deposit){
  this.myName = myName;
  this.balance = deposit;
}

BankAccount.prototype.deposit = function(amount) {
  if (amount) {
    this.balance += amount;
  }
}

BankAccount.prototype.withdraw = function(amount) {
  if (amount) {
    this.balance -= amount;
  }
}

var accountArr = [];

$(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedInitialDeposit = parseInt($("#initial-deposit").val());

    var newAccount = new BankAccount(inputtedName, inputtedInitialDeposit);
    accountArr.push(newAccount);

    $(".balance").text("$" + newAccount.balance);
    $(".register-spot").text("Thanks for registering!");

  });

  $("#editFunds").submit(function(event){
    event.preventDefault();

    var depositAmount = parseInt($("#deposit").val());
    var withdrawalAmount = parseInt($("#withdrawal").val());

    accountArr[0].deposit(depositAmount);
    accountArr[0].withdraw(withdrawalAmount);

    $(".balance").text("$" + accountArr[0].balance);
  })

});

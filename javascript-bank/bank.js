/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype = {
  openAccount: function (holder, balance) {
    if (balance > 0 && balance % 1 === 0) {
      var newAcct = new Account(this.nextAccountNumber, holder);
      newAcct.deposit(balance);
      this.accounts.push(newAcct);
      this.nextAccountNumber++;
    } else { return null; }
    return newAcct.number;
  },

  getAccount: function (number) {
    // console.log(this.accounts.length);
    if (number) {
      for (var i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i].number === number) {
          return this.accounts[i];
        }
      }
    } else { return null; }
  },

  getTotalAssets: function () {
    var dollaDollaBills = 0;
    if (this.accounts.length === 0) { return 0; } else {
      for (var i = 0; i < this.accounts.length; i++) {
        // console.log(this.accounts[i].getBalance);
        dollaDollaBills += this.accounts[i].getBalance;
      }
      return dollaDollaBills;
    }
  }

};

// Account.prototype = {
//   deposit: function (amount) {
//     var num = amount;
//     if (num > 0 && num % 1 === 0) {
//       var transact = new Transaction('deposit', num);
//       this.transactions.push(transact);
//       return true;
//     } else { return false; }
//   },

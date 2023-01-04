/* exported Account */

function Account(number, holder) {

  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype = {
  deposit: function (amount) {
    var num = amount;
    if (num > 0 && num % 1 === 0) {
      var transact = new Transaction('deposit', num);
      this.transactions.push(transact);
      return true;
    } else { return false; }
  },

  withdraw: function (amount) {
    if (amount > 0 && amount % 1 === 0) {
      var transact = new Transaction('withdrawal', amount);
      this.transactions.push(transact);
      return true;
    } else { return false; }

  },

  getBalance: function () {
    var initialValue = 0;

    if (this.transactions.length === 0) {
      return 0;
    } else {
      for (var i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].type === 'deposit') {
          initialValue += this.transactions[i].amount;
        } else if (this.transactions[i].type === 'withdrawal') {
          initialValue -= this.transactions[i].amount;
        }
      }
    }
    return initialValue;
  }

};

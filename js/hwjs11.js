const Transaction = {
    Deposit: 'deposit',
    Withdraw: 'withdraw',
};

const account = {

    id: 1,

    balance: 0,


    transactions: [],


    createTransaction(amount, type) {
        const newTransaction = {
            amount: amount,
            type: type,
            id: this.id,
        }
        this.id += 1;
        return newTransaction;
    },

    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, "deposit");
        this.transactions.push(transaction);
    },


    withdraw(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            const transaction = this.createTransaction(amount, "withdraaw");
            this.transactions.push(transaction);
        } else {
            alert("Недостатьно коштів");
        }
    },


    getBalance() {
        return this.balance
    },

    getTransactionDetails(id) {
        for (const element of this.transactions) {
            // console.log(element);
            if (element.id === id) {
                return element;
            }
        }
        return null;
    },

    getTransactionTotal(type) {
        console.log(type);
        let total = 0;
        for (const element of this.transactions) {
            if (element.type === type) {
                total += element.amount;
            }
        }
        return total;
    },
};


account.deposit(100000)
account.deposit(500)
account.deposit(100)
// account.deposit(500)
account.deposit(500)
account.deposit(500)


console.log(account.getBalance()); 


console.log(account.getTransactionDetails(1));


console.log(account.getTransactionDetails(4));
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionTotal(Transaction.Deposit));

console.log(account.getTransactionTotal(Transaction.Withdraw));
console.log(account.getTransactionTotal("withdraw"));
console.log(account.getTransactionTotal("deposit"));

console.log(account);
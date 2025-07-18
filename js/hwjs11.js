//1

const bankAccount = {
    ownerName: "Тимур",
    accountNumber: "4523",
    balance: 500,
    


    deposit(money) {
        this.balance += money;
            alert(`Ваш баланс поповнено на ${money}, ваш баланс: ${this.balance}`);
    },


    withdraw(money) {
        if (money <= this.balance) {
        this.balance -= money;
        } else {
            alert("Недостатньо коштів на рахунку!");
        }
    }

} 


bankAccount.deposit(100);




if (confirm("Поповнити рахунок?")) {
    const userInput = parseFloat(prompt("Укажіть суму яку хочете покласти на рахунок"))
    if (!isNaN(userInput) && userInput > 0) {
        bankAccount.deposit(userInput);
    } else {
        alert("Не корректні данні!");
    }
} else if (confirm("Зняти гроші?")) {
    const userInput = parseFloat(prompt("Укажіть суму яку хочете зняти з рахунку"))
    if (!isNaN(userInput) && userInput > 0) {
        bankAccount.deposit(userInput);
    } else {
        alert("Не корректні данні!");
    }
}



console.log(bankAccount);


//2

const weather = {
    temperature: null,
    humidity: 14,
    windSpeed: 18,

    termometer() {
        return this.temperature < 0;
    },
}





const inputTemp = Number(prompt('Уведіть температуру в градусах'));
weather.temperature = inputTemp;
if (weather.termometer()) {
    alert('температура нижче 0°С');
} else {
    alert('температура вище або рівна 0°С');
}


//3




const user = {
    name: "Timur",
    email: "myemail@gmail.com",
    password: "qwerty",

    login(newEmail, newPassword) {
        let message = "Ви ввели не корректні дані";
        if (this.email === newEmail && this.password === newPassword) {
            message = "Ваші дані корректні!";
        }
        return message;
    }
}


console.log(user.login("myemail@gmail.com", "qwerty"));


//4


const movie = {
  title: "Home Alone",
  director: "Chris Columbus",
  year: 1990,
  rating: 6,

    movieRating() {
        return this.rating > 8;
    },

    changeRating(newRating) {
        this.rating = newRating;
    },
}

const inputRating = Number(prompt("Введіть рейтинг"));
movie.changeRating(inputRating);
movie.changeRating(9)

if (movie.movieRating()) {
    console.log(`Рейтинг фільму більше 8 і складає ${movie.rating}`);
} else {
    console.log(`Рейтинг фільму менше 8 і складає ${movie.rating}`);
}
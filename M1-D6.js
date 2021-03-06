/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
- Complete as many exercises as you can
*/

// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/
console.log("\nEx. A\n")

const test = "Test string."
console.log(test)

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
console.log("\nEx. B\n")

const sum = 10 + 20
console.log(sum)

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
console.log("\nEx. C\n")

const random = Math.random() * 20
console.log(random)

/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
console.log("\nEx. D\n")

const me = {
  name: "Matt",
  surname: "Ginter",
  age: 31
}

console.log(me)

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/
console.log("\nEx. E\n")

delete me.age

console.log(me)

/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
console.log("\nEx. F\n")

me.skills = ["HTML/CSS", "Javascript"]

console.log(me)

/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
console.log("\nEx. G\n")

const lastItem = me.skills.pop()

console.log(lastItem)

// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
console.log("\nEx. 1\n")

const dice = () => Math.ceil(Math.random() * 6)

console.log(dice())

/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/
console.log("\nEx. 2\n")

const whoIsBigger = (x, y) => x > y ? x : y

console.log(whoIsBigger(2, 1))
//add if equal

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
console.log("\nEx. 3\n")

const splitMe = (str) => str.split(" ")

console.log(splitMe("Hello World"))

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
console.log("\nEx. 4\n")

const deleteOne = (str, bool) => bool === true ? str.slice(1) : str.slice(0, -1)

console.log(deleteOne("Heey", true))

/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/
console.log("\nEx. 5\n")

const onlyLetters = (str) => str.replace(/[0-9]/g, '')

console.log(onlyLetters("I have 2 cats."))

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/
console.log("\nEx. 6\n")

const isThisAnEmail = (email) => {
        let regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
    
console.log(isThisAnEmail('mattginter@gmail.com'));

/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/
console.log("\nEx. 7\n")

const whatDayIsIt = () => {
  let today = new Date().getDay()
  let currentDay
  switch (today) {
    case 1 : currentDay = "Monday"; break
    case 2 : currentDay = "Tuesday"; break
    case 3 : currentDay = "Wednesday"; break
    case 4 : currentDay = "Thursday"; break
    case 4 : currentDay = "Friday"; break
    case 4 : currentDay = "Saturday"; break
    case 4 : currentDay = "Sunday"; break
  }
  return currentDay
}
const currentDay = whatDayIsIt()
console.log(`Today is ${currentDay}.`)

/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
console.log("\nEx. 8\n")

const rollDice = (x) => {
  let result = {sum: 0}
  let newArray = []
  for (let i = 0; i <= x-1; i++) {
    let roll = dice() //generate dice roll result
    newArray.push(roll) //update array with result (assigning to variable returns length)
    result.values = newArray //update values property with new array
    result.sum += roll //update sum property
  }
  return result
}

console.log(rollDice(3))

/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/
console.log("\nEx. 9\n")

const howManyDays = (date) => {
  let dateSince = new Date(date)
  let today = new Date()
  let timeElapsed = today.getTime() - dateSince.getTime()
  dateSince = dateSince.toLocaleDateString()
  let result = Math.ceil(timeElapsed / (1000 * 3600 * 24) - 1)
  const message = result === 1 ? ` day since ${dateSince}` :` days since ${dateSince}`
  return result + message
}

console.log(howManyDays('04/02/2021'))
// make it work for past and future

/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/
console.log("\nEx. 10\n")

const isTodayMyBirthday = (date) => {
  let myBirthday = new Date ('04/02/2021')
  let myMonth = myBirthday.getMonth()
  let myDay = myBirthday.getDay()
  let today = new Date()
  let month = today.getMonth()
  let day = today.getDate()
  return (myMonth === month && myDay === day) ? "Happy Birthday" : "It's not today." //run above function to say how many days to birthday.
}

console.log(isTodayMyBirthday())


// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file



const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/
console.log("\nEx. 11\n")

const deleteProp = (object, propertyToDelete) => {
  if (typeof object === "object"){
    delete object[propertyToDelete]
    return object
  } else console.log("Please input object.")

}

console.log(deleteProp({name: "Matt", age: 31}, "age"))

/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
console.log("\nEx. 12\n")

const oldestMovie = x => {
  // console.log(movies)
  let oldestYear = 2022
  let result
  for (let i = 0; i <= x.length - 1; i++){
    let movie = x[i]
    let movieYear = movie.Year
    if (movieYear < oldestYear){
      oldestYear = movieYear
      result = movie
    } else continue
  }
  return result
}

console.log(oldestMovie(movies))

/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/
console.log("\nEx. 13\n")

const countMovies = (movies) => movies.length

console.log(countMovies(movies))

/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/
console.log("\nEx. 14\n")

// let titles = {}
// let newObject = Object.assign(titles, movies); //object reassignment error, changes original object
// console.log(typeof titles)

// const onlyTheTitles = (newObject) => {
//   let titleArray = []
//   for (let i = 0; i <= newObject.length - 1; i++){
//     let currentMovie = newObject[i]
//     delete newObject[i].Year
//     delete newObject[i].imdbID
//     delete newObject[i].Type
//     delete newObject[i].Poster
//     titleArray.push(currentMovie)
//   }
//   console.log(movies)
//   return titleArray                  //returning array of objects with only titles property value pair
// }

const onlyTheTitles = x => {
  let result = []
  for(let i = 0; i < x.length; i++){
      const title = movies[i].Title
      result.push(title)
  }
  return result
}

console.log(onlyTheTitles(movies))

/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/
console.log("\nEx. 15\n")

// let years = {} 
// // Object.assign(years, movies);
// let newerObject = Object.assign(years, movies); //original object has been mutated and I'm not sure how to get it back..?
// // console.log(newObject)


const onlyInThisMillennium = x => {
  let result = []
  for (let i = 0; i <= x.length - 1; i++){
    let movieYear = x[i].Year
    if (movieYear > 2000) result.push(x[i])
  }
  return result
}

console.log(onlyInThisMillennium(movies))

/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/
console.log("\nEx. 16\n")

const getMovieByID = x => {
    for (let i = 0; i < movies.length; i++){
        let idToMatch = movies[i].imdbID
        if (idToMatch === x){
            return movies[i].Title
        }
  }
}

console.log(getMovieByID("tt4154756"))

/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/
console.log("\nEx. 17\n")

const sumAllTheYears = () => {
  let result = 0
    for(let i = 0; i < movies.length; i++){
      let movieYear = movies[i].Year
      result = result + +movieYear
    }
    return result
}

console.log(sumAllTheYears())

/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/
console.log("\nEx. 18\n")

const searchByTitle = x => {
    let result = []
    for(let i = 0; i < movies.length; i++){
      let title = movies[i].Title
      if (title.includes(x)) result.push(title)
    }
    return result//array of movie titles
}
//return concatenated string?
console.log(searchByTitle("Rings"))

/* EXERCISE 19
    Write a function called searchAndDivide which receives a string as a parameter and returns an object;
    this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
    and another array unmatch with all the remaining ones.
*/
console.log("\nEx. 19\n")

const searchAndDivide = x => {
  const result = {}
  const match = searchByTitle(x)
  result.match = match
  const unmatch = []
  for(let i = 0; i < movies.length; i++){
    let title = movies[i].Title
    if (!title.includes(x)) unmatch.push(title) //not ! reverse method
  }
  const answer = [match, unmatch]
  return answer
}

console.log(searchAndDivide("Rings"))


/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/
console.log("\nEx. 20\n")

const removeIndex = x => {
    movies.splice(x, 1)
    return movies
}

console.log(removeIndex(4))

// [EXTRAS] JS Advanced

/* EXERCISE 21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
console.log("\nEx. 21\n")

// const halfTree = x => {

// }
const halfTree = x => {
  if (x <= 0){
    return
  } else {
    let result = "*"
    for (let i = 0; i < x - 1; i++) {
      console.log(result)
      result += "*"
    }
    return result
  }
}

console.log(halfTree(5))

/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
console.log("\nEx. 22\n")

// const tree = x => {
//   if (x <= 0){
//     return
//   } else {
//     let result = ""
//     for (let i = 0; i < x - 1; i++) {
//       console.log(result)
//       result += "*"
//       console.log(result)
//       newLine = " " + result + "**"
//       console.log(newLine)
//     }
//     console.log(result)
//   }
// }

//(tree(5))

const tree = levels => { //tried to do this without the repeat method. gave up after about 5 hours of loop hell.
  for (let i = 0; i < levels; i++){
    let spaces = " ".repeat(levels - 1 - i)
    let stars = "*".repeat(1 + 2 * i)
    console.log(spaces + stars)
  }
}
tree(22)

/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
console.log("\nEx. 23\n")

const isItPrime = x => {
  let result
  if (x === 2) {
    result = `${x} is a prime number!\n`
    return result
  }
  else {
      for (let i = x - 1; i > 1; i--) {
          if (x % i === 0) {result = `${x} is not a prime number.\n`}
          else {result = `${x} is a prime number!\n`}
  } return result
}}

console.log(isItPrime(2))
console.log(isItPrime(4))
console.log(isItPrime(5))
console.log(isItPrime(6))
console.log(isItPrime(7))
console.log(isItPrime(9))
console.log(isItPrime(11))


/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

/* This movies array is used throughout the exercises. You're not supposed to alter it. */

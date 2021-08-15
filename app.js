const companies = [
    {"name": "company one", "category":"Finance", "start":1981, "end":2003},
     {"name": "company two", "category":"Retail", "start":1982, "end":2004},
      {"name": "company three", "category":"Auto", "start":1984, "end":2005},
       {"name": "company four", "category":"Technology", "start":1985, "end":2006},
        {"name": "company five", "category":"Finance", "start":1986, "end":2007},
         {"name": "company six", "category":"Real estate", "start":1980, "end":2009},
          {"name": "company seven", "category":"Retail", "start":1988, "end":2008}, 
          {"name": "company eight", "category":"Marketing", "start":1989, "end":2002},
           {"name": "company nine", "category":"Technology", "start":1981, "end":1989}
]


const products = [
  {"id":1,"category": "Sporting Goods", "price": 49.99, "stocked": true, "name": "Football"},
  {"id":2,"category": "Sporting Goods", "price": 9.99, "stocked": true, "name": "Football"},
  {"id":3,"category": "Sporting Goods", "price": 29.99, "stocked": false, "name": "Basketball"},
  {"id":4,"category": "Sporting Goods", "price": 59.99, "stocked": false, "name": "Basketball"},
  {"id":5,"category": "Electronics", "price": 99.99, "stocked": true, "name": "iPod Touch"},
    {"id":6,"category": "Electronics", "price": 399.99, "stocked": true, "name": "iPhone 5"},
   {"id":6,"category": "Electronics", "price": 199.99, "stocked": false, "name": "Nexus 7"}
 

]

//here an example of how to use filter array method

// const electroProducts = products.filter(function(product){
//     if (product.category === 'Electronics') {
//         return true
//     }
// })

const electronicsProducts =  products.filter(product => product.category === 'Electronics')

console.log(electronicsProducts)


const sportsProducts = products.filter(function (product) {
    if (product.category === 'Sporting Goods') {
        return true
    }
})

console.log(sportsProducts)

// console.log(companies)

//simple for loop to compare with foreach method
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
    
// }

//foreach

companies.forEach(function(company){
    console.log(company.name)
    console.log(company.category)
})


const ages = [18,23,25,33,45,61,16,22,45,64,70,20];
// console.log(ages)

let canDrink = [];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i])
        
    }
    
}

console.log(canDrink);

//how to use filter array method

// const canDrinks = ages.filter((age) =>{
//    if (age >= 21) {
//        return true;
       
//    }
// })

const drinkers = ages.filter(age => age >= 21)
console.log(drinkers);

const retailCompanies = companies.filter(function (company) {
    if (company.category === 'Technology') {
        return true
    }
})


console.log(retailCompanies)

//get companies started at 1980

const eightyCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1985))

console.log(eightyCompanies)

const lastedTenYears = companies.filter(company => (company.end - company.start >= 25))

console.log(lastedTenYears)



//how to use map array method

//create an array of companies name

const companiesNames = companies.map(function (company) {
    return company.name;
    
})


console.log(companiesNames)

//another example with map array method

const categoriesProducts = products.map(function (product) {
    return product.category;
})

console.log(categoriesProducts)

//example of map array with mulyiple parametrs to output
const generalCompanies = companies.map(function (company) {

    return ` the name of the company is: ${company.name} and field of ativity ${company.category}`;
    
})

console.log(generalCompanies)

const productsPrices = products.map(function (product) {
    return `the product name is ${product.name} and the price is ${product.price} $`
})

console.log(productsPrices)

const categoryIds = products.map(product => `the id is ${product.id} and the category is ${product.category}`)

console.log(categoryIds)

const agesSquare = ages.map(age => Math.sqrt(age))

console.log(agesSquare)

const agesTimesTwo = ages.map(age => age *2);

console.log(agesTimesTwo)

const array1 = [1, 4, 9, 16];

const arrayMap1 = array1.map(y => y *2);

console.log(arrayMap1)


//Sort Method Array
//The sort() method sorts the elements of an array in place and returns the sorted array. 


const Months = ['March','Dec','Feb','Aug','Avr','Nov','Jan'];

const sortedMonths = Months.sort();

console.log(sortedMonths)

//Another example to sort companies

const sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else{
        return -1;
    }
    
});

console.log(sortedCompanies)

const numbers = [4, 2, 5, 1, 3];

const sortedNumbers = numbers.sort(function (a,b) {
    if (a > b) {
        return 1;
    } else{
        return -1;
    }
})


console.log(sortedNumbers)


const endYearCompanies = companies.sort((a,b) => (a.end > b.end ? 1 : -1));

console.log(endYearCompanies)
//sorted ages array in descendent way
const sortAgesDesc = ages.sort((a,b) => (b - a));
console.log(sortAgesDesc)


//sorted ages array in Ascendent way

const sortAgesAsc = ages.sort((a,b) => (a -b ));
console.log(sortAgesAsc)

//reduce Array Method
const reduceArray = [1,2,3,4,5];

const reducer = reduceArray.reduce((accu, current) => accu + current);

console.log(reducer)

const ageSum = ages.reduce((total,age) => (total + age));

console.log(ageSum)

//get total years for all companies

const totalYearsCompanies = companies.reduce(function (total,company) {
    return total + (company.end - company.start)
}, 0)

console.log(totalYearsCompanies)
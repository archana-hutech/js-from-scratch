//Your input object
const dishes = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    gst: 9,
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    gst: 9,
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    gst: 9,
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    gst: 9,
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    gst: 9,
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    gst: 9,
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    gst: 9,
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    gst: 9,
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    gst: 9,
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    gst: 9,
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    gst: 9,
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    gst: 9,
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4.0,
    gst: 9,
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    gst: 9,
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    gst: 9,
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    gst: 9,
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    gst: 9,
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    gst: 9,
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    gst: 9,
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    gst: 9,
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    gst: 9,
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    gst: 9,
  },
];

//Use Js MAP only
const sampleMapOutput1 = [
  "Margherita Pizza",
  "Chicken Alfredo Pasta",
  "Vegetable Biryani",
  "Grilled Salmon",
  "Caesar Salad",
  "Sushi Platter",
  "Paneer Tikka Masala",
  "BBQ Ribs",
  "Vegetarian Pad Thai",
  "Shrimp Scampi",
  "Palak Paneer",
  "Steak Diane",
  "Caprese Salad",
  "Chicken Satay",
  "Masala Dosa",
  "Lobster Bisque",
  "Vegetarian Sushi Roll",
  "Chicken Korma",
  "Greek Salad",
  "Chicken Stir-Fry",
  "Mushroom Risotto",
  "Tandoori Chicken",
  "Vegetable Lo Mein",
  "Salmon Teriyaki",
];
//write your code
const mapOutput01 = dishes.map((dish) => dish.dishName);
console.log(mapOutput01);

const sampleMapOutput2 = [
  "Italian",
  "Italian",
  "Indian",
  "Seafood",
  "International",
  "Japanese",
  "Indian",
  "American",
  "Thai",
  "Italian",
  "Indian",
  "French",
  "Italian",
  "Thai",
  "Indian",
  "French",
  "Japanese",
  "Indian",
  "Mediterranean",
  "Chinese",
  "Italian",
  "Indian",
  "Chinese",
  "Japanese",
];
//write your code
// console.log(mapOutput2)

const sampleMapOutput3 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
  },
];
//write your code
// console.log(mapOutput3)

const sampleMapOutput4 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
  },
];
//write your code
// console.log(mapOutput4)

const sampleMapOutput5 = [
  {
    dishName: "MARGHERITA PIZZA",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
  },
  {
    dishName: "VEGETABLE BIRYANI",
  },
  {
    dishName: "GRILLED SALMON",
  },
  {
    dishName: "CAESAR SALAD",
  },
  {
    dishName: "SUSHI PLATTER",
  },
  {
    dishName: "PANEER TIKKA MASALA",
  },
  {
    dishName: "BBQ RIBS",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
  },
  {
    dishName: "PALAK PANEER",
  },
  {
    dishName: "STEAK DIANE",
  },
  {
    dishName: "CAPRESE SALAD",
  },
  {
    dishName: "CHICKEN SATAY",
  },
  {
    dishName: "MASALA DOSA",
  },
  {
    dishName: "LOBSTER BISQUE",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
  },
  {
    dishName: "CHICKEN KORMA",
  },
  {
    dishName: "GREEK SALAD",
  },
  {
    dishName: "CHICKEN STIR-FRY",
  },
  {
    dishName: "MUSHROOM RISOTTO",
  },
  {
    dishName: "TANDOORI CHICKEN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
  },
  {
    dishName: "SALMON TERIYAKI",
  },
];
//write your code
// console.log(mapOutput5)

const sampleMapOutput6 = [
  {
    dishName: "MARGHERITA PIZZA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "VEGETABLE BIRYANI",
    cuisine: "INDIAN",
  },
  {
    dishName: "GRILLED SALMON",
    cuisine: "SEAFOOD",
  },
  {
    dishName: "CAESAR SALAD",
    cuisine: "INTERNATIONAL",
  },
  {
    dishName: "SUSHI PLATTER",
    cuisine: "JAPANESE",
  },
  {
    dishName: "PANEER TIKKA MASALA",
    cuisine: "INDIAN",
  },
  {
    dishName: "BBQ RIBS",
    cuisine: "AMERICAN",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
    cuisine: "THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
    cuisine: "ITALIAN",
  },
  {
    dishName: "PALAK PANEER",
    cuisine: "INDIAN",
  },
  {
    dishName: "STEAK DIANE",
    cuisine: "FRENCH",
  },
  {
    dishName: "CAPRESE SALAD",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN SATAY",
    cuisine: "THAI",
  },
  {
    dishName: "MASALA DOSA",
    cuisine: "INDIAN",
  },
  {
    dishName: "LOBSTER BISQUE",
    cuisine: "FRENCH",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
    cuisine: "JAPANESE",
  },
  {
    dishName: "CHICKEN KORMA",
    cuisine: "INDIAN",
  },
  {
    dishName: "GREEK SALAD",
    cuisine: "MEDITERRANEAN",
  },
  {
    dishName: "CHICKEN STIR-FRY",
    cuisine: "CHINESE",
  },
  {
    dishName: "MUSHROOM RISOTTO",
    cuisine: "ITALIAN",
  },
  {
    dishName: "TANDOORI CHICKEN",
    cuisine: "INDIAN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
    cuisine: "CHINESE",
  },
  {
    dishName: "SALMON TERIYAKI",
    cuisine: "JAPANESE",
  },
];
//write your code
// console.log(mapOutput6)

const sampleMapOutput7 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    MRP: 14.1591,
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    MRP: 16.339100000000002,
  },
  //.......
];
//write your code
// console.log(mapOutput7)

const sampleMapOutput8 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    title: "Margherita Pizza/Italian/veg/with 3.5 rating",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    title: "Chicken Alfredo Pasta/Italian/non-veg/with 4.2 rating",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    title: "Vegetable Biryani/Indian/veg/with 3.7 rating",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    title: "Grilled Salmon/Seafood/non-veg/with 4.8 rating",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    title: "Caesar Salad/International/veg/with 3.3 rating",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    title: "Sushi Platter/Japanese/non-veg/with 3.6 rating",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    title: "Paneer Tikka Masala/Indian/veg/with 4.4 rating",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    title: "BBQ Ribs/American/non-veg/with 3.9 rating",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    title: "Vegetarian Pad Thai/Thai/veg/with 4.2 rating",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    title: "Shrimp Scampi/Italian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    title: "Palak Paneer/Indian/veg/with 4.5 rating",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    title: "Steak Diane/French/non-veg/with 3.8 rating",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    title: "Caprese Salad/Italian/veg/with 4.3 rating",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    title: "Chicken Satay/Thai/non-veg/with 4.6 rating",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    title: "Masala Dosa/Indian/veg/with 4 rating",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    title: "Lobster Bisque/French/non-veg/with 4.9 rating",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    title: "Vegetarian Sushi Roll/Japanese/veg/with 4.1 rating",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    title: "Chicken Korma/Indian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    title: "Greek Salad/Mediterranean/veg/with 3.4 rating",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    title: "Chicken Stir-Fry/Chinese/non-veg/with 4.6 rating",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    title: "Mushroom Risotto/Italian/veg/with 4.5 rating",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    title: "Tandoori Chicken/Indian/non-veg/with 4.8 rating",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    title: "Vegetable Lo Mein/Chinese/veg/with 4.2 rating",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    title: "Salmon Teriyaki/Japanese/non-veg/with 4.7 rating",
  },
];
//write your code
const mapOutpt8 = dishes.map((item) => {
  return item.rating >= 4.5
    ? { ...item, grade: "MOST POPULAR" }
    : item.rating >= 3.5
    ? { ...item, grade: "POPULAR" }
    : item;
});
// console.log(mapOutpt8);

//added grade:- >=4.5(MOST POPULAR);>=3.5(POPULAR)
const sampleMapOutput9 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    gst: 9,
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    gst: 9,
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
];
//write your code
// console.log(mapOutput9)'

//
//
//
//
//
//
// Use JS FILTER Only
// 1.list all veg dishes
//write your code

// 2.list all non-veg dishes
//write your code

// 3.list all Italian dishes
//write your code

// 4.list all Indian dishes
//write your code

// 5.list all Thai dishes
//write your code

// 6.list all dishes whos price is >= 20
//write your code

// 7.list all dishes whos price is < 11
//write your code

// 8.list all dishes whos rating >= 4.5
//write your code

// 9.list all Indian, non-veg dishes
//write your code

// 10.list all Indian, veg dishes
//write your code

// 11.list all Japnes, veg dishes
//write your code

// 12.list all French, non-veg dishes
//write your code

// 13.list all non-veg dishes whos rating >4
//write your code

// 14.list all veg dishes whos rating >4
//write your code

// 15.list all non-veg dishes whos rating <4
//write your code

// 16.list all Indian,non-veg dishes  whos price is > 15
//write your code

// 17.list all Indian,veg dishes whos price is < 10
//write your code

// 18.list all Japnes,veg dishes whos price is >= 20
//write your code

// 19.list all Italian,veg dishes whos price is > 15
//write your code

// 20.list all India,veg dishes whos price is > 10 and rating > 4
//write your code

// 21.list all Italian,veg dishes whos price is < 11 and rating >3.5
//write your code

// 22.list all Italian,non-veg dishes whos price is > 15 and rating >= 4.5
//write your code
//
//
//
//
//
//
// Use JS filter and map together
// 1.list all Thai dishes(name only)
//write your code
const filterMap = dishes
  .filter((f) => f.cuisine === "Thai")
  .map((d) => d.dishName);
// console.log(filterMap);

// 2.list all non-veg dishes(name only)
//write your code
const filterMap1 = dishes
  .filter((f) => f.type === "non-veg")
  .map((d) => d.dishName);
// console.log(filterMap1);
// 3.list all Indian, non-veg dishes(name only)
//write your code

// 4.list all Italian, veg dishes(name and price)
//write your code

// 5.list all Japnes,veg dishes whos price is < 10(name, price)
//write your code

// 6.list all Italian,non-veg dishes whos rating is >= 4(name,price, rating)
//write your code

// 7.list all non-veg dishes whos rating <4(full details with MRP)
//write your code
//
//
//
//
//
//
//Use Js forEach
const sampleForEachMapOutput1 = [
  "Margherita Pizza",
  "Chicken Alfredo Pasta",
  "Vegetable Biryani",
  "Grilled Salmon",
  "Caesar Salad",
  "Sushi Platter",
  "Paneer Tikka Masala",
  "BBQ Ribs",
  "Vegetarian Pad Thai",
  "Shrimp Scampi",
  "Palak Paneer",
  "Steak Diane",
  "Caprese Salad",
  "Chicken Satay",
  "Masala Dosa",
  "Lobster Bisque",
  "Vegetarian Sushi Roll",
  "Chicken Korma",
  "Greek Salad",
  "Chicken Stir-Fry",
  "Mushroom Risotto",
  "Tandoori Chicken",
  "Vegetable Lo Mein",
  "Salmon Teriyaki",
];
//write your code
const forEachMapOutput1 = [];
//  dishes.forEach((e) =>{forEachMapOutput1.push(e.dishName)} )
dishes.forEach(({ dishName }) => {
  forEachMapOutput1.push(dishName);
});
// console.log(forEachMapOutput1)

const sampleForEachMapOutput2 = [
  "Italian",
  "Italian",
  "Indian",
  "Seafood",
  "International",
  "Japanese",
  "Indian",
  "American",
  "Thai",
  "Italian",
  "Indian",
  "French",
  "Italian",
  "Thai",
  "Indian",
  "French",
  "Japanese",
  "Indian",
  "Mediterranean",
  "Chinese",
  "Italian",
  "Indian",
  "Chinese",
  "Japanese",
];
//write your code
const forEachMapOutput2 = [];
// dishes.forEach((e)=>{forEachMapOutput2.push(e.cuisine)} )
dishes.forEach(({ cuisine }) => {
  forEachMapOutput2.push(cuisine);
});
// console.log(forEachMapOutput2)

const sampleForEachMapOutput3 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
  },
];
//write your code
const forEachMapOutput3 = [];
dishes.forEach(({ dishName, cuisine }) => {
  forEachMapOutput3.push({ dishName, cuisine });
});
// console.log(forEachMapOutput3)

const sampleForEachMapOutput4 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
  },
];
//write your code
const forEachMapOutput4 = [];
dishes.forEach(({ dishName, cuisine, type }) => {
  forEachMapOutput4.push({ dishName, cuisine, type });
});
// console.log(forEachMapOutput4)

const sampleForEachMapOutput5 = [
  {
    dishName: "MARGHERITA PIZZA",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
  },
  {
    dishName: "VEGETABLE BIRYANI",
  },
  {
    dishName: "GRILLED SALMON",
  },
  {
    dishName: "CAESAR SALAD",
  },
  {
    dishName: "SUSHI PLATTER",
  },
  {
    dishName: "PANEER TIKKA MASALA",
  },
  {
    dishName: "BBQ RIBS",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
  },
  {
    dishName: "PALAK PANEER",
  },
  {
    dishName: "STEAK DIANE",
  },
  {
    dishName: "CAPRESE SALAD",
  },
  {
    dishName: "CHICKEN SATAY",
  },
  {
    dishName: "MASALA DOSA",
  },
  {
    dishName: "LOBSTER BISQUE",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
  },
  {
    dishName: "CHICKEN KORMA",
  },
  {
    dishName: "GREEK SALAD",
  },
  {
    dishName: "CHICKEN STIR-FRY",
  },
  {
    dishName: "MUSHROOM RISOTTO",
  },
  {
    dishName: "TANDOORI CHICKEN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
  },
  {
    dishName: "SALMON TERIYAKI",
  },
];
//write your code
const forEachMapOutput5 = [];
dishes.forEach(({ dishName }) => {
  forEachMapOutput5.push({ dishName: dishName.toUpperCase() });
});
// console.log(forEachMapOutput5)

const sampleForEachMapOutput6 = [
  {
    dishName: "MARGHERITA PIZZA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "VEGETABLE BIRYANI",
    cuisine: "INDIAN",
  },
  {
    dishName: "GRILLED SALMON",
    cuisine: "SEAFOOD",
  },
  {
    dishName: "CAESAR SALAD",
    cuisine: "INTERNATIONAL",
  },
  {
    dishName: "SUSHI PLATTER",
    cuisine: "JAPANESE",
  },
  {
    dishName: "PANEER TIKKA MASALA",
    cuisine: "INDIAN",
  },
  {
    dishName: "BBQ RIBS",
    cuisine: "AMERICAN",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
    cuisine: "THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
    cuisine: "ITALIAN",
  },
  {
    dishName: "PALAK PANEER",
    cuisine: "INDIAN",
  },
  {
    dishName: "STEAK DIANE",
    cuisine: "FRENCH",
  },
  {
    dishName: "CAPRESE SALAD",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN SATAY",
    cuisine: "THAI",
  },
  {
    dishName: "MASALA DOSA",
    cuisine: "INDIAN",
  },
  {
    dishName: "LOBSTER BISQUE",
    cuisine: "FRENCH",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
    cuisine: "JAPANESE",
  },
  {
    dishName: "CHICKEN KORMA",
    cuisine: "INDIAN",
  },
  {
    dishName: "GREEK SALAD",
    cuisine: "MEDITERRANEAN",
  },
  {
    dishName: "CHICKEN STIR-FRY",
    cuisine: "CHINESE",
  },
  {
    dishName: "MUSHROOM RISOTTO",
    cuisine: "ITALIAN",
  },
  {
    dishName: "TANDOORI CHICKEN",
    cuisine: "INDIAN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
    cuisine: "CHINESE",
  },
  {
    dishName: "SALMON TERIYAKI",
    cuisine: "JAPANESE",
  },
];
//write your code
const forEachMapOutput6 = [];
dishes.forEach(({ dishName, cuisine }) => {
  forEachMapOutput6.push({
    dishName: dishName.toUpperCase(),
    cuisine: cuisine.toUpperCase(),
  });
});
// console.log(forEachMapOutput6)

const sampleForEachMapOutput7 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    MRP: 14.1591,
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    MRP: 16.339100000000002,
  },
  //.......
];
//write your code
const forEachMapOutput7 = [];
dishes.forEach(({ dishName, cuisine, type, price, rating, gst }) => {
  const MRP = price * (1 + gst / 100);
  forEachMapOutput7.push({ dishName, cuisine, type, price, rating, gst, MRP });
});
// console.log(forEachMapOutput7)

const sampleForEachMapOutput8 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    title: "Margherita Pizza/Italian/veg/with 3.5 rating",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    title: "Chicken Alfredo Pasta/Italian/non-veg/with 4.2 rating",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    title: "Vegetable Biryani/Indian/veg/with 3.7 rating",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    title: "Grilled Salmon/Seafood/non-veg/with 4.8 rating",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    title: "Caesar Salad/International/veg/with 3.3 rating",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    title: "Sushi Platter/Japanese/non-veg/with 3.6 rating",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    title: "Paneer Tikka Masala/Indian/veg/with 4.4 rating",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    title: "BBQ Ribs/American/non-veg/with 3.9 rating",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    title: "Vegetarian Pad Thai/Thai/veg/with 4.2 rating",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    title: "Shrimp Scampi/Italian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    title: "Palak Paneer/Indian/veg/with 4.5 rating",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    title: "Steak Diane/French/non-veg/with 3.8 rating",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    title: "Caprese Salad/Italian/veg/with 4.3 rating",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    title: "Chicken Satay/Thai/non-veg/with 4.6 rating",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    title: "Masala Dosa/Indian/veg/with 4 rating",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    title: "Lobster Bisque/French/non-veg/with 4.9 rating",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    title: "Vegetarian Sushi Roll/Japanese/veg/with 4.1 rating",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    title: "Chicken Korma/Indian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    title: "Greek Salad/Mediterranean/veg/with 3.4 rating",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    title: "Chicken Stir-Fry/Chinese/non-veg/with 4.6 rating",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    title: "Mushroom Risotto/Italian/veg/with 4.5 rating",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    title: "Tandoori Chicken/Indian/non-veg/with 4.8 rating",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    title: "Vegetable Lo Mein/Chinese/veg/with 4.2 rating",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    title: "Salmon Teriyaki/Japanese/non-veg/with 4.7 rating",
  },
];
//write your code
const forEachMapOutput8 = [];
dishes.forEach((f) => {
  forEachMapOutput8.push({
    ...f,
    title: `${f.dishName}/${f.cuisine}/${f.type}/with ${f.rating} rating`,
  });
});
// console.log(forEachMapOutput8)

//added grade:- >=4.5(MOST POPULAR);>=3.5(POPULAR)
const sampleForEachMapOutput9 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    gst: 9,
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    gst: 9,
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
];
//write your code
const forEachMapOutput9 = [];
// dishes.forEach((f) => {
//   let grade = "";
//   if (f.rating >= 4.5) {
//     grade = "MOST POPULAR";
//   } else if (f.rating >= 3.5) {
//     grade = "POPULAR";
//   }
//   forEachMapOutput9.push({
//     dishName: f.dishName,
//     cuisine: f.cuisine,
//     type: f.type,
//     price: f.price,
//     rating: f.rating,
//     gst: f.gst,
//     grade: grade,
//   });
// });
dishes.forEach((item) => {
  forEachMapOutput9.push(
    item.rating >= 4.5
      ? { ...item, grade: "MOST POPULAR" }
      : item.rating >= 3.5
      ? { ...item, grade: "POPULAR" }
      : item
  );
});
// console.log(forEachMapOutput9);
//
//
//
//
//
//
// Using JS forEach to filter an array ele
// 1.list all veg dishes
//write your code
const f1 = [];
dishes.forEach((dish) => {
  if (dish.type === "veg") {
    f1.push(dish);
  }
});
// console.log(f1);

// 2.list all non-veg dishes
//write your code
const f2 = [];
dishes.forEach((dish) => {
  if (dish.type === "non-veg") {
    f2.push(dish);
  }
});
// console.log(f2);

// 3.list all Italian dishes
//write your code
const f3 = [];
dishes.forEach((dish) => {
  if (dish.cuisine === "Italian") {
    f3.push(dish);
  }
});
// console.log(f3);

// 4.list all Indian dishes
//write your code
const f4 = [];
dishes.forEach((dish) => {
  if (dish.cuisine === "Indian") {
    f4.push(dish);
  }
});
// console.log(f4);

// 5.list all Thai dishes
//write your code
const f5 = [];
dishes.forEach((dish) => {
  if (dish.cuisine === "Thai") {
    f5.push(dish);
  }
});
// console.log(f5);

// 6.list all dishes whos price is >= 20
//write your code
const f6 = [];
dishes.forEach((dish) => {
  if (dish.price >= 20) {
    f6.push(dish);
  }
});
// console.log(f6);

// 7.list all dishes whos price is < 11
//write your code
const f7 = [];
dishes.forEach((dish) => {
  if (dish.price < 11) {
    f7.push(dish);
  }
});
// console.log(f7);

// 8.list all dishes whos rating >= 4.5
//write your code
const f8 = [];
dishes.forEach((dish) => {
  if (dish.rating >= 4.5) {
    f8.push(dish);
  }
});
// console.log(f8);

// 9.list all Indian, non-veg dishes
//write your code
const f9 = [];
dishes.forEach((dish) => {
  if (dish.cuisine === "Indian" && dish.type === "non-veg") {
    f9.push(dish);
  }
});
// console.log(f9);

// 10.list all Indian, veg dishes
//write your code
const f10 = [];
dishes.forEach((dish) => {
  if (dish.cuisine === "Indian" && dish.type === "veg") {
    f10.push(dish);
  }
});
// console.log(f10);

// 11.list all Japnes, veg dishes
//write your code
const f11 = [];
dishes.forEach((dish) => {
  if (dish.cuisine === "Japanese" && dish.type === "veg") {
    f11.push(dish);
  }
});
// console.log(f11);

// 12.list all French, non-veg dishes
//write your code
const f12 = [];
dishes.forEach((dish) => {
  if (dish.cuisine === "French" && dish.type === "non-veg") {
    f12.push(dish);
  }
});
// console.log(f12);

// 13.list all non-veg dishes whos rating >4
//write your code
const f13 = [];
dishes.forEach((dish) => {
  if (dish.type === "non-veg" && dish.rating > 4) {
    f13.push(dish);
  }
});
// console.log(f13);

// 14.list all veg dishes whos rating >4
//write your code
const f14 = [];
dishes.forEach((dish) => {
  if (dish.type === "veg" && dish.rating > 4) {
    f14.push(dish);
  }
});
// console.log(f14);

// 15.list all non-veg dishes whos rating <4
//write your code
const f15 = [];
dishes.forEach((dish) => {
  if (dish.type === "non-veg" && dish.rating < 4) {
    f15.push(dish);
  }
});
// console.log(f15);

// 16.list all Indian,non-veg dishes  whos price is > 15
//write your code
const f16 = [];
dishes.forEach((dish) => {
  if (
    dish.cuisine === "Inishian" &&
    dish.type === "non-veg" &&
    dish.price > 15
  ) {
    f16.push(dish);
  }
});
// dishes.filter(d => d.cuisine === 'Indian'&& d.type ==='non-veg' && d.price > 15 )
// .forEach((dish)=>{
//     f16.push(dish)
// })
// console.log(f16);

// 17.list all Indian,veg dishes whos price is < 10
//write your code
const f17 = [];
dishes.forEach((dish) => {
  if (dish.cuisine === "Indian" && dish.type === "veg" && dish.price < 10) {
    f17.push(dish);
  }
});
// dishes.filter(d => d.cuisine === 'Indian'&& d.type ==='veg' && d.price < 10 )
// .forEach((dish)=>{
//     f17.push(dish)
// })
// console.log(f17);

// 18.list all Japnes,veg dishes whos price is >= 20
//write your code
const f18 = [];
dishes.forEach((dish) => {
  if (dish.cuisine === "Japanese" && dish.type === "veg" && dish.price >= 20) {
    f18.push(dish);
  }
});
// dishes.filter(d => d.cuisine === 'Japanese' && d.type ==='veg' && d.price >= 20 )
// .forEach((dish)=>{
//     f18.push(dish)
// })
// console.log(f18);

// 19.list all Italian,veg dishes whos price is > 15
//write your code
const f19 = [];
dishes.forEach((dish) => {
  if (dish.cuisine === "Italian" && dish.type === "veg" && dish.price > 15) {
    f19.push(dish);
  }
});
// dishes.filter(d => d.cuisine === 'Italian'&& d.type ==='veg' && d.price > 15 )
// .forEach((dish)=>{
//     f19.push(dish)
// })
// console.log(f19);

// 20.list all India,veg dishes whos price is > 10 and rating > 4
//write your code
const f20 = [];
dishes.forEach((dish) => {
  if (
    dish.cuisine === "Indian" &&
    dish.type === "veg" &&
    dish.price > 10 &&
    dish.rating > 4
  ) {
    f20.push(dish);
  }
});
// dishes.filter(d => d.cuisine === 'Indian'&& d.type ==='veg' && d.price > 10 && d.rating>4 )
// .forEach((dish)=>{
//     f20.push(dish)
// })
// console.log(f20);

// 21.list all Italian,veg dishes whos price is < 11 and rating >3.5
//write your code
const f21 = [];
dishes.forEach((dish) => {
  if (
    dish.cuisine === "Italian" &&
    dish.type === "veg" &&
    dish.price < 11 &&
    dish.rating > 3.5
  ) {
    f21.push(dish);
  }
});
// dishes.filter(d => d.cuisine === 'Italian'&& d.type ==='veg' && d.price < 11 && d.rating > 3.5)
// .forEach((dish)=>{
//     f21.push(dish)
// })
// console.log(f21);

// 22.list all Italian,non-veg dishes whos price is > 15 and rating >= 4.5
//write your code
const f22 = [];
dishes.forEach((dish) => {
  if (
    dish.cuisine === "Italian" &&
    dish.type === "non-veg" &&
    dish.price > 15 &&
    dish.rating >= 4.5
  ) {
    f22.push(dish);
  }
});
// dishes.filter(d => d.cuisine === 'Italian'&& d.type ==='non-veg' && d.price > 15  && d.rating >=4.5)
// .forEach((dish)=>{
//     f22.push(dish)
// })
// console.log(f22);
//
//
//
//
//
//
//
// Using JS forEach(both map filter combined)
// 1.list all Thai dishes(name only)
//write your code
const e1 = [];
// dishes.filter(d => d.cuisine === 'Thai').forEach((d) =>{e1.push(d.dishName)})
dishes.forEach((f) => {
  if (f.cuisine === "Thai") {
    e1.push(f.dishName);
  }
});
// console.log(e1);

// 2.list all non-veg dishes(name only)
//write your code
const e2 = [];
// dishes.filter(f => f.type === 'non-veg').forEach((d) => {e2.push(d.dishName)})
dishes.forEach((f) => {
  f.type === "non-veg" && e2.push(f.dishName);
});
// console.log(e2);

// 3.list all Indian, non-veg dishes(name only)
//write your code
const e3 = [];
// dishes.filter(f => f.cuisine === 'Indian' && f.type === 'non-veg')
// .forEach((d) => {e3.push({dishName:d.dishName})})
dishes.forEach((f) => {
  f.cuisine === "Indian" &&
    f.type === "non-veg" &&
    e3.push({ dishName: f.dishName });
});
// console.log(e3);

// 4.list all Italian, veg dishes(name and price)
//write your code
const e4 = [];
// dishes.filter(f => f.cuisine === 'Italian' && f.type=== 'veg')
// .forEach((d) => {e4.push({dishName:d.dishName, price:d.price})})
dishes.forEach((f) => {
  f.cuisine === "Italian" &&
    f.type === "veg" &&
    e4.push({ dishName: f.dishName, price: f.price });
});
// console.log(e4);

// 5.list all Japnes,veg dishes whos price is < 10(name, price)
//write your code
const e5 = [];
// dishes.filter(f => f.cuisine === 'Japnese' && f.type === 'veg'&& f.price < 10)
// .forEach((d) =>{e5.push({dishName: d.dishName, price: d.price})})
dishes.forEach((d) => {
  d.cuisine === "Japnese" &&
    d.type === "veg" &&
    d.price < 10 &&
    e5.push({ dishName: d.dishName, price: d.price });
});
// console.log(e5);

// 6.list all Italian,non-veg dishes whos rating is >= 4(name,price, rating)
//write your code
const e6 = [];
// dishes.filter(f => f.cuisine === 'Italian' && f.type === 'non-veg' && f.rating >= 4)
// .forEach((d) =>{e6.push({dishName:d.dishName, price: d.price, rating: d.rating})})
dishes.forEach((f) => {
  f.cuisine === "Italian" &&
    f.type === "non-veg" &&
    f.rating >= 4 &&
    e6.push({ dishName: f.dishName, price: f.price, rating: f.rating });
});
// console.log(e6)
// 7.list all non-veg dishes whos rating <4(full details with MRP)
//write your code
const e7 = [];
// dishes.filter(f => f.type === 'non-veg' && f.rating < 4)
// .forEach(({ dishName, cuisine, type, price, rating, gst }) => {
//   const MRP = price * (1 + gst/100);
//   e7.push({ dishName, cuisine, type, price, rating, gst, MRP })
// })
dishes.forEach(({ dishName, cuisine, type, price, rating, gst }) => {
  if (type === "non-veg" && rating < 4) {
    const MRP = price * (1 + gst / 100);
    e7.push({ dishName, cuisine, type, price, rating, gst, MRP });
  }
});
// console.log(e7);

//
//
//
//
//----------END OF ARRAY OF OBJECT WITH MAP FILTER AND FOREACH-------------
//
//
//
//
//
const myNumbers = [2, 3, 6, 8, 5, 9, 6, 10, 2, 4, 5, 8, 7];
// using MAP
// 1)list all the numbers as double of each number
const m1 = myNumbers.map((num) => num * 2);
// console.log(m1)
// 2)list all numbers square
const m2 = myNumbers.map((num) => num ** 2);
// console.log(m2);

// 3)list all numbers cube
const m3 = myNumbers.map((num) => num ** 3);
// console.log(m3);

// 4)subtract 2 from each number and print
const m4 = myNumbers.map((num) => num - 2);
// console.log(m4);

// 5)list all the numbers result after divided by 3(maximum 2 decimal digits allowed)
const m5 = myNumbers.map((num) => (num / 3).toFixed(2));
// console.log(m5);

// 6)list array as, odd numbers square and even numbers cube
const m6 = myNumbers.map((num) => {
  return num % 2 === 0 ? num ** 3 : num ** 2;
});
// console.log(m6);

// 7)list all array number with additing up with next number(no next number means add 0)
const m7 = myNumbers.map((num, index) => {
  const nextNum = myNumbers?.[index + 1] || 0;
  return num + nextNum;
});
// console.log(m7);

// 7)list all array number with additing up withprevious and next number(no previous/next number means add 0)
const m8 = myNumbers.map((num, index) => {
  const nxtNum = myNumbers[index + 1] || 0;
  const previousNum = myNumbers[index - 1] || 0;
  return num + previousNum + nxtNum;
});
// console.log(m8);

// 8)list array as,
// multiplied by 2 if number completely divided by 2(maximum 2 decimal digits allowed)
// multiplied by 3 if number completely divided by 3(maximum 2 decimal digits allowed)
// otherwise return square of number

const m9 = myNumbers.map((num) => {
  return num % 2 === 0
    ? (num * 2).toFixed(2)
    : num % 3 === 0
    ? (num * 3).toFixed(2)
    : (num ** 2).toFixed(2);
});
// console.log(m9);

//
//
//
//
//
// using FILTER
// 1)list all odd numbers
const ft1 = myNumbers.filter((t) => t % 2 == 1);
// console.log(ft1);

// 2)list all even numbers
const ft2 = myNumbers.filter((t) => t % 2 == 0);
// console.log(ft2);

// 3)list all numbers which is multiplier of 3
const ft3 = myNumbers.filter((t) => t % 3 == 0);
// console.log(ft3);

// 4)list all numbers which is multiplier of 2 as well as 3
const ft4 = myNumbers.filter((t) => t % 2 == 0 && t % 3 == 0);
// console.log(ft4);

// 5)list all numbers whos square root is a whole number(integer)
//
//
//
//
//
//
// using forEach like MAP
// 1)list all the numbers as double of each number
const fe1 = [];
myNumbers.forEach((e) => {
  fe1.push(e * 2);
});
//  console.log(fe1)
// 2)list all numbers square
const fe2 = [];
myNumbers.forEach((e) => {
  fe2.push(e ** 2);
});
// console.log(fe2);

// 3)list all numbers cube
const fe3 = [];
myNumbers.forEach((e) => {
  fe3.push(e ** 3);
});
// console.log(fe3);

// 4)subtract 2 from each number and print
const fe4 = [];
myNumbers.forEach((e) => {
  fe4.push(e - 2);
});
// console.log(fe4);

// 5)list all the numbers result after divided by 3(maximum 2 decimal digits allowed)
const fe5 = [];
myNumbers.forEach((e) => {
  fe5.push((e / 3).toFixed(2));
});
// console.log(fe5);

// 6)list array as, odd numbers square and even numbers cube
const fe6 = [];
myNumbers.forEach((e) => {
  fe6.push(e % 2 === 0 ? e ** 3 : e ** 2);
});
// console.log(fe6);
// 7)list all array number with additing up with next number(no next number means add 0)
const fe7 = [];
myNumbers.forEach((e, index) => {
  const nextNum = myNumbers[index + 1] || 0;
  fe7.push(e + nextNum);
});
// console.log(fe7);

// 8)list all array number with additing up withprevious and next number(no previous/next number means add 0)
const fe8 = [];
myNumbers.forEach((e, i) => {
  const nxtNum = myNumbers[i + 1] || 0;
  const preNum = myNumbers[i - 1] || 0;
  fe8.push(e + preNum + nxtNum);
});
// console.log(fe8);

// 9)list array as,
// multiplied by 2 if number completely divided by 2(maximum 2 decimal digits allowed)
// multiplied by 3 if number completely divided by 3(maximum 2 decimal digits allowed)
// otherwise return square of number

const fe9 = [];
myNumbers.forEach((e) => {
  fe9.push(
    e % 2 === 0
      ? (e * 2).toFixed(2)
      : e % 3 === 0
      ? (e * 3).toFixed(2)
      : (e ** 2).toFixed(2)
  );
});
// console.log(fe9);

//
//
// using forEach like FILTER
// 1)list all odd numbers
const flt1 = [];
myNumbers.forEach((t) => {
  t % 2 !== 0 && flt1.push(t);
});
// console.log(flt1);

// 2)list all even numbers
const flt2 = [];
myNumbers.forEach((t) => {
  t % 2 === 0 && flt2.push(t);
});
// console.log(flt2);

// 3)list all numbers which is multiplier of 3
const flt3 = [];
myNumbers.forEach((t) => {
  t % 3 == 0 && flt3.push(t);
});
// console.log(flt3);

// 4)list all numbers which is multiplier of 2 as well as 3
const flt4 = [];
myNumbers.forEach((t) => {
  t % 2 == 0 && t % 3 == 0 && flt4.push(t);
});
// console.log(flt4);

// 5)list all numbers whos square root is a whole number(integer)
//
//
//
//
// using forEach(like both map filter combined)
// 1)list all odd numbers with doubling
// 2)list all even numbers with trippling
// 3)list cube of all the number which is completely devided by 3
// 4)list all array number with additing up with next number(no next number means add 0)
//
//
//
//
//
//
//
//
//
//----------END OF ARRAY OF element WITH MAP FILTER AND FOREACH-------------
//----------START OF ARRAY OF object WITH REDUCE-------------
//
//
//
//
//
//

//Use Js REDUCE only
const sampleReduceMapOutput1 = [
  "Margherita Pizza",
  "Chicken Alfredo Pasta",
  "Vegetable Biryani",
  "Grilled Salmon",
  "Caesar Salad",
  "Sushi Platter",
  "Paneer Tikka Masala",
  "BBQ Ribs",
  "Vegetarian Pad Thai",
  "Shrimp Scampi",
  "Palak Paneer",
  "Steak Diane",
  "Caprese Salad",
  "Chicken Satay",
  "Masala Dosa",
  "Lobster Bisque",
  "Vegetarian Sushi Roll",
  "Chicken Korma",
  "Greek Salad",
  "Chicken Stir-Fry",
  "Mushroom Risotto",
  "Tandoori Chicken",
  "Vegetable Lo Mein",
  "Salmon Teriyaki",
];
//write your code
const mapOutput1 = dishes.reduce((res, curr) => {
  res.push(curr.dishName);
  return res;
}, []);
// console.log(mapOutput1);

const sampleReduceMapOutput2 = [
  "Italian",
  "Italian",
  "Indian",
  "Seafood",
  "International",
  "Japanese",
  "Indian",
  "American",
  "Thai",
  "Italian",
  "Indian",
  "French",
  "Italian",
  "Thai",
  "Indian",
  "French",
  "Japanese",
  "Indian",
  "Mediterranean",
  "Chinese",
  "Italian",
  "Indian",
  "Chinese",
  "Japanese",
];
//write your code
const mapOutput2 = dishes.reduce((res, curr) => {
  res.push(curr.cuisine);
  return res;
}, []);
// console.log(mapOutput2);

const sampleReduceMapOutput3 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
  },
];
//write your code
const mapOutput3 = dishes.reduce((res, curr) => {
  res.push({ dishName: curr.dishName, cuisine: curr.cuisine });
  return res;
}, []);
// console.log(mapOutput3);

const sampleReduceMapOutput4 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
  },
];
//write your code
const mapOutput4 = dishes.reduce((res, curr) => {
  res.push({
    dishName: curr.dishName,
    cuisine: curr.cuisine,
    type: curr.type,
  });
  return res;
}, []);
// console.log(mapOutput4);

const sampleReduceMapOutput5 = [
  {
    dishName: "MARGHERITA PIZZA",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
  },
  {
    dishName: "VEGETABLE BIRYANI",
  },
  {
    dishName: "GRILLED SALMON",
  },
  {
    dishName: "CAESAR SALAD",
  },
  {
    dishName: "SUSHI PLATTER",
  },
  {
    dishName: "PANEER TIKKA MASALA",
  },
  {
    dishName: "BBQ RIBS",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
  },
  {
    dishName: "PALAK PANEER",
  },
  {
    dishName: "STEAK DIANE",
  },
  {
    dishName: "CAPRESE SALAD",
  },
  {
    dishName: "CHICKEN SATAY",
  },
  {
    dishName: "MASALA DOSA",
  },
  {
    dishName: "LOBSTER BISQUE",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
  },
  {
    dishName: "CHICKEN KORMA",
  },
  {
    dishName: "GREEK SALAD",
  },
  {
    dishName: "CHICKEN STIR-FRY",
  },
  {
    dishName: "MUSHROOM RISOTTO",
  },
  {
    dishName: "TANDOORI CHICKEN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
  },
  {
    dishName: "SALMON TERIYAKI",
  },
];
//write your code
const mapOutput5 = dishes.reduce((result, curr) => {
  result.push({
    dishName: curr.dishName.toUpperCase(),
  });
  return result;
}, []);
// console.log(mapOutput5);

const sampleReduceMapOutput6 = [
  {
    dishName: "MARGHERITA PIZZA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "VEGETABLE BIRYANI",
    cuisine: "INDIAN",
  },
  {
    dishName: "GRILLED SALMON",
    cuisine: "SEAFOOD",
  },
  {
    dishName: "CAESAR SALAD",
    cuisine: "INTERNATIONAL",
  },
  {
    dishName: "SUSHI PLATTER",
    cuisine: "JAPANESE",
  },
  {
    dishName: "PANEER TIKKA MASALA",
    cuisine: "INDIAN",
  },
  {
    dishName: "BBQ RIBS",
    cuisine: "AMERICAN",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
    cuisine: "THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
    cuisine: "ITALIAN",
  },
  {
    dishName: "PALAK PANEER",
    cuisine: "INDIAN",
  },
  {
    dishName: "STEAK DIANE",
    cuisine: "FRENCH",
  },
  {
    dishName: "CAPRESE SALAD",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN SATAY",
    cuisine: "THAI",
  },
  {
    dishName: "MASALA DOSA",
    cuisine: "INDIAN",
  },
  {
    dishName: "LOBSTER BISQUE",
    cuisine: "FRENCH",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
    cuisine: "JAPANESE",
  },
  {
    dishName: "CHICKEN KORMA",
    cuisine: "INDIAN",
  },
  {
    dishName: "GREEK SALAD",
    cuisine: "MEDITERRANEAN",
  },
  {
    dishName: "CHICKEN STIR-FRY",
    cuisine: "CHINESE",
  },
  {
    dishName: "MUSHROOM RISOTTO",
    cuisine: "ITALIAN",
  },
  {
    dishName: "TANDOORI CHICKEN",
    cuisine: "INDIAN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
    cuisine: "CHINESE",
  },
  {
    dishName: "SALMON TERIYAKI",
    cuisine: "JAPANESE",
  },
];
//write your code
const mapOutput6 = dishes.reduce((res, curr) => {
  res.push({
    dishName: curr.dishName.toUpperCase(),
    cuisine: curr.cuisine.toUpperCase(),
  });
  return res;
}, []);
// console.log(mapOutput6);

const sampleReduceMapOutput7 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    MRP: 14.1591,
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    MRP: 16.339100000000002,
  },
  //.......
];
//write your code
const mapOutput7 = dishes.reduce((res, curr) => {
  const MRP = curr.price * (1 + curr.gst / 100);
  res.push({ ...curr, MRP });
  return res;
}, []);
// console.log(mapOutput7);

const sampleReduceMapOutput8 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    title: "Margherita Pizza/Italian/veg/with 3.5 rating",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    title: "Chicken Alfredo Pasta/Italian/non-veg/with 4.2 rating",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    title: "Vegetable Biryani/Indian/veg/with 3.7 rating",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    title: "Grilled Salmon/Seafood/non-veg/with 4.8 rating",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    title: "Caesar Salad/International/veg/with 3.3 rating",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    title: "Sushi Platter/Japanese/non-veg/with 3.6 rating",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    title: "Paneer Tikka Masala/Indian/veg/with 4.4 rating",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    title: "BBQ Ribs/American/non-veg/with 3.9 rating",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    title: "Vegetarian Pad Thai/Thai/veg/with 4.2 rating",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    title: "Shrimp Scampi/Italian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    title: "Palak Paneer/Indian/veg/with 4.5 rating",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    title: "Steak Diane/French/non-veg/with 3.8 rating",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    title: "Caprese Salad/Italian/veg/with 4.3 rating",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    title: "Chicken Satay/Thai/non-veg/with 4.6 rating",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    title: "Masala Dosa/Indian/veg/with 4 rating",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    title: "Lobster Bisque/French/non-veg/with 4.9 rating",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    title: "Vegetarian Sushi Roll/Japanese/veg/with 4.1 rating",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    title: "Chicken Korma/Indian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    title: "Greek Salad/Mediterranean/veg/with 3.4 rating",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    title: "Chicken Stir-Fry/Chinese/non-veg/with 4.6 rating",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    title: "Mushroom Risotto/Italian/veg/with 4.5 rating",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    title: "Tandoori Chicken/Indian/non-veg/with 4.8 rating",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    title: "Vegetable Lo Mein/Chinese/veg/with 4.2 rating",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    title: "Salmon Teriyaki/Japanese/non-veg/with 4.7 rating",
  },
];
//write your code
const mapOutput8 = dishes.reduce((res, curr) => {
  const title = `${curr.dishName}/${curr.cuisine}/${curr.type}/with ${curr.rating} rating ${curr.rating}`;
  res.push({ ...curr, title });
  return res;
}, []);
// console.log(mapOutput8);

//added grade:- >=4.5(MOST POPULAR);>=3.5(POPULAR)
const sampleReduceMapOutput9 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    gst: 9,
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    gst: 9,
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
];
//write your code
// const mapOutput9 = dishes.reduce((res, curr) => {
//   let grade = "";
//   if (curr.rating >= 4.5) {
//     grade = "MOST POPULAR";
//   } else if (curr.rating >= 3.5) {
//     grade = "POPULAR";
//   }
//   res.push({ ...curr, grade });
//   return res;
// }, []);
const mapOutput9 = dishes.reduce((res, curr) => {
  res.push(
    curr.rating >= 4.5
      ? { ...curr, grade: "MOST POPULAR" }
      : curr.rating >= 3.5
      ? { ...curr, grade: "POPULAR" }
      : curr
  );
  return res;
}, []);
// console.log(mapOutput9);
//
//
//
//
//
//
//
// Use JS REDUCE Only to filter
// 1.list all veg dishes
//write your code
const rf1 = dishes.reduce((result, cur) => {
  if (cur.type === "veg") result.push(cur);
  return result;
}, []);
// console.log(rf1);

// 2.list all non-veg dishes
//write your code
const rf2 = dishes.reduce((res, cur) => {
  if (cur.type === "non-veg") res.push(cur);
  return res;
}, []);
// console.log(rf2);

// 3.list all Italian dishes
//write your code
const rf3 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Italian") res.push(cur);
  return res;
}, []);
// console.log(rf3);

// 4.list all Indian dishes
//write your code
const rf4 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Indian") res.push(cur);
  return res;
}, []);
// console.log(rf4);

// 5.list all Thai dishes
//write your code
const rf5 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Thai") res.push(cur);
  return res;
}, []);
// console.log(rf5);

// 6.list all dishes whos price is >= 20
//write your code
const rf6 = dishes.reduce((res, cur) => {
  if (cur.price >= 20) res.push(cur);
  return res;
}, []);
// console.log(rf6);

// 7.list all dishes whos price is < 11
//write your code
const rf7 = dishes.reduce((res, cur) => {
  if (cur.price < 11) res.push(cur);
  return res;
}, []);
// console.log(rf7);

// 8.list all dishes whos rating >= 4.5
//write your code
const rf8 = dishes.reduce((res, cur) => {
  if (cur.rating >= 4.5) res.push(cur);
  return res;
  // if (cur.rating >= 4.5) return [...res, cur];
  // return res;
}, []);
// console.log(rf8);

// 9.list all Indian, non-veg dishes
//write your code
const rf9 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Indian" && cur.type === "non-veg") res.push(cur);
  return res;
}, []);
// console.log(rf9);

// 10.list all Indian, veg dishes
//write your code
const rf10 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Indian" && cur.type === "veg") res.push(cur);
  return res;
}, []);
// console.log(rf10);

// 11.list all Japnes, veg dishes
//write your code
const rf11 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Japanese" && cur.type === "veg") res.push(cur);
  return res;
}, []);
// console.log(rf11);

// 12.list all French, non-veg dishes
//write your code
const rf12 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "French" && cur.type === "non-veg") res.push(cur);
  return res;
}, []);
// console.log(rf12);

// 13.list all non-veg dishes whos rating >4
//write your code
const rf13 = dishes.reduce((res, cur) => {
  if (cur.type === "non-veg" && cur.rating > 4) res.push(cur);
  return res;
}, []);
// console.log(rf13);

// 14.list all veg dishes whos rating >4
//write your code
const rf14 = dishes.reduce((res, cur) => {
  if (cur.type === "veg" && cur.rating > 4) res.push(cur);
  return res;
}, []);
// console.log(rf14);

// 15.list all non-veg dishes whos rating <4
//write your code
const rf15 = dishes.reduce((res, cur) => {
  if (cur.type === "non-veg" && cur.rating < 4) res.push(cur);
  return res;
}, []);
// console.log(rf15);

// 16.list all Indian,non-veg dishes  whos price is > 15
//write your code
const rf16 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Indian" && cur.type === "non-veg" && cur.price > 15)
    res.push(cur);
  return res;
}, []);
// console.log(rf16);

// 17.list all Indian,veg dishes whos price is < 10
//write your code
const rf17 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Indian" && cur.type === "veg" && cur.price < 10)
    res.push(cur);
  return res;
}, []);
// console.log(rf17);

// 18.list all Japnes,veg dishes whos price is >= 20
//write your code
const rf18 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Japnese" && cur.type === "veg" && cur.price >= 20)
    res.push(cur);
  return res;
}, []);
// console.log(rf18);

// 19.list all Italian,veg dishes whos price is > 15
//write your code
const rf19 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Italian" && cur.type === "veg" && cur.price > 15)
    res.push(cur);
  return res;
}, []);
// console.log(rf19);

// 20.list all India,veg dishes whos price is > 10 and rating > 4
//write your code
const rf20 = dishes.reduce((res, cur) => {
  if (
    cur.cuisine === "Indian" &&
    cur.type === "veg" &&
    cur.price > 10 &&
    cur.rating > 4
  )
    res.push(cur);
  return res;
}, []);
// console.log(rf20);

// 21.list all Italian,veg dishes whos price is < 11 and rating >3.5
//write your code
const rf21 = dishes.reduce((res, cur) => {
  if (
    cur.cuisine === "Italian" &&
    cur.type === "veg" &&
    cur.price < 11 &&
    cur.rating > 3.5
  )
    res.push(cur);
  return res;
}, []);
// console.log(rf21);

// 22.list all Italian,non-veg dishes whos price is > 15 and rating >= 4.5
//write your code
const rf22 = dishes.reduce((res, cur) => {
  if (
    cur.cuisine === "Italian" &&
    cur.type === "non-veg" &&
    cur.price > 15 &&
    cur.rating >= 4.5
  )
    res.push(cur);
  return res;
}, []);
// console.log(rf22);

//
//
//
//
// Use JS REDUCE(filter+map)
// 1.list all Thai dishes(name only)
//write your code
const rfm1 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Thai") res.push(cur.dishName);
  return res;
}, []);
// console.log(rfm1);

// 2.list all non-veg dishes(name only)
//write your code
const rfm2 = dishes.reduce((res, cur) => {
  if (cur.type === "non-veg") res.push(cur.dishName);
  return res;
}, []);
// console.log(rfm2);

// 3.list all Indian, non-veg dishes(name only)
//write your code
const rfm3 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Indian" && cur.type == "non-veg") res.push(cur.dishName);
  return res;
}, []);
// console.log(rfm3);

// 4.list all Italian, veg dishes(name and price)
//write your code
const rfm4 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Italian" && cur.type === "veg")
    res.push({ dishName: cur.dishName, price: cur.price });
  return res;
}, []);
// console.log(rfm4);

// 5.list all Japnes,veg dishes whos price is < 10(name, price)
//write your code
const rfm5 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Japnese" && cur.type === "veg" && cur.price < 10)
    res.push({ dishName: cur.dishName, price: cur.price });
  return res;
}, []);
// console.log(rfm5);

// 6.list all Italian,non-veg dishes whos rating is >= 4(name,price, rating)
//write your code
const rfm6 = dishes.reduce((res, cur) => {
  if (cur.cuisine === "Italian" && cur.type === "non-veg" && cur.rating >= 4)
    res.push({ dishName: cur.dishName, price: cur.price, rating: cur.rating });
  return res;
}, []);
// console.log(rfm6);

// 7.list all non-veg dishes whos rating <4(full details with MRP)
//write your code
const rfm7 = dishes.reduce((res, cur) => {
  if (cur.type === "non-veg" && cur.rating < 4) {
    const MRP = cur.price * (1 + cur.gst / 100);
    res.push({ ...cur, MRP });
  }
  return res;
}, []);
// console.log(rfm7);

//
//
//
//
//
//----------END OF ARRAY OF object WITH REDUCE-------------
//----------START OF ARRAY OF element WITH REDUCE-------------
//
//
//
//
// using REDUCE(map)
// 1)list all the numbers as double of each number
const rmap1 = myNumbers.reduce((res, curr) => {
  res.push(curr * 2);
  return res;
}, []);
// console.log(rmap1);

// 2)list all numbers square
const rmap2 = myNumbers.reduce((res, cur) => {
  res.push(cur ** 2);
  return res;
}, []);
// console.log(rmap2);

// 3)list all numbers cube
const rmap3 = myNumbers.reduce((res, cur) => {
  res.push(cur ** 3);
  return res;
}, []);
// console.log(rmap3);

// 4)subtract 2 from each number and print
const rmap4 = myNumbers.reduce((res, cur) => {
  res.push(cur - 2);
  return res;
}, []);
// console.log(rmap4);

// 5)list all the numbers result after divided by 3(maximum 2 decimal digits allowed)
const rmap5 = myNumbers.reduce((res, cur) => {
  res.push((cur / 3).toFixed(2));
  return res;
}, []);
// console.log(rmap5);

// 6)list array as, odd numbers square and even numbers cube
const rmap6 = myNumbers.reduce((res, cur) => {
  res.push(cur % 2 !== 0 ? cur ** 2 : cur ** 3);
  return res;
}, []);
// console.log(rmap6);

// 7)list all array number with additing up with next number(no next number means add 0)
const rmap7 = myNumbers.reduce((res, cur, index, arr) => {
  const nextNum = arr[index + 1] || 0;
  res.push(cur + nextNum);
  return res;
}, []);
// console.log(rmap7);

// 7)list all array number with additing up withprevious and next number(no previous/next number means add 0)
const rmap8 = myNumbers.reduce((res, cur, index, arr) => {
  const nextNum = arr[index + 1] || 0;
  const preNum = arr[index - 1] || 0;
  res.push(cur + nextNum + preNum);
  return res;
}, []);
// console.log(rmap8);

// 8)list array as,
// multiplied by 2 if number completely divided by 2(maximum 2 decimal digits allowed)
// multiplied by 3 if number completely divided by 3(maximum 2 decimal digits allowed)
// otherwise return square of number
const rmap9 = myNumbers.reduce((res, cur) => {
  res.push(
    cur % 2 === 0
      ? (cur * 2).toFixed(2)
      : cur % 3 === 0
      ? (cur * 3).toFixed(2)
      : (cur ** 2).toFixed(2)
  );
  return res;
}, []);
// console.log(rmap9);
//
//
//
//
//
// using REDUCE(filter)
// 1)list all odd numbers
const rft1 = myNumbers.reduce((res, curr) => {
  if (curr % 2 !== 0) {
    res.push(curr);
  }
  return res;
}, []);
// console.log(rft1);

// 2)list all even numbers
const rft2 = myNumbers.reduce((res, curr) => {
  if (curr % 2 === 0) {
    res.push(curr);
  }
  return res;
}, []);
// console.log(rft2);

// 3)list all numbers which is multiplier of 3
const rft3 = myNumbers.reduce((res, curr) => {
  if (curr % 3 === 0) {
    res.push(curr);
  }
  return res;
}, []);
// console.log(rft3);

// 4)list all numbers which is multiplier of 2 as well as 3
const rft4 = myNumbers.reduce((res, curr) => {
  if (curr % 2 === 0 && curr % 3 === 0) {
    res.push(curr);
  }
  return res;
}, []);
// console.log(rft4);

// 5)list all numbers whos square root is a whole number(integer)
const rft5 = myNumbers.reduce((result, curr) => {
  const squareRoot = Math.sqrt(curr);
  if (Number.isInteger(squareRoot)) {
    result.push(curr);
  }
  return result;
}, []);
// console.log(rft5);

//
//
//
// using reduce(map+filter)
// 1)list all odd numbers with doubling
const rmflt1 = myNumbers.reduce((res, curr) => {
  if (curr % 2 !== 0) {
    res.push(curr * 2);
  }
  return res;
}, []);
// console.log(rmflt1);

// 2)list all even numbers with trippling
const rmflt2 = myNumbers.reduce((res, curr) => {
  if (curr % 2 === 0) {
    res.push(curr * 3);
  }
  return res;
}, []);
// console.log(rmflt2);

// 3)list cube of all the number which is completely devided by 3
const rmflt3 = myNumbers.reduce((res, curr) => {
  if (curr % 3 === 0) {
    res.push(curr ** 3);
  }
  return res;
}, []);
// console.log(rmflt3);

// 4)list all array number with additing up with next number(no next number means add 0)
const rmflt4 = myNumbers.reduce((res, curr, index, arr) => {
  const nextNum = arr[index + 1] || 0;
  res.push(curr + nextNum);
  return res;
}, []);
// console.log(rmflt4);

//
//
//
//
//
//----------Advanced ARRAY OF object manipulation using REDUCE -------------

// if (result[curr?.type]) {
//     result[curr?.type] = ++result[curr?.type];
//   } else {
//     result[curr?.type] = 1;
//   }
//   return result;
// }, {});

// generate below outputs
// 1){"veg":[...],"non-veg":[...]}  //list dish name only
const adv1 = dishes.reduce((res, cur) => {
  const { type, dishName } = cur;
  if (!res[type]) {
    res[type] = [];
  }
  res[type].push(dishName);
  return res;
}, {});
// console.log(adv1);

// 2){"veg":[...],"non-veg":[...]}  //list dish name, price,rating only
const adv2 = dishes.reduce((res, cur) => {
  const { type, dishName, price, rating } = cur;
  if (!res[type]) {
    res[type] = [];
  }
  res[type].push({ dishName, price, rating });
  return res;
}, {});
// console.log(adv2);

// 3){"veg":13,"non-veg":11}
const adv3 = dishes.reduce((res, cur) => {
  const { type } = cur;
  if (!res[type]) {
    res[type] = 0;
  }
  res[type]++;
  return res;
}, {});
// console.log(adv3);

// 4){Indian:[...],Italian:[...],Chines:[],...}  //list dish name only
const adv4 = dishes.reduce((res, cur) => {
  const { cuisine, dishName } = cur;
  if (!res[cuisine]) {
    res[cuisine] = [];
  }
  res[cuisine].push(dishName);

  return res;
}, {});
// console.log(adv4);
// 5){Indian:[...],Italian:[...],Chines:[],...}  //list dish name,price,rating
const adv5 = dishes.reduce((res, cur) => {
  const { cuisine, dishName, price, rating } = cur;
  if (!res[cuisine]) {
    res[cuisine] = [];
  }
  res[cuisine].push({ dishName, price, rating });
  return res;
}, {});
// console.log(adv5);
// 6){Indian:[...],Italian:[...],Chines:[],...}  //whole dish details
const adv6 = dishes.reduce((res, curr) => {
  const { cuisine } = curr;
  if (!res[cuisine]) {
    res[cuisine] = [];
  }
  res[cuisine].push(curr);
  return res;
}, {});
// console.log(adv6);

// 7){Indian:[...],Italian:[...],Chines:[],...}  //list dish name,price whos price <14
const adv7 = dishes.reduce((res, cur) => {
  const { cuisine, dishName, price } = cur;
  if (!res[cuisine]) {
    res[cuisine] = [];
  }
  if (price < 14) {
    res[cuisine].push({ dishName, price });
  }
  return res;
}, {});
// console.log(adv7);

// 8){popular:[], mostPopular:[],other:[]}  //list dish name,rating; popular=rating >=4.5, mostPopular=rating >=3.5,other:[]
const adv8 = dishes.reduce(
  (res, cur) => {
    const { dishName, rating } = cur;
    if (rating >= 4.5) {
      res?.mostPopular.push({ dishName, rating });
    }
    if (rating >= 3.5) {
      res?.popular?.push({ dishName, rating });
    } else {
      res?.other?.push({ dishName, rating });
    }
    return res;
  },
  { popular: [], mostPopular: [], other: [] }
);
//

//
//
//----------END OF ARRAY OF element WITH REDUCE------------
//
//
//
//
//----------RETURN BOOLEAN WITH REDUCE START-------------
const number1 = [2, 4, 5, 6, 7, 8, 10, 13]; // hasEven=true
const hasEven = number1.reduce((res, curr) => {
  if (curr % 2 === 0) return (res = true);
  return res;
}, false);
// console.log(hasEven);

const number2 = [2, 4, 5, 6, 7, 8, 10, 14]; // hasOdd=true
const hasOdd = number2.reduce((res, curr) => {
  if (curr % 2 === 1) return (res = true);
  return res;
}, false);
// console.log(hasOdd);

const number3 = [2, 4, 5, 6, 7, 8, 10, 13, 3]; // hasLargeNumber=true
const hasLargeNumber = number3.reduce((res, curr) => {
  if (curr > 10) return (res = true);
  return res;
}, false);
// console.log(hasLargeNumber);

const number4 = [2, 4, 5, 6, 7, 8, 10, 13]; // hasSmallNumber=true
const hasSmallNumber = number4.reduce((res, curr) => {
  if (curr < 10) return (res = true);
  return res;
}, false);
// console.log(hasSmallNumber);

//----------RETURN BOOLEAN WITH REDUCE START-------------
//

//

//
//__________________________________________________________
//OTHER ARRAY METHODS TO GET HOLD ON
// forIn
const obj = {
  dishName: "Salmon Teriyaki",
  cuisine: "Japanese",
  type: "non-veg",
  price: 21.99,
  rating: 4.7,
  gst: 9,
  grade: "MOST POPULAR",
};
for (let res in obj) {
  // console.log(res);
}
//_____OUTPUT_____
// dishName
// cuisine
// type
// price
// rating
// gst
// grade
//
//

// return unique strings:
const uniqueString = [
  "Italian",
  "Italian",
  "Indian",
  "Seafood",
  "International",
  "Japanese",
  "Indian",
  "American",
  "Thai",
  "Italian",
  "Indian",
  "French",
  "Italian",
  "Thai",
  "Indian",
  "French",
  "Japanese",
  "Indian",
  "Mediterranean",
  "Chinese",
  "Italian",
  "Indian",
  "Chinese",
  "Japanese",
];
const uniqueStr = uniqueString.reduce((res, curr) => {
  if (!res.includes(curr)) {
    res.push(curr);
  }
  return res;
}, []);
// console.log(uniqueStr);

//__________________________________________________________
//forOf
const myArray = [1, 3, 5, 17, 9, 7, 18];
for (let ele of myArray) {
  // console.log(ele);
}
//_____OUTPUT_____
// 1
// 3
// 5
// 17
// 9
// 7
// 18
//
//
//

const arr = ["hi", "op", "po", "ui"];
const kk = arr.fill("hello", 1, 3);
console.log(arr);

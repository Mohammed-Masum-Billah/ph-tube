// console.log("added successfully");


// fetch, load & show data in html

const loadCategories = () => {
    // fectuing the data

    fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => console.log(data.categories))
    .catch((error) => console.error(error));
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }


// create display categories
const displayCategories=(categories) => {
    const categoryContainer = document.getElementById("categories");

    categories.forEach((item) => {
    console.log(item);
    // create a button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    // add data in html
    categoryContainer.append(button);
    });
}


loadCategories(

);

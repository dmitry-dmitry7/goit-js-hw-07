const category = document.querySelector("ul#categories");
const items = category.querySelectorAll("li.item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
    const nameCategory = item.querySelector("h2");
    console.log(`Category: ${nameCategory.textContent}`);

    const elements = item.querySelectorAll("li");
    console.log(`Elements: ${elements.length}`);
});

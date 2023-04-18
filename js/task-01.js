const categoriesList = document.getElementById("categories");
const newArray = categoriesList.children
console.log(`Number of categories: ${newArray.length}`)
const subCatList = categoriesList.querySelectorAll(".item");
subCatList.forEach( item =>
{
    const elementName = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll("li").length;
    console.log(`Category: ${elementName}`);
    console.log(`Elements: ${elementsCount}`);
});
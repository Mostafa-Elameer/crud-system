// === all id inputs
var pName = document.getElementById("productName");
var pPrice = document.getElementById("productPrice");
var pCat = document.getElementById("productCat");
var pDesc = document.getElementById("productDescription");
var pDate = document.getElementById("dateid");
var pmvk = document.getElementById("mvkid");
var pImg = document.getElementById("productImg");
var btnAddId = document.getElementById("btnAddId");
var btnUpdateId = document.getElementById("btnUpdateId");
var indexUP;
var allProducts = [];

if (localStorage.getItem("product") != null) {
  allProducts = JSON.parse(localStorage.getItem("product"));
  displayData();
}
// ===== add product
function addProduct() {
  var broduct = {
    name: pName.value,
    price: pPrice.value,
    Category: pCat.value,
    Description: pDesc.value,
    date: pDate.value,
    mvk: pmvk.value,
    img: `imges/`+pImg.files[0].name,
  };
  
  allProducts.push(broduct);
  localStorage.setItem("product", JSON.stringify(allProducts));
  displayData();
  clearInputs();
}

// ====== clear input
function clearInputs() {
  pName.value = null;
  pPrice.value = null;
  pCat.value = null;
  pDesc.value = null;
  pImg.value = null;
  pmvk.value = null;
  pDate.vlaue = null;
}

// ============
function displayData() {

  var cartona = ``;
  for (var i = 0; i < allProducts.length; i++) {
    cartona += `
    <tr>
    <th>${i}</th>
    <th>${allProducts[i].name}</th>
    <th>${allProducts[i].price}</th>
    <th>${allProducts[i].Category}</th>
    <th>${allProducts[i].Description}</th>
    <th><img width="50" src="${allProducts[i].img}" alt="" /></th>
    <th>
      <button onclick="gitData(${i})"  class="btn btn-sm btn-outline-warning">Update</button>
    </th>
    <th>
      <button onclick="DeleteProduct(${i})" class="btn btn-sm btn-outline-danger">Delete</button>
    </th>
  </tr>

    `;
  }
  document.getElementById("DataTable").innerHTML = cartona;
}

// ====== Delete product
function DeleteProduct(indexDelete) {
  console.log(indexDelete);
  allProducts.splice(indexDelete, 1);
  localStorage.setItem("product", JSON.stringify(allProducts));

  displayData();
}

// ====== search product

function search(elemint) {
  var kopic = "";
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name.includes(elemint.value) == true) {
      kopic += `
      <tr>
      <th>${i}</th>
      <th>${allProducts[i].name}</th>
      <th>${allProducts[i].price}</th>
      <th>${allProducts[i].Category}</th>
      <th>${allProducts[i].Description}</th>
      <th><img width="50" src="${allProducts[i].img}" alt="" /></th>
      <th>
        <button onclick="gitData(${i})"  class="btn btn-sm btn-outline-warning">Update</button>
      </th>
      <th>
        <button onclick="DeleteProduct(${i})" class="btn btn-sm btn-outline-danger">Delete</button>
      </th>
    </tr>
      `;
    }
  }

  document.getElementById("DataTable").innerHTML = kopic;
}

// ======= update
function gitData(indexUpdate) {
  indexUP = indexUpdate;
  btnAddId.classList.add("d-none");
  btnUpdateId.classList.remove("d-none");
  pName.value = allProducts[indexUpdate].name;
  pPrice.value = allProducts[indexUpdate].price;
  pDate.value = allProducts[indexUpdate].date;
  pmvk.value = allProducts[indexUpdate].mvk;
  pCat.value = allProducts[indexUpdate].Category;
  pDesc.value = allProducts[indexUpdate].Description;
}

function UpdateProduct() {
  console.log(indexUP);
  allProducts[indexUP].name = pName.value;
  allProducts[indexUP].price = pPrice.value;
  allProducts[indexUP].date = pDate.value;
  allProducts[indexUP].mvk = pmvk.value;
  allProducts[indexUP].Category = pCat.value;
  allProducts[indexUP].Description = pDesc.value;

  localStorage.setItem("product", JSON.stringify(allProducts));
  displayData();
}

function loadData(value){
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    fetch(url)
        .then(res=>res.json())
        .then(data=>displayData(data.meals))
}

function displayData(foods){
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML=``;
        foods.forEach(food=>{
              console.log(food);
          const foodItem = document.createElement('div');
          
          foodItem.innerHTML =`
          <div class="col">
                    <div onclick="loadFoodDetalis(${food.idMeal})" class="card">
                        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${food.strMeal}</h5>
                         <p class="card-text fw-bolder">Food Type:-${food.strTags ? food.strTags:'Good'} ||  Food Region  :-${food.strArea}</p>
                         <p>Click In Pic To View Details</p>
                        </div>
                    </div>
         </div>`
         foodContainer.appendChild(foodItem);
        })

}

function loadFoodDetalis(number){
    url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${number}`
    fetch(url)
        .then(res=>res.json())
        .then(data=>displayFoodDetails(data.meals))
}

function displayFoodDetails(foods){
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML=``;
      foods.forEach(food=>{
        const fooddetails = document.createElement('div')
        fooddetails.innerHTML=`
            <div class="card m-4" style="width: 18rem;">
                    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${food.strMeal}</h5>
                      <p class="card-text">${food.strInstructions.slice(0,250)}</p>
                      <button onclick="loginPage()" class="btn btn-info">Order Now</button>
            </div>`

    detailsContainer.appendChild(fooddetails);
      })
}

 function loginPage(){
    window.location.href="login.html"
 }



function searchFood(){
    const searchField=document.getElementById('food-input')
    const searchFieldText =searchField.value;
    searchField.value=``;
    loadData(searchFieldText)
}
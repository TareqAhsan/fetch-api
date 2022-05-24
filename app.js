const parentDiv = document.getElementById("api");
const button = document.getElementById("btn");
const infoDiv = document.getElementById("info");

button.addEventListener("click", () => {
  fetch(`https://gorest.co.in/public/v1/users`) //fetching data
    .then((res) => res.json())
    .then((data) => display(data?.data));
});

function display(info) {
  info.forEach((data) => {
    // run a loop in the array for each book item
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div  class="card  h-100  border-0 p-3 shadow rounded-3">
             <h5 class="card-title text-uppercase">book name: ${data.name}</h5>
             <p class="card-text text-uppercase">author name: ${data.email}</p>
             <p class="card-text text-uppercase">author name: ${data.gender}</p>
             <p class="card-text text-uppercase">first_publish_year: ${data.status}</p>
         </div>
       </div>
        `;
    infoDiv?.appendChild(div);
  });
}

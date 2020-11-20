// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            //console.log(json);
           let container = document.getElementById("container");
           json.sort(function(a, b){
               return a.hoursInSpace - b.hoursInSpace;
           });
//let allAstronaut = "";
for (astronaut in json) {
    let activeColor = "black"
    if (json[astronaut].active) {
        activeColor = "green";
    }
   container.innerHTML +=

        `<div class="astronaut">
   <div class="bio">
      <h3>${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
      <ul>
         <li>Hours in space: ${json[astronaut].hoursInSpace}</li>
         <li>Active: ${json[astronaut].active}</li>
         <li>Skills: ${json[astronaut].skills.join(", ")}</li>
      </ul>
   </div>
   <img class="avatar" src="${json[astronaut].picture}">
</div>`
    }
    //container.innerHTML += allAstronaut;

    });
});
});
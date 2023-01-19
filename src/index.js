let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
//Fetch Request
//Get Fetch for all toy objects
/*function getAllToys(){
  fetch('http://localhost:3000/toys')
  .then(res => console.log(res))
  .then(toys => toys.forEach(toy => renderOneToy(toy)))
  console.log('before fetch returns')
} */

//Initial Render
//Get Data and Render our Animals to the DOM
/*function initial(){
  getAllToys{}
  console.log('after get All Toys')
  //toys.forEach(animal => renderOneToy(toys))
}*/

/*fetch('https:localhost:3000/toys', {
  method: "GET"
})

  fetch("https://localhost:3000/toys")
  .then((res) => console.log(res))
  .then toys => toys.forEach(renderToy)
*/

// function getJson("https://localhost:3000/toys") {
//   return fetch("https://localhost:3000/toys")
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       } else {
//         throw (reasponse.statusText)
//       }
//     })
// }

// getJson("https://localhost:3000/toys")
//   .then(toys) => {
//     toys.forEach(toys => renderToy(to))
//   } 
const toyCollection = document.querySelector("#toy-collection");

const renderOneToy = (toy) => {
  const toyCard = document.createElement("div");
  toyCard.className = "card";

  const h2 = document.createElement("h2");
  h2.textContent = toy.name;

  const image = document.createElement("img");
  image.src = toy.image;
  image.className = "toy-avatar";

  
  const paragraph = document.createElement("p")
  paragraph.textContent = `${toy.likes} likes`;
  
  const button = document.createElement("button");
  button.className = "like-btn";
  button.id = toy.id;
  button.textContent = "Like ❤️";
  
  // toyCard.append(h2);
  // toyCard.append(image);
  // toyCollection.append(toyCard);
  // toyCard.append(button);
  toyCard.append(h2, image, paragraph, button);
  toyCollection.append(toyCard);

}

fetch("http://localhost:3000/toys")
  .then((response) => response.json())
  .then((toys) => {
    toys.forEach(renderOneToy);
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const image = event.target.image.value;
    const newToy = {
      name,
      image: image,
      likes: 0,
    };
    fetch("https://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newToy),    
      }) 
        .then((response) => response.json())
        .then((toy) => console.log(toy));
    });




//   When a user submits the toy form, two things should happen:

// A `POST` request should be sent to `http://localhost:3000/toys` and the new
//   toy added to Andy's Toy Collection.
// If the post is successful, the toy should be added to the DOM without
//   reloading the page.

// find the toy form
// add eventListener to the toy form
// preventDefault aka don't refresh

// - send data in fetch so it persists and gets added to db.json
//   - name and image from form inputs
//   - likes to be zero
//   - id doesn't need to be included json-server adds that for us
// toy should be added to the toy collection on DOM
//    - same thing we did for each toy from the get request
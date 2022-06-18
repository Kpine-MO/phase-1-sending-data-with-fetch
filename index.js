// Add your code here
function submitData() {
  fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com",
  }),
})
.then(function (response) {
  return response.json();
})
.then(data => {
  console.log(data);
  document.body.innerHTML += `<p>${data.id}</p>`;
})

.catch( error => {throw error})

}





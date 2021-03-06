window.addEventListener("load", function () {
  let button = document.getElementById("button");
  button.addEventListener("click", getUniversity);
});
function getUniversity() {
  // let xhr = new XMLHttpRequest();
  let input = document.getElementById("input").value;
  // xhr.open("GET", `http://universities.hipolabs.com/search?country=${input}`);
  // xhr.send();
  // xhr.onload = function () {
  //   let response = JSON.parse(this.response);
  //   console.log(response);
  //   let universities = document.getElementById("universities");
  //   let h1 = document.createElement("h1");
  //   h1.innerText = "Universities in " + input;
  //   universities.append(h1);
  //   for (i = 0; i < response.length; i++) {
  //     let li = document.createElement("li");
  //     li.innerText = response[i].name;
  //     universities.append(li);
  //   }
  // };
  fetch(`http://universities.hipolabs.com/search?country=${input}`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let universities = document.getElementById("universities");
      let h1 = document.createElement("h1");
      h1.innerText = "Universities in " + input;
      universities.append(h1);
      for (let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
        li.innerText = data[i].name;
        universities.append(li);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}


function fetchData(url) {
    return new Promise ((resolve, reject)=>{
        fetch(url)
        .then((response)=>{
            if (!response.ok) {
                reject("Network Response is not Ok");
            }
            return response.json();
        })
        .then((data)=>resolve(data))
        .catch((error)=>reject(error));
    })
}

fetchData("https://jsonplaceholder.typicode.com/todos")
  .then((data) => {
    console.log("fetched data", data);
  })

  .catch((error) => {
    console.error("Error", error);
  });
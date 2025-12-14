
// async function fetchData() {

//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//     let data = await response.json();

//     console.log(data);
// }

// fetchData();

async function fetchApi() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (response.ok) {

            console.log(response)

        } else {

            console.log("data not found");

        }

        return response.json();



    } catch (error) {

        console.log("data not found", error);

    }
}

fetchApi();

async function fetchData() {

    try {

        let res = await fetch ("https://jsonplaceholder.typicode.com/todos");

        if (res.status === 200) {

            console.log(res);

        } else {

            console.log("data not found");
        }

        return res.json();

    } catch (error) {

        console.log(error);
    }

}

fetchData();
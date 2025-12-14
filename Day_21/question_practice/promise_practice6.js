
// You have a function fetchData() that sometimes fails.
// Write a Promise-based utility that retries the function up to 3 times before rejecting.

let attempt = 0;

const fetch = async () => {

    attempt++;

    console.log("Attempt", attempt);

    if (attempt < 3) throw "Failed!"

    return "Success";

};

async function retry(fetchFunction, retries = 3, delay = 500) {

    for (let i = 0; i < retries; i++) {

        try {

            return await fetchFunction();

        } catch (error) {

            console.log(`retry $(i + 1) failed: error`);

            if (delay) await new Promise((resolve)=>

                setTimeout(resolve, delay)); {

            }

        }

    }

}

retry(fetch).then(console.log).catch(console.error);
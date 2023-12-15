/**
 * Asynchronously executes an array of promises, filtering out falsy results.
 * @param {...Promise} promiseList - List of promises to execute.
 * @returns {Promise} - A promise that resolves with an array of fulfilled results.
 */
export async function promise_all(...promiseList) {
    const results = [];

    for (let p of promiseList) {
        let r = await p;
        if (r) {
            results.push(r);
        }
    }

    return results;
}

/**
 * Delays execution by the specified number of milliseconds.
 * @param {number} ms - The delay duration in milliseconds.
 * @returns {Promise} - A promise that resolves after the specified delay.
 */
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Creates a promise that resolves after a delay or rejects with an error if specified.
 * @param {number} d - The delay duration in milliseconds.
 * @param {boolean} throw_error - Indicates whether to throw an error.
 * @returns {Promise} - A promise that resolves with a result or rejects with an error.
 */
async function create_delay_promise(d, throw_error) {
    await timeout(d);

    if (throw_error) {
        throw new Error(`This is an error from the ${d} timer`);
    } else {
        console.log(`Timer ${d} is finished`);
        return `This is a result from the ${d} timer`;
    }
}

/**
 * Main function to demonstrate the usage of promise_all.
 */
async function main() {
    try {
        let results = await promise_all(
            create_delay_promise(5000),
            create_delay_promise(3000, true),
            create_delay_promise(4000),
            create_delay_promise(1000),
            create_delay_promise(2000)
        );
        console.log(results);
    } catch (err) {
        console.error(`Error occurred: ${err}`);
    }
}

// Execute the main function
main();

# Asynchronous Promise Handling

This script demonstrates the asynchronous handling of promises using the `promise_all` function. It utilizes a combination of async/await, promises, and timeouts to execute a list of promises, filter out falsy results, and handle delays.

## Functions

### `promise_all(...promiseList): Promise`

Asynchronously executes an array of promises, filtering out falsy results.

#### Parameters:
- `...promiseList`: List of promises to execute.

#### Returns:
A promise that resolves with an array of fulfilled results.

### `timeout(ms: number): Promise`

Delays execution by the specified number of milliseconds.

#### Parameters:
- `ms`: The delay duration in milliseconds.

#### Returns:
A promise that resolves after the specified delay.

### `create_delay_promise(d: number, throw_error: boolean): Promise`

Creates a promise that resolves after a delay or rejects with an error if specified.

#### Parameters:
- `d`: The delay duration in milliseconds.
- `throw_error`: Indicates whether to throw an error.

#### Returns:
A promise that resolves with a result or rejects with an error.

### `main(): void`

Main function to demonstrate the usage of `promise_all`.

## Example Usage

```javascript
// Import the functions if needed

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

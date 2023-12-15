
export async function promise_all(...promiseList) {
    const resultPromise = new Promise();
    results = []
    try {
        for (p of promiseList) {
            let r = await p
            if (r) {
                results.push(r)
            }
        }
    }
    catch (e) {
        resultPromise.reject(e);
    }

}
function createRejctedPromise() {
    return new Promise((res, rej) => {
        rej("this is the rejection")
    })

}


function createNonRejctedPromise() {
    return new Promise((res, rej) => {
        res("this is the result")
    })

}


let ps = [createNonRejctedPromise(), createNonRejctedPromise(), createNonRejctedPromise(), createRejctedPromise()];


async function main() {

    for (p of ps) {
        try {
            await p
        }
        catch (err) {
            console.error(`'this is the error caught:${err} `)
        }
    }

}

main()
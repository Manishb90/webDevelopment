const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        const p2 = new Promise((res, rej) => {
            setTimeout(() => {
                res("inner data resolved");
            });
        });
        resolve(p2);
    }, 3000);

    setTimeout(() => {
        reject("Promise is rejected");
    }, 2000);
});

p1.then((p) => {
    return p;
})
    .then(() => {
        console.log(data);
    });
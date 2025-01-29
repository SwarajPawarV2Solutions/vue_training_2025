// Promises

// Promises simplify handling asynchronous operations by providing .then and .catch methods.

const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            resolve("Data fetched"), 2000);
    });
};

fetch().then(data => 
    console.log(data));




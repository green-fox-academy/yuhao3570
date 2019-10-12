const myGetHttp = (url) => {
    return new Promise((resolve, reject) => {
        resolve(`This is a dummy HTTP response for GET ${url}`);
    });
};

const myParser = (string) => {
    return new Promise((resolve, reject) => {
        resolve(`This is the parsed response: ${string}`);
    });
}

const myDbSaver = (dataToSave) => {
    return new Promise((resolve, reject) => {
        resolve(`This data is saved: ${dataToSave}`);
    });
}

const notifyUser = (message) => {
    return new Promise((resolve, reject) => {
        resolve(`User is notified about this: ${message}`);
    });
}


async function promiseHell() {
    const response =await myGetHttp('http://api.something.com/do');
    console.log('Got HTTP response');
    
    const parsed = await myParser(response)
    console.log('Got parsed HTTP response');
    
    const savedToDB = await myDbSaver(parsed)
    console.log('Response is saved in the DB');
    
    const notification = await notifyUser(savedToDB)
    console.log(notification);
}

callbackHell();
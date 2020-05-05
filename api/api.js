export const bodyObject = (method, data) => {
    return ({
        method: method, // GET, POST, PUT, DELETE
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
};

export const getData = (url) => {
    return (
        fetch(url)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err)
    );
};

export const postData = (url, obj) => {
    return (
        fetch(url, obj)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err)
    );
};

// EasyHTTP Version 2.0
// Updated to ES6 


class EasyHTTP {
    // Make an HTTP GET Request
    get(url) {
        return new Promise((resolve, reject)=> {
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
        });
    }

    // Make HTTP POST Requests
    post(url, data) {
        return new Promise((resolve, reject)=> {
        fetch(url, {
            method : 'POST',
            headers : {'Content-type': 'application/json'},
            body : JSON.stringify(data) 
            })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
        });
    }

    // Make a PUT Request
    put(url, data) {
        return new Promise((resolve, reject)=> {
        fetch(url, {
            method : 'PUT',
            headers : {'Content-type': 'application/json'},
            body : JSON.stringify(data) 
            })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
        });
    }

    // Make a PUT Request
    delete(url) {
        return new Promise((resolve, reject)=> {
        fetch(url, {
            method : 'DELETE',
            headers : {'Content-type': 'application/json'},
            })
        .then(() => resolve('RESOURCE DELETED'))
        .catch(err => reject(err))
        });
    }
}
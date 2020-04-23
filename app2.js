const http = new EasyHTTP ;

// // Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

// User Data

const data = {
    name : 'Paddy',
    username : 'padji',
    email : 'sjakdj?@gmail.com'
}

// // Post User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

// // Put User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

// Delete User
http.put('https://jsonplaceholder.typicode.com/users/2')
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
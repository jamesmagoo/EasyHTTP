const http = new easyHTTP;

// GET Posts

// http.get('https://jsonplaceholder.typicode.com/posts', 

// function(error, response){
//     if (error) {
//         console.log(error);         
//     } else {
//         console.log(response);
//     }
// });

// // Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', 

// function(error, response){
//     if (error) {
//         console.log(error);         
//     } else {
//         console.log(response);
//     }
// });

// Post Request

const data = {
    title : 'Custom Post',
    body : 'Yurt'
};



// http.post('https://cors-anywhere.herokuapp.com/jsonplaceholder.typicode.com/posts', data, 
// function(error, post){

//     console.log('post callbac fnc');

// if (error) {

//     console.log(error); 

//     } else {

//     console.log(post);

//     };

// });

// Update Post

http.put('https://cors-anywhere.herokuapp.com/jsonplaceholder.typicode.com/posts/1', data, 
function(error, post){

if (error) {

    console.log(error); 

    } else {

    console.log(post);

    };

});


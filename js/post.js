function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPost()

function displayPosts(posts) {
    const postContainer = document.getElementById('posts')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
         <h3> ${post.title} </h3>
         <p> ${post.body} </p>

        `;
        postContainer.appendChild(div)

    }
}
// add a function with get post
function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'This is my post ',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
addAPost()
// wrong addapost for testing debug
function addAPost2() {
    fetch('https://jsonplaceholder.typicode.com/pusts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'This is my post ',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
addAPost()
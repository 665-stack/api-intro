function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
// uses of loaded data
function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `id: ${user.id},
                        email: ${user.email}`;
        ul.appendChild(li)
    }
}
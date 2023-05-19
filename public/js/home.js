const posts = document.querySelectorAll(".blogPost")
for (const post of posts) {
    post.addEventListener('click', e => {
        console.log(e.target.getAttribute('value'))
        location.href = `/blogpost/${e.target.getAttribute('value')}`;
    })
}
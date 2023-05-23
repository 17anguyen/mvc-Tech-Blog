
console.log("GET CONNECTED FOR FREE")
// const posts = document.querySelectorAll(".container")
// for (const post of posts) {
//     post.addEventListener('click', e => {
//         console.log("jingle bellse")
//         console.log(e.target.getAttribute('value'))
//         location.href = `/blogpost/${e.target.getAttribute('value')}`;
//     })
// }
const commentSection = document.querySelectorAll(".comments")
const addComment = document.querySelectorAll(".addComment")
const textArea = document.querySelectorAll(".form-control")
console.log(commentSection)

const commentBtns = document.querySelectorAll(".comment")

commentBtns.forEach((commentBtn, i) => {
    commentBtn.addEventListener('click', e => {
        console.log(commentBtn)
        console.log(i)
        console.log(commentSection[i])
        commentSection[i].setAttribute("style", "")
    })

    addComment[i].addEventListener('click', e => {
        e.preventDefault()
        console.log(e.target.getAttribute("data-id"))
        console.log(textArea[i].value)

        // fetch("/api/comments", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         post_id: e.target.getAttribute("data-id"),
        //         body: textArea[i].value,
        //         // user_id: req.session.user_id,

        //     })

        // }).then(res => {
        //     if (res.ok) {
        //         location.reload()
        //     } else {
        //         alert("womp womp")
        //     }
        // })
    })
})


// for (const [commentBtn, i] of commentBtns) {
//     commentBtn.addEventListener('click', e => {
//         console.log("this is working")
//         console.log(i)
//     }
//     )

// }




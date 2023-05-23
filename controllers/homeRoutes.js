const express = require("express");
const router = express.Router();
const { Post, User } = require("../models");

router.get("/", (req, res) => {
    try {
        Post.findAll({
            include: [User],
        }).then((postData) => {
            const hbsData = postData.map((post) => post.get({ plain: true }));
            console.log(hbsData);
            res.render("homepage", {
                pagetitle: "The Tech Blog",
                allPosts: hbsData,
                logged_in: req.session.logged_in,
                // comments: hbsdata,
            });
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});


router.get("/post/:id", (req, res) => {
    Post.findByPk(req.params.id, {
        include: [User],
    }).then((projData) => {
        const hbsData = projData.get({ plain: true });
        hbsData.logged_id = req.session.logged_id;
        console.log(hbsData);
        res.render("singlePost", hbsData);
    });
});
router.get("/comment/:id", (req, res) => {
    Comment.findByPk(req.params.id, {
        include: [User],
    }).then((projData) => {
        const hbsData = projData.get({ plain: true });
        hbsData.logged_id = req.session.logged_id;
        console.log(hbsData);
        res.render("singlePost", hbsData);
    });
});

router.get("/create", (req, res) => {
    try {
        res.render("createpost", {
            pagetitle: "Your Dashboard",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        return res.redirect("/profile");
    }
    res.render("login", {
        pagetitle: "The Tech Blog",
        logged_in: req.session.logged_in,
    });
});

router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
        return res.redirect("/profile");
    }
    res.render("signup", {
        pagetitle: "The Tech Blog",
        logged_in: req.session.logged_in,
    });
});

router.get('/logout', (req, res) => {
    console.log("loggin out!!")
    try {
        res.redirect("login")
        req.session.destroy()
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

router.get("/profile", (req, res) => {
    try {
        Post.findAll({
            where: {
                user_id: req.session.user_id
            }
        }).then((userPost) => {
            const hbsData = userPost.map((post => post.get({
                plain: true


            })));
            res.render("profile", {
                pagetitle: "Your Dashboard",
                posts: hbsData,
                username: req.session.username,
            })
        })

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

// if (!req.session.logged_in) {
//     return res.redirect("/login");
// } else {
//     console.log(req.session);
//     Post.findAll({
//         where: {
//             user_id: req.session.user_id,
//         },
//         include: [User],
//     }).then((userData) => {
//         console.log(userData)
//         const hbsData = userData.map((post) => post.get({ plain: true }));
//         userData.logged_in = req.session.logged_in;
//         console.log(req.session);
//         res.render("profile", { posts: hbsData, user: req.session.username });
//     }).catch(err => {
//         console.log(err)
//     })
// }
// });

module.exports = router;
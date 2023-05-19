// import modules and packages
const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models");

// user seeds
const users = [
    {
        username: "techgenius",
        password: "password1"
    },
    {
        username: "ewizard",
        password: "password2"
    },
    {
        username: "circutguru",
        password: "password3"
    }
];

// blog seeds
const blogs = [
    {
        title: "first blog",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic omnis accusantium unde eum laborum odio. Fuga repellat aperiam voluptas? Tempora placeat quasi accusamus expedita facilis excepturi laudantium. Laudantium, iusto.",
        user_id: 1
    },
    {
        title: "second blog",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic omnis accusantium unde eum laborum odio. Fuga repellat aperiam voluptas? Tempora placeat quasi accusamus expedita facilis excepturi laudantium. Laudantium, iusto.",
        user_id: 2
    },
    {
        title: "third blog",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic omnis accusantium unde eum laborum odio. Fuga repellat aperiam voluptas? Tempora placeat quasi accusamus expedita facilis excepturi laudantium. Laudantium, iusto.",
        user_id: 3
    }
];

// comment seeds
const comments = [
    {
        body: "Voluptate hic omnis accusantium unde eum laborum odio.",
        user_id: 2,
        blog_id: 3
    },
    {
        body: "Fuga repellat aperiam voluptas?",
        user_id: 3,
        blog_id: 1
    },
    {
        body: "Tempora placeat quasi accusamus expedita facilis excepturi laudantium.",
        user_id: 1,
        blog_id: 2
    },
    {
        body: "Voluptate hic omnis accusantium unde eum laborum odio.",
        user_id: 2,
        blog_id: 3
    },
    {
        body: "Fuga repellat aperiam voluptas?",
        user_id: 3,
        blog_id: 1
    },
    {
        body: "Tempora placeat quasi accusamus expedita facilis excepturi laudantium.",
        user_id: 1,
        blog_id: 2
    }
];

// bulk create
const seed = async () => {

    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(users, { individualHooks: true });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);

        process.exit(0);
    } catch (err) {
        console.log(err);
    };

};

seed();
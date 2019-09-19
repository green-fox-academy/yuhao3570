'use strict';

const BlogPost = require('./03-blogpost');

/*
Reuse your BlogPost class
Create a Blog class which can
    store a list of BlogPosts
    add BlogPosts to the list
    delete(int) one item at given index
    update(int, BlogPost) one item at the given index and update it with another BlogPost
*/

class Blog{
    constructor(){
        this.blogs = []
    }

    add(blogPost){
        this.blogs.push(blogPost);
    }
    delete(int){
        this.blogs.splice(int, 1);
    }
    update(int, blogPost){
        this.blogs.splice(int, 0, blogPost);
    }
}

let blog = new Blog();
blog.add(new BlogPost("Blog 0", "Arthur 0", "Content 0", "Date 0"));
blog.add(new BlogPost("Blog 1", "Arthur 1", "Content 1", "Date 1"));
blog.add(new BlogPost("Blog 2", "Arthur 2", "Content 2", "Date 2"));
blog.add(new BlogPost("Blog 3", "Arthur 3", "Content 3", "Date 3"));
blog.add(new BlogPost("Blog 4", "Arthur 4", "Content 4", "Date 4"));
blog.add(new BlogPost("Blog 5", "Arthur 5", "Content 5", "Date 5"));
console.log(blog);
blog.delete(0);
blog.delete(2);
console.log(blog);
blog.update(3, new BlogPost("Blog A", "Arthur A", "Content A", "Date A"));
console.log(blog);


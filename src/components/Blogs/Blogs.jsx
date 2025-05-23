import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookMark, handleTimeOnRead}) => {
    const [blogs, setBlogs] = useState([])
    // console.log(blogs)
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className="">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBookMark={handleBookMark}
                    handleTimeOnRead={handleTimeOnRead}
                    ></Blog>)
                    
                    
            }
            
        </div>

    );
};

export default Blogs;
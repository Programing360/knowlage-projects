// import blog from '../../assets/images/1.jpg'
import { LuBookmark } from "react-icons/lu";
const Blog = ({ blog, handleBookMark, handleTimeOnRead }) => {
    // console.log(blog)
    const { id, cover, title, author_img, author, reading_time, posted_date, hashtag
    } = blog
    return (
        <div className="mb-4 space-y-8">
            <img src={cover} alt="" />
            <div className=" mt-4 flex justify-between">
                <div className="flex">
                    <img className="w-12 rounded-full h-12" src={author_img} alt="" />

                    <div className="ml-2">
                        <h3 className=" font-bold ">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <h2>{reading_time} min read</h2>
                    <button className="cursor-pointer ml-2" onClick={() => handleBookMark(blog)}><LuBookmark></LuBookmark></button>

                </div>
            </div>
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p ><a href="">{hashtag}</a></p>
                {/* <p className="text-fuchsia-800 underline"><a href="">Make as read</a></p> */}
                <button onClick={() => handleTimeOnRead(id, reading_time)} className="text-blue-600 underline cursor-pointer">Mark as read</button>
            </div>

        </div>
    );
};

export default Blog;
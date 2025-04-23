
const Bookmarks = ({bookmarks}) => {
    const {title} = bookmarks
    // console.log(title)
    return (
        <div className="bg-blue-300 p-4 mt-3 m-3 rounded-2xl">
            <h2>{title}</h2>
        </div>
    );
};

export default Bookmarks;
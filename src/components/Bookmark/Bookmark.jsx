import Bookmarks from "../Bookmarks/Bookmarks";


const Bookmark = ({ bookmark }) => {
  // console.log(bookmark)
  return (
    <div className="w-96 bg-amber-400 ml-4 rounded-lg">
      <h1 className="text-2xl text-center">Bookmark:{bookmark.length}</h1>
      {
        bookmark.map((books, index) => <Bookmarks key={index} bookmarks={books}></Bookmarks>)
      }
      
    </div>
  );
};

export default Bookmark;
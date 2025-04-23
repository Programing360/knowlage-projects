
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center mt-2 pb-4 border-b-2 border-b-blue-100'>

            <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;
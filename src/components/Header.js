import { Link } from 'react-router-dom';
import '../styles/misc.css'

export default function Header() {

    return (
      <div className="flex bg-grey w-full h-12 rounded-b-lg shadow items-center px-5 justify-between">
        <Link
          to="/"
          className="flex thefont text-2xl tracking-widest text-yellow cursor-pointer items-center space-x-4"
        >
          <img src="/assets/ymhd2.png" alt="" className="w-10 h-10" />
          <span>YELLOW MINDS</span>
            </Link>
            
        <div className="flex space-x-4">
          <Link
            to='/register'
            className="flex thefont text-2xl tracking-widest text-yellow cursor-pointer items-center space-x-4"
          >
            Register 
          </Link>
          <Link
            to="/about"
            className="flex thefont text-2xl tracking-widest text-yellow cursor-pointer items-center space-x-4"
          >
            <span>ABOUT</span>
          </Link>
          <Link
            to="/contact"
            className="flex thefont text-2xl tracking-widest text-yellow cursor-pointer items-center space-x-4"
          >
            
            <span>CONTACT</span>
          </Link>
        </div>
      </div>
    );
}
import { Link } from 'react-router-dom';
import Imglogo from '../assets/footer/LOGO.png';
import Imgmenu from '../assets/ic_menu.png'
import './css/NavBar.css';
export default function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg bg-black" >
      <div className="container-fluid navBarContainer">
        <a className="navbar-brand" href="/">
          <img src={Imglogo} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src={Imgmenu} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center" >
            <li className="nav-item me-3" >
              <Link className='nav-link navLinkTextStyle' to="/" >客房旅宿</Link>
            </li>
            <li className="nav-item me-3" >
              <Link className='nav-link navLinkTextStyle' to="/about">會員登入</Link>
            </li>
            <li className="nav-item">
              <button type="button" className="navButtonStyle navLinkTextStyle">立即訂房</button>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
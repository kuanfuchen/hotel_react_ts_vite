import Imglogo from '../assets/footer/LOGO.png';
import ImgFB from '../assets/footer/FB.png';
import ImgIG from '../assets/footer/IG.png';
import './css/Footer.css';
// style={footer}
export default function Footer() {
  return(
    <div className="footer">
      <div className='insideFooter' >
        <div className=" changeStyle">
          <div >
            <img  src={Imglogo} alt="" />
            <div className="d-flex" style={{'marginTop':'40px'}}>
            <img src={ImgFB} alt="" />
            <img src={ImgIG} alt="" style={{'marginLeft':'16px'}} />
            </div>
          </div>
          <div className="changeStyle aboutMobileInfoMt">
            <div>
              <div className="aboutInfoStyle">
                <div className="copyrightText" >TEL</div>
                <div  className=" copyrightText copyrightContent">+886-7-1234567</div>
              </div>
              <div style={{ marginTop:'40px'}} className="aboutInfoStyle ">
                <div  className="copyrightText">FAX</div>
                <div  className="copyrightText copyrightContent">+886-7-1234567</div>
              </div>
              
            </div>
            <div className="twoAboutInfoStyle"  >
              <div className="aboutInfoStyle ">
                <div  className="copyrightText">MAIL</div>
                <div  className="copyrightText copyrightContent">elh@hexschool.com</div>
              </div>
              <div style={{ marginTop:'40px'}} className="aboutInfoStyle ">
                <div  className="copyrightText">WEB</div>
                <div  className="copyrightText copyrightContent">www.elhhexschool.com.tw</div>
              </div>
            </div>
          </div>
        </div>
        <div className="changeStyle align-items-end footerCopy" style={{height:'104px'}} >
          <p className="copyrightText copyrightContent">806023 台灣高雄市新興區六角路123號</p>
          <p className="copyrightText copyrightContent">© 享樂酒店 2023 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
// const footer = {
//   height:'456px',
//   backgroundColor:'#140F0a',
//   width:'100%'
  
// }
// const copyrightText = {
//   color:'#fff',
//   fontSize:'16px',
//   fontFamily:'Noto Serif TC',
//   lineHeight:'24px',
//   fontWeight:500,
//   letterSpacing:'2px',
  
// }
// const insideFooter = {
//   heught:'256px',
//   // width:'66vw',
//   padding:'100px 17vw 100px 17vw',
// }
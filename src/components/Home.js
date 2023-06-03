import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import c from '../img/cruise.png'
import pic1 from '../img/1.png'
import pic2 from '../img/2.png'
import pic3 from '../img/3.png'
import pic4 from '../img/4.png'
import pic5 from '../img/5.png'
import pic6 from '../img/6.png'
import pic7 from '../img/7.png'
import pic8 from '../img/8.png'
import '../styles/home.css';
import hero from '../img/hero image.png'
import p1 from '../img/G2 rating home page.png'
import p2 from '../img/Gartner rating home page.png'
import p3 from '../img/SalesCompensation_EasiestToDoBusinessWith_Enterprise_EaseOfDoingBusinessWith copy.png'
import p4 from '../img/SalesCompensation_HighPerformer_HighPerformer copy.png'

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="left-side">
          <p style={{ fontSize: '34px', color: 'white', marginTop: '30px' }}>
            Run your sales compensation in<span style={{ verticalAlign: 'middle' }}> </span>
            <img src={c} alt="c" style={{ verticalAlign: 'middle', height: '30px' }} />
          </p>
          <div className="para">
            <p className="paragph" style={{ fontSize: '15px', color: 'white', marginTop: '40px' }}>
              Build, run and automate your incentive compensation plans to create transparency and achieve operational efficiency.
            </p>
          </div>
          <div className="trykennect" style={{ marginTop: '30px' }}>
            <button type="button" className="btn btn-danger" id="kennectButton" style={{ borderRadius: 130 }}>
              Let's KENNECT
            </button>
          </div>
          <div>
            <p className="paragph" style={{ fontSize: '20px', color: 'white', marginTop: '30px' }}>
              Trusted by
            </p>
          </div>
          <div className="rotating-images-container">
            <img src={pic1} alt="spons1" className="rotating-image" style={{ height: '70px', width: '200px', padding: '10px' }} />
            <img src={pic2} alt="spons2" className="rotating-image" style={{ height: '70px', width: '200px', padding: '10px' }} />
            <img src={pic3} alt="spons3" className="rotating-image" style={{ height: '70px', width: '200px', padding: '10px' }} />
            <img src={pic4} alt="spons4" className="rotating-image" style={{ height: '70px', width: '200px', padding: '10px' }} />
            <img src={pic5} alt="spons5" className="rotating-image" style={{ height: '70px', width: '200px', padding: '10px' }} />
            <img src={pic6} alt="spons6" className="rotating-image" style={{ height: '70px', width: '200px', padding: '10px' }} />
            <img src={pic7} alt="spons7" className="rotating-image" style={{ height: '70px', width: '200px', padding: '10px' }} />
            <img src={pic8} alt="spons8" className="rotating-image" style={{ height: '70px', width: '200px', padding: '10px' }} />
          </div>
        </div>
        <div className="right-side">
          <div className="image-container">
            <img src={p1} className="p1" alt="I1" style={{ marginLeft: 50, marginTop: 10 }} />
            <img src={p2} className="p2" alt="I2" style={{ marginLeft: 30, marginTop: 10 }} />
          </div>
          <div className="image-container">
            <img src={p3} alt="I3" className="p3" style={{ height: '150px', width: '130px', marginTop: 10 }} />
            <img src={hero} alt="h1" id="heroImage" style={{ height: '350px', width: '200px', marginTop: 50, marginLeft: 20 }} />
            <img src={p4} alt="I4" className="p4" style={{ height: '150px', width: '130px', marginLeft: 20, marginTop: 10 }} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home


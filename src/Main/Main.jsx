import React from 'react';
import car from '../images/drive.mp4';
import nature from '../images/nature.mp4'
import vidos from '../images/main.vid.mp4'
import alakul from '../images/ala-kul.jpeg'
import sarysh from '../images/sary-chelek.jpeg'
import a from '../images/1.jpeg'
import b from '../images/2.jpeg'
import c from '../images/4.jpeg'
import d from '../images/5.png'
import x from '../images/6.jpeg'
import f from '../images/trip4.jpeg'
import call from '../icons/call-center.png'
import q from '../images/q.jpg'
import e from '../images/e.jpg'
import r from '../images/r.jpg'
import t from '../images/t.jpg'
import y from '../images/y.jpg'
import u from '../images/u.jpg'
import w from '../images/w.jpg'
import p from '../images/p.jpg'
const Main = () => {
    return (
        <div>
            <section className='home'>
                <div className="content">
                    <span>Follow us</span>
                    <h3>to the unknown</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eius doloremque magni dicta aliquam nostrum quos pariatur, ullam fugit necessitatibus.</p>
                    <a href="#" className='btn'>book now</a>
                    
                </div>
            </section>

            <section className='book-form' id='book-form'>
                <form action="">
                    <div className="inputBox">
                        <span>where to</span>
                        <input type="text" placeholder='place name' value='' />
                    </div>
                    <div className="inputBox">
                        <span>when?</span>
                        <input type="date" value='' />
                    </div>
                    <div className="inputBox">
                        <span>how many?</span>
                        <input type="text" placeholder='number of travelers' value='' />
                    </div>
                    <input type="submit" value='find now' className='btn' />
                </form>
            </section>
            <section className='about' id='about'>
                <div className="video-container">
                    <video src={vidos} muted autoPlay loop className='video'></video>
                    <div className="controls">
                        <span className='control-btn' data-src={car} ></span>
                        <span className='control-btn' data-src={nature} ></span>
                        <span className='control-btn' data-src={vidos} ></span>
                    </div>
                </div>
                <div className="content">
                    <span>why choose us?</span>
                    <h3>Nature of Kyrgyzstan waiting for you</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, sunt nam. Iure veritatis impedit reprehenderit eveniet culpa commodi fugit deserunt hic placeat, quae iusto voluptatum.</p>
                    <a href="" className='btn'>read more</a>
                </div>
            </section>
            <section className="destination" id="destination">
                <div className="heading">
                    <span>our destination</span>
                    <h1>make yours destination</h1>
                </div>

                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <img src={alakul} alt="" />
                        </div>
                        <div className="content">
                            <h3>tours & travel</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#">read more<i className='fas fa-ngle-right'></i></a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={sarysh} alt="" />
                        </div>
                        <div className="content">
                            <h3>tours & travel</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#">read more<i className='fas fa-ngle-right'></i></a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={a} alt="" />
                        </div>
                        <div className="content">
                            <h3>tours & travel</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#">read more<i className='fas fa-ngle-right'></i></a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={b} alt="" />
                        </div>
                        <div className="content">
                            <h3>tours & travel</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#">read more<i className='fas fa-ngle-right'></i></a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={c} alt="" />
                        </div>
                        <div className="content">
                            <h3>tours & travel</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#">read more<i className='fas fa-ngle-right'></i></a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={d} alt="" />
                        </div>
                        <div className="content">
                            <h3>tours & travel</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#">read more<i className='fas fa-ngle-right'></i></a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={x} alt="" />
                        </div>
                        <div className="content">
                            <h3>tours & travel</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#">read more<i className='fas fa-ngle-right'></i></a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={f} alt="" />
                        </div>
                        <div className="content">
                            <h3>tours & travel</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#">read more<i className='fas fa-ngle-right'></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='services' id='services'>
                <div className="heading">
                    <span>our services</span>
                    <h1>countless expirience</h1>
                </div>

                <div className="box-container">
                    <div className="box">
                        <i><a href="https://www.flaticon.com/free-icons/globe" title="globe icons"></a></i>
                        <h3>worldwide</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium esse culpa suscipit possimus porro minus et veniam qui voluptas?</p>
                    </div>
                    <div className="box">
                        <i className='fas fa-utensils'></i>
                        <h3>food & drink</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium esse culpa suscipit possimus porro minus et veniam qui voluptas?</p>
                    </div>
                    <div className="box">
                        <i className='fas fa-hotels'></i>
                        <h3>hotels</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium esse culpa suscipit possimus porro minus et veniam qui voluptas?</p>
                    </div>
                    <div className="box">
                        <i className='fas fa-wallet'></i>
                        <h3>price</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium esse culpa suscipit possimus porro minus et veniam qui voluptas?</p>
                    </div>
                    <div className="box">
                        <i className='fas fa-headest' src={call}></i>
                        <h3>24/7service</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium esse culpa suscipit possimus porro minus et veniam qui voluptas?</p>
                    </div>
                    <div className="box">
                        <i className='fas fa-headest'></i>
                        <h3>adventure</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium esse culpa suscipit possimus porro minus et veniam qui voluptas?</p>
                    </div>
                  
                </div>
            </section>
            <section className="gallery" id="gallery">
                <div className="heading">
                <span>our gallery</span>
                <h1>we record memories</h1>
                </div>
                
                <div className="box-container">
                    <div className="box">
                        <img src={q} alt="" />
                        <span>travel spot</span>
                        <h3>Song-kul</h3>
                    </div>
                    <div className="box">
                        <img src={w} alt="" />
                        <span>travel spot</span>
                        <h3>our happy guest</h3>
                    </div>
                    <div className="box">
                        <img src={e} alt="" />
                        <span>travel spot</span>
                        <h3>adventure on china border</h3>
                    </div>
                    <div className="box">
                        <img src={r} alt="" />
                        <span>travel spot</span>
                        <h3>Kyrgyzstan</h3>
                    </div>
                    <div className="box">
                        <img src={t} alt="" />
                        <span>travel spot</span>
                        <h3>Kyrgyzstan</h3>
                    </div>
                    <div className="box">
                        <img src={y} alt="" />
                        <span>travel spot</span>
                        <h3>Kyrgyzstan</h3>
                    </div>
                    <div className="box">
                        <img src={u} alt="" />
                        <span>travel spot</span>
                        <h3>Kyrgyzstan</h3>
                    </div>
                    <div className="box">
                        <img src={p} alt="" />
                        <span>travel spot</span>
                        <h3>Kyrgyzstan</h3>
                    </div>
                </div>
            </section>
            <section className="blogs" id="blogs">
                <div className="heading">
                    <span>blogs & posts</span>
                    <h1>we untold stories</h1>
                </div>

                <div className="box-container">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <a href="#" className='link'>life a journey, nit a destination</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dicta?</p>
                    <div className="icon">
                        <a href="#" className=''>21st may, 2021</a>
                        <a href="#" className=''>by admin</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;
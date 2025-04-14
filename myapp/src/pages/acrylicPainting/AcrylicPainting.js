import React from 'react';
import './acrylicPainting.css'; // Ensure you create a CSS file for styles
import { Link } from 'react-router-dom';


function AcrylicPainting() {
  return (
    <div>
        <ul className="nav justify-content-center" style={{ backgroundColor: 'rgb(209, 153, 153)' }}>
        <img src={require('../images/4.jpg')} id="abc1" style={{ marginLeft: '-405px' }} alt="Logo" />
        <p id="abc2" style={{ marginLeft: '-10px' }}>Artful Harbor</p>

        <li className="nav-item">
          <Link to="/art_FSD" id="q1" className="nav-link" style={{ color: 'rgb(159, 9, 9)', fontWeight: 'bold', marginLeft: '-375px', marginRight: '60px', fontSize: '15px' }}>Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/artist" id="q2" className="nav-link" style={{ color: 'rgb(186, 41, 41)', fontWeight: 'bold', marginLeft: '-319px', marginRight: '50px', fontSize: '15px' }}>Artist</Link>
        </li>

        <li className="nav-item">
          <Link to="/artwork" id="q3" className="nav-link" style={{ color: 'rgb(111, 33, 33)', fontWeight: 'bold', marginLeft: '-267px', marginRight: '50px', fontSize: '15px' }}>Artworks</Link>
        </li>

        <li className="nav-item dropdown">
          <a id="q4" className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#sell" style={{ color: 'rgba(198, 62, 62, 0.822)', fontWeight: 'bold' ,marginLeft: '-190px', marginRight: '100px'}}>Sell</a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/acrylicPainting" className="dropdown-item">Acrylic Painting</Link>
            </li>
            <li>
              <Link to="/mandalaArt" className="dropdown-item">Mandala Art</Link>
            </li>
            <li>
              <Link to="/tavdiPainting" className="dropdown-item">Tavdi Painting</Link>
            </li>
            <li>
              <Link to="/abstractPainting" className="dropdown-item">Abstract Painting</Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a id="q5" className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#Events" style={{ color: '#a94249', fontWeight: 'bold', marginLeft: '-140px', marginRight: '30px', fontSize: '15px' }}>Events</a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/pastEvent" className="dropdown-item">Past</Link>
            </li>
            <li>
              <Link to="/currentEvent" className="dropdown-item">Current</Link>
            </li>
            <li>
              <Link to="/upcomingEvent" className="dropdown-item">Upcoming</Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/contact" id="q6" className="nav-link" style={{ color: 'rgb(111, 55, 55)', fontWeight: 'bold', marginLeft: '-70px', marginRight: '20px', fontSize: '15px' }}>Contact</Link>
        </li>

        <li className="form-inline my-2 my-lg-0">
          
            <Link to="/login" className="btn" style={{ marginTop: '4px', marginRight: '-270px', marginLeft: '170px', fontWeight: 'bold', color: 'white', backgroundColor: 'rgb(103, 63, 63)' }}>Login</Link>
          
          
            <Link to="/signup" className="btn" style={{ marginTop: '4px', marginRight: '-350px', marginLeft: '280px', backgroundColor: 'rgb(137, 90, 90)', fontWeight: 'bold', color: 'white' }}>Signup</Link>
          
        </li>
      </ul>
      <br />
      
      <div className="container">
        {[
          { src: '43.jpg', title: 'Dandelion Flower', price: '₹75,000' },
          { src: '44.jpg', title: 'Nature', price: '₹1,00,000' },
          { src: '45.jpg', title: 'Lake', price: '₹40,000' },
          { src: '46.jpg', title: 'Bird', price: '₹8,00,000' },
          { src: '47.jpg', title: 'Horse', price: '₹6,00,000' },
          { src: '48.jpg', title: 'Butterfly', price: '₹15,89,600' },
          { src: '49.jpg', title: 'Lion', price: '₹59,469' },
          { src: '50.jpg', title: 'Streets', price: '₹16,00,890' },
          { src: '51.jpg', title: 'Rain', price: '₹12,00,000' },
          { src: '52.jpg', title: 'Lord Shiva', price: '₹34,708' },
          { src: '53.jpg', title: 'Lord Ganesha', price: '₹1,89,000' },
          { src: '54.jpg', title: 'Fish', price: '₹67,000' },
        ].map((art, index) => (
          <div className={`card card-${index + 1}`} key={index}>
            <div className="card-header">
              <img src={require(`../images/${art.src}`)} alt={art.title} className="card-img" />
            </div>
            <div className="card-body">
              <h2 className="card-local">Acrylic Painting</h2>
              <h1 className="card-titulo">{art.title}</h1>
              <p className="card-texto">{art.price}</p>
            </div>
            <div className="card-footer">
              <a href="#">Buy Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcrylicPainting;

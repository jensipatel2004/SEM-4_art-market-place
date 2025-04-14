import React from 'react';
import './mandalaArt.css'; // Ensure you create a CSS file for styles
import { Link } from 'react-router-dom';


function MandalaArt() {
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
          <a id="q4" className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#sell" style={{ color: 'rgba(198, 62, 62, 0.822)', fontWeight: 'bold', marginLeft: '-190px', marginRight: '100px' }}>Sell</a>
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
          { src: '69.jpg', title: 'Buddha', price: '₹75,320' },
          { src: '70.jpg', title: 'Dot Art', price: '₹1,06,567' },
          { src: '71.jpg', title: 'Ganesh ji', price: '₹53,908' },
          { src: '72.jpg', title: 'Dot Art', price: '₹34,907' },
          { src: '73.jpg', title: 'Tree', price: '₹9,00,608' },
          { src: '74.jpg', title: 'Peacock', price: '₹15,90,000' },
          { src: '75.jpg', title: 'African Women', price: '₹65,000' },
          { src: '76.jpg', title: 'Kathakali', price: '₹5,00,900' },
          { src: '77.jpg', title: 'Sarswathi', price: '₹80,000' },
          { src: '78.jpg', title: 'Camel', price: '₹89,000' },
          { src: '79.jpg', title: 'Dot Art', price: '₹15,00,000' },
          { src: '80.jpg', title: 'Dot Art', price: '₹25,999' },
        ].map((art, index) => (
          <div className={`card card-${index + 1}`} key={index}>
            <div className="card-header">
              <img src={require(`../images/${art.src}`)} alt={art.title} className="card-img" />
            </div>
            <div className="card-body">
              <h2 className="card-local">Mandala Art</h2>
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

export default MandalaArt;

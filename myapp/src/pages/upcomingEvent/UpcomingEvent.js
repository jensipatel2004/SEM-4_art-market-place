import React from 'react';
import './upcomingEvent.css'; // Ensure to create a CSS file for styles
import { Link } from 'react-router-dom';

function UpcomingEvent() {
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
      
      <div className="container1">     
        <img src={require('../images/30.webp')} alt="Art Karlsruhe Thumbnail" className="image1" />
        <h1 style={{ fontSize: '30px', marginTop: '5px', marginLeft: '170px', textAlign: 'justify', transition: '0.2s' }}>
          art KARLSRUHE
        </h1>
        <h3 style={{ fontSize: '25px', marginTop: '18px', marginLeft: '170px', textAlign: 'justify' }}>
          (April 21 – March 2, 2025)
        </h3>
      </div>
      <br /><br />

      <ul style={{
        backgroundColor: 'rgb(239, 233, 233)',
        borderRadius: '20px',
        marginLeft: '10px',
        marginRight: '10px',
        overflow: 'hidden',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)'
      }}>
        <li>
          <p style={{ textAlign: 'justify', marginRight: '20px' }}>
            The upcoming art KARLSRUHE – Classic Modern and Contemporary Art (22 to 25 February 2024) will be the debut for the fair’s new dual leadership of Olga Blass and Kristian Jarmuschek. The Advisory Board selected 180 nationally and internationally renowned galleries from the field of applicants.
          </p>
        </li>
        <li>
          <p style={{ textAlign: 'justify', marginRight: '20px' }}>
            In one of the most beautiful exhibition centres in Europe, bright as daylight and free of pillars, art KARLSRUHE provides an overview of 120 years of artistic creation. The Fair is anchored in one of Germany's regions with the highest purchasing power, the collector's state of Baden-Württemberg, in the immediate vicinity of France, Switzerland, and Austria.
            Proven and new formats go hand in hand with the reduction of the field of participants and will make the fair more qualitative, more structured, and more interesting. At the same time, art KARLSRUHE will continue to focus on its expertise in the fields of classical modernism, post-war, and contemporary art.
          </p>
        </li>
        <li>
          <p style={{ textAlign: 'justify', marginRight: '20px' }}>
            "I see a real departure here," summarises the world-famous artist and loyal visitor to the fair Markus Lüpertz. On the preview day, the hand-picked audience of art connoisseurs and gallery owners was already enthusiastic about the conceptual reorganisation under the new management, which has made the strengths of the fair tangible again. Around 47,000 visitors confirmed this initial positive response over the course of the fair.
          </p>
        </li>
      </ul>
      <br />

      
      <div className="container2">     
        <img src={require('../images/31.webp')} alt="UVNT Art Fair Madrid Thumbnail" className="image2" />
        <h1 style={{ fontSize: '30px', marginTop: '5px', marginLeft: '170px', textAlign: 'justify', transition: '0.2s' }}>
          UVNT Art Fair Madrid
        </h1>
        <h3 style={{ fontSize: '25px', marginTop: '18px', marginLeft: '170px', textAlign: 'justify' }}>
          (March 7 – 10, 2025)
        </h3>
      </div>
      <br /><br />

      <ul style={{
        backgroundColor: 'rgb(239, 233, 233)',
        borderRadius: '20px',
        marginLeft: '10px',
        marginRight: '10px',
        overflow: 'hidden',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)'
      }}>
        <li>
          <p style={{ textAlign: 'justify', marginRight: '20px' }}>
            UVNT Art Fair celebrates its 8th edition from March 7th to 10th, 2024. A space to explore the freshest languages, integrate different aesthetic codes and find what’s new in the art world.
          </p>
        </li>
        <li>
          <p style={{ textAlign: 'justify', marginRight: '20px' }}>
            A fair where emerging and mid-career artists along with other big names of the national and international contemporary scene seek to reimagine the current cultural landscape through Contemporary Art.
          </p>
        </li>
        <li>
          <p style={{ textAlign: 'justify', marginRight: '20px' }}>
            The fair, which its first edition was held in 2017, has matured and evolved and in March 2024 it will open its doors to continue to position itself as an essential artistic hot spot during Madrid's Art Week.
          </p>
        </li>
        <li>
          <p style={{ textAlign: 'justify', marginRight: '20px' }}>
            Almost 40 national and international galleries will be present at the fair to reflect, as every year, the current artistic trends and continue to maintain the freshness and innovation that have been part of the fair’s DNA since its inception.
          </p>
        </li>
        <li>
          <p style={{ textAlign: 'justify', marginRight: '20px' }}>
            UVNT wants to explore and reimagine possible future scenarios for this New Contemporary Art scene.
          </p>
        </li>
      </ul>
      <br />
    </div>
  );
}

export default UpcomingEvent;

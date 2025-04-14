import React from 'react';
import './artist.css'; // Import your CSS file for styles
import { Link } from 'react-router-dom';


function Artist() {
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
      
      <br />
      <div className="container1">
        <img src={require('../images/6.png')} className="image11" alt="Leonardo da Vinci" style={{marginTop: '-10px'}}/>
        <h2 id="vv7" style={{marginTop: '20px'}}>Leonardo da Vinci (1452 – 1519)</h2>
        <p id="vv8" style={{marginTop: '40px'}}>Leonardo da Vinci was an exceptionally talented individual who showed a keen interest in many spheres of life outside of art. Yet, he often used his art to share these ideas and left behind a treasure trove of journals and artworks that provide us with considerable insight into the workings of one of the world’s most fascinating minds...</p>
      </div>
      <div className="container2">
        <img src={require('../images/7.jpg')} className="image12" alt="Rembrandt" style={{marginRight: '-160px'}}/>
        <h2 id="vv9">Rembrandt (1606 – 1669)</h2>
        <p id="vv10" style={{ fontSize: '17px' }}>There was a period in the history of Holland when the country’s developments in science and art were highly regarded throughout the world...</p>
        <p id="vv11" style={{ fontSize: '17px' }}>While the artist embraced multiple styles and subjects, it is his portraits that he is most renowned for...</p>
      </div>
      <div className="container3">
        <img src={require('../images/8.png')} className="image13" alt="Élisabeth Louise Vigée Le Brun" style={{marginRight: '-190px'}} />
        <h2 id="vv12" style={{ fontSize: '33px' }}>Élisabeth Louise Vigée Le Brun (1755 – 1842)</h2>
        <p id="vv13" style={{ fontSize: '20px' }}>Élisabeth Vigée-Lebrun was a very well-known female painter of her time, most known for her depictions of women...</p>
      </div>
      <div className="container4">
        <img src={require('../images/9.png')} className="image14" alt="Eugène Delacroix" style={{marginRight: '-340px'}} />
        <h2 id="vv14">Eugène Delacroix (1798–1863)</h2>
        <p id="vv15" style={{ fontSize: '20px' }}>Next on our list of the most famous artists in history is yet another French artist, Eugène Delacroix...</p>
      </div>
      
      <br />
      <br />
    </div>
  );
}

export default Artist;

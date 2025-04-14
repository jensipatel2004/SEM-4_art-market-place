import React from 'react';
import './art_FSD.css';
import { Link } from 'react-router-dom';


function ArtFSD() {
  return (
    <>
        <ul className="nav justify-content-center" style={{ backgroundColor: 'rgb(209, 153, 153)' }} id="vvvv1">
        <img src={require('../images/4.jpg')} id="abc1" style={{ marginLeft: '-405px' }} alt="Logo" />
        <p id="abc2" style={{ marginLeft: '-10px', color: 'rgb(123, 54, 54);' }}>Artful Harbor</p>

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
      <div id="vvv7" className="container-fluid">
        <div id="vvv8">
          <div className="row">
            <div className="col-8">
              <img id="vvv9" src={require('../images/100.jpg')} alt="Artful Harbor" />
            </div>
            <div className="col-4">
              <br />
              <br />
              <br />
              <br />
              
              <p id="vvv11">Artful Harbor</p>
              <p id="vvv12">Website</p>
              
            </div>
          </div>
        </div>
      </div>

      <br />

      <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Famous Artists</h1>
      <br />
      <div className="row">
        {[
          { src: require('../images/6.png'), name: 'Leonardo da Vinci (1452 – 1519)' },
          { src: require('../images/7.jpg'), name: 'Rembrandt (1606 – 1669)' },
          { src: require('../images/8.png'), name: 'Élisabeth Louise Vigée Le Brun (1755 – 1842)' },
          { src: require('../images/9.png'), name: 'Eugène Delacroix (1798–1863)' }
        ].map((artist, index) => (
          <div key={index} className={`col-3 ha`}>
            <img className="a1" src={artist.src} alt={artist.name} />
            <div className="a">{artist.name}</div>
          </div>
        ))}
      </div>

      <br />

      <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>All-Time Famous Artworks</h1>
      <br />
      <div className="row">
        {[
          { src: require('../images/10.jpg')  },
          { src: require('../images/11.jpg')},
          { src: require('../images/12.jpg') },
          { src: require('../images/13.jpg') }
        ].map((artist, index) => (
          <div key={index} className={`col-3 ha`}>
            <img className="a1" src={artist.src} alt={artist.name} />
            
          </div>
        ))}
      </div>
      
      
      <br />
      <br />
      <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center', fontSize: '45px' }}>Sell Painting</h1>
      
      <br />

      {/* Paintings List */}
      {renderPaintingSection('Acrylic Painting', [
        { src: require('../images/14.jpg'), title: 'The King: Lion', price: '₹2,00,316', color: 'white'},
        { src: require('../images/15.jpg'), title: 'Lord Krishna', price: '₹3,00,000', color: 'white' },
        { src: require('../images/16.jpeg'), title: 'African People', price: '₹2,34,000', color: 'white' }
      ])}

      {/* Mandala Art Section */}
      <br />
      <h2 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: '20px', marginBottom: '-20px' }}>Mandala Art</h2>
      <br />
      <br />
      <br />
      {renderPaintingSection('Mandala Art', [
        { src: require('../images/17.jpg'), title: 'Indian Style Mandala Art', price: '₹2,00,316', color: 'white' },
        { src: require('../images/18.jpg'), title: 'Mandala Art: Village Woman', price: '₹3,00,000', color: 'white' },
        { src: require('../images/19.jpg'), title: 'Dot Mandala Art on Canvas', price: '₹2,34,000', color: 'white' }
      ])}

      {/* Tavdi Painting Section */}
      <br />
      <br />
      <h2 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Tavdi Painting</h2>
      <br />
      {renderPaintingSection('Tavdi Painting', [
        { src: require('../images/20.webp'), title: 'Tavdi Art: Radha Krishna', price: '₹2,00,316', color: 'white' },
        { src: require('../images/21.jpg'), title: 'Tavdi Art: Ganeshji', price: '₹3,00,000', color: 'white' },
        { src: require('../images/22.jpeg'), title: 'Lady Tavdi Art', price: '₹2,34,000', color: 'white' }
      ])}

      {/* Abstract Art Section */}
      <br />
      <br />
      <h2 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Abstract Art</h2>
      <br />
      {renderPaintingSection('Abstract Art', [
        { src: require('../images/2.jpg'), title: 'Abstract Art', price: '₹2,00,316', color: 'white' },
        { src: require('../images/1.jpg'), title: 'Abstract Art: Egret', price: '₹3,00,000', color: 'white' },
        { src: require('../images/3.jpg'), title: 'Abstract Art: Lord Shiva', price: '₹2,34,000', color: 'white' }
      ])}

      {/* Events Section */}
      <br />
      <br />
      <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Events</h1>
      <br />
      <h2 style={{ fontWeight: 5, color: 'black', textAlign: 'center' }}>Current Events</h2>
      <br />
      {renderEventsTable('current', [
        { img: require('../images/23.webp'), title: '100 Warhols: An Artsy Exclusive', date: 'February 15 – March 15, 2024' },
        { img: require('../images/24.webp'), title: 'LA Art Show 2024', date: 'February 8 – March 8, 2024' },
        { img: require('../images/25.webp'), title: 'S.E.A. Focus 2024', date: 'January 19 – February 18, 2024' },
        { img: require('../images/26.webp'), title: 'Art Palm Beach 2024', date: 'January 18 – February 18, 2024' }
      ])}

      <br />
      <h1 style={{ fontWeight: 5, color: 'black', textAlign: 'center' }}>Past Events</h1>
      <br />
      {renderEventsTable('past', [
        { img: require('../images/27.webp'), title: 'The Art Show', date: 'May 11 – November 24, 2023' },
        { img: require('../images/28.webp'), title: 'London Art Fair 2024', date: 'October 8 – October 20, 2023' },
        { img: require('../images/29.webp'), title: 'AKAA 2023', date: 'October 18 – October 21, 2023' },
        
      ])}
    <br />
<h1 style={{ fontWeight: 5, color: 'black', textAlign: 'center' }}>Upcoming Events</h1>
      <br />
      {renderEventsTable('upcoming', [
        { img: require('../images/30.webp'), title: 'art KARLSRUHE', date: 'May 11 – November 24, 2025' },
        { img: require('../images/31.webp'), title: 'UVNT Art Fair Madrid', date: 'October 8 – October 20, 2025' },
        
      ])}

      <br />

      <footer>
            <div className="footerContainer">
                <div className="row">
                    <div className="col-5">
                        <h1 style={{ color: '#6b8ce4', textIndent: '10px', marginLeft: '5px' }}>Contact us</h1>
                        <br />
                        <ul>
                            <li style={{ color: '#c7cbd9' }}>Address: 103-A, Shreehari, Shahibaug, Ahmedabad</li>
                            <br />
                            <li style={{ color: '#c7cbd9' }}>Email: abc123@gmail.com</li>
                            <br />
                            <li style={{ color: '#c7cbd9' }}>Phone no: (+91) 9106694960</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <br />
                        <h4 style={{ color: '#429cec', textIndent: '10px' }}>Types of painting</h4>
                        <ul>
                            <br />
                            <li style={{ color: '#c7cbd9' }}>Acrylic painting</li>
                            <li style={{ color: '#c7cbd9' }}>Mandala art</li>
                            <li style={{ color: '#c7cbd9' }}>Tavdi art</li>
                            <li style={{ color: '#c7cbd9' }}>Abstract painting</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <br />
                        <h4 style={{ color: '#33c6ef', textIndent: '10px' }}>Events</h4>
                        <ul>
                            <br />
                            <li style={{ color: '#c7cbd9' }}>Past</li>
                            <li style={{ color: '#c7cbd9' }}>Current</li>
                            <li style={{ color: '#c7cbd9' }}>Upcoming</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    </>
  );
}

function renderPaintingSection(title, paintings) {
  return (
    <>
      <h3 style={{ fontWeight: 20, color: 'black', textAlign: 'center', marginTop: '10px', marginBottom: '-10px' }}>{title}</h3>
      <br />
      <div className="row">
        {paintings.map((painting, index) => (
          <div key={index} className="col-4">
            <div className="card">
              <img className="card-img-top" src={painting.src} alt={painting.title} />
              <div className="card-body" style={{ backgroundColor: painting.color }}>
                <h5 className="card-title" style={{fontSize: '20px' }}>{painting.title}</h5>
                <p className="card-text" style={{ fontSize: '30px' }}>{painting.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function renderEventsTable(type, events) {
  return (
    <div className="container">
      <table className="table table-hover">
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>
                <img src={event.img} alt={event.title} style={{ width: '200px', height: '150px' }} />
              </td>
              <td><h4>{event.title}</h4></td>
              <td><h4>{event.date}</h4></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArtFSD;

import React from 'react';
import './artwork.css'; // Make sure to create a CSS file for styling
import { Link } from 'react-router-dom';


function Artwork() {
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

      <div className="container5">
        <img src={require('../images/10.jpg')} className="image5" style={{ border: '7px solid rgb(88, 79, 79)', marginTop: '-30px' }} alt="Mona Lisa" />
        <h2 id="v88" style={{ fontSize: '27px' }}>MONA LISA BY LEONARDO DA VINCI (1503-1505)</h2>
        <p id="v89" style={{ fontSize: '16px' }}>
          Probably the most famous painting in the world is Leonardo da Vinci's La Gioconda, better known as Mona Lisa. 
          This painting is a portrait of Madame Gherardini, personifying the ideal woman of the Renaissance. They tried to damage 
          the painting more than once, and in 1911 it was kidnapped, returning only 2 years later. Admiration for it truly knows 
          no bounds: Napoleon Bonaparte even removed it from the museum and ordered to hang it in his own bedroom. The painting 
          is officially declared priceless, which is not surprising, as this masterpiece is the best art of all time. 
          The only existing price is its $3 billion insurance. Mona Lisa is currently kept in the Louvre, Paris.
        </p>
      </div>

      <div className="container6">
        <img src={require('../images/11.jpg')} className="image6" style={{ border: '7px solid black' }} alt="The Starry Night" />
        <h2 id="v90" style={{ fontSize: '26px', marginTop: '110px', marginLeft: '10px' }}>THE STARRY NIGHT BY VINCENT VAN GOGH (1889)</h2>
        <p id="v91" style={{  marginTop: '25px', marginBottom: '0px', marginLeft: '10px' }}>
          Van Gogh's Starry Night is one of the most famous paintings in post-impressionist culture. It is currently on display 
          at the Museum of Modern Art in New York. Unlike most of Dutch artist's paintings, Starry Night was painted from memory. 
          At that time, Van Gogh was in the hospital of Saint-Remy, tormented by fits of madness.
        </p>
      </div>

      <div className="container7">
        <img src={require('../images/12.jpg')} className="image7" style={{ border: '7px solid black' }} alt="The Scream" />
        <h2 id="v92" style={{ fontSize: '29px',marginTop: '80px' }}>THE SCREAM BY EDVARD MUNCH (1893)</h2>
        <p id="v93"  style={{ marginTop: '40px' }}>
          The Scream is an iconic work, one of the most famous paintings, of Norwegian expressionist Edvard Munch. Between 1893 
          and 1910, he painted 4 different versions. This painting, now in the National Gallery and at the Munch Museum in Oslo, 
          is one of the first in a style in which realism is minimized to give more freedom to emotions.
        </p>
      </div>

      <div className="container8">
        <img src={require('../images/13.jpg')} className="image8" style={{ border: '7px solid rgb(67, 68, 67)' }} alt="A Sunday Afternoon on the Island of La Grande Jatte" />
        <h2 id="v94" style={{ fontSize: '27px', marginTop: '90px', marginLeft: '10px' }}>A Sunday Afternoon on the Island of La Grande Jatte</h2>
        <p id="v95" style={{ fontSize: '16px', marginTop: '20px', marginLeft: '10px' }}>
          Georges Seurat began painting A Sunday Afternoon on the Island of La Grande Jatte in the spring of 1884. 
          During this time, the artist lived and worked alongside the Impressionists in Paris. Like these artists, Seurat often 
          painted scenery found outside the French capital, including La Grande Jatte, a Seine River island situated to the west 
          of Paris. In order to perfect his painting of the popular park, Seurat completed a collection of preliminary sketches 
          and drawings. This approach enabled Seurat to capture the color, light, and movement of the scene before him, which he 
          revisited several times before finishing the final large-scale painting in 1886.
        </p>
      </div>

      <div className="container9">
        <img src="https://sep.turbifycdn.com/ty/cdn/madisonartshop/Picasso-3musicians?t=1678352599" className="image9" style={{ border: '7px solid black' }} alt="Three Musicians" />
        <h2 id="v96" style={{ marginTop: '90px' }}>Three Musicians, 1921 by Pablo Picasso</h2>
        <p id="v97" style={{ marginTop: '20px' }}>
          Picasso’s Three Musicians presents three figures painted in a decorative, brightly colored, Synthetic Cubist style. 
          It is one of two very large paintings of the same subject that Picasso painted in 1921, both interpreted to be symbolic 
          group portraits of the artist and two old friends. In this version, Picasso is the Harlequin figure wearing the bright 
          diamond patterned suit in the center. The white Pierrot figure on the left is thought to be the poet Guillaume Apollinaire, 
          while the dark figure of a monk on the right represents the poet Max Jacob.
        </p>
      </div>

      
      <br />
      <br />
      <br />
    </div>
  );
}

export default Artwork;

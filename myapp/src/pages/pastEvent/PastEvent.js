import React from 'react';
import './pastEvent.css'; // Ensure to create a CSS file for styles
import { Link } from 'react-router-dom';


function PastEvent() {
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
        <img src={require('../images/27.webp')} alt="Art Show 2023 Thumbnail" className="image1" />
        <h1 style={{ fontSize: '30px', marginTop: '5px', marginLeft: '170px', textAlign: 'justify', transition: '0.2s' }}>
          The Art Show 2023
        </h1>
        <h3 style={{ fontSize: '25px', marginTop: '18px', marginLeft: '170px', textAlign: 'justify' }}>
          (November 2 – 30, 2023)
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
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>Organized annually by the Art Dealers Association of America, and benefitting Henry Street Settlement, one of New York’s leading social service, arts, and health care organizations, The Art Show brings together the country’s top galleries to showcase incisively curated exhibitions of both historical and contemporary works.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>The fair's intimately scaled presentations foster new relationships, active conversations with gallerists, and close looking at works by artists representing a variety of genres, practices, and national and international origins. With a history of programming that ranges from artist performances to dynamic keynote presentations, The Art Show provides its audience with a wide scope of cultural experiences, meaningful interactions, and illuminating exposure to phenomenal artwork.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>The Art Show Benefit Preview offers an exclusive first look before the fair opens to the public, convening the worlds of art and philanthropy for this highly anticipated, glamorous gathering. The Benefit Preview is attended by a global audience of collectors and philanthropic and business leaders, whose generosity directly supports Henry Street Settlement's life-changing programs.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>As Henry Street Settlement’s greatest source of unrestricted funding, The Art Show has raised over $36 million for the nonprofit through more than three decades of partnership between the two organizations. The collaboration between the ADAA and Henry Street allows for the creation of an unparalleled art experience that supports vital services for over 50,000 New Yorkers each year.</p></li>
      </ul>
      <br />
      
      <div className="container2">
        <img src={require('../images/28.webp')} alt="London Art Fair 2024 Thumbnail" className="image2" />
        <h1 style={{ fontSize: '30px', marginTop: '5px', marginLeft: '170px', textAlign: 'justify', transition: '0.2s' }}>
          London Art Fair 2024
        </h1>
        <h3 style={{ fontSize: '25px', marginTop: '18px', marginLeft: '170px', textAlign: 'justify' }}>
          (January 11 – February 5, 2024)
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
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>The international art calendar for 2024 has launched with the opening of the London Art Fair, founded in 1989 by London’s Business Design Centre in Islington.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>Bringing together over 120 galleries this January, London Art Fair provides an established home for Modern British Art, whilst embracing an increasingly international and contemporary outlook, with new galleries from around the world. Curated sections including Platform and Photo50 offer thematic presentations around a new theme each year, while Encounters showcases the freshest contemporary art from across the globe featuring young, up and coming galleries eager to present their emerging artists alongside established names who are creating new and exciting work in a different direction.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>For 2024 London Art Fair's prestigious Museum Partner pavilion will be occupied by Charleston, the former home of the Bloomsbury group, which now encompasses two contemporary gallery spaces in Lewes and Firle.</p></li>
      </ul>
      <br />
      
      <div className="container3">
        <img src={require('../images/29.webp')} alt="AKAA 2023 Thumbnail" className="image3" />
        <h1 style={{ fontSize: '30px', marginTop: '5px', marginLeft: '170px', textAlign: 'justify', transition: '0.2s' }}>
          AKAA 2023
        </h1>
        <h3 style={{ fontSize: '25px', marginTop: '18px', marginLeft: '170px', textAlign: 'justify' }}>
          (October 17 – 27, 2023)
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
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>From October 17 to 27, 2023, Paris will host AKAA, the epitome of contemporary African art – Also Known As Africa. Now, in its eighth edition, it celebrates curatorial innovation and the diverse narratives that shape modern Africa. At AKAA 2023, the spotlight falls on curatorial practice within the art market. Curators and artists will unveil thought-provoking projects, installations, and critical pieces that challenge existing norms. They delve deep into the nuances of curatorial practices, opening windows into the artist’s mind while exploring varied exhibition spaces.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>AKAA - Also Known As Africa - France’s first and leading contemporary art fair centered on African art scenes, stands for a multi-faceted Africa, which transcends borders and whose voices resonate in the four corners of the world, carried by the vision of each artist.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>AKAA 2023 is not just an art fair; it’s a journey through the minds of exceptional artists and curators. As the days unfold, attendees will immerse themselves in a world where every brushstroke tells a story. Additionally, they will be treated to unique artworks and installations that spark a conversation. Don’t miss this opportunity to witness the convergence of talent, innovation, and creativity. AKAA 2023 promises an unforgettable experience, inviting you to explore the intricate tapestry of African artistry shaped by visionary curators and exceptional artists.</p></li>
      </ul>

      <br />
      
    </div>
  );
}

export default PastEvent;

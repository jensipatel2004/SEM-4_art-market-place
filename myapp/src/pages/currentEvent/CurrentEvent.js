import React from 'react';
import './currentEvent.css'; // Ensure to create a CSS file for styles
import { Link } from 'react-router-dom';


function CurrentEvent() {
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
        <img src={require('../images/23.webp')} alt="Event 1" className="image1" />
        <h1 style={{ fontSize: '27px', marginTop: '5px', marginLeft: '170px' }}>
          100 Warhols: An Artsy Exclusive from Revolver Gallery’s Collection
        </h1>
        <h3 style={{ fontSize: '25px', marginTop: '18px', marginLeft: '170px' }}>
          (February 15 – March 15, 2024)
        </h3>
      </div>
      
      <br /><br />

      <ul style={{
        backgroundColor: 'rgb(239, 233, 233)',
        borderRadius: '20px',
        marginLeft: '10px',
        marginRight: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)',
        overflow: 'hidden'
      }}>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>Revolver was established in Beverly Hills in 2012 by entrepreneur Ron Rivlin who began collecting Warhol after learning that a friend realized a 600% return from a Warhol purchased 10 years earlier. Rivlin then started buying "everything he liked." In a 2015 interview, he said, “My rule was, if I would put it up behind my sofa, I would buy it.”</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>Revolver is notable for exclusively dealing Warhol's work. Now, with over 400 original prints and paintings in its collection, Revolver Gallery has the largest gallery-owned collection of Warhol works in the entire world.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>A small gallery at launch, Revolver exhibited Warhol pieces through traveling exhibits such as Andy Warhol: Icons & Symbols. The exhibit opened at L’Ermitage Hotel in Beverly Hills and later moved to the Malibu Lumber Yard Gallery. Other exhibits included Andy Warhol's Ten Prolific Jews, Andy's Socialites and Gotti on Trial.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>In 2017, Revolver moved from Beverly Hills to a larger gallery at Bergamot Station in Santa Monica. Its first exhibit, Andy Warhol Revisited, opened on February 22, 2017, the 30th anniversary of Warhol's death.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>In addition to Warhol's work, the Bergamot location exhibited a work done in collaboration with Keith Haring and a tribute to Warhol by Deborah Kass.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>Revolver subsequently moved to West Hollywood.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>The Revolver collection includes Warhol's 1974 Rolls-Royce Silver Shadow, Andy Mouse (four original screenprints by Keith Haring, depicting Andy Warhol as Mickey Mouse on a dollar bill), Campbell's Tomato Juice Box (a 1964 silkscreen ink and house paint on plywood), and the John Gotti Unique Portfolio (Warhol's four unique screenprints by commission for the cover of Time in 1986).</p></li>
      </ul>

      <br />
      
      
      <div className="container2">     
        <img src={require('../images/24.webp')} alt="Event 2" className="image2" />
        <h1 style={{ fontSize: '30px', marginTop: '5px', marginLeft: '170px', textAlign: 'justify' }}>
          LA Art Show 2024
        </h1>
        <h3 style={{ fontSize: '25px', marginTop: '18px', marginLeft: '170px', textAlign: 'justify' }}>
          (February 8 – March 8, 2024)
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
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>The LA Art Show arrives this month with a spectacular line-up of more than 100 international exhibitor’s galleries and institutions displaying the finest works of art and imagination for five days at the LA Convention Center February 4-18, 2024. With the many multi-cultural influences in the city, Los Angeles has emerged as the epicenter for new artists, collectors, and galleries and the art show continues to offer a one-of-a-kind experience for art enthusiasts.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>A star-studded opening night features award-winning actress Lucy Hale as the Celebrity Host. The LA Art show is proud to support the American Heart Association and will donate a percentage of opening night tickets to their AHA Life Is Why Campaign.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>The massive show – more than 180,000 square feet — has exhibits from more than 100 galleries, museums, and non-profit art organizations from around the world exhibiting painting, sculpture, works on paper, installation, photography, design, video, and performance is divided into six sections.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>The Modern + Contemporary is the largest section of the show and features exhibits showcasing the vast spectrum of contemporary painting, illustration, sculpture and more from galleries in LA, THE Pacific Rim and countries all around the world.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>As part of its civic engagement, the LA Art Show donates 50,000 square feet of space to DIVERSEartLA connecting art institutions to generate dialogues through art. The 2024 program features seven solo projects that explore the intersection of memory, humanity and AI with solo projects using a variety of mediums from video/film and sculptures to a drawing machine and interactive technology.</p></li>
      </ul>

      <br />
      

      <div className="container3">     
        <img src={require('../images/25.webp')} alt="Event 3" className="image3" />
        <h1 style={{ fontSize: '30px', marginTop: '5px', marginLeft: '170px', textAlign: 'justify', transition: '0.2s' }}>
          S.E.A. Focus 2024
        </h1>
        <h3 style={{ fontSize: '25px', marginTop: '18px', marginLeft: '170px', textAlign: 'justify' }}>
          (January 19 – February 18, 2024)
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
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>S.E.A. Focus is a leading showcase and art market hub dedicated to Southeast Asian contemporary art. It aims to bring together a fine curation of established and emerging artistic talents to foster a deeper appreciation of contemporary art in the region. A meeting point for artistic vision and vigour, S.E.A. Focus provides a platform that propels diverse cultural exchanges and provokes dialogue about Southeast Asian art.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>Alongside the curated exhibition at Tanjong Pagar Distripark is an exciting line-up of experiences to engage art lovers from seasoned collectors to curious enthusiasts, including a curated film programme of artists’ video works, stimulating art conversations with industry thought leaders, and exclusive access to art spaces.</p></li>
      </ul>

      <br />
      
      
      <div className="container4">     
        <img src={require('../images/26.webp')} alt="Event 4" className="image4" />
        <h1 style={{ fontSize: '30px', marginTop: '5px', marginLeft: '170px', textAlign: 'justify', transition: '0.2s' }}>
          Art Palm Beach 2024
        </h1>
        <h3 style={{ fontSize: '25px', marginTop: '18px', marginLeft: '170px', textAlign: 'justify' }}>
          (January 18 – February 18, 2024)
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
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>For over 35 years Cavalier Galleries has offered an unparalleled selection of contemporary fine art at premier exhibition spaces in Greenwich, Nantucket, New York, and Palm Beach. The galleries present traditional and representational artwork as well as modern and contemporary works from local and international artists.</p></li>
        <li><p style={{ textAlign: 'justify', marginRight: '20px' }}>Featuring some of the most prestigious contemporary, emerging and modern art galleries, the show will provide a new entrée for collectors to explore and acquire the best of a broad selection of global contemporary and modern art in the vibrant cultural hub of South Florida.</p></li>
      </ul>
      <br />
    </div>
  );
}

export default CurrentEvent;

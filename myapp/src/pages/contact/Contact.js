import React from 'react';
import './contact.css'; // Make sure to create a CSS file for styling
import { Link } from 'react-router-dom';


function Contact() {
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
      <div className="container-fluid" style={{ height: '70%', width: '100%', position: 'relative', marginTop: '30px'}}>
        <div style={{ backgroundColor: '#455b76', height: '80%', width: '100%', float: 'left' }}>
          <img
            src={require('../images/41.avif')} // Adjust path accordingly
            alt="Contact"
            style={{ height: '100%', width: '55%', borderRadius: '50% 0 0 50%', marginLeft: '45%' }}
          />
        </div>
        <h1 id="v1" style={{ fontSize: '70px', marginTop: '170px', marginLeft: '50px' }}>Get In Touch</h1>
        <p id="v2" style={{ fontSize: '16px', marginTop: '220px', marginLeft: '5px' }}>We're friendly and available to chat. Reach out to us anytime</p>
        <p id="v32" style={{ fontSize: '16px', marginTop: '240px', marginLeft: '13px' }}>and we'll happily answer your questions.</p>
      </div>
      
      <div className="container">
        <h2 className="display-1" style={{ textAlign: 'center', fontSize: '50px', top: '0%', fontWeight: 'bold', marginLeft: '290px', marginRight: '-50px', marginTop: '30px' }}>
          Get in touch
        </h2>
        <p style={{ textAlign: 'left', fontSize: '20px', marginTop: '90px', marginBottom: '-20px',  marginLeft: '-350px', marginRight: '300px'}}>
          Let's talk about your project
        </p>
      </div>
      
      <form style={{ marginTop: '40px' }}>
        <table border="6" width="50%" cellSpacing="5" cellPadding="10" align="center" rules="all">
          <tbody>
            <tr align="left">
              <th>Your Name</th>
              <td><input type="text" placeholder="Enter Your Name" /></td>
            </tr>
            <tr align="left">
              <th>Contact Number</th>
              <td><input type="text" placeholder="Enter Your Phone No." /></td>
            </tr>
            <tr align="left">
              <th>Email Id</th>
              <td><input type="email" placeholder="Enter Your Email id" /></td>
            </tr>
            <tr align="left">
              <th>Your Message</th>
              <td><textarea rows="8" cols="15" placeholder="Enter Your Message"></textarea></td>
            </tr>
          </tbody>
        </table>
      </form>

      <div align="center" style={{  marginTop: '40px' }}>
        <button type="button" style={{ backgroundColor: 'blue', color: 'white', height: '50px', width: '150px', fontSize: '20px' }}>
          Submit
        </button>
        <button type="button" style={{ backgroundColor: 'red', color: 'white', height: '50px', width: '150px', fontSize: '20px' }}>
          Reset
        </button>
      </div>
      <br />
      <br />
      <br />

      <div className="container-fluid">
        <div id="d1" style={{ height: '70%' }}>
          <div className="row">
            <div className="col-4" style={{ float: 'left' }}>
              <h1 id="d2">Contact us</h1>
              <br />
              <ul>
                <li id="d3" style={{ fontSize: '15px' }}>Address: 103-A, Shreehari, Shahibaug, Ahmedabad</li>
                <br />
                <li id="d4">Email: abc123@gmail.com</li>
                <br />
                <li id="d5">Phone no.: (+91) 9106694960</li>
              </ul>
            </div>
            <div className="col-4" style={{ float: 'left' }}>
              <br />
              <h4 id="d6">Types of painting</h4>
              <ul>
                <br />
                <li id="d7">Acrylic painting</li>
                <li id="d8">Mandala art</li>
                <li id="d9">Tavdi art</li>
                <li id="d10">Abstract painting</li>
              </ul>
            </div>
            <div className="col-4" style={{ float: 'left' }}>
              <br />
              <h4 id="d11">Events</h4>
              <ul>
                <br />
                <li id="d12">Past</li>
                <li id="d13">Current</li>
                <li id="d14">Upcoming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

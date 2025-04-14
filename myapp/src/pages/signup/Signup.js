import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Signup() {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleSignup = async (e) => {
e.preventDefault();
try { await axios.post('http://localhost:5000/api/signup', {
username,
email,
password
});
alert('User signed up successfully.');
setUsername('');
setEmail('');
setPassword('');
}
catch (error) {
console.error('Error signing up:', error);
alert('An error occurred.');
}
};
    return (
        <>
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
            <div className='row g-0 vh-100 justify-content-center align-items-center mt-2 '>
                <div className='col-10 row g-0 align-items-center border rounded-2'>
                    <div className='col-6'>
                        <h1 className='text-1'>HELLO ART FRIENDS !!</h1>
                        <img src={require('../images/101.png')} alt="computer-logo" className='img-1' />
                    </div>
                    <form className='col-6 py-4 px-3' onSubmit={handleSignup}>
                        <h4 className='signup-title text-center py-2 mb-2'>Sign Up</h4>
                        <div className='form-floating mb-3'>
                            <input type='text' className='form-control' id='username' value={username} placeholder='username' onChange={(e) => { setUsername(e.target.value) }} />
                            
                            <label htmlFor='username'>Username</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type='email' className='form-control' id='email' value={email} placeholder='name@example.com' onChange={(e) => { setEmail(e.target.value) }} />
                            <label htmlFor='email'>Email</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type='password' className='form-control' id='password' value={password} placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
                            <label htmlFor='password'>Password</label>
                        </div>
                        <div className='text-center'>
                            <button className='signup-btn py-3 rounded-3' type="submit" > Sign Up </button>
                        </div>
                        <div className='text-center mt-3'>
                            Already Registered ? <Link to='/login'>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup



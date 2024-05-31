import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import Products from '../../Components/Pruducts';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    try {
      // Make an API call to authenticate the user
      const response = await axios.post('/api/login', user);
      setData(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <Products />
      <div className="single">
        <div className="container">
          <div className="single_row">
            <div className="single_alt">
              <Link to={'/'}>Home</Link> /
            </div>
            <div className="single_alt">
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="login container">
        <form onSubmit={handleSubmit}>
          <div className="login_all">
            <label htmlFor="">Username</label>
            <br />
            <div className="login_row">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
              />
            </div>
            <label htmlFor="">Password</label>
            <br />
            <div className="login_row">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="login_row1">
              <button type="submit">LOGIN</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
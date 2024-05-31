import React from 'react';
import './Footer.scss';
import logo from '../../assets/rasmlar/logo.png';
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import image2 from '../../assets/rasmlar/r6.png';

const links = [
  {
    id: 1,
    title: 'Information',
    links: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"]
  },
  {
    id: 2,
    title: 'Service',
    links: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"]
  },
  {
    id: 3,
    title: 'My Account',
    links: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"]
  },
  {
    id: 4,
    title: 'Our Offers',
    links: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"]
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footir_all">
          <div className="footir_row">
            <img src={logo} alt="Logo" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
          </div>
          <div className="footir_row">
            <h1>Follow Us</h1>
            <h5>Since the 1500s, when an unknown printer took a galley of type and scrambled.</h5>
            <div className="icons">
              <RiFacebookFill />
              <FaTwitter />
            </div>
          </div>
          <div className="footir_row">
            <h1>Contact Us</h1>
            <h4>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</h4>
          </div>
        </div>
        <div className="footir_alt">
          {links.map((link) => (
            <div className="footir_well" key={link.id}>
              <h1>{link.title}</h1>
              <ul>
                {link.links.map((linkText, index) => (
                  <li key={index}>
                    <a href="">{linkText}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footir_bottom">
          <div className="footir_bottom_lift">
            <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
          </div>
          <div className="footir_bottom_lift">
            <img src={image2} alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
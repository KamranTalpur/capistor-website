import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/Images/Logo.webp';

const Navbar = () => {
  return (
   <>
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
      <a href="https://www.linkedin.com/in/shoaib-mustafa-794a0215a/" target="_blank" rel="noopener noreferrer">
        <button className={styles.contactButton}>Contact Us</button>
      </a>
    </nav>
    <hr className={styles.divider} />
   </>
  );
}

export default Navbar;

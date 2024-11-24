import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ username, onLogout }) => {
  return (
    <nav style={styles.navbar}>
      <Link to="/dashboard" style={styles.link}>
        Home
      </Link>
      <h1 style={styles.title}>Employee Management System</h1>
      <div style={styles.userSection}>
        {username ? (
          <>
            <span style={styles.username}>Welcome, {username}</span>

            <Link to="/employee-form" style={styles.link}>
              Employee Form
            </Link>
            <button onClick={onLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/" style={styles.loginLink}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
  },
  title: {
    margin: 0,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  username: {
    marginRight: '20px',
  },
  logoutBtn: {
    backgroundColor: 'white',
    color: '#007bff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  loginLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '20px',
    padding: '5px 10px',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
};

export default Navbar;

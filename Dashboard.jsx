import React from 'react';
// import EmployeeForm from './EmployeeForm';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the ADMIN Dashboard</h1>
      {/* <EmployeeForm /> */}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  // card: {
  //   backgroundColor: 'white',
  //   padding: '15px',
  //   margin: '10px 0',
  //   borderRadius: '5px',
  //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  // },
};

export default Dashboard;

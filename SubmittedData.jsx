import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SubmittedData = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || { formData: {} };

  // State for the editable form
  const [editableData, setEditableData] = useState(formData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCourseChange = (e) => {
    const { name, checked } = e.target;
    setEditableData((prevData) => ({
      ...prevData,
      courses: {
        ...prevData.courses,
        [name]: checked,
      },
    }));
  };

  const handleUpdate = () => {
    // Handle the update logic here
    console.log('Updated Data:', editableData);
    // You can navigate back or show a success message
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log('Data Deleted:', editableData);
    // Redirect or show a confirmation message
    navigate('/');
  };

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
      backgroundColor: '#f2f2f2',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
    },
    image: {
      width: '100px',
      height: 'auto',
    },
    button: {
      margin: '5px',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
    cancelButton: {
      backgroundColor: '#f44336',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Submitted Employee Data</h2>
      {Object.keys(formData).length === 0 ? (
        <p>No data submitted.</p>
      ) : (
        <div>
          {isEditing ? (
            <div>
              <h3>Edit Employee Data</h3>
              <input
                type="text"
                name="name"
                value={editableData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={editableData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                type="tel"
                name="phone"
                value={editableData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
              <input
                type="text"
                name="designation"
                value={editableData.designation}
                onChange={handleChange}
                placeholder="Designation"
                required
              />
              <select
                name="gender"
                value={editableData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label>
                <input
                  type="checkbox"
                  name="course1"
                  checked={editableData.courses.course1 || false}
                  onChange={handleCourseChange}
                />{' '}
                Course 1
              </label>
              <label>
                <input
                  type="checkbox"
                  name="course2"
                  checked={editableData.courses.course2 || false}
                  onChange={handleCourseChange}
                />{' '}
                Course 2
              </label>
              <button style={styles.button} onClick={handleUpdate}>
                Update
              </button>
              <button
                style={{ ...styles.button, ...styles.cancelButton }}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Phone</th>
                    <th style={styles.th}>Designation</th>
                    <th style={styles.th}>Gender</th>
                    <th style={styles.th}>Courses</th>
                    <th style={styles.th}>Image</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.td}>{formData.name}</td>
                    <td style={styles.td}>{formData.email}</td>
                    <td style={styles.td}>{formData.phone}</td>
                    <td style={styles.td}>{formData.designation}</td>
                    <td style={styles.td}>{formData.gender}</td>
                    <td style={styles.td}>
                      {Object.keys(formData.courses)
                        .filter((course) => formData.courses[course])
                        .join(', ') || 'None'}
                    </td>
                    <td style={styles.td}>
                      {formData.image ? (
                        <img
                          src={URL.createObjectURL(formData.image)}
                          alt="Uploaded"
                          style={styles.image}
                        />
                      ) : (
                        'No image uploaded'
                      )}
                    </td>
                    <td style={styles.td}>
                      <button
                        style={styles.button}
                        onClick={() => setIsEditing(true)}
                      >
                        Update
                      </button>
                      <button
                        style={{ ...styles.button, ...styles.cancelButton }}
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubmittedData;

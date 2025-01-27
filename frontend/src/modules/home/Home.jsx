import React from 'react';

const projects = [
  { title: 'Cover Letter', lastModified: '13 days ago' },
  { title: 'Ayush Resume', lastModified: '2 months ago' },
  { title: 'Sumit Resume', lastModified: '8 months ago' },
];

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>All Projects</h1>
        <button style={styles.createNewButton}>New</button>
      </header>
      <div style={styles.searchContainer}>
        <input type='text' placeholder='Search in all projects...' style={styles.searchInput} />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}></th>
            <th style={styles.tableHeader}>Title</th>
            <th style={styles.tableHeader}>Last Modified</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>
                <input type='checkbox' />
              </td>
              <td style={styles.tableCell}>{project.title}</td>
              <td style={styles.tableCell}>{project.lastModified}</td>
              <td style={styles.tableCell}>
                <button style={styles.actionButton}>View</button>
                <button style={styles.actionButton}>Download</button>
                <button style={styles.actionButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer style={styles.footer}>
        Showing {projects.length} out of {projects.length} projects.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  createNewButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 15px',
    cursor: 'pointer',
  },
  searchContainer: {
    margin: '20px 0',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    borderBottom: '2px solid #ddd',
    textAlign: 'left',
    padding: '10px',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '10px',
  },
  actionButton: {
    marginRight: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#555',
  },
};

export default Home;

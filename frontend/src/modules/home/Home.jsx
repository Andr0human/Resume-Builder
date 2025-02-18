import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const projects = [
  { title: 'Ayush Resume (MERN)', lastModified: '25 days ago' },
  { title: 'Cover Letter', lastModified: 'a month ago' },
  { title: 'Ayush Resume', lastModified: '3 months ago' },
  { title: 'Sumit Resume', lastModified: '9 months ago' },
];

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setProjectName('');
  };

  const handleCreate = () => {
    // TODO: Add project creation logic here
    console.log('Creating project:', projectName);
    navigate('/builder');
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={styles.title}>All Projects</h1>
          <div style={styles.headerActions}>
            <button style={styles.newProjectButton} onClick={handleOpen}>
              <span style={styles.plusIcon}>+</span>
              New Project
            </button>
            <button style={styles.signOutButton} onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        </div>
        <div style={styles.searchContainer}>
          <input type='text' placeholder='Search in all projects...' style={styles.searchInput} />
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.tableHeader, width: '50%' }}>Title</th>
              <th style={{ ...styles.tableHeader, width: '25%' }}>Last Modified</th>
              <th style={{ ...styles.tableHeader, width: '25%' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr 
                key={index} 
                style={{
                  ...styles.tableRow,
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td style={{ ...styles.tableCell, width: '50%' }}>{project.title}</td>
                <td style={{ ...styles.tableCell, width: '25%' }}>{project.lastModified}</td>
                <td style={{ ...styles.tableCell, width: '25%' }}>
                  <button style={styles.iconButton}>📋</button>
                  <button style={styles.iconButton}>⬇️</button>
                  <button style={styles.iconButton}>🔄</button>
                  <button style={styles.iconButton}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer style={styles.footer}>
          Showing {projects.length} out of {projects.length} projects.
        </footer>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="new-project-modal"
          BackdropProps={{
            style: { backgroundColor: 'rgba(0, 0, 0, 0.8)' }
          }}
        >
          <Box sx={styles.modal}>
            <h2 style={styles.modalTitle}>New Project</h2>
            <TextField
              fullWidth
              label="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              variant="outlined"
              sx={{ 
                mt: 3,
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#00a83f',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00a83f',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#00a83f',
                }
              }}
            />
            <Box sx={styles.modalActions}>
              <Button 
                onClick={handleClose}
                sx={{ 
                  mr: 2,
                  color: '#666',
                  borderColor: '#666',
                  '&:hover': {
                    borderColor: '#444',
                    color: '#444',
                  }
                }}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCreate}
                variant="contained"
                sx={{
                  bgcolor: '#00a83f',
                  '&:hover': {
                    bgcolor: '#008f36',
                  },
                  '&.Mui-disabled': {
                    bgcolor: '#cccccc',
                  }
                }}
                disabled={!projectName.trim()}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  mainContent: {
    padding: '0',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 32px',
    backgroundColor: '#1a1c27',
    marginBottom: '32px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  title: {
    margin: 0,
    fontSize: '26px',
    fontWeight: '500',
    color: 'white',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  newProjectButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#00a83f',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    '&:hover': {
      backgroundColor: '#008f36',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
  },
  plusIcon: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  searchContainer: {
    padding: '0 32px',
    marginBottom: '24px',
  },
  searchInput: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '15px',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    '&:focus': {
      outline: 'none',
      borderColor: '#00a83f',
      boxShadow: '0 2px 8px rgba(0,168,63,0.1)',
    },
  },
  table: {
    width: 'calc(100% - 64px)',
    margin: '0 32px',
    borderCollapse: 'separate',
    borderSpacing: '0',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  tableHeader: {
    textAlign: 'left',
    padding: '16px',
    borderBottom: '1px solid #eee',
    backgroundColor: '#f8f9fa',
    color: '#444',
    fontWeight: '600',
    fontSize: '14px',
  },
  tableRow: {
    '&:hover': {
      backgroundColor: '#f8f9fa',
    },
  },
  tableCell: {
    padding: '16px',
    borderBottom: '1px solid #eee',
    color: '#333',
    fontSize: '14px',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '6px',
    marginRight: '6px',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#f0f0f0',
      transform: 'translateY(-1px)',
    },
  },
  footer: {
    margin: '24px 32px',
    textAlign: 'center',
    color: '#666',
    fontSize: '14px',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    p: 4,
    outline: 'none',
    border: 'none',
  },
  modalTitle: {
    margin: 0,
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    mt: 4,
    pt: 3,
    borderTop: '1px solid #eee',
  },
  signOutButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '6px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'rgba(255,255,255,0.5)',
    },
  },
};

export default Home;

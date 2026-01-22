/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import { Visibility as VisibilityIcon, Edit as EditIcon, Delete as DeleteIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import ViewArtifactModal from './ViewArtifact';
import AddArtifact from './AddArtifact/AddArtifact';
import EditArtifact from './Edit/EditArtifact';

const Example = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);
  const [modalOpen, setModalOpen] = useState({ type: '', open: false });
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/artifacts');
        console.log("response",response.data); // Assuming response.data is an array of artifacts
        setData(response.data); // Assuming response.data is an array of artifacts
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle menu open and close
  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setCurrentRow(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'action',
        header: 'Actions',
        enableEditing: false,
        size: 100,
        Cell: ({ row }) => (
          <IconButton onClick={(event) => handleClick(event, row.original)}>
            <MoreVertIcon />
          </IconButton>
        )
      },
      {
        accessorKey: 'id',
        header: 'Id',
        enableEditing: false,
        size: 80
      },
      {
        accessorKey: 'name',
        header: 'Name'
      },
      {
        accessorKey: 'itemNo',
        header: 'Item No'
      },
      {
        accessorKey: 'serialNo',
        header: 'Serial No'
      },
      {
        accessorKey: 'description',
        header: 'Description'
      },
      {
        accessorKey: 'madeOf',
        header: 'Made Of'
      },
      {
        accessorKey: 'age',
        header: 'Age'
      },
      {
        accessorKey: 'shelfNo',
        header: 'Shelf No'
      },
      {
        accessorKey: 'hallNo',
        header: 'Hall No'
      }
    ],
    []
  );

  // Define table instance
  const table = useMaterialReactTable({
    columns,
    data, // Use the fetched data
    state: { isLoading: loading } // Display loading indicator while fetching data
  });

  // Handle view, edit, delete actions
  const handleView = () => {
    setModalOpen({ type: 'view', open: true });
    handleClose();
  };

  const handleEdit = () => {
    if (currentRow) {
      setEditModalOpen(true);
    } else {
      console.error('No row selected for editing');
    }
    handleClose();
  };

  const handleDelete = () => {
    alert('Deleting:', currentRow);
    handleClose();
  };

  const handleCloseModal = () => {
    setModalOpen({ type: '', open: false });
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  const handleOpenAddModal = () => {
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  // Save edited artifact
  const handleSaveEdit = (updatedArtifact) => {
    console.log('Saving edited artifact:', updatedArtifact);
    // Here you should update your data source
    handleCloseEditModal();
  };

  return (
    <>
      {/* Button to add a new artifact */}
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleOpenAddModal}>
          Add New Artifact
        </Button>
      </Box>

      <MaterialReactTable table={table} />

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleView}>
          <VisibilityIcon sx={{ marginRight: 1 }} />
          View
        </MenuItem>
        <MenuItem onClick={handleEdit}>
          <EditIcon sx={{ marginRight: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <DeleteIcon sx={{ marginRight: 1 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* ViewArtifactModal to view details of the selected artifact */}
      <ViewArtifactModal open={modalOpen.open && modalOpen.type === 'view'} handleClose={handleCloseModal} artifact={currentRow} />

      {/* AddArtifactModal to add a new artifact */}
      <AddArtifact open={addModalOpen} handleClose={handleCloseAddModal} />

      {/* EditArtifactModal to edit the selected artifact */}
      <EditArtifact open={editModalOpen} handleClose={handleCloseEditModal} artifact={currentRow} onSave={handleSaveEdit} />
    </>
  );
};

export default Example;

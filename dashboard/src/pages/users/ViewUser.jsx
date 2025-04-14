// import React, { useState, useMemo, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Button,
//   IconButton,
//   Menu,
//   MenuItem,
//   Modal,
//   TextField,
//   Typography,
//   lighten,
// } from '@mui/material';
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
//   MRT_GlobalFilterTextField,
//   MRT_ToggleFiltersButton,
// } from 'material-react-table';
// import { MoreVert as MoreVertIcon } from '@mui/icons-material';

// // Backend API URL
// const API_URL = 'http://localhost:8000/api/User/';

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [openModal, setOpenModal] = useState(false);
//   const [formValues, setFormValues] = useState({
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: '',
//     state: '',
//   });

//   // Fetch users from backend
//   useEffect(() => {
//     const fetchUsers = async () => {
//       console.log('first')
//       try {
//         const response = await axios.get(API_URL);
//         console.log("Users", response.data)
//         setUsers(response.data.users); // Assuming response contains an array of users
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: 'firstName',
//         header: 'First Name',
//         size: 150,
//       },
//       {
//         accessorKey: 'lastName',
//         header: 'Last Name',
//         size: 150,
//       },
//       {
//         accessorKey: 'address',
//         header: 'Address',
//         size: 250,
//       },
//       {
//         accessorKey: 'city',
//         header: 'City',
//         size: 150,
//       },
//       {
//         accessorKey: 'state',
//         header: 'State',
//         size: 150,
//       },
//       {
//         id: 'actions',
//         header: 'Actions',
//         size: 150,
//         Cell: ({ row }) => (
//           <>
//             <IconButton
//               onClick={(event) => {
//                 setAnchorEl(event.currentTarget);
//                 setSelectedUser(row.original);
//               }}
//             >
//               <MoreVertIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl) && selectedUser?.firstName === row.original.firstName}
//               onClose={() => setAnchorEl(null)}
//             >
//               <MenuItem
//                 onClick={() => {
//                   setFormValues(selectedUser);
//                   setIsEditing(true);
//                   setOpenModal(true);
//                   setAnchorEl(null);
//                 }}
//               >
//                 Edit
//               </MenuItem>
//               <MenuItem
//                 onClick={async () => {
//                   try {
//                     await axios.delete(`${API_URL}${row.original._id}`);
//                     setUsers(users.filter(user => user._id !== row.original._id));
//                   } catch (error) {
//                     console.error('Error deleting user:', error);
//                   }
//                   setAnchorEl(null);
//                 }}
//               >
//                 Delete
//               </MenuItem>
//             </Menu>
//           </>
//         ),
//       },
//     ],
//     [anchorEl, selectedUser, users],
//   );

//   const table = useMaterialReactTable({
//     columns,
//     data: users,
//     enableColumnFilterModes: true,
//     enableColumnOrdering: true,
//     enableRowSelection: true,
//     initialState: {
//       showColumnFilters: true,
//       showGlobalFilter: true,
//     },
//     muiTableBodyCellProps: {
//       sx: {
//         backgroundColor: '#f5f5f5',
//         borderBottom: '1px solid #e0e0e0',
//       },
//     },
//     muiTableBodyRowProps: {
//       sx: {
//         '&:nth-of-type(odd)': {
//           backgroundColor: '#ffffff',
//         },
//         '&:hover': {
//           backgroundColor: '#f1f1f1',
//         },
//       },
//     },
//     muiTableHeadCellProps: {
//       sx: {
//         backgroundColor: '#ffffff',
//         color: '#000000',
//         fontWeight: 'bold',
//         textTransform: 'uppercase',
//       },
//     },
//     muiTableContainerProps: {
//       sx: {
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         borderRadius: '8px',
//         overflow: 'auto',
//         maxWidth: '100%',
//       },
//     },
//     renderTopToolbar: ({ table }) => (
//       <Box
//         sx={(theme) => ({
//           backgroundColor: lighten(theme.palette.background.default, 0.05),
//           display: 'flex',
//           gap: '0.5rem',
//           p: '8px',
//           justifyContent: 'space-between',
//         })}
//       >
//         <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
//           <MRT_GlobalFilterTextField table={table} />
//           <MRT_ToggleFiltersButton table={table} />
//         </Box>
//       </Box>
//     ),
//   });

//   const handleAddUser = () => {
//     setIsEditing(false);
//     setFormValues({ firstName: '', lastName: '', address: '', city: '', state: '' });
//     setOpenModal(true);
//   };

//   const handleFormSubmit = async () => {
//     if (isEditing) {
//       // Update user via backend
//       try {
//         await axios.put(`${API_URL}${formValues._id}`, formValues);
//         setUsers(users.map(user => (user._id === formValues._id ? formValues : user)));
//       } catch (error) {
//         console.error('Error updating user:', error);
//       }
//     } else {
//       // Add new user via backend
//       try {
//         const response = await axios.post(API_URL, formValues);
//         setUsers([...users, response.data.user]);
//       } catch (error) {
//         console.error('Error adding user:', error);
//       }
//     }
//     setOpenModal(false);
//   };

//   return (
//     <>
//       <Button variant="contained" color="primary" sx={{ marginBottom: 2 }} onClick={handleAddUser}>
//         Add New User
//       </Button>

//       <Box sx={{ padding: 4, backgroundColor: '#f0f2f5' }}>
//         <Box sx={{ overflowX: 'auto' }}>
//           <MaterialReactTable table={table} />
//         </Box>

//         {/* Modal for Adding/Editing Users */}
//         <Modal open={openModal} onClose={() => setOpenModal(false)}>
//           <Box
//             sx={{
//               padding: 4,
//               backgroundColor: 'white',
//               margin: 'auto',
//               marginTop: '1%',
//               width: 400,
//               borderRadius: '8px',
//               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <Typography variant="h6" gutterBottom>
//               {isEditing ? 'Edit User' : 'Add New User'}
//             </Typography>
//             <form>
//               <TextField
//                 label="First Name"
//                 value={formValues.firstName}
//                 onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Last Name"
//                 value={formValues.lastName}
//                 onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Address"
//                 value={formValues.address}
//                 onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="City"
//                 value={formValues.city}
//                 onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="State"
//                 value={formValues.state}
//                 onChange={(e) => setFormValues({ ...formValues, state: e.target.value })}
//                 fullWidth
//                 margin="normal"
//               />
//               <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleFormSubmit}>
//                 {isEditing ? 'Save Changes' : 'Add User'}
//               </Button>
//             </form>
//           </Box>
//         </Modal>
//       </Box>
//     </>
//   );
// };

// export default UserTable;

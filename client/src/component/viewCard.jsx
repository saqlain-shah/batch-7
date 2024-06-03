// import React from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

// const CartDialog = ({ open, handleClose, cartItems, totalPrice }) => {
//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogContent>
//         <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 0, top: 0 }}>
//           <CloseIcon />
//         </IconButton>
//         <Typography variant="h6" textAlign="center">Your Cart</Typography>
//         {cartItems.map((item, index) => (
//           <div key={index}>
//             <img src={item.image} alt="product" width="80" />
//             <Typography>{item.category}</Typography>
//             <Typography>Color: {item.color}</Typography>
//             {/* Add more details like size, price, etc. */}
//           </div>
//         ))}
//         <Typography>Total Price: ${totalPrice}</Typography>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CartDialog;

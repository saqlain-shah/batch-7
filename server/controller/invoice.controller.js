import Invoice from '../model/invoice.model.js';
import Product from '../model/product.model.js';
import { 
  getProductIds, 
  getUserId, 
  generateInvoiceNumber, 
  calculateDueDate } from "../services/service.invoice.js"
// export const addInvoice = async (req, res, next) => {
//   try {
//     const { items, quantities } = req.body;

//     let subtotal = 0;
//     for (let i = 0; i < items.length; i++) {
//       const product = await Product.findById(items[i]);
//       subtotal += product.price * quantities[i];
//     }

//     const total = subtotal; 

//     const invoice = new Invoice({
//       ...req.body,
//       subtotal,
//       total
//     });

//     await invoice.save();
//     res.status(201).json(invoice);
//   } catch (error) {
//     next(error);
//   }
// };

export const createInvoice = async (req, res) => {
  try {
    const { cartItems, customerDetails, totalPrice } = req.body;

    const userId = await getUserId(customerDetails.email); 
    const productIds = await getProductIds(cartItems); 
    const quantities = cartItems.map(item => 1); 

    const invoiceData = {
      invoiceNumber: generateInvoiceNumber(), 
      issueDate: new Date(),
      dueDate: calculateDueDate(), 
      customer: userId,
      items: productIds,
      quantities: quantities,
      subtotal: totalPrice, 
      total: totalPrice, 
      paymentStatus: "unpaid", 
      notes: "",
    };

    // Create the invoice
    const invoice = new Invoice(invoiceData);
    await invoice.save();
    console.log("Response", invoice)

    res.status(201).json({ success: true,message:"Successful", invoice });
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateInvoice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { items, quantities } = req.body;

    let subtotal = 0;
    if (items && quantities) {
      for (let i = 0; i < items.length; i++) {
        const product = await Product.findById(items[i]);
        subtotal += product.price * quantities[i];
      }
    }

    const total = subtotal; 

    const invoice = await Invoice.findByIdAndUpdate(
      id,
      { ...req.body, subtotal, total, updatedAt: Date.now() },
      { new: true }
    );

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.status(200).json(invoice);
  } catch (error) {
    next(error);
  }
};

export const deleteInvoice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByIdAndDelete(id);
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const viewSingleInvoice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findById(id)
      .populate('customer', 'name email') 
      .populate('items', 'name price'); 

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.status(200).json(invoice);
  } catch (error) {
    next(error);
  }
};

export const viewAllInvoice = async (req, res, next) => {
  try {
    const invoices = await Invoice.find()
      .populate('customer') 
      .populate('items'); 

    res.status(200).json(invoices);
  } catch (error) {
    next(error);
  }
};

















// export const addInvoice = async (req, res, next) => {
   
// };

// export const updateInvoice = async (req, res, next) => {
 
// };

// export const deleteInvoice = async (req, res, next) => {
 
// };

// export const viewSingleInvoice = async (req, res, next) => {
 
// };

// export const viewAllInvoice = async (req, res, next) => {
 
// };
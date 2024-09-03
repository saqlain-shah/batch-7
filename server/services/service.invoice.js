
import User from "../model/user.model.js";
import Product from "../model/product.model.js";

export const getUserId = async (email) => {
    try {
        const user = await User.findOne({ email: email }).exec();
        if (user) {
            return user._id;
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        throw new Error(`Error fetching user ID: ${error.message}`);
    }
};



export const getProductIds = async (cartItems) => {
    try {
        const productIds = [];

        for (let item of cartItems) {
            // Construct the query object dynamically based on available item attributes
            const query = {
                name: item.name,
                // category: item.category,
                // color: item.color,
                // size: item.size,
            };
            // Search for the product in the database
            const product = await Product.findOne(query).exec();
            if (product) {
                productIds.push(product._id);
            } else {
                throw new Error(`Product not found for item: ${item.name}`);
            }
        }

        return productIds;
    } catch (error) {
        throw new Error(`Error fetching product IDs: ${error.message}`);
    }
};


export const generateInvoiceNumber = () => {
    const prefix = "INV"; // Prefix for the invoice number
    const timestamp = Date.now(); // Current timestamp

    return `${prefix}-${timestamp}`;
};


export const calculateDueDate = () => {
    const issueDate = new Date();
    const dueDate = new Date(issueDate);
    dueDate.setDate(issueDate.getDate() + 30); // Set due date 30 days from now

    return dueDate;
};

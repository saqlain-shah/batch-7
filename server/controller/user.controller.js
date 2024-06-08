
import  User from '../model/user.model.js'


export const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.userId; 
    // const { error } = validateUpdateUser(req.body); 
    // if (error) return res.status(400).send(error.details[0].message);  
    
    const user = await User.findById(userId);

    if (!user) return res.status(404).send('User not found');
    user.set(req.body); 
    await user.save();
    res.status(200).json({ message: 'User Data Updated', Data : user, });

  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Internal Server Error', Error_Info : error.message });
};
}

export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId; 
    const user = await User.findByIdAndDelete(userId);

    if (!user) return res.status(404).send('User not found');
    res.status(200).json({ message: 'User deleted successfully', Data : user, });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Internal Server Error', Error_Info : error.message });
  }
};


export const viewSingleUser = async (req, res, next) => {
  try {
    const userId = req.params.userId; 
    const user = await User.findById(userId); 

    if (!user) return res.status(404).send('User not found');
    res.status(200).json({ message: 'User  Details', Data : user, });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', Error_Info : error.message });
  }
};


export const viewAllUser = async (req, res, next) => {
  try {
    console.log("ViewAllUser Endpoint Triggered")
    const query = {};
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10;
    const sort = req.query.sort; 

    if (req.query.username) {
      query.username = new RegExp(req.query.username, 'i'); 
    }

    if (req.query.role) {
      query.roles = req.query.role;
    }

    const users = await User.find(query)
      .sort(sort) 
      .skip((page - 1) * limit) 
      .limit(limit);

    const totalUsers = await User.countDocuments(query);
    res.send({
      message: 'User  Details',
      users,
      pagination: {
        page,
        limit,
        totalPages: Math.ceil(totalUsers / limit),
        totalUsers,
      },
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Internal Server Error', Error_Info : error.message });
  }
};



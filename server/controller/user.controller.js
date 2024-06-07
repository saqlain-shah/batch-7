import { User } from "../model/user.model";
export const AddUser=async (req, res, next) => {
try {
  let {username,email,password}=req.body;
  let IsUser= await User.findOne({email})
  if(IsUser){
    return res.status(400).send("user is already exist")
  }
  await User.create({username,email,password})
  res.status(200).send("user registered successfully")
} catch (error) {
  res.status(404).send("error creating user")
}
}
  export const updateUser = async (req, res, next) => {
   
  };

  export const deleteUser = async (req, res, next) => {
   
  };

  export const viewSingleUser = async (req, res, next) => {
   
  };

  export const viewAllUser = async (req, res, next) => {
   
  };
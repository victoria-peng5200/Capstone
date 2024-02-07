import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (search, page) => {
const regex = new RegExp(search, "i");
const ITEM_PER_PAGE = 10;
  try {
    connectToDB();
    const count = await User.find({ name: { $regex: regex } }).countDocuments();
    const users = await User.find({ name: { $regex: regex } }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE);
    return {users, count};
} catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

import { connectToDb } from "@/utils/db";
import User from "@/models/user";

export const PUT = async (request) => {
  try {
    const {_id, name, sector, terms } = await request.json();
    await connectToDb();
    // Find the user by _id
    const existingUser = await User.findById(_id);

    if (!existingUser) {
      return new Response("User not found", { status: 404 });
    }
    // Update user properties
    existingUser.name = name;
    existingUser.sector = sector;
    existingUser.terms = terms;

    // Save the updated user
    const updatedUser = await existingUser.save();
    return new Response(JSON.stringify(updatedUser), { status: 201 });
  } catch (error) {
    console.log("db error", error)
    return new Response("Failed to update user data", { status: 500 });
  }
};

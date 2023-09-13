import { connectToDb } from "@/utils/db";
import User from "@/models/user";

export const POST = async (request) => {
  try {
    const { name, sector, terms } = await request.json();
    await connectToDb();
    const newUser = new User({ name, sector, terms  });
    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.log("db error", error)
    return new Response("Failed to create user data", { status: 500 });
  }
};

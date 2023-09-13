import { connectToDb } from "@/utils/db";
import Sector from "@/models/sector";

export const GET = async (req, res) => {
  try {
      await connectToDb();
      const sectors = await Sector.find({})

      return new Response(JSON.stringify(sectors), { status: 201 })
  } catch (error) {
      return new Response("Failed to find all sectors", { status: 500 });
  }
}
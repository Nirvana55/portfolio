import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

const getLinkPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("link");
    const post = db.collection("link").find({}).limit(20).toArray();
    res.status(200).json({ message: "Post Fetched Successfully.", data: post });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getLinkPost;

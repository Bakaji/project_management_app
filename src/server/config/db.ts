import mongoose, { connect } from "mongoose";

const connectDb = async () => {
  const conn = await connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

export { connectDb };

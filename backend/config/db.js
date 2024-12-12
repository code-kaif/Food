import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(`${process.env.DB_URL}/Food-Del`)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));
};

export default connectDb;

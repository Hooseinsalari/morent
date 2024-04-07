import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }

    await mongoose.connect(`${process.env.MONGO_DB_URI}`);
    console.log("Data base connected Successfully");
  } catch (error: any) {
    console.log("Data base connection faild", error.message);
  }
};

export default connectToDB;

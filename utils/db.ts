import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }

    await mongoose.connect("mongodb://0.0.0.0:27017/morent");
    console.log("Data base connected Successfully");
  } catch (error: any) {
    console.log("Data base connection faild", error.message);
  }
};

export default connectToDB;

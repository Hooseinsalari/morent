import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }

    await mongoose.connect(
      "mongodb+srv://secondhossein:CM6Wzi0VQgA7Il1D@cluster0.y5sv7gi.mongodb.net/"
    );
    console.log("Data base connected Successfully");
  } catch (error: any) {
    console.log("Data base connection faild", error.message);
  }
};

export default connectToDB;

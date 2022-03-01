const mongoose = require("mongoose");
const connectToDatabase = async () => {
  const connectionString = process.env.DB_URL;
  try {
    await mongoose.connect(connectionString);
    console.log("Successfully connected to database");
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

connectToDatabase();

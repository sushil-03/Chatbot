const mongoose = require("mongoose");
const connectToDatabase = async () => {
  const connectionString = `mongodb+srv://Chatbot1:sushil@cluster0.zrsao.mongodb.net/chatbot?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to database");
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

connectToDatabase();

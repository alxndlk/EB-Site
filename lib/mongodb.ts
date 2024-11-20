import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('Переменная MONGODB_URI не найдена в файле .env');
    }

    await mongoose.connect(uri);
  } catch (error) {
    console.error('Error while connecting to MongoDB:', error, process.env.MONGODB_URI);
  }
};

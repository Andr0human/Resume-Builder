import mongoose from 'mongoose';
import logger from './logger';

class Database {
  // eslint-disable-next-line no-use-before-define
  private static instance: Database;

  mongoUrl: string;

  private constructor(url: string) {
    this.mongoUrl = url;
  }

  public static getInstance(mongoUrl: string): Database {
    if (!Database.instance) {
      Database.instance = new Database(mongoUrl);
    }

    return Database.instance;
  }

  connect = async (): Promise<void> => {
    try {
      await mongoose.connect(this.mongoUrl);
      logger.info(`Connected to MongoDB database ${this.mongoUrl}`);
    } catch (error: unknown) {
      logger.error('MongoDB database connection error', error);
    }
  };

  disconnect = async (): Promise<void> => {
    try {
      await mongoose.disconnect();
      logger.info(`Disconnected from MongoDB database ${this.mongoUrl}`);
    } catch (error: unknown) {
      logger.error('MongoDB database disconnection error', error);
    }
  };
}

export default Database;

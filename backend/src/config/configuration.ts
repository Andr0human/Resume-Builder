import dotenv from 'dotenv';
import IServerConfig from './IConfig';

dotenv.config();

// Load configuration from .env file
const serverConfig: IServerConfig = Object.freeze({
  devMode: process.env.DEV_MODE ?? 'development',
  port: parseInt(process.env.PORT ?? '8080', 10),
  jwtSecret: process.env.JWT_SECRET ?? '',
  mongoUrl: process.env.MONGO_URL ?? '',
  morganLogLevel: process.env.MORGAN_LOGLEVEL ?? 'dev'
});

export default serverConfig;

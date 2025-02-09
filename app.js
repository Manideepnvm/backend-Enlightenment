import express from 'express'; // ✅ Use import instead of require
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import { PORT } from './config/env.js' ; // ✅ Import the PORT variable from the env.js file

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API');
});

const hostname = 'localhost';

app.listen(PORT, hostname, () => {
  console.log(`Subscription Tracker API is running on http://${hostname}:${PORT}`);
});

export default app;

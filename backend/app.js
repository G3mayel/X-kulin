import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Ekskulin API');
  });

  app.use(cors({
    credentials: true,
    origin: '', 
 })); 
  
  app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${ PORT }`);
    await connectToDatabase();
  });
  
  export default app;
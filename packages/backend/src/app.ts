import express from 'express';
import { userRoutes } from './infrastructure/http/routes/userRoutes';


const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);


// Error handling middleware
// app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.error(err);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
import express from 'express';
import { GetAllUsersUseCase } from '../../../application/use_cases/GetAllUsersUseCase';
import { UserRepository } from '../../db/repositories/UserRepository';
import { UserController } from '../controllers/userController';

const userRoutes = express.Router();
const userRepository = new UserRepository(); 
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository); 
const userController = new UserController(getAllUsersUseCase); 


userRoutes.get('/users', userController.getAllUsers);
// router.get('/users/:id', userController.getUserById);
// router.post('/users', userController.createUser);
// router.put('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

export { userRoutes };
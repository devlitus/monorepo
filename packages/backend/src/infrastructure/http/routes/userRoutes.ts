import {Router} from 'express';
import { UserRepository } from '../../db/repositories/UserRepository';
import { GetAllUsersUseCase } from '../../../application/use_cases/GetAllUsersUseCase';
import { UserController } from '../controllers/userController';

const userRoutes = Router();
const userRepository = new UserRepository();
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const userController = new UserController(getAllUsersUseCase);


userRoutes.get('/users', (_, res) => {
  userController.getAllUsers().then((users) => {
    console.log(users);
    res.json({ message: 'Get all users', users });
  });
});

export { userRoutes };
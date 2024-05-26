import { GetAllUsersUseCase } from "../../../application/use_cases/GetAllUsersUseCase";

export class UserController {
  private getAllUsersUseCase: GetAllUsersUseCase;

  constructor(getAllUsersUseCase: GetAllUsersUseCase) {
    this.getAllUsersUseCase = getAllUsersUseCase;
  }

  async getAllUsers() {
    try {
      const user  = await this.getAllUsersUseCase.execute();
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  }
}
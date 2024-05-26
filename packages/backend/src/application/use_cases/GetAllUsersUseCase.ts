import { UserRepository } from '../../infrastructure/db/repositories/UserRepository';

export class GetAllUsersUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    return this.userRepository.getAllUsers();
  }
}
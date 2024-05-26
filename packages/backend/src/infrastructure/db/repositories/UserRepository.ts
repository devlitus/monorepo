import fs from 'node:fs/promises';
import path from 'node:path';

export class UserRepository {
  async getAllUsers() {
    const users = fs.readFileSync(path.resolve(__dirname, 'data/users.json'), 'utf-8');
    return JSON.parse(users);
  }
}
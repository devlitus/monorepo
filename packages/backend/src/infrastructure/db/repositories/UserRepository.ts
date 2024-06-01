import fs from 'node:fs/promises';
import path from 'node:path';

export class UserRepository {
  async getAllUsers() {
    const users = await fs.readFile(path.resolve(__dirname, 'data/users.json'), 'utf-8');
    console.log('users', users);
    return JSON.parse(users);
  }
}
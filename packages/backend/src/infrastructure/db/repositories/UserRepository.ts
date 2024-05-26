import fs from 'fs';
import path from 'path';

export class UserRepository {
  async getAllUsers() {
    // Implementa la lógica para obtener todos los usuarios de la base de datos
    const dataPath = path.join(__dirname, '..', '..', '..', 'data', 'user.json');
    const data = fs.readFileSync(dataPath, 'utf-8');
    const users = JSON.parse(data);
    return users;
  }
}
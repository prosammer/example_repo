import { v4 as uuidv4 } from 'uuid';

class UserService {
  async signUpUser(name: string, email: string) {
    const userId = uuidv4();
    await dbCreateUser({ id: userId, name, email });
    return userId;
  }

  async loginUser(email: string) {
    const user = await dbGetUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async updateUserProfile(userId: string, updatedFields: Record<string, any>) {
    await dbUpdateUserProfile(userId, updatedFields);
    return { success: true };
  }
}

function getBrowser(): string {
  return 'Chrome';
}

function getOperatingSystem(): string {
  return 'Windows';
}

export default new UserService();

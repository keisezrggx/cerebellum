export type UserRecord = {
  id: string;
  createdAt: Date;
};

export interface UserRepository {
  findById(id: string): Promise<UserRecord | null>;
}
import DataLoader from 'dataloader'
import R from 'ramda'
import { Connection } from 'typeorm'
import { User } from '../../entity/User'
import API from './API'

export default class UserAPI extends API {
  constructor(private connection: Connection) {
    super();
  }

  private userRepo = this.connection.getRepository(User);
  private userLoader = new DataLoader((ids: string[]) => this.userRepo.findByIds(ids));

  public async getUserById(id: string) {
    try {
      return await this.userLoader.load(id);
    } catch {
      return null;
    }
  }

  public async getAuthorByMessageId(id: string) {
    return await this.userRepo.createQueryBuilder('user')
      .leftJoinAndSelect('user.messages', 'messages')
      .where('messages.id = :id', { id })
      .getOne();
  }

  public async getAllUsers(first: number, after?: string) {
    const queryBuilder = this.userRepo
      .createQueryBuilder('user')
      .orderBy('user.id', 'DESC')
      .take(first);

    const [totalCount, users] = await Promise.all([
      queryBuilder.getCount(),
      queryBuilder
        .where(after ? 'user.id < :cursor' : '1 = 1', { cursor: after })
        .getMany()
    ]);

    const hasNextPage = users.length === first;
    const endCursor = hasNextPage ? R.last(users)!.id : undefined;
    const pageInfo = { hasNextPage, endCursor };
    const edges = users.map(user => ({ cursor: user.id, node: user }));

    return { totalCount, pageInfo, edges };
  }

  public async createUser(name: string) {
    const user = new User();
    user.name = name;
    return await this.userRepo.save(user);
  }

  public async updateUser(id: string, name: string) {
    await this.userRepo.update(id, { name });
    return await this.userRepo.findOneOrFail(id);
  }

  public async deleteUser(id: string) {
    await this.userRepo.delete(id);
    return id;
  }

}
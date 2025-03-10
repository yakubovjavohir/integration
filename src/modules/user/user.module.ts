import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
@Module({
  imports: [SequelizeModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    { provide: "IUserService", useClass: UserService },
    { provide: "IUserRepository", useClass: UserRepository }
  ],
  exports:["IUserService", "IUserRepository"]
})
export class UserModule {}

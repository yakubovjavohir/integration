import { Module } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { UserDetailsController } from './user-details.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserDetailEntity } from './entities/user-detail.entity';
import { UserDetailsRepository } from './user-details.repository';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [SequelizeModule.forFeature([UserDetailEntity]), UserModule],
    controllers: [UserDetailsController],
    providers: [
        { provide: "IUserDetailsService", useClass: UserDetailsService },
        { provide: "IUserService", useClass:UserService},
        { provide: "IUserDetailsRepository", useClass: UserDetailsRepository }
      ],
    exports: ["IUserDetailsService"], 
})
export class UserDetailsModule {}

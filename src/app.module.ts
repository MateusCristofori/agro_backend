import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { WorkController } from './work/work.controller';
import { WorkService } from './work/work.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, WorkController],
  providers: [AppService, UserService, WorkService],
})
export class AppModule {}

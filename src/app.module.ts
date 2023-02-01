import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, LoginController, AuthController],
  providers: [AppService],
})
export class AppModule {}

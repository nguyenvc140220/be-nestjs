import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@nestjs/core';
import { PrismaService } from './prisma/prisma.service';

const routes = [
  {
    path: '/api',
    children: [
      {
        path: '',
        module: AuthModule,
      },
      {
        path: '/users',
        module: UsersModule,
      },
    ],
  },
];

@Module({
  imports: [AuthModule, UsersModule, RouterModule.register(routes)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

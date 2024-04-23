import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import {UserLoginDto} from "./dto/user-login.dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @UseGuards(JwtAuthGuard)
  @Post('login')
  async login(@Body() body: UserLoginDto) {
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}

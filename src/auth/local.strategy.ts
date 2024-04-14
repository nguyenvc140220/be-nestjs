import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(username: string, password: string): Promise<any> {
    // const user = await this.authService.validateUser(username, password);
    // if (!user) {
    //     throw new UnauthorizedException();
    // }
    // return user;
  }
}

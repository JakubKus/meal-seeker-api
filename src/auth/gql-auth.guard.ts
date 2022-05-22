import { CanActivate, createParamDecorator, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { promisify } from 'util';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { ConfigService } from '@nestjs/config';
import { APP_CONFIG_KEY, AppConfig } from '@config/app.config';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req, res } = ctx.getContext();
    const auth0Config = this.configService.get<AppConfig[APP_CONFIG_KEY.AUTH0]>(APP_CONFIG_KEY.AUTH0);

    const checkJwt = promisify(
      // todo: upgrade jwt lib version
      jwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${auth0Config.domain}.well-known/jwks.json`,
        }),
        audience: auth0Config.audience,
        issuer: auth0Config.domain,
        algorithms: ['RS256'],
      }),
    );

    try {
      await checkJwt(req, res);
      return true;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}

export const CurrentUserId = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.user.sub;
});

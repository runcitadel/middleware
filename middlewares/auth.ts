import type {Next, Context} from 'koa';
import passport from 'koa-passport';
import passportJWT from "passport-jwt";
import constants, { STATUS_CODES } from "../utils/const.js";
import { fs } from "@runcitadel/utils";

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const JWT_AUTH = "jwt";

passport.serializeUser(function (user, done) {
  // @ts-expect-error This works, even though TypeScript thinks it doesn't
  return done(null, user.id);
});

async function createJwtOptions(): Promise<{
  jwtFromRequest: passportJWT.JwtFromRequestFunction;
  secretOrKey: string;
  algorithm: string;
}> {
  const pubKey = await fs.readFile(constants.JWT_PUBLIC_KEY_FILE);
  return {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: pubKey.toString("utf-8"),
    algorithm: "RS256",
  };
}

const jwtOptions = await createJwtOptions();

passport.use(
  JWT_AUTH,
  new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    done(null, { id: jwtPayload.id });
  })
);

export async function jwt(ctx: Context, next: Next): Promise<void> {
  await passport.authenticate(
    JWT_AUTH,
    {session: false},
    async (error, user) => {
      if (error || user === false) {
        ctx.throw(STATUS_CODES.UNAUTHORIZED, 'Invalid JWT');
      }

      try {
        await ctx.logIn(user);
      } catch {
        ctx.throw(
          STATUS_CODES.INTERNAL_SERVER_ERROR,
          'An internal error occured. Please contact the Citadel support team.',
        );
      }

      await next();
    },
  )(ctx, next);
}
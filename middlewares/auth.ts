import passport from "passport";
import passportJWT from "passport-jwt";
import constants from "../utils/const.js";
import { NodeError, fs } from "@runcitadel/utils";
import type { NextFunction, Request, Response } from "express";

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

export function jwt(req: Request, res: Response, next: NextFunction): void {
  passport.authenticate(JWT_AUTH, { session: false }, (error, user) => {
    if (error || user === false) {
      next(new NodeError("Invalid JWT", 401));
      return;
    }

    req.logIn(user, (err) => {
      if (err) {
        next(new NodeError("Unable to authenticate", 401));
        return;
      }

      (next as (error: unknown, user: unknown) => void)(null, user);
    });
  })(req, res, next);
}

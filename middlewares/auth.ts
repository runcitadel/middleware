import passport from "passport";
import passportJWT from "passport-jwt";
import constants from "../utils/const.js";
import { NodeError } from "../models/errors.js";
import * as fs from "fs/promises";
import type { NextFunction, Request, Response } from "express";

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const JWT_AUTH = "jwt";

passport.serializeUser(function (user, done) {
    // @ts-expect-error
    return done(null, user.id);
});

async function createJwtOptions() {
    const pubKey = await fs.readFile(constants.JWT_PUBLIC_KEY_FILE);
    return {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: pubKey,
        algorithm: "RS256",
    };
}

createJwtOptions().then(function (data) {
    const jwtOptions = data;

    passport.use(
        JWT_AUTH,
        new JwtStrategy(jwtOptions, function (jwtPayload, done) {
            return done(null, { id: jwtPayload.id });
        })
    );
});

export function jwt(req: Request, res: Response, next: NextFunction) {
    passport.authenticate(JWT_AUTH, { session: false }, function (error, user) {
        if (error || user === false) {
            return next(new NodeError("Invalid JWT", 401)); // eslint-disable-line no-magic-numbers
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(new NodeError("Unable to authenticate", 401)); // eslint-disable-line no-magic-numbers
            }

            return (<any>next)(null, user);
        });
    })(req, res, next);
}

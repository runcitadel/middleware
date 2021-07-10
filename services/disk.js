/**
 * Generic disk functions.
 */
import * as fs from "fs/promises";
import * as crypto from "crypto";
const uint32Bytes = 4;
import * as logger from "../utils/logger.js";
// Reads a file as a utf8 string. Wraps fs.readFile into a native promise
export function readUtf8File(filePath) {
    return fs.readFile(filePath, "utf8");
}
export function readJsonFile(filePath) {
    return readUtf8File(filePath).then(JSON.parse);
}
export async function writeJsonFile(filePath, obj) {
    const tempFileName = `${filePath}.${crypto
        .randomBytes(uint32Bytes)
        .readUInt32LE(0)}`;
    await fs.writeFile(tempFileName, JSON.stringify(obj), "utf8");
    try {
        await fs.rename(tempFileName, filePath);
    }
    catch (err) {
        fs.unlink(tempFileName);
        throw err;
    }
}
export async function writeKeyFile(filePath, object) {
    const temporaryFileName = `${filePath}.${crypto
        .randomBytes(uint32Bytes)
        .readUInt32LE(0)}`;
    await fs.writeFile(temporaryFileName, object, "utf8");
    try {
        await fs.rename(temporaryFileName, filePath);
    }
    catch (error) {
        await fs.unlink(temporaryFileName);
        logger.warn("Error removing temporary file after error", "disk", {
            err: error,
            tempFileName: temporaryFileName,
        });
    }
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const appError_1 = require("../../errors/appError");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../user/user.model");
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield user_model_1.User.findOne({
        email: payload.email,
    }).lean();
    // check user exist or not
    if (!isUserExist) {
        throw new appError_1.AppError(http_status_1.default.UNAUTHORIZED, 'User does not exist');
    }
    // compare password
    const loginPassword = payload.password;
    const hashPassword = isUserExist.password;
    delete isUserExist.password;
    const jwtPayload = {
        id: isUserExist._id.toHexString(),
        email: isUserExist.email,
        role: isUserExist.role,
    };
    const comparePassword = bcryptjs_1.default.compareSync(loginPassword, hashPassword);
    if (!comparePassword) {
        throw new appError_1.AppError(http_status_1.default.UNAUTHORIZED, 'You provide a wrong password');
    }
    // generate jwt token
    const token = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.secret_key);
    return { token, isUserExist };
});
exports.AuthServices = {
    loginUser,
};

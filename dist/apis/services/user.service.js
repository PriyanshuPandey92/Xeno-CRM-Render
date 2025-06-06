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
exports.createUserService = createUserService;
exports.getUserByEmailService = getUserByEmailService;
const User_1 = __importDefault(require("../../models/User"));
function createUserService(email, name, provider, avatarUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield User_1.default.findOne({ email: email });
        if (existingUser) {
            return existingUser;
        }
        const user = new User_1.default({
            email,
            name,
            provider,
            avatarUrl,
        });
        const savedUser = yield user.save();
        return savedUser;
    });
}
function getUserByEmailService(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.default.findOne({ email: email });
        if (!user) {
            return null;
        }
        return user;
    });
}
//# sourceMappingURL=user.service.js.map
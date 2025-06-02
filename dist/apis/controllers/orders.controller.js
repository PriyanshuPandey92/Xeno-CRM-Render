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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrders = getAllOrders;
const response_1 = require("../../utils/response");
const orders_service_1 = require("../services/orders.service");
function getAllOrders(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user } = req;
        if (!user) {
            return (0, response_1.error)("User not authenticated.", 401);
        }
        const orders = yield (0, orders_service_1.getAllOrdersService)(user.id);
        if (!orders) {
            return (0, response_1.error)("No orders found.", 404);
        }
        return (0, response_1.success)({
            message: "Orders fetched successfully",
            orders: orders
        }, 200);
    });
}
//# sourceMappingURL=orders.controller.js.map
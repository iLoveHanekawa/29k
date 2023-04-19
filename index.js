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
function postReq() {
    return __awaiter(this, void 0, void 0, function* () {
        const reqBody = `name=Arjun&code=77bec3886fb88366cf4118eac979c640`;
        const res = yield fetch('https://dev.29kreativ.com/recruitment/levels/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer 77bec3886fb88366cf4118eac979c640'
            },
            body: reqBody
        });
        const data = yield res.text();
        console.log(data);
    });
}
postReq();

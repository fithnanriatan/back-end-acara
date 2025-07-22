import { NextFunction, Request, Response } from "express";
import { getUserData, IUserToken } from "../utils/jwt";

// modifikasi request
export interface IReqUser extends Request {
    user?: IUserToken;
}

export default (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers?.authorization;

    if(!auth){
        return res.status(403).json({
            message: "unauthorized",
            data: null
        })
    }

    const [prefix, token] = auth.split(" ");

    if(!(prefix === "Bearer" && token)){
        return res.status(403).json({
            message: "unauthorized2",
            data: null
        })
    }

    const user = getUserData(token);

    if(!user){
        return res.status(403).json({
            message: "unauthorized3",
            data: null
        })
    }

    (req as IReqUser).user = user;

    next();
}
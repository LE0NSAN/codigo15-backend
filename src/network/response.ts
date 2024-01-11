import type { Response } from "express";

interface IResponse {
status: number;
res: Response;
data: any;
}

export function responseSuccess({ res, data, status }: IResponse): Response {
return res.status(status).json({
    ok: true,
    data,
});
}
export function responseError({ res, data, status }: IResponse): Response {
return res.status(status).json({
    ok: false,
    data,
});
}


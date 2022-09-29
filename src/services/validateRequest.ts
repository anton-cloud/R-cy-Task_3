import express, { NextFunction, Request, Response } from "express";
import {
  AddNoteBodySchema,
  EditNoteBodySchema,
  UuidSchema,
  EmptySchema,
} from "./validationSchemas";
import { ExpressError } from "../helpers/ExpressError";

export const validateRequest = (
  bodySchema: AddNoteBodySchema | EditNoteBodySchema | EmptySchema,
  querySchema: EmptySchema,
  paramsSchema: UuidSchema | EmptySchema
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await bodySchema.validate(req.body);
    await querySchema.validate(req.query);
    await paramsSchema.validate(req.params);
    next();
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

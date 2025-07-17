import { Request, Response } from "express";

describe("Users Controller", () => {
  it("Should return 200 OK", async () => {
    // Create mock objects for Request, Response, and NextFunction
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;
  });
});

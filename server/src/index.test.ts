import request from "supertest";
import app from "./index";

describe("APP tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

import swaggerJSDoc from "swagger-jsdoc";
import { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ScholarSwap Auth API",
      version: "1.0.0",
      description: "Authentication APIs for ScholarSwap platform",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            college: { type: "string" },
            role: {
              type: "string",
              enum: ["user", "admin"],
            },
            isVerified: { type: "boolean" },
            avatar: { type: "string" },
          },
        },

        SignupRequest: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            password: { type: "string" },
            college: { type: "string" },
          },
        },

        LoginRequest: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string" },
            password: { type: "string" },
          },
        },

        AuthResponse: {
          type: "object",
          properties: {
            user: { $ref: "#/components/schemas/User" },
            token: { type: "string" },
          },
        },

        MessageResponse: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
      },
    },

    paths: {
      "/api/auth/signup": {
        post: {
          tags: ["Auth"],
          summary: "Register a new user",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SignupRequest",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Verification email sent",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/MessageResponse",
                  },
                },
              },
            },
            400: {
              description: "Bad request",
            },
          },
        },
      },

      "/api/auth/login": {
        post: {
          tags: ["Auth"],
          summary: "Login user",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginRequest",
                },
              },
            },
          },
          responses: {
            200: {
              description: "User logged in successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/AuthResponse",
                  },
                },
              },
            },
            400: {
              description: "Invalid credentials",
            },
          },
        },
      },

      "/api/auth/verify-email/{token}": {
        get: {
          tags: ["Auth"],
          summary: "Verify user email",
          parameters: [
            {
              name: "token",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "Email verified successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/MessageResponse",
                  },
                },
              },
            },
            400: {
              description: "Invalid or expired token",
            },
          },
        },
      },
    },
  },

  apis: [], // not using JSDoc comments
};

export const swaggerSpec = swaggerJSDoc(options);
const { z } = require("zod");

const createUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

module.exports = {
  createUserSchema,
};
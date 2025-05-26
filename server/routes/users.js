const express = require("express");
const pool = require("../db");
import { z as zod } from "zod";

const router = express.Router();

const createUserSchema = zod.object({
  name: zod.string().min(1),
  email: zod.string().email(),
});

// Extract Schema for Reuse (Optional)
// // schemas/userSchemas.ts

// import { z } from 'zod';
//
// export const createUserSchema = z.object({
//   name: z.string().min(1),
//   email: z.string().email(),
// });
//
// export type CreateUserInput = z.infer<typeof createUserSchema>;

// router.post('/create', async (req, res) => {
//   const parseResult = createUserSchema.safeParse(req.body);
//
//   if (!parseResult.success) {
//     return res.status(400).json({ errors: parseResult.error.format() });
//   }
//
//   const { name, email } = parseResult.data;
//
//   try {
//     const result = await pool.query(
//       'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
//       [name, email]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// /users/first-user
router.get("/first-user", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users LIMIT 1");
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("DB query error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

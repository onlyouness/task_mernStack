import {z} from "zod"
const loginShema = z.object({
    // name: z.string().min(3, 'name must be at least 3 characters').max(25, 'Task name cannot exceed 25 characters'),
    email: z.string().email(),
    password: z.string().min(3, 'Password must be at least 3 characters'),

  });

export {loginShema}
import {z} from "zod"
const taskSchema = z.object({
    name: z.string().min(3, 'Task name must be at least 3 characters').max(25, 'Task name cannot exceed 25 characters'),
    description: z.string().min(3, 'Task desc must be at least 3 characters').max(50, 'Task desc cannot exceed 50 characters'),
   
  });

export {taskSchema}
import registerController from "@/controllers/register.controller";

export async function POST(req: Request) {
  return registerController(req as any)
}
import registerController from "@/modules/auth/register/register.controller";

export async function POST(req: Request) {
  return registerController(req as any)
}
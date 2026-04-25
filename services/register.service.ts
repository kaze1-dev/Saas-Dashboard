import bcrypt from "bcrypt"
import prisma from "@/lib/prisma";


const registerUser = async (data: {
  name: string,
  email: string,
  password: string
}) => {
  const {name, email, password} = data;

  const existingUser = await prisma.user.findUnique({
    where: {email},
  })
  if(existingUser) {
    throw new Error("User already exists")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data:{
      name,
      email,
      password: hashedPassword,
    },
  })

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  }
}

export default registerUser
/* import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: String(credentials.email) }
        });

        if (!user || !user.password) return null;

        const isValid = await bcrypt.compare(String(credentials.password), user.password);
        
        if (!isValid) return null;

        return { id: user.id, name: user.name, email: user.email };
      }
    })
  ],
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
}; */

import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {email: String(credentials.email)}
        })
        if(!user || !user.password) {
          return null
        }
        const isValid = await bcrypt.compare(
          String(credentials.password),
          user.password
        )

        if(!isValid) {
          return null
        }

        return {id: user.id, name: user.name, email: user.email}

      }
    })
  ],
  pages: {
    signIn: "/auth/register"
  },
  secret: process.env.NEXTAUTH_SECRET
}


import NextAuth from "next-auth";

export const { handlers, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    // tus providers aquí
  ]
});
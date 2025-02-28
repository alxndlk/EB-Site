import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDB from "@/lib";
import User from "@/models/user";
import bcrypt from "bcrypt";

interface UserType {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  balance: number;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Отсутствуют учетные данные");
        }

        const { email, password } = credentials;

        try {
          await connectMongoDB();

          const user = await User.findOne<UserType>({ email });

          if (!user) {
            throw new Error("Пользователь не найден");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            throw new Error("Неверный пароль");
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
            balance: user.balance,
          };
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error("Ошибка авторизации:", error.message);
            throw new Error(error.message);
          }
          console.error("Неизвестная ошибка авторизации");
          throw new Error("Не удалось выполнить авторизацию");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

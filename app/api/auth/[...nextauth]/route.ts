import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { query } from "@/lib/db"; // Используем query() для выполнения запросов

interface UserType {
  uuid: string;
  username: string;
  email: string;
  password: string;
  balance: number;
  created_at: Date;
  created_ip: string;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Отсутствуют учетные данные");
        }

        const { email, password } = credentials;

        try {
          // Выполняем запрос через query()
          const rows: any[] = await query(
            "SELECT * FROM users WHERE email = ?",
            [email]
          );

          if (rows.length === 0) {
            throw new Error("Пользователь не найден");
          }

          const user = rows[0] as UserType;

          // Сравниваем пароли
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            throw new Error("Неверный пароль");
          }

          return {
            id: user.uuid,
            name: user.username,
            email: user.email,
            balance: user.balance,
          };
        } catch (error: unknown) {
          console.error("Ошибка авторизации:", error);
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

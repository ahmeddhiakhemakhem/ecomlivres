import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email:",
                    type: "text",
                },
                password: {
                    label: "password:",
                    type: "password",
                },
            },
            async authorize(credentials) {
                try {
                    const res = await fetch("http://localhost:3001/api/users/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                    });
                    const response = await res.json();
                    console.log(response)
                    if (response.success === false) {
                        throw new Error("Invalid credentials");
                    }
                    if (response.user) {
                        console.log(response.user)
                        return {
                            ...response.user, password: null, role:

                                response.user.role, image: response.user.avatar
                        };

                    } else {
                        return null;

                        22

                    }
                } catch (error) {
                    console.log(error);
                }
                return null;
            },
        }),
        GitHubProvider({
            clientId: NEXT_PUBLIC_GITHUB_CLIENTID,
            clientSecret: NEXT_PUBLIC_GITHUB_CLIENTSECRET,
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENTSECRET
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.image = user.image;
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.role = token.role;
                session.user.image = token.image;
            }
            return session;
        },
    },
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }


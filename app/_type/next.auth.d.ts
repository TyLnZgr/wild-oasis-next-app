import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    guestId?: string; // backend’den gelen field
  }

  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      guestId?: string; // Session içine de ekliyoruz
    };
  }
}

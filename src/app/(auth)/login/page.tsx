"use client";

import { AuthHook } from "@/components/hooks/auth-hook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
import AuthStore from "@/store/AuthStore";

interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const router = useRouter();
  const { loginMutation } = AuthHook();
  const { username, setUsername, status, setStatus, password, setPassword } =
    AuthStore();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    loginMutation
      .mutateAsync({
        username,
        password,
      })
      
      .then((user) => {
        user ? router.push("/store/rewe/storefront") : setStatus(user as any);
        if (!user) {
          toast.error("Fehler beim einloggen");
          return setStatus("Fehler beim einloggen");
        }
        toast.success("Erfolgreich eingeloggt.");
      })
      .catch((error) => {
        console.error(error);
        return toast.error("Fehler beim einloggen");
      });
  };

  
  return (
    <div className="bg-background flex items-center justify-center">
      <Toaster richColors position="top-right" />
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-foreground mt-6 text-center text-3xl font-bold tracking-tight">
            Einloggen
          </h2>
        </div>
        <Card className="">
          <CardContent className="space-y-6 px-6 py-8">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="username"
                  className="text-muted-foreground block text-sm font-medium"
                >
                  Username
                </Label>
                <div className="mt-1">
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary block w-full rounded-md px-3 py-2 shadow-sm"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="text-muted-foreground block text-sm font-medium"
                >
                  Password
                </Label>
                <div className="mt-1">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary block w-full rounded-md px-3 py-2 shadow-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <Link href="/forgot-password" className="flex justify-end">
                Passwort vergessen?
              </Link>
              <div className="flex justify-between">
                <Button type="submit" className="w-full bg-black text-white">
                  Login
                </Button>
              </div>
              {status && (
                <div className="text-center text-red-600">{status}</div>
              )}
            </form>
            <div className="mt-4 text-center">
              <p className="text-muted-foreground text-sm">
                Noch kein Account ?
                <Link
                  href="/register"
                  className="text-primary hover:text-primary/80 font-medium"
                  prefetch={false}
                >
                  Erstell ein Account hier
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

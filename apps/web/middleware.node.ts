// middleware.node.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 🚀 Important : force le runtime Node.js pour éviter l'Edge
export const runtime = "nodejs";

// Middleware principal
export default clerkMiddleware((auth, req) => {
  // Ici tu peux faire des vérifications supplémentaires si besoin
  // Exemple : bloquer certains utilisateurs
  // if (!auth.userId) return NextResponse.redirect("/login");

  return NextResponse.next(); // passe à la suite
});

// Configuration du matcher pour protéger certaines routes
export const config = {
  matcher: [
    "/api/:path*", // protège toutes les API
    // protège toutes les pages sauf _next et fichiers statiques
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};

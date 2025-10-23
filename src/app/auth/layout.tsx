"use client";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            {/* Imagen lado izquierdo */}
            <div
                className="w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/login-bg-04.jpg')" }}
            ></div>

            {/* Contenedor del formulario (login o register) */}
            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8 rounded shadow">
                    {children}
                </div>
            </div>
        </div>
    );
}

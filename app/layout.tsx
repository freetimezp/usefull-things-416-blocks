import "../public/assets/css/custom.css";

import React from "react";

import Transition from "../src/providers/Transition";

import Nav from "../src/components/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Transition>
                    <Nav />
                    {children}
                </Transition>
            </body>
        </html>
    );
}

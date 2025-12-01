import "../public/assets/css/custom.css";

import React from "react";

import Nav from "../src/components/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Nav />
            <body>{children}</body>
        </html>
    );
}

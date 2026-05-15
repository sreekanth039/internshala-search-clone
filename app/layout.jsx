import "./globals.css";

export const metadata = {
title: "Internshala - Search Internships",
description: "Find the best internships in India",
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}

// import Link from "next/link"


// export default function Home() {
//   return <div>
//    <h1>Wellcome My Web</h1>
//   <Link href={'Login'}>Chalo Let's Go</Link>
//   </div>
// }
// Home.js
'use client'
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'facebook-theme'}>
      <h1>Welcome To Facebook Web</h1>
      <Link href={'/Login'}>Let's Go</Link>
    </div>
  );
}

'use client'
import useSWR from "swr";
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import appCss from '../styles/app.module.css'
import styleCss from '../styles/style.module.css'
import { useEffect } from 'react';
import SharedTable from "@/components/app.table";
export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  }
  );
  // useEffect(() => {
  //   const fetchData = async () => {
  //     var blogsResponse = await fetch('http://localhost:8000/blogs');
  //     var blogs = await blogsResponse.json();
  //     console.log("Check response blogsResponse: ", blogs);
  //   }
  //   fetchData();
  // }, []);
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  console.log("Check response blogsResponse: ", data);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello world with Nextjs 13 & Hỏi Dân IT
        </p>
        <Link className={appCss['red']} href='facebook'>Facebook</Link>
        <Link className={styleCss['red']} href='youtobe'>Youtobe</Link>
        <Link href='tiktok'>Tiktok</Link>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="{styles.grid}">
        <SharedTable blogs={data} />
      </div>
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main >
  )
}

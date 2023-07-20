import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Learn Nextjs | Home</title>
      <meta name="keywords" content="coders" />
    </Head>

    <div>
      <h1 className={styles.title}>Hello world</h1>
      <p className={styles.text}>Trên đây là bài viết hướng dẫn bạn cách tải và cài đặt Google Fonts trên máy tính. Hy vọng bài viết sẽ có ích cho bạn. Chúc các bạn thành công và đừng quên để lại bình luận bên dưới nếu có thắc mắc nhé!</p>
      <Link href="/coders/">
        <p className="btn">See all coder</p>
      </Link>
    </div>

    <style jsx>
      {
        `
        .btn{
          display: block;
          width: 150px;
          padding: 8px 0;
          margin: 20px auto;
          background: #ffbf49;
          border-radius: 4px;
          color: black;
          text-align: center
        }
        `
        }
      
    </style>
   
    </>
  )
}

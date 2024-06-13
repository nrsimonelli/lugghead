import Image from 'next/image'
import styles from './page.module.css'
import X from './x'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/* Nav */}
        <div className={styles.nav}>
          <div>Logo</div>
          <div className={'contact-button'}>
            <a href='mailto:1842luggheadlazerlab@gmail.com'>Contact us</a>
          </div>
        </div>
        {/* Hero Content */}
        <div className={styles.hero}>
          <div>
            <p className={styles.overline}>
              Fundraise + Celebrate + Commemorate
            </p>
            <p className={styles.h1}>Welcome to Lugghead’s Lazer Lab</p>
          </div>
          <div>Image</div>
          <div>Yellow Logo / stamp</div>
        </div>
      </main>
      <X />
    </>
  )
}

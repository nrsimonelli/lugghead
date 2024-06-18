import Image from 'next/image'
import styles from './page.module.css'

import X from './x'

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        {/* Nav */}
        <div className={styles.nav}>
          <div>Logo</div>
          {/* <div className={'contact'}> */}
          <a
            className={styles.contact}
            href='mailto:1842luggheadlazerlab@gmail.com'
          >
            Contact Us
          </a>
          {/* </div> */}
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
      </section>

      <section>
        <div>
          <p className={styles.overline}>Glass + Wood + Metal + Leather</p>
          <p className={styles.h2}>Laser engraving services</p>
          <p>
            We provide custom laser engraving on a wide range of products and
            materials that are perfect for any occasion. Say thank you,
            congratulations, or show your support. If you have a design, we can
            create a unique item for you!
          </p>
          <p>
            Below are a few examples of the many products we can customize for
            your project:
          </p>
        </div>
        <div>
          <div>icon</div>
          <p>title</p>
          <p>description</p>
        </div>
        <div>
          <p>
            We can print on our products or yours. If it’s the right material
            and fits in our machine, we can make it happen.
          </p>
        </div>
        <div>
          <p>
            Contact us today and we can help you bring your custom project to
            life!
          </p>
          <a
            className={styles.contact}
            href='mailto:1842luggheadlazerlab@gmail.com'
          >
            Contact Us
          </a>
        </div>
        <p>
          Personalized Gifts, company Merchandise, Sport Team Fundraisers &
          More!
        </p>
      </section>

      <section>
        <div>
          <p className={styles.h2}>Products & past work</p>
          <p>
            We can help with projects large or small, for one person or for your
            entire group. We offer a wide range of products from water bottles,
            travel mugs, glassware, bottle openers, and more.{' '}
          </p>
          <p>Check out a sample of some of our products below:</p>
        </div>
        <div>
          <div>
            <div>image</div>
            <p>description</p>
          </div>
        </div>

        <div>
          <p>
            Contact us today for more information or to get a quote on your
            latest project!
          </p>
          <a
            className={styles.contact}
            href='mailto:1842luggheadlazerlab@gmail.com'
          >
            Contact Us
          </a>{' '}
        </div>
      </section>

      <section>
        <div>
          <div>
            <p className={styles.h3}>Want to work with us?</p>
            <p>
              We can help bring your small or large custom project to life. Get
              started by clicking the “contact us” button or by sending us an
              email directly.
            </p>
            <p>
              Once we receive your message, we will reach out to discuss the
              details of your project and provide a quote.
            </p>
          </div>
          <div>
            <p>Reach out to us to get started!</p>
            <a
              className={styles.contact}
              href='mailto:1842luggheadlazerlab@gmail.com'
            >
              Contact Us
            </a>{' '}
          </div>
        </div>
      </section>
      <footer>
        <div>
          <div>Logo</div>
          <div>email</div>
          <div>contact us</div>
        </div>
        <p>copyright</p>
      </footer>
    </main>
  )
}

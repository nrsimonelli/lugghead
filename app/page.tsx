import Image from 'next/image'
import styles from './page.module.css'
import glass from './assets/glass.svg'
import wood from './assets/wood.svg'
import metal from './assets/metal.svg'
import leather from './assets/leather.svg'
import Squiggle from './assets/Squiggle.png'
import product_1 from './assets/product_1.png'
import product_2 from './assets/product_2.png'
import product_3 from './assets/product_3.png'
import product_4 from './assets/product_4.png'
import product_5 from './assets/product_5.png'
import product_6 from './assets/product_6.png'
import product_7 from './assets/product_7.png'
import product_8 from './assets/product_8.png'

import X from './x'

export default function Home() {
  return (
    <main className={styles.main}>
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
      <section className={styles.heroSection}>
        {/* Nav */}
        {/* Hero Content */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.overline}>
              Fundraise + Celebrate + Commemorate
            </p>
            <p className={styles.heroHeading}>
              Welcome to Lugghead’s Lazer Lab
            </p>
          </div>
          <div className={styles.yellowSticker}>
            <div>Image</div>
            <div>Yellow Logo / stamp</div>
          </div>
        </div>
      </section>

      <section className={styles.sectionTwo}>
        <div className={styles.sectionContainer}>
          <div className={styles.headingContainer}>
            <p className={styles.overline}>Glass + Wood + Metal + Leather</p>
            <p className={styles.h2}>Laser engraving services</p>
          </div>
          <div className={styles.paragraphContainer}>
            <p>
              We provide custom laser engraving on a wide range of products and
              materials that are perfect for any occasion. Say thank you,
              congratulations, or show your support. If you have a design, we
              can create a unique item for you!
            </p>
            <p className={styles.bold}>
              Below are a few examples of the many products we can customize for
              your project:
            </p>
          </div>

          <div className={styles.serviceList}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceItemIcon}>
                <Image src={glass} alt={'Glass drink-ware icon'} />
              </div>
              <div className={styles.serviceItemTextContainer}>
                <p className={styles.serviceItemTitle}>Glassware</p>
                <p className={styles.serviceItemDescription}>
                  Engrave on wine glasses for your special day, put your
                  companies logo on a growler, or put a fun saying on a pint
                  glass
                </p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceItemIcon}>
                <Image src={metal} alt={'Metal bottle icon'} />
              </div>
              <div className={styles.serviceItemTextContainer}>
                <p className={styles.serviceItemTitle}>
                  Metal bottles & tumblers
                </p>
                <p className={styles.serviceItemDescription}>
                  Make bottles for your sports team or fundraise with tumblers
                  featuring your companies logo
                </p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceItemIcon}>
                <Image src={wood} alt={'Wood board icon'} />
              </div>
              <div className={styles.serviceItemTextContainer}>
                <p className={styles.serviceItemTitle}>
                  Wooden plaques & signs
                </p>
                <p className={styles.serviceItemDescription}>
                  Create lasting awards to honor someone or a new sign for your
                  business{' '}
                </p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceItemIcon}>
                <Image src={leather} alt={'Leather pet collar icon'} />
              </div>
              <div className={styles.serviceItemTextContainer}>
                <p className={styles.serviceItemTitle}>
                  Leather tags & pet collars
                </p>
                <p className={styles.serviceItemDescription}>
                  Personalize your favorite buddies collar, create a set of
                  memorable coasters, or put your logo on a bottle opener{' '}
                </p>
              </div>
            </div>
          </div>
          <p className={styles.spacer}>
            We can print on our products or yours. If it’s the right material
            and fits in our machine, we can make it happen.
          </p>
          <div className={styles.contactBox}>
            <p className={styles.contactText}>
              Contact us today and we can help you bring your custom project to
              life!
            </p>
            <div>
              <a
                className={styles.contact}
                href='mailto:1842luggheadlazerlab@gmail.com'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionSpacer}>
        <p className={styles.spacerParagraphText}>
          Personalized Gifts, company Merchandise, Sport Team Fundraisers &
          More!
        </p>
        <Image className={styles.squiggle} src={Squiggle} alt={'blue wave'} />
      </section>

      <section>
        <div className={styles.sectionContainer}>
          <div>
            <p className={styles.h2}>Products & past work</p>
            <div className={styles.paragraphContainer}>
              <p>
                We can help with projects large or small, for one person or for
                your entire group. We offer a wide range of products from water
                bottles, travel mugs, glassware, bottle openers, and more.{' '}
              </p>
              <p className={styles.bold}>
                Check out a sample of some of our products below:
              </p>
            </div>
          </div>

          <div className={styles.productList}>
            <div className={styles.productItem}>
              <Image
                className={styles.productImage}
                src={product_1}
                alt={'Bottle openers'}
              />
              <p className={styles.productDescription}>Bottle openers</p>
            </div>
            <div className={styles.productItem}>
              <Image
                className={styles.productImage}
                src={product_2}
                alt={'Tumblers'}
              />
              <p className={styles.productDescription}>Tumblers</p>
            </div>
            <div className={styles.productItem}>
              <Image
                className={styles.productImage}
                src={product_3}
                alt={'Leather tags'}
              />
              <p className={styles.productDescription}>Leather tags</p>
            </div>
            <div className={styles.productItem}>
              <Image
                className={styles.productImage}
                src={product_4}
                alt={'Wine glasses'}
              />
              <p className={styles.productDescription}>Wine glasses</p>
            </div>
            <div className={styles.productItem}>
              <Image
                className={styles.productImage}
                src={product_5}
                alt={'Water bottles'}
              />
              <p className={styles.productDescription}>Water bottles</p>
            </div>
            <div className={styles.productItem}>
              <Image
                className={styles.productImage}
                src={product_6}
                alt={'Charcuterie boards'}
              />
              <p className={styles.productDescription}>Charcuterie boards</p>
            </div>
            <div className={styles.productItem}>
              <Image
                className={styles.productImage}
                src={product_7}
                alt={'Growlers'}
              />
              <p className={styles.productDescription}>Growlers</p>
            </div>
            <div className={styles.productItem}>
              <Image
                className={styles.productImage}
                src={product_8}
                alt={'Leather jewelry cases'}
              />
              <p className={styles.productDescription}>Leather jewelry cases</p>
            </div>
          </div>

          <div className={styles.contactBox}>
            <p className={styles.contactText}>
              Contact us today for more information or to get a quote on your
              latest project!
            </p>
            <div>
              <a
                className={styles.contact}
                href='mailto:1842luggheadlazerlab@gmail.com'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionThree}>
        <div className={styles.calloutBox}>
          <p className={styles.h3}>Want to work with us?</p>
          <div className={styles.calloutSpacer}>
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
          <div className={styles.contactBox}>
            <p className={styles.contactText}>
              Contact us today and we can help you bring your custom project to
              life!
            </p>
            <div>
              <a
                className={styles.contact}
                href='mailto:1842luggheadlazerlab@gmail.com'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
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
      </section> */}
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

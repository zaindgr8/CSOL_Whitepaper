import styles from './style';
import {
  CTA,
  BodyTop,
  BodyBottom,
  BodyMiddle,
} from './components';
import CTAA from "./components/CTA1"
import Pie from "./assets/pie.png"
import Footer from "./components/Footer1"

const App = () => (
  <div className="w-full overflow-hidden">
    <div className="bg-cta-gradient z-[0] h-[450px] mobile-height-change">
      <div
        className={`fix-bg-img flex-col h-[450px] mobile-height-change
        relative overflow-hidden ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className="background-img z-[0] absolute overflow-hidden"></div>
        <div
          className={`margin-bottom top-px absolute z-[2] ${styles.boxWidth}`}
        ></div>

        <div className={`z-[0]  cta-mobile-change ${styles.boxWidth}`}>
          <CTA />
        </div>
      </div>
    </div>

    {/* body sections  */}
    <div className={`${styles.flexStart} mobile-margin-change px-16`}>
      <div className={`${styles.boxWidth}`}>
        <BodyTop />
      </div>
    </div>

    <div className="w-full h-[650px] md:h-[350px]">
      <BodyMiddle />
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <BodyBottom />
      </div>
    </div>

    {/* footer section  */}
    <div className="bg-cta-gradient z-[0] h-[450px] mobile-height-change">
      <div
        className={`fix-bg-img flex-col h-[450px] mobile-height-change
        relative overflow-hidden ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className="background-img z-[0] absolute overflow-hidden"></div>
        <div
          className={`margin-bottom top-px absolute z-[2] ${styles.boxWidth}`}
        ></div>
        <div className={`z-[0] mt-5 cta-mobile-change ${styles.boxWidth}`}>
          <CTAA />
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center">

        <img width={550} src={Pie} />

    </div>
    <Footer/>
  </div>
);
export default App;

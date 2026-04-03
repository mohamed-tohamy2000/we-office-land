import logo from "../../assets/images/logo.png";
import { siteConfig } from "../../data/site";

export default function IntroLoader({ closing = false }) {
  return (
    <div className={`intro-loader ${closing ? "is-closing" : ""}`} aria-hidden="true">
      <div className="intro-loader__backdrop intro-loader__backdrop--left" />
      <div className="intro-loader__backdrop intro-loader__backdrop--right" />

      <div className="intro-loader__panel">
        <div className="intro-loader__logo-ring">
          <img src={logo} alt={siteConfig.brandName} className="intro-loader__logo" />
        </div>

        <div className="intro-loader__copy">
          <p className="intro-loader__eyebrow">Premium Office Furniture</p>
          <h1 className="intro-loader__title">{siteConfig.brandName}</h1>
          <p className="intro-loader__tagline">نجهز مساحات العمل بذوق راق وتجربة عرض أكثر سلاسة.</p>
        </div>

        <div className="intro-loader__progress" role="presentation">
          <span className="intro-loader__progress-bar" />
        </div>
      </div>
    </div>
  );
}

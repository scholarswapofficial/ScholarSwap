import Logo from "@/components/atoms/Logo/Logo";
 import { CheckCircle } from "lucide-react";
import { INTRO_TEXT } from "@/constant/introText";

const IntroContent = () => {
  return (
    <div className="intro-content">
    
      <Logo />

     
      <div className="intro-illustration">
        <img src="/images/auth-illustration.png" alt="learning" />
      </div>

      <h1 className="intro-heading">{INTRO_TEXT.heading}</h1>

      <p className="intro-subheading">{INTRO_TEXT.subheading}</p>

<ul className="intro-features">
  {INTRO_TEXT.features.map((item, index) => (
    <li key={index}>
      <CheckCircle className="tick-icon" />
      {item}
    </li>
  ))}
</ul>
    </div>
  );
};

export default IntroContent;
import IntroSection from "@/sections/auth/IntroSection";
import AuthFormSection from "@/sections/auth/AuthFormSection";
import FooterSection from "@/sections/auth/FooterSection";

const AuthPage = () => {
  return (
    <div className="auth-container">
      <IntroSection />
      <AuthFormSection />
      <FooterSection />
    </div>
  );
};

export default AuthPage;
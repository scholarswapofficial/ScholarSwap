const FooterSection = () => {
  return (
    <div className="auth-footer">
      <p>
        © {new Date().getFullYear()} ScholarSwap ·{" "}
        <span>Privacy Policy</span> · <span>Terms</span>
      </p>
    </div>
  );
};

export default FooterSection;
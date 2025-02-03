"use client";
import HeroSec from "./ui/HeroSec";
interface HomebuttonRefProp {
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}
const Hero = ({ buttonRef }: HomebuttonRefProp) => {
  const handleScroll = () => {
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative">
      <HeroSec
        imageSrc="/hero-img.png"
        heading="Your Voice, Your Blog"
        tagline=" Create, edit, and share your ideas with the world."
        buttonText="Create Your First Post"
        onButtonClick={handleScroll}
      />
    </div>
  );
};

export default Hero;

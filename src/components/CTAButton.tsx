import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text?: string;
  variant?: "primary" | "secondary" | "ghost" | "luxury" | "light";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  pulse?: boolean;
}

export function CTAButton({
  text = "Agendar Avaliação",
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  onClick,
  className,
  icon = true,
  pulse = false,
}: CTAButtonProps) {
  const base =
    "font-semibold rounded-2xl transition-all duration-300 inline-flex items-center justify-center gap-3 cursor-pointer select-none active:scale-95";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary-light hover:scale-[1.03] shadow-elegant",
    secondary:
      "border-2 border-primary text-primary bg-transparent hover:bg-accent",
    ghost: "text-primary hover:bg-accent",
    luxury:
      "bg-gradient-gold text-gold-foreground hover:scale-[1.03] shadow-gold",
    light:
      "bg-background text-primary-dark hover:scale-[1.03] shadow-elegant",
  } as const;

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  } as const;

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    pulse && variant === "primary" && "animate-cta-pulse",
    pulse && variant === "light" && "animate-cta-pulse-light",
    pulse && "animate-cta-bounce",
    className,
  );

  const content = (
    <>
      {icon && <MessageCircle className="h-5 w-5" />}
      {text}
    </>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

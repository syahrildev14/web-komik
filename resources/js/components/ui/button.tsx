import React from "react";
import Button from "@mui/material/Button";
import { Link } from "@inertiajs/react";

interface MyButtonProps {
  label: string;
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
  href?: string; // Inertia navigation
  className?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  label,
  variant = "contained",
  onClick,
  href,
  className = "",
}) => {
  return (
    <Button
      variant={variant}
      onClick={!href ? onClick : undefined} // kalau pakai href, jangan pakai onClick
      component={href ? Link : "button"}
      href={href}
      className={className}
    >
      {label}
    </Button>
  );
};

export default MyButton;

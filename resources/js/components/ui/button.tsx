import React from "react";
import Button from "@mui/material/Button";

interface MyButtonProps {
  label: string;
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
  className?: string; // untuk tailwind
}

const MyButton: React.FC<MyButtonProps> = ({
  label,
  variant = "contained",
  onClick,
  className = "",
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={className}
    >
      {label}
    </Button>
  );
};

export default MyButton;

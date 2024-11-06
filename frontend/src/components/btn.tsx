import {ComponentProps, ReactNode } from "react";
import {tv, VariantProps} from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-lg px-16 font-medium flex items-center justify-center gap-2 transition rounded-3xl font-semibold",
  variants:{
    variant:{
      primary: "bg-pink text-white hover:bg-pink/80 ",
      secondary: "bg-white text-cyan50 hover:text-cyan30 shadow-lg",
    },
    size:{
      default:"py-4",
      full: "w-full h-11"
    }
  },
  // caso não coloque nada nas variants ele vai atender a essas
  defaultVariants:{
    variant:"primary",
    size:"default"
  }
})
interface propsBtn extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  children: React.ReactNode
}

export default function Btn({variant, children, size, ...props}: propsBtn) {
  return (
    <button className={buttonVariants({variant, size})}>
      {children}
    </button>
  );
}

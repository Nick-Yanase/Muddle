import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-lg px-16 font-medium flex items-center justify-center gap-2 transition rounded-3xl font-semibold",
  variants: {
    variant: {
      primary: "bg-orange20 text-white hover:bg-yellow20 ",
      secondary: "bg-white text-cyan50 hover:text-cyan30 shadow-lg",
    },
    size: {
      default: "py-4",
      full: "w-full h-11"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "default"
  }
});

interface propsBtn extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Btn({ variant, children, size, ...props }: propsBtn) {
  return (
    // Adicione `...props` no botão para garantir que todas as propriedades sejam aplicadas
    <button className={buttonVariants({ variant, size })} {...props}>
      {children}
    </button>
  );
}

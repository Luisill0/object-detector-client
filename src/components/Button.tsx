import { CustomComponent } from "@types";

interface ButtonProps extends CustomComponent {
    onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: JSX.Element | string | never[];
}

const Button = ({onClick, children, id, className, style}: ButtonProps):JSX.Element => (
    <button id={id ?? 'button'}
      className={`
        ${className ?? ''}
        h-16 w-40
        bg-accent text-primary
        border-accent border
        hover:bg-primary hover:text-accent
        text-xl
        rounded-2xl
        duration-300
      `}
      onClick={onClick}
      style={style}
    >
        {children}
    </button>
)

export default Button;
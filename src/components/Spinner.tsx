interface SpinnerProps {
    h?: string;
    w?: string;
}
  
const Spinner = ({h='h-8', w='w-8'}: SpinnerProps) => (
    <div
        className={`
            ${h} ${w}
            align-[-0.125em]
            animate-spin
            border-4 border-solid border-current border-r-transparent
            inline-block
            motion-reduce:animate-[spin_1.5s_linear_infinite]
            rounded-full
        `}
        role="status">
        <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >
            Loading...
        </span>
    </div>
)

export default Spinner
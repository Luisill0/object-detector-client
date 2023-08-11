import { CustomComponent } from "@types";

interface ImageContainerProps extends CustomComponent {
    image: string | null;
    onImageDelete: () => void;
    loading: boolean;
    result: boolean;
}
  
const ImageContainer = ({image, onImageDelete, result, id, className, style}: ImageContainerProps): JSX.Element => {
    if(!image) return <></>
  
    return (
      <div
        id={id ?? 'image-container'}
        className={`
          ${className ?? ''}
        `}
        style={style}
      >
        <div
          className='relative'
        >
          <img
            src={image}
            alt='the uploaded file'
            draggable={false}
            className='
              select-none
              object-cover
              max-h-[50vh]
              border-4 border-dashed border-accent text-accent rounded-xl
            '
          />
          <div
            className={`
              ${result ? 'hidden' : ''}
              w-10 h-10
              duration-300
              cursor-pointer
              bg-red-600 text-primary
              hover:bg-red-800
              rounded-full
              absolute top-[-20px] right-[-20px]
              flex justify-center items-center
            `}
            onClick={onImageDelete}
          >
            X
          </div>
        </div>
      </div>
    )
}

export default ImageContainer;
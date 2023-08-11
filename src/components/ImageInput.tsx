import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CustomComponent } from "@types";

interface ImageInputProps extends CustomComponent {
    onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
  
const ImageInput = ({onImageChange, id, className, style}: ImageInputProps): JSX.Element => {
    return (
      <div
        id={id ?? 'image-input'}
        className={`
          ${className ?? ''}
          w-1/2
        `}
        style={style}
      >
        <label
          htmlFor='image'
          className='
            text-5xl
            h-52
            cursor-pointer
            flex justify-center items-center
            bg-[#D1CDDF]
            border-4 border-dashed border-accent text-accent rounded-xl
            ease-in-out duration-300
            hover:bg-accent hover:text-primary hover:border-primary
          '
        >
          <div className='flex justify-center items-center'>
            <FontAwesomeIcon icon={faFileCirclePlus} />
            <span className='text-xl ms-5'>
              Add your file
            </span>
          </div>
        </label>
        <input
          id='image'
          className='hidden invisible'
          type='file'
          accept='image/jpeg, image/png, image/jpg'
          onChange={onImageChange}
          multiple={false}
        />
      </div>
    )
}

export default ImageInput;
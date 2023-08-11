import { useState } from 'react';

import axios, { AxiosRequestConfig } from 'axios';

import { Button, ImageContainer, ImageInput, Spinner } from 'components';

import './App.css'

const App = () => {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const imageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files![0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  }

  const deleteImage = () => {
    setImage(null);
  }

  const uploadImage = async () => {
    if(!image) return;
    setLoading(true);
    const server = import.meta.env.VITE_SERVER_LOCATION;
    const data = {
      image: image
    }
    const config: AxiosRequestConfig = {
      url: `${server}/upload/detect`,
      method: 'post',
      data: data
    }

    await axios(config)
      .then(res => {
        const newImg = res.data.image as string;
        setImage(newImg);
        setResult(true);
    })

    setLoading(false);  
  }

  const reset = () => {
    setImage(null);
    setResult(false);
  }

  return (
    <div
      className='
        pt-8
        text-center
        bg-primary text-secondary
        min-h-screen
        flex flex-col
      '
    >
      <span
        className='text-5xl font-bold'
      >
        Object Detector
      </span>
      <span
        className='text-2xl mt-8'
      >
        Upload an Image:
      </span>
      <ImageInput
        className={`
          mt-8 mx-auto
          ${image? 'hidden' : ''}
        `}
        onImageChange={imageChange}
      />
      <ImageContainer
        className='mt-8 max-w-[50%] max-h-[50vh] mx-auto'
        image={image}
        onImageDelete={deleteImage}
        loading={loading}
        result={result}
      />
      <Button id='submit'
        className={`
          ${!image || result ? 'hidden' : ''}
          mt-8 mx-auto
        `}
        onClick={uploadImage}
      >
        {
          loading ?
          <Spinner />
          :
          'Submit'
        }
      </Button>
      <div
        className={`
          ${!result ? 'hidden' : ''}
          flex mx-auto mt-8
        `}
      >
        <a href={image!} download={'detected_image.jpg'}>
          <Button id='download'
            className='me-4'
          >
            Download Image
          </Button>
        </a>
        <Button id='reset'
          className='ms-4'
          onClick={reset}
        >
          Detect Again
        </Button>
      </div>
    </div>
  )
}

export default App

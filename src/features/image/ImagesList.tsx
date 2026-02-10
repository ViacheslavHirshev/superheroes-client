import type { GetImageDto } from "./dto/getImage.dto";
import Image from "./Image";
import style from "./image.module.css";

type ImagesListProps = {
  images: GetImageDto[];
  setImagesCount: React.Dispatch<React.SetStateAction<number>>;
};

function ImagesList({ images, setImagesCount }: ImagesListProps) {
  return (
    <ul className={style.imagesList}>
      {images.map((image) => (
        <Image
          key={image.id}
          id={image.id}
          url={image.url}
          setImagesCount={setImagesCount}
        />
      ))}
    </ul>
  );
}

export default ImagesList;

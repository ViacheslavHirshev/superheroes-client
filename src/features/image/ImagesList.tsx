import { useRef, useState } from "react";
import type { GetImageDto } from "./dto/getImage.dto";
import Image from "./Image";
import style from "./image.module.css";
import { uploadImages } from "./service/image.service";
import Button from "../../ui/button/Button";
import { MAX_IMAGES_ALLOWED } from "../../constants/constants";
import { useParams } from "react-router-dom";

type ImagesListProps = {
  images: GetImageDto[];
  setImagesCount: React.Dispatch<React.SetStateAction<number>>;
};

function ImagesList({ images, setImagesCount }: ImagesListProps) {
  const { id } = useParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleAddClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const formData = new FormData();

      Array.from(files).forEach((file) => {
        formData.append("images", file);
      });

      try {
        setIsUploading(true);
        await uploadImages(Number(id), formData);

        setImagesCount((prev) => prev + files.length);
      } catch (error) {
        console.error("Upload failed", error);
      } finally {
        setIsUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <span className={style.counter}>
          <strong>Images:</strong> {images.length} / {MAX_IMAGES_ALLOWED}
        </span>

        {images.length < MAX_IMAGES_ALLOWED && (
          <div className={style.uploadWrapper}>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
            <Button
              type="button"
              btnStyle="primary"
              clickHandler={handleAddClick}
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Add images"}
            </Button>
          </div>
        )}
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
      </div>
    </div>
  );
}

export default ImagesList;

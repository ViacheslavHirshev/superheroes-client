import { useState } from "react";
import { API_BASE_URL } from "../../constants/constants";
import style from "./image.module.css";
import Button from "../../ui/button/Button";
import { deleteImage } from "./service/image.service";

type ImageProps = {
  id: number;
  url: string;
  setImagesCount: React.Dispatch<React.SetStateAction<number>>;
};

function Image({ id, url, setImagesCount }: ImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  async function handleDelete() {
    try {
      await deleteImage(id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li
      className={style.imageContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <Button
          type="button"
          btnStyle="roundDanger"
          clickHandler={() => {
            handleDelete();
            setImagesCount((prev) => prev - 1);
          }}
        >
          X
        </Button>
      )}
      <img
        className={style.image}
        src={API_BASE_URL + url}
        alt={`Image ${id}`}
      />
    </li>
  );
}

export default Image;

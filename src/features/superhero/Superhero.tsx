import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { GetSuperheroDto } from "./dto/getSuperhero.dto";
import { getSuperheroById } from "./service/superhero.service";
import { API_BASE_URL, AVATAR_FALLBACK } from "../../constants/constants";
import style from "./superheroes.module.css";
import ImagesList from "../image/ImagesList";

function Superhero() {
  const id = useParams().id;

  const [superhero, setSuperhero] = useState<GetSuperheroDto | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imagesCount, setImagesCount] = useState(0);

  useEffect(() => {
    async function fetchSuperhero() {
      try {
        setIsLoading(true);

        const data = await getSuperheroById(Number(id));
        setSuperhero(data);
        setImagesCount(data.images.length);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSuperhero();
  }, [id, imagesCount]);

  if (isLoading) return <h2>Loading...</h2>;

  return superhero ? (
    <div className={style.superhero}>
      <img
        className={style.avatarBig}
        src={
          superhero.avatarUrl
            ? `${API_BASE_URL}${superhero.avatarUrl}`
            : AVATAR_FALLBACK
        }
        alt={superhero.nickname}
      />
      <div className={style.superheroInfo}>
        <h2>{superhero.nickname}</h2>
        <p>
          <strong>Real name:</strong> {superhero.realName}
        </p>
        <p>
          <strong>Origin:</strong> {superhero.originDescription}
        </p>
        <p>
          <strong>Superpowers:</strong> {superhero.superpowers}
        </p>
        <p>
          <strong>Catchphrase:</strong> {superhero.catchPhrase}
        </p>
      </div>
      <ImagesList images={superhero.images} setImagesCount={setImagesCount} />
    </div>
  ) : (
    <h2>Superhero not found</h2>
  );
}

export default Superhero;

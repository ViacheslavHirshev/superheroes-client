import { useNavigate } from "react-router-dom";
import style from "./superheroes.module.css";
import { API_BASE_URL, AVATAR_FALLBACK } from "../../constants/constants";

type SuperheroCardProps = {
  id: number;
  nickname: string;
  avatar_url: string | null;
};

function SuperheroCard({ id, nickname, avatar_url }: SuperheroCardProps) {
  const navigate = useNavigate();

  return (
    <li
      className={style.superheroCard}
      onClick={() => navigate(`/superheroes/${id}`)}
    >
      <img
        className={style.avatar}
        src={avatar_url ? `${API_BASE_URL + avatar_url}` : AVATAR_FALLBACK}
        alt={`${nickname} avatar`}
      />
      <h2>{nickname}</h2>
    </li>
  );
}

export default SuperheroCard;

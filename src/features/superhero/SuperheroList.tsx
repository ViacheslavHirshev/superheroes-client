import { useEffect, useState } from "react";
import style from "./superheroes.module.css";
import { getAllSuperheroes } from "./service/superhero.service";
import { useSearchParams } from "react-router-dom";
import SuperheroCard from "./SuperheroCard";
import Paginator from "../../ui/paginator/Paginator";
import type { GetAllSuperheroesDto } from "./dto/getAllSuperheroes.dto";
import Title from "../../ui/title/Title";

function SuperheroList() {
  const [data, setData] = useState<GetAllSuperheroesDto | null>(null);
  const [nickname, setNickname] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 5;

  const superheroes = data?.superheroes;

  useEffect(() => {
    async function fetchSuperheroes() {
      try {
        setIsLoading(true);
        const data = await getAllSuperheroes({ page, limit, nickname });

        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSuperheroes();
  }, [searchParams, nickname]);

  if (isLoading) return <div>Loading...</div>;

  return superheroes ? (
    <div className={style.superheroList}>
      <Title>Your superheroes</Title>
      <ul className={style.superheroesContainer}>
        {superheroes.length > 0 ? (
          superheroes.map((superhero) => (
            <SuperheroCard
              key={superhero.id}
              id={superhero.id!}
              nickname={superhero.nickname!}
              avatar_url={superhero.avatarUrl!}
            />
          ))
        ) : (
          <h2>
            No superheroes added 😢, start adding by clicking top-right button
            ↗️
          </h2>
        )}
      </ul>
      <Paginator totalPages={data.totalPages} limit={data.limit} />
    </div>
  ) : (
    <h2>No superheroes found</h2>
  );
}

export default SuperheroList;

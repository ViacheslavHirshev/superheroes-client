import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import type { GetSuperheroDto } from "./dto/getSuperhero.dto";
import { getSuperheroById, updateSuperhero } from "./service/superhero.service";
import { API_BASE_URL, AVATAR_FALLBACK } from "../../constants/constants";
import style from "./superheroes.module.css";
import ImagesList from "../image/ImagesList";
import Button from "../../ui/button/Button";
import UpdateModal from "../../ui/modal/UpdateModal";

function Superhero() {
  const { id } = useParams();

  const [superhero, setSuperhero] = useState<GetSuperheroDto | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imagesCount, setImagesCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    nickname: "",
    realName: "",
    originDescription: "",
    superpowers: "",
    catchPhrase: "",
  });

  const updateAvatarRef = useRef<HTMLInputElement>(null);

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

  async function updateAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);

      try {
        setIsLoading(true);

        const updatedSuperhero = await updateSuperhero(Number(id), formData);
        setSuperhero(updatedSuperhero);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);

        if (updateAvatarRef.current) {
          updateAvatarRef.current.value = "";
        }
      }
    }
  }

  async function deleteAvatar() {
    const formData = new FormData();
    formData.append("deleteAvatar", "true");

    try {
      setIsLoading(true);
      const udated = await updateSuperhero(Number(id), formData);

      setSuperhero(udated);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleAvatarPick() {
    updateAvatarRef.current?.click();
  }

  function openEditModal() {
    if (superhero) {
      setEditFormData({
        nickname: superhero.nickname || "",
        realName: superhero.realName || "",
        originDescription: superhero.originDescription || "",
        superpowers: superhero.superpowers || "",
        catchPhrase: superhero.catchPhrase || "",
      });
      setIsModalOpen(true);
    }
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleEditSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nickname", editFormData.nickname);
    formData.append("realName", editFormData.realName);
    formData.append("originDescription", editFormData.originDescription);
    formData.append("superpowers", editFormData.superpowers);
    formData.append("catchPhrase", editFormData.catchPhrase);

    try {
      setIsLoading(true);

      const updatedSuperhero = await updateSuperhero(Number(id), formData);
      setSuperhero(updatedSuperhero);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <h2>Loading...</h2>;

  return superhero ? (
    <div className={style.superhero}>
      <div className={style.avatarBigContainer}>
        <input
          type="file"
          ref={updateAvatarRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={updateAvatar}
        />
        <img
          className={style.avatarBig}
          src={
            superhero.avatarUrl
              ? `${API_BASE_URL}${superhero.avatarUrl}`
              : AVATAR_FALLBACK
          }
          alt={superhero.nickname}
        />
        <div className={style.buttons}>
          <Button
            type="button"
            btnStyle="primary"
            clickHandler={handleAvatarPick}
          >
            Update
          </Button>
          <Button type="button" btnStyle="danger" clickHandler={deleteAvatar}>
            Delete
          </Button>
        </div>
      </div>
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
        <div className={style.editBtn}>
          <Button type="button" btnStyle="primary" clickHandler={openEditModal}>
            Edit
          </Button>
        </div>
      </div>
      <ImagesList images={superhero.images} setImagesCount={setImagesCount} />
      {isModalOpen && (
        <UpdateModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleEditSubmit={handleEditSubmit}
          editFormData={editFormData}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  ) : (
    <h2>Superhero not found</h2>
  );
}

export default Superhero;

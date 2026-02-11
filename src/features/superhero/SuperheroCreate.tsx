import { useNavigate } from "react-router-dom";
import { createSuperhero } from "./service/superhero.service";
import Button from "../../ui/button/Button";
import style from "./superheroes.module.css";

function SuperheroCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const created = await createSuperhero(formData);
      navigate(`/superheroes/${created.id}`);
    } catch (error) {
      console.error("Failed to create", error);
    }
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Create New Hero</h2>

      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.inputGroup}>
          <label htmlFor="nickname" className={style.label}>
            Nickname
          </label>
          <input
            id="nickname"
            name="nickname"
            className={style.input}
            placeholder="e.g. Superman"
            required
          />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="realName" className={style.label}>
            Real Name
          </label>
          <input
            id="realName"
            name="realName"
            className={style.input}
            placeholder="e.g. Clark Kent"
            required
          />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="origin" className={style.label}>
            Origin Story
          </label>
          <textarea
            id="origin"
            name="originDescription"
            className={style.textarea}
            placeholder="Describe how he/she became a hero..."
          />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="powers" className={style.label}>
            Superpowers
          </label>
          <textarea
            id="powers"
            name="superpowers"
            className={style.textarea}
            placeholder="Flying, laser eyes, super strength..."
          />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="phrase" className={style.label}>
            Catchphrase
          </label>
          <input
            id="phrase"
            name="catchPhrase"
            className={style.input}
            placeholder='e.g. "Up, up and away!"'
          />
        </div>

        <div className={style.fileGroup}>
          <label className={style.fileLabel}>Hero Avatar</label>
          <input
            type="file"
            name="avatar"
            accept="image/*"
            className={style.fileInput}
          />
        </div>

        <div className={style.fileGroup}>
          <label className={style.fileLabel}>Images (Max 10)</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            className={style.fileInput}
          />
        </div>

        <div className={style.buttonWrapper}>
          <Button btnStyle="primary" type="submit">
            Create Superhero
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SuperheroCreate;

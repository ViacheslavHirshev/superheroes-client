import Button from "../button/Button";
import style from "./modal.module.css";

type UpdateModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditSubmit: React.SubmitEventHandler<HTMLFormElement>;
  editFormData: {
    nickname: string;
    realName: string;
    originDescription: string;
    superpowers: string;
    catchPhrase: string;
  };
  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
};

function UpdateModal({
  isModalOpen,
  setIsModalOpen,
  handleEditSubmit,
  editFormData,
  handleInputChange,
}: UpdateModalProps) {
  return (
    isModalOpen && (
      <div
        className={style.modalBackdrop}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className={style.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Edit Superhero</h3>
          <form onSubmit={handleEditSubmit}>
            <div className={style.formGroup}>
              <label>Nickname</label>
              <input
                type="text"
                name="nickname"
                value={editFormData.nickname}
                onChange={handleInputChange}
              />
            </div>

            <div className={style.formGroup}>
              <label>Real Name</label>
              <input
                type="text"
                name="realName"
                value={editFormData.realName}
                onChange={handleInputChange}
              />
            </div>

            <div className={style.formGroup}>
              <label>Origin</label>
              <textarea
                name="originDescription"
                rows={3}
                value={editFormData.originDescription}
                onChange={handleInputChange}
              />
            </div>

            <div className={style.formGroup}>
              <label>Superpowers</label>
              <input
                type="text"
                name="superpowers"
                value={editFormData.superpowers}
                onChange={handleInputChange}
              />
            </div>

            <div className={style.formGroup}>
              <label>Catchphrase</label>
              <input
                type="text"
                name="catchPhrase"
                value={editFormData.catchPhrase}
                onChange={handleInputChange}
              />
            </div>

            <div className={style.modalActions}>
              <Button
                btnStyle="danger"
                clickHandler={() => setIsModalOpen(false)}
                type="button"
              >
                Cancel
              </Button>

              <Button type="submit" btnStyle="primary">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default UpdateModal;

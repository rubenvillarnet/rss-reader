import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import StyledFeedupdater, { StyledFeedForm } from "./FeedUpdater.style";
import Modal from "react-modal";
import Button from "components/atoms/Button/Button";
import { useAppSelector } from "hooks/redux";

type Inputs = {
  feedQuery: string;
};

export default function FeedUpdater() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  Modal.setAppElement("#root");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <StyledFeedupdater>
      <span onClick={handleOpenModal}>Update Feed</span>
      <Modal isOpen={showModal} onRequestClose={handleCloseModal} shouldCloseOnEsc>
        <StyledFeedForm onSubmit={handleSubmit(onSubmit)}>
          <h2>Change the feed</h2>
          <p>Enter the url of a valid RSS feed</p>
          <input {...register("feedQuery")} />
          <div className="buttons">
            <Button type="submit">Update</Button>
            <Button onClick={handleCloseModal} style="danger">
              Cancel
            </Button>
          </div>
        </StyledFeedForm>
      </Modal>
    </StyledFeedupdater>
  );
}

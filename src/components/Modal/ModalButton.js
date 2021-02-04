import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./Modal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  background: #333;
  color: #fff;
  cursor: pointer;
`;

const ModalButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal showModal={showModal} />
    </Container>
  );
};

export default ModalButton;

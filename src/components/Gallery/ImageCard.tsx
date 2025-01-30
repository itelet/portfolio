import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";

const ImageCard = ({ imageSrc, title, text }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Card with only Image */}
      <Card className="cursor-pointer border-[2px] border-black w-60" onClick={() => setShow(true)} style={{ borderRadius: 0 }}>
        <Card.Img variant="top" src={imageSrc} />
      </Card>

      {/* Modal with Image and Text */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="text-center bg-[#1e1e1e] p-0">
          <img src={imageSrc} alt={title} className="w-full" />
          <p className="p-3">{text}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageCard;
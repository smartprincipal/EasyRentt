import React from 'react'
import Modal from "react-bootstrap/Modal";
import { Carousel } from 'react-responsive-carousel';


export default function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Carousel className='viewmorecarousel' autoPlay='true' infiniteLoop='true' interval='3000' showThumbs={false}>
                <div>
                    
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Carousel>
        </Modal.Body>
      </Modal>
    );
  }
  
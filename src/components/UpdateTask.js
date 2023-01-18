import React,{useContext, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form  from 'react-bootstrap/Form';
import { TasksContext } from "../context/TasksContext";

const MyVerticallyCenteredModal = (props) => {
  const {state, dispatch} = useContext(TasksContext);
  const {specificTask} = state;
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [id, setId] = useState();
    useEffect(()=> {
      if(Object.keys(specificTask).length !== 0){
        setTitle(specificTask.title)
        setDescription(specificTask.description)
        setId(specificTask.id)
      }
    },[specificTask])
    const updateTask = () => {
        props.onHide()
        dispatch({type: 'UPDATE_TASK', payload: {description, title, id}})
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
            <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
              Update Task
            </Button>
          </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;

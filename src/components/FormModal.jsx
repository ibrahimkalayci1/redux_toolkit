import { Button, Form, Modal, ModalFooter } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/crudSlice";

const FormModal = ({isOpen,handleClose}) => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        
        e.preventDefault();

        //form data örneği oluştur
        const formData = new FormData(e.target);
        //inputlardaki bilgileei nesneye cevir
        const taskData = Object.fromEntries(formData.entries());
        //reducer a yeni task ın eklenecegini haber verdik
        dispatch(addTask(taskData));
        handleClose();
    };
  
  
    return (
   <Modal centered show={isOpen} className="text-black">
    <Modal.Header>
        <Modal.Title>Yeni görev ekle</Modal.Title>
 
    </Modal.Header>
   
    <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
            <Form.Group>
                <Form.Label> Görev Başlığı </Form.Label>
                <Form.Control name="title" 
                placeholder="Navbar' ı Düzenle"
                 required defaultValue={"varsayılan değer"}
                />
            </Form.Group>
           
            
             <Form.Group>
             <Form.Label>"isminiz"</Form.Label>
             <Form.Control
             name="author"
             required
             defaultValue={"varsayılan değer"}
            />
            </Form.Group>

            <Form.Group>
             <Form.Label>"Atanacak Kişinin İsmi"</Form.Label>
             <Form.Control
             name="assigment_to"
             required
              defaultValue={"varsayılan değer"}
             />
            </Form.Group>

            <Form.Group>
             <Form.Label>"Son Teslim Tarihi"</Form.Label>
             <Form.Control
             name="End_Date"
             required
             type="date"
              defaultValue={"varsayılan değer"}
             />
            </Form.Group>
       
    <ModalFooter>
        <Button onClick={handleClose} variant="danger" type="button">İptal</Button>
        <Button type="submit">Oluştur</Button>
    </ModalFooter>
    </Form>
    </Modal.Body>
   </Modal>
  )
}

export default FormModal

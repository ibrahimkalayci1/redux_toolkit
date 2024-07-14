import  { useState } from 'react'
import { Button, ButtonGroup, Stack, Table } from 'react-bootstrap'
import FormModal from '../components/FormModal'
import { useSelector } from 'react-redux'

const Crud = () => {
 const {isDarkTheme} = useSelector((store) => store.counterReducer)

   const {tasks} = useSelector((store) => store.crudReducer);
   



const[isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Stack className='align-items-center my-4'>
        <Button onClick={() => setIsOpen(true)}>
          Yeni görev ekle
        </Button>
      </Stack>



    <Table variant={isDarkTheme ? "dark" : "light" }>
      <thead>
        <tr>
          <th>#</th>
          <th>Görev</th>
          <th>Yazar</th>
          <th>Atanan</th>
          <th>Tarih</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {state?.tasks?.map((task,i)=>(
          <tr>
            <td>{i}</td>
            <td>{task.title}</td>
            <td>{task.author}</td>
            <td>{task.assigned_to}</td>
            <td>{task.end_date}</td>
          </tr>
        ))}
      </tbody>
      
    </Table>

      <FormModal isOpen={isOpen} handleClose = {()=>setIsOpen(false)}/>
    </div>
  )
}

export default Crud

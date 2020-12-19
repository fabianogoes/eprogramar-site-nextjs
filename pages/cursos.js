import NavBar from '../components/NavBar'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Cursos() {
    return (
        <div>
            <NavBar />   
            <div className="d-flex justify-content-center">
                <Spinner type="grow" color="success" />  
            </div>
            Cursos e-Programar!
        </div>
    )
  }
  
  export default Cursos
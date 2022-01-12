import { Link } from "react-router-dom"
const Buttons=()=>{
    return(<ul className="list-group " >
    <li className="" >
      <Link to='/theme1' className="btn btn-primary" type="button">template1</Link>
    </li>
    <li  className="">
      <Link to='/theme3' className="btn btn-primary " type="button">template2</Link>
    </li>
    <li className="">
      <Link to='/theme1' className="btn btn-primary" type="button">template3</Link>
    </li>
  </ul>)
}
export default Buttons
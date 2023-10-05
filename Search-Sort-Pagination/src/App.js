import { useState, useEffect } from "react"
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdown,
  MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import axios from "axios"
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage , setCurentPage] = useState(0);
  const [pageLimit] = useState(5);
  const [sortFilterValue , setSortFilterValue] = useState("")
  const [operation , setOperation] = useState("")
  

  const sortOptions = ['name' , 'email' , 'address' , 'profile' , 'status']

  useEffect(() => {
    loadUserData(0 , 3 , 0);
  }, [])


  const loadUserData = async (start , end , increment , opType=null , filterOrSortValue) => {
    switch(opType){
        case "search":
            setOperation(opType);
            setSortValue("")
            return await axios.get(`http://localhost:5000/users?q=${value}&_start=${start}&_end=${end}`)
                        .then(res => {
                            setData(res.data);
                            setCurentPage(currentPage + increment);
                          })
                        .catch(err => console.log(err))

        case "sort":
            setOperation(opType);
            setSortFilterValue(filterOrSortValue)
            return await axios.get(`http://localhost:5000/users?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`)
                              .then(res =>{ 
                                setData(res.data);
                                setCurentPage(currentPage + increment);
                              })
                              .catch(err => console.log(err))


        case "filter":
          setOperation(opType);
          setSortFilterValue(filterOrSortValue)
          return await axios.get(`http://localhost:5000/users?status=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`)
                            .then(res =>{ 
                              setData(res.data);
                              setCurentPage(currentPage + increment);
                            })
                            .catch(err => console.log(err))

        default :
            const data = await axios.get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
                                    .then(res => {
                                      setData(res.data);
                                      setCurentPage(currentPage + increment);
                                    })
                                    .catch(err => console.log(err));
      
            return data;
    }
  }


  // RESET function
  const handleReset = ()=>{
    setOperation("")
    setValue("")
    setSortFilterValue("")
    setSortValue("")
    loadUserData(0,3,0);
  }


  // searching function
  const handleSearch = async (e)=>{
    e.preventDefault();

    loadUserData(0,4,0,"search");

    // return await axios.get(`http://localhost:5000/users?q=${value}`)
    //                   .then(res => {
    //                       setData(res.data);
    //                       setValue("");
    //                     })
    //                   .catch(err => console.log(err))
  }


  // sorting according to column
  const handleSort = async (value)=>{
    setSortValue(value);
    loadUserData(0,3,0,"sort",value);

    // return await axios.get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
    //                   .then(res => setData(res.data))
    //                   .catch(err => console.log(err))
  }


  // filtering data based on status 
  const handleFilter = async (value)=>{

    loadUserData(0,3,0,"filter",value)

    // return await axios.get(`http://localhost:5000/users?status=${value}`)
    //                   .then(res => setData(res.data))
    //                   .catch(err => console.log(err))
  }


  // Pagination function
  const renderPagination = ()=>{
    if(data.length < 3 && currentPage === 0) return null;

    if(currentPage === 0){
      return(
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink><b>1.</b></MDBPaginationLink>
          </MDBPaginationItem>

          <MDBPaginationItem>
            <MDBBtn onClick={()=> loadUserData(3,6,1,operation,sortFilterValue)}>Next</MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      )
    }
    else if(currentPage < pageLimit - 1 ){
      return(
        <MDBPagination className="mb-0">
            <MDBPaginationItem>
              <MDBBtn onClick={()=> loadUserData((currentPage-1)*3 ,(currentPage*3) , -1 , operation,sortFilterValue)}>Prev</MDBBtn>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink><b>{currentPage + 1}.</b></MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBBtn onClick={()=> loadUserData((currentPage+1)*3 ,(currentPage+2)*3 , 1 , operation,sortFilterValue)}>Next</MDBBtn>
            </MDBPaginationItem>
          </MDBPagination>
      )
    }
    else{
        return(
          <MDBPagination className="mb-0">
            <MDBPaginationItem>
              <MDBBtn onClick={()=> loadUserData((currentPage-1)*3 ,(currentPage*3) , -1 , operation,sortFilterValue)}>Prev</MDBBtn>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink><b>{currentPage + 1}.</b></MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
      )
    }
    
  }



  return (
    <>

    {/* SEARCH BOX */}
    <form 
    style={{
      margin:"auto",
      padding:"15px",
      maxWidth:"400px",
      alignContent:"center",
     
    }} 
    className="d-flex input-group w-150" onSubmit={handleSearch}>

      <input type="text" className="form-control mx-2 w-100" placeholder="search name" 
        value={value} onChange={(e)=> setValue(e.target.value)}/>

      <MDBBtn className="mx-1 w-50" type="submit" color="warning">Search</MDBBtn>

    </form>


    {/* BUTTONS  */}
    

    
    <div className="d-flex justify-content-center" style={{marginTop:"1rem"}}>
      <MDBDropdown className="mx-3">
        <MDBDropdownToggle>Sort By</MDBDropdownToggle>
        <MDBDropdownMenu>
          {
            sortOptions.map((items , idx)=>(
              <MDBDropdownItem link key={idx} 
              onClick={()=>handleSort(items)} value={sortValue}>{items}</MDBDropdownItem>
            ))
          }
          
        </MDBDropdownMenu>
      </MDBDropdown>


      <MDBDropdown className="mx-3">
        <MDBDropdownToggle>Filter By Status</MDBDropdownToggle>
        <MDBDropdownMenu>
            <MDBDropdownItem link onClick={()=>handleFilter("Active")}>Active</MDBDropdownItem>
            <MDBDropdownItem link onClick={()=>handleFilter("Inactive")}>Inactive</MDBDropdownItem>
            <MDBDropdownItem link onClick={()=>handleFilter("On Hold")}>On Hold</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <MDBBtn style={{backgroundColor:"green"}} className="mx-3" onClick={()=>handleReset() }>Reset</MDBBtn>
    </div>
    
      

      


    {/* HEADER */}
    <div style={{color : "red",
              textAlign:"center",
              fontSize : "2rem",
              padding : "1rem"}}>
              ABC Coorporation Employee Details
    </div>


    {/* DATA TABLE */}
    <MDBTable align='align-center mb-0'>
      <MDBTableHead dark>
        <tr>
          <th scope='col'>Sl.No.</th>
          <th scope='col'>Employee Name</th>
          <th scope='col'>Address</th>
          <th scope='col'>Profile</th>
          <th scope='col'>Status</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      {
        data.length === 0 ?
          (<MDBTableBody className="align-center mb-0">
            <tr>
              <td colSpan={8} className="text-center mb-0">NO DATA FOUND!!!</td>
            </tr>
          </MDBTableBody>)
          :
          (
            data.map((items, idx) => (
              <MDBTableBody key={idx}>
                <tr>
                    <td>
                    <p className='fw-bold mb-1'>{items.id}.</p>
                    </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>{items.name}</p>
                        <p className='text-muted mb-0'>{items.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{items.address}</p>
                    <p className='text-muted mb-0'>IT department</p>
                  </td>

                  <td>{items.profile}</td>
                  <td>
                    <MDBBadge style={{fontSize:"0.8rem"}}>
                      {items.status}
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBtn color='link' rounded size='sm'>
                      Edit
                    </MDBBtn>
                  </td>
                </tr>
              </MDBTableBody>
            ))
          )
      }
    </MDBTable>


    {/* PAGINATION */}
    <div  style={{
      margin:"auto",
      padding:"20px",
      maxWidth:"150px",
      alignContent:"center",
     
    }}>
      {renderPagination()}
    </div>

    </>
  );
}

export default App;

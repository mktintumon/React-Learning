import { useSelector , useDispatch} from "react-redux";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { removeUser } from "../store/slices/UserSlice";

export const DisplayUsers = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const DeleteUser = (id) =>{
    dispatch(removeUser(id));
  }

  return (
    <Wrapper>
      
      {data.map((data, id) => {
        return (
          <div>
          <hr />
          <li key={id} className="data">
            
            {data}

            <button className="delete-btn" onClick={()=>DeleteUser(id)}>
              <AiFillDelete className="delete-icon"></AiFillDelete>
            </button>
            
          </li>
      </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  li{
    padding : 1rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.5rem;
    color: red;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
    display:block;
    text-align:right;
    white-space:nowrap;
    padding-left:2rem;
    float:right;
}
  }
  .data{
    display:flex;
    flex-direction:row;
    justify-content:space-end;
  }
`;

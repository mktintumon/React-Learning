import React from "react";
import styled from "styled-components";
import { DeleteAllUsers } from "./DeleteAllUsers";
import { fakeUserData } from "../fake-api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import { DisplayUsers } from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (data) => {
    console.log(data);
    dispatch(addUser(data));
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>

          <button
            onClick={() => addNewUser(fakeUserData())}
            className="btn add-btn"
          >
            Add New Users
          </button>
          <DeleteAllUsers />
        </div>

        <ul>
          <DisplayUsers />
        </ul>
        <hr />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;

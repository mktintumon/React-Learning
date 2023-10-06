import React from "react";
import styled from "styled-components";
import { clearAllUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const Wrapper = styled.section`
  .clear-btn {
    border: none;
    outline: none;
  }
`;

export const DeleteAllUsers = () => {

  const dispatch = useDispatch();

  const deleteUsers = () =>{
    dispatch(clearAllUsers())
  }

  return (
    <Wrapper>
      <button onClick={deleteUsers} className="btn clear-btn">
        Clear All
      </button>
    </Wrapper>
  );
};

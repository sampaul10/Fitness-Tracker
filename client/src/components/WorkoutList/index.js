import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../../utils/queries";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import { REMOVE_WORKOUT } from "../../utils/mutations";
import { removeWorkoutId } from "../../utils/localStorage";
import { AddWorkoutForm } from "../AddWorkoutForm";
import Auth from "../../utils/auth";

function WorkoutList() {
  const { loading, data } = useQuery(GET_USER); // or GET_USER
  const [removeWorkout] = useMutation(REMOVE_WORKOUT);
  

  const userData = data?.me || {};

  return (
    <>
      <div>




      </div>
    </>
  );
}

export default WorkoutList;

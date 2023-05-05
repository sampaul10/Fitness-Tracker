//pop up alert for adding workout as form element
import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { ADD_WORKOUT } from "../utils/mutations";
import { removeWorkoutId } from "../utils/localStorage";
import Auth from "../utils/auth";


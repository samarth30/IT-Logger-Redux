import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types.js";

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("http://localhost:5000/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};
// add a new tech
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("http://localhost:5000/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};

// delete tech from server
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`http://localhost:5000/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};

// set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};

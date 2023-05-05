export const getSavedWorkoutIds = () => {
    const savedWorkoutIds = localStorage.getItem('saved_Workouts')
      ? JSON.parse(localStorage.getItem('saved_Workouts'))
      : [];
  
    return savedWorkoutIds;
  };
  
  export const saveWorkoutIds = (WorkoutIdArr) => {
    if (WorkoutIdArr.length) {
      localStorage.setItem('saved_Workouts', JSON.stringify(WorkoutIdArr));
    } else {
      localStorage.removeItem('saved_Workouts');
    }
  };
  
  export const removeWorkoutId = (WorkoutId) => {
    const savedWorkoutIds = localStorage.getItem('saved_Workouts')
      ? JSON.parse(localStorage.getItem('saved_Workouts'))
      : null;
  
    if (!savedWorkoutIds) {
      return false;
    }
  
    const updatedSavedWorkoutIds = savedWorkoutIds?.filter((savedWorkoutId) => savedWorkoutId !== WorkoutId);
    localStorage.setItem('saved_Workouts', JSON.stringify(updatedSavedWorkoutIds));
  
    return true;
  };
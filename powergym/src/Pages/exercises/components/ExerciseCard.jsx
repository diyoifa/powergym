import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "var(--color-gray-200)",
            background: "var(--color-primary)",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontWeight: "bolder",
          }}
        >
          {exercise.bodyPart}
        </Button>

        <Button
          sx={{
            ml: "21px",
            color: "var(--color-gray-200)",
            background: "var(--color-gray-600)",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontWeight: "bolder",
          }}
        >
          {exercise.target}
        </Button>

        <Typography
          ml="21px"
          color="#000"
          fontWeight="bolder"
          mt="11px"
          pv="10px"
          textTransform="capitalize"
          fontSize="18px"
        >
          {exercise.name}
        </Typography>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;

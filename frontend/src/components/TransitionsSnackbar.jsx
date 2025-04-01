import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";

// Custom styled Snackbar
const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

export default function TransitionsSnackbar({ open, message, onClose, transition }) {
  return (
    <StyledSnackbar
      open={open}
      onClose={onClose}
      autoHideDuration={3000}
      message={message}
      TransitionComponent={transition || SlideTransition}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: '#ffffff', // Green color for success, change as needed
          color: '#764B36',
          fontSize: '16px'
        },
      }}
    />
  );
}
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "400px",
  bgcolor: "background.paper",
  borderRadius: "30px",
  boxShadow: 24,
  p: 4,
};

type TCheckoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CheckoutModal: React.FC<TCheckoutModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          spacing={5}
          alignItems="stretch"
        >
          <Typography
            fontSize="25px"
            fontWeight="700"
            lineHeight="31px"
            color="black"
          >
            Страница оформления покупки
          </Typography>

          <CircularProgress size={150} style={{ alignSelf: "center" }} />
        </Stack>
      </Box>
    </Modal>
  );
};

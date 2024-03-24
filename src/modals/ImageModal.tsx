import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { TProduct } from "types/Product";

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

type TImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: TProduct;
};

export const ImageModal: React.FC<TImageModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <Box padding="6px 24px 24px 24px">
          <Box
            height="290px"
            sx={{
              backgroundImage: `url(${product.img})`,
              backgroundSize: "content",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          />
        </Box>
      </Box>
    </Modal>
  );
};

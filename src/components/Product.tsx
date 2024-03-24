import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";

import { TProduct } from "types/Product";
import { addProduct } from "store/slices";
import { ImageModal } from "modals/ImageModal";

type ProductTextComponentProps = TypographyProps & {
  children: string;
};

const ProductTextComponent: React.FC<ProductTextComponentProps> = ({
  children,
  ...restProps
}) => {
  return (
    <Typography
      fontSize="17px"
      fontWeight="600"
      lineHeight="21px"
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export const Product: React.FC<TProduct> = (props) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: TProduct
  ) => {
    dispatch(addProduct(product));
  };

  return (
    <React.Fragment>
      <ImageModal isOpen={open} onClose={handleClose} product={props} />

      <Card
        sx={{
          width: "350px",
          height: "407px",
          margin: "8px",
          borderRadius: "30px",
        }}
      >
        <Box padding="6px 24px 24px 24px">
          <Box
            height="290px"
            sx={{
              backgroundImage: `url(${props.img})`,
              backgroundSize: "auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <Button
              style={{ width: "100%", height: "100%", borderRadius: "30px" }}
              onClick={handleOpen}
            ></Button>
          </Box>
        </Box>

        <CardContent sx={{ height: "40px" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <ProductTextComponent marginLeft="10px">
              {props.title}
            </ProductTextComponent>

            <ProductTextComponent
              color="#FFCE7F"
              marginRight="10px"
            >{`${new Intl.NumberFormat("ru").format(
              props.price
            )} ₽`}</ProductTextComponent>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Rating name="read-only" value={props.rate} max={1} />
              <ProductTextComponent marginLeft="10px">
                {String(props.rate)}
              </ProductTextComponent>
            </Stack>
            <Button
              onClick={(event) => {
                addToCart(event, props);
              }}
            >
              <ProductTextComponent color="black">Купить</ProductTextComponent>
            </Button>
          </Box>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { TProduct } from "types/Product";
import { increaseCount, decreaseCount, removeProduct } from "store/slices";

type TCartItemProps = {
  product: TProduct;
  quantity: number | undefined;
};

export const CartItem: React.FC<TCartItemProps> = ({ product, quantity }) => {
  const dispatch = useDispatch();

  const removeFromCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: TProduct
  ) => {
    dispatch(removeProduct(product));
  };

  const increaseCountProduct = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: TProduct
  ) => {
    dispatch(increaseCount(product));
  };

  const decreaseCountProduct = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: TProduct
  ) => {
    dispatch(decreaseCount(product));
  };

  const getSumCurrentProduct = () => {
    if (quantity) return product.price * quantity;
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "150px",
        marginBottom: "16px",
        borderRadius: "30px",
      }}
    >
      <Stack direction="row" width="100%" height="100%">
        <Stack direction="column" width="33%" height="100%">
          <Box padding="6px 6px 6px 6px" width="100%" height="80%">
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: `url(${product.img})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            />
          </Box>
          <Stack
            direction="row"
            width="100%"
            height="20%"
            justifyContent="center"
            alignItems="center"
          >
            <Button onClick={(event) => decreaseCountProduct(event, product)}>
              <RemoveCircleIcon color="warning" />
            </Button>
            <Typography fontSize="17px" fontWeight="600" lineHeight="21px">
              {quantity}
            </Typography>
            <Button onClick={(event) => increaseCountProduct(event, product)}>
              <AddCircleIcon color="warning" />
            </Button>
          </Stack>
        </Stack>

        <Stack
          direction="column"
          width="33%"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography
            marginLeft="10px"
            fontWeight="500"
            fontSize="17px"
            lineHeight="21px"
          >
            {product.title}
          </Typography>

          <Typography
            marginLeft="10px"
            fontWeight="600"
            fontSize="15px"
            lineHeight="21px"
            color="#AAAAAA"
          >
            {`${new Intl.NumberFormat("ru").format(product.price)} ₽`}
          </Typography>
        </Stack>

        <Stack
          direction="column"
          width="33%"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Button
            onClick={(event) => {
              removeFromCart(event, product);
            }}
          >
            <DeleteForeverOutlinedIcon color="warning" fontSize="large" />
          </Button>
          <Typography fontSize="15px" fontWeight="600" lineHeight="19px" m={1}>
            {`${new Intl.NumberFormat("ru").format(
              Number(getSumCurrentProduct())
            )} ₽`}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

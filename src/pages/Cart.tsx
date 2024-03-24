import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { CartItem } from "components/CartItem";
import { TRootStore } from "store/store";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { CheckoutModal } from "modals/CheckoutModal";

export const Cart: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const orderedProducts = useSelector(
    (state: TRootStore) => state.orderedProducts.orderedProducts
  );

  const chosenProductsIds = useSelector(
    (state: TRootStore) => state.orderedProducts.chosenProductsIds
  );

  const getSum = () => {
    let sum = 0;
    chosenProductsIds.forEach((chosenProduct) => {
      const targetOrderedProduc = orderedProducts.find(
        (orderedProduct) => orderedProduct.id === chosenProduct.id
      );
      if (targetOrderedProduc) {
        return (sum += targetOrderedProduc.price * chosenProduct.count);
      }
    });
    return sum;
  };

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box flex="1 0 auto">
        <Container maxWidth="lg">
          <Header />

          <CheckoutModal isOpen={open} onClose={handleClose} />

          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={3}
            justifyContent="center"
            width="100%"
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              alignContent="space-between"
              minWidth="50%"
              marginBottom={2}
            >
              {orderedProducts.map((product) => {
                return (
                  <CartItem
                    key={product.id}
                    product={product}
                    quantity={
                      chosenProductsIds &&
                      chosenProductsIds.find((el) => el.id === product?.id)
                        ?.count
                    }
                  />
                );
              })}
            </Stack>

            <Stack
              direction="column"
              minHeight="180px"
              maxHeight="180px"
              marginTop={2}
            >
              <Card
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "16px 16px 16px 16px",
                  borderRadius: "30px",
                  justifyContent: "space-between",
                  height: "80%",
                }}
              >
                <Typography fontSize="15px" fontWeight="600" lineHeight="19px">
                  ИТОГО:
                </Typography>
                <Typography fontSize="15px" fontWeight="600" lineHeight="19px">
                  {`₽ ${new Intl.NumberFormat("ru").format(Number(getSum()))}`}
                </Typography>
              </Card>

              <Button
                style={{
                  width: "100%",
                  height: "80%",
                  border: "1px",
                  backgroundColor: "black",
                  borderRadius: "30px",
                  top: "-22%",
                }}
                onClick={handleOpen}
              >
                <Typography
                  fontSize="17px"
                  fontWeight="600"
                  lineHeight="21px"
                  color="white"
                >
                  Перейти к оформлению
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box flex="0 0 auto" minHeight="80px">
        <Container maxWidth="lg">
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

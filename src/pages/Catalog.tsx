import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { products, categories } from "products";
import { Product } from "components/Product";
import { TProduct } from "types/Product";
import { TCategory } from "types/Category";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

export const Catalog: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box flex="1 0 auto">
        <Container maxWidth="lg">
          <Header />
          {categories.map((cat: TCategory) => {
            return (
              <React.Fragment key={cat.id}>
                <Typography>{cat.title}</Typography>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  padding="8px 8px 24px 8px"
                >
                  {products.map((product: TProduct) => {
                    if (cat.id === product.categoryId) {
                      return (
                        <Product
                          key={product.id}
                          id={product.id}
                          title={product.title}
                          rate={product.rate}
                          price={product.price}
                          img={product.img}
                          categoryId={product.categoryId}
                        />
                      );
                    } else {
                      return undefined;
                    }
                  })}
                </Stack>
              </React.Fragment>
            );
          })}
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

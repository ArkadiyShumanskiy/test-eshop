import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Toolbar from "@mui/material/Toolbar";

import { TRootStore } from "store/store";

export const Header: React.FC = () => {
  const orderedProducts = useSelector(
    (state: TRootStore) => state.orderedProducts.orderedProducts
  );
  const navigate = useNavigate();
  const goToCart = () => navigate("/cart");
  const goToCatalog = () => {
    navigate("/");
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#EAEAEA",
        boxShadow: "none",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "1110px",
            height: "60px",
          }}
        >
          <Button color="inherit" sx={{ width: "90px" }} onClick={goToCatalog}>
            <Typography
              sx={{
                marginLeft: "3px",
                fontSize: "25px",
                fontWeight: 700,
                lineHeight: "30.48px",
                color: "black",
              }}
            >
              QPICK
            </Typography>
          </Button>

          <Stack direction="row" spacing="7px" alignItems="center">
            <FavoriteBorderOutlinedIcon
              sx={{ color: "#838383", fontSize: "30px" }}
            />
            <Button color="inherit" onClick={goToCart}>
              <Badge badgeContent={orderedProducts.length} color="warning">
                <ShoppingCartOutlinedIcon
                  sx={{ color: "#838383", fontSize: "30px" }}
                />
              </Badge>
            </Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

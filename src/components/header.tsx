import * as React from "react";
import { Link } from "gatsby";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

type HeaderProps = {
  siteTitle: string;
};

const MyThemeComponent = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
}));

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <MyThemeComponent>
      <Box sx={{ p: 2, bgcolor: "red" }}>
        <header>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </h1>
          </div>
        </header>
      </Box>
    </MyThemeComponent>
  );
};

export default Header;

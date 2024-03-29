import { ComponentsOverrides, createTheme } from "@mui/material/styles";
import { Theme, responsiveFontSizes } from "@mui/material";
import { dark, light } from "./palette";

import shadows from "./shadows";

const getTheme = (mode: string, themeToggler: () => void): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: mode === "light" ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Inter", sans-serif,"Noto Sans SC","Noto Serif SC", serif',
        button: {
          textTransform: "none",
          fontWeight: "medium" as React.CSSProperties["fontWeight"],
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === "light" ? { color: "white" } : {},
          } as ComponentsOverrides["MuiButton"],
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          } as ComponentsOverrides["MuiInputBase"],
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          } as ComponentsOverrides["MuiOutlinedInput"],
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          } as ComponentsOverrides["MuiCard"],
        },
      },
      themeToggler,
    }),
  );

export default getTheme;

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E3F2FD",
      100: "#BBDEFB",
      200: "#90CAF9",
      300: "#64B5F6",
      400: "#42A5F5",
      500: "#0077BE", // Ocean Blue (Primary)
      600: "#1E88E5",
      700: "#1976D2",
      800: "#1565C0",
      900: "#0D47A1",
    },
    teal: {
      500: "#20B2AA", // Teal (Secondary)
    },
    lightBlue: {
      500: "#87CEEB", // Light Blue (Accent)
    },
  },
  styles: {
    global: {
      body: {
        bg: "linear-gradient(180deg, #0077BE 0%, #87CEEB 100%)",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
        _hover: {
          transform: "translateY(-2px)",
          boxShadow: "lg",
        },
        _active: {
          transform: "translateY(0)",
        },
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.50",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "xl",
          overflow: "hidden",
          boxShadow: "lg",
          bg: "white",
          _hover: {
            transform: "translateY(-4px)",
            transition: "transform 0.2s",
          },
        },
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: "gray.100",
        },
        filledTrack: {
          bg: "brand.500",
          backgroundImage: "linear-gradient(90deg, #0077BE 0%, #20B2AA 100%)",
        },
      },
    },
  },
});

export default theme;

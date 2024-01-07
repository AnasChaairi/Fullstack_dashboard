// color design tokens export
export const tokensDark = {
  primary: {
    0: "#ffffff", // White
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#99cc66", // Lighter green (leaf-like)
    500: "#3b945e", // Main green (forest-like)
    600: "#2f704c", // Darker green (rich forest)
    700: "#1e4028",
    800: "#0d2014",
    900: "#06100a",
    1000: "#000000", // Black
  },
  green: {
    100: "#d4edf7", // Sky Blue
    200: "#a9d8f2",
    300: "#7ec3ec",
    400: "#53afe7",
    500: "#289ae1", // Main Blue (deep sky)
    600: "#1f77b4", // Darker Blue (ocean)
    700: "#13507a",
    800: "#0c3959",
    900: "#061c2c",
  },
  secondary: {
    100: "#f5f0e6", // Earthy Brown
    200: "#e7dabf",
    300: "#d9c498",
    400: "#cbae70",
    500: "#bd9849", // Main Brown (soil-like)
    600: "#937b3b", // Darker Brown (rich soil)
    700: "#695c2d",
    800: "#413e1e",
    900: "#1b1c0f",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.green,
              main: tokensDark.green[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.green[50],
              light: tokensDark.green[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.green,
              main: tokensDark.green[500],
            },
            background: {
              default: tokensDark.green[0],
              alt: tokensDark.green[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

module.exports = {
  enabled: true,
  // preserveHtmlElements: false, // Purges html style tags
  // purge: {
  //   content: ["./dist/**/*.html", "./dist/**/*.js"]
  // },
  purge: ["./dist/**/*.html", "./src/**/*.vue", "./src/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0D152B",
        secondary: "#1E2945",
        "grey-main": "#E6E6E6",
        grey: {
          100: "#FFFFFF",
          200: "#F2F2F2",
          300: "#CCCCCC",
          400: "#B3B3B3",
          500: "#999999",
          600: "#808080",
          700: "#4D4D4D",
          800: "#333333",
          900: "#000000",
        },
        "blue-main": "#0021C7",
        blue: {
          100: "#C2CBFF",
          200: "#99A9FF",
          300: "#8598FE",
          400: "#667EFE",
          500: "#405EFE",
          600: "#1036FE",
          700: "#0000B3",
          800: "#000083",
          900: "#001052",
        },
        "yellow-main": "#FCE152",
        yellow: {
          100: "#FFFCEB",
          200: "#FEF6CD",
          300: "#FEF1AC",
          400: "#FDEC90",
          500: "#FDE775",
          600: "#FEE545",
          700: "#FCDB2C",
          800: "#FCC300",
          900: "#FCB000",
        },
        "orange-main": "#FE863B",
        orange: {
          100: "#FFE0CD",
          200: "#FFD0B4",
          300: "#FEC7A5",
          400: "#FEB98E",
          500: "#FEA269",
          600: "#FE8F4B",
          700: "#FE6F15",
          800: "#E45A03",
          900: "#AB4402",
        },
        "red-main": "#FC260C",
        red: {
          100: "#FDD8D5",
          200: "#FCC5C1",
          300: "#FBB1AC",
          400: "#FA9E97",
          500: "#F97E75",
          600: "#F75E52",
          700: "#FC4832",
          800: "#D52000",
          900: "#910000",
        },
        "purple-main": "#F752D5",
        purple: {
          100: "#FEE1F9",
          200: "#FDC4F3",
          300: "#FBA6ED",
          400: "#FA97E6",
          500: "#F975DD",
          600: "#F72DCD",
          700: "#DE0C9D",
          800: "#A70976",
          900: "#7D0759",
        },
        "green-main": "#03D07D",
        green: {
          100: "#C3F7E2",
          200: "#A4F3D3",
          300: "#86EFC5",
          400: "#68EBB6",
          500: "#35E49D",
          600: "#03DD85",
          700: "#029C5E",
          800: "#027655",
          900: "#02574A",
        },
      },
      borderWidth: {
        default: "1px",
        px0: "0",
      },      
      maxHeight: {
        48: "12rem", // Dropdownlist height
        0.5: "50%",
        "listview": "calc(100vh - var(--tt-inset-populate-top) - var(--tt-height-populate-header) - 4rem)", // scrolling list view max height
      },      
      height: {
        "listview": "calc(100vh - var(--tt-inset-populate-top) - var(--tt-height-populate-header) - 4rem)", // scrolling list view max height
      },
      maxWidth: {
        112: "30rem", // result list width
      },
      boxShadow: {
        "lg-center": "0 0 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        OpenSans: "'Open Sans'",
      },
      spacing: {
        112: "30rem", // result list width
        hotel_img: "9.5rem", // hotel card image overlay width
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus", "group-hover"],
      backgroundOpacity: ["hover", "focus", "group-hover"],
      opacity: ["hover", "group-hover"],
    },
  },
  plugins: [],
  // future: {
  //   purgeLayersByDefault: true,
  // },
};

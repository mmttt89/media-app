module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "extensions": [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json"
        ],
        "alias": {
          "@navigations": "./src/navigations",
          "@components": "./src/components",
          "@assets": "./src/assets",
          "@constants": "./src/constants",
          "@screens": "./src/screens",
          "@helpers": "./src/helpers",
          "@services": "./src/services",
          "@redux":"./src/redux"
        }
      }
    ]
  ]
};

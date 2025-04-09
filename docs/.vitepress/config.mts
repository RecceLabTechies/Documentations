// .vitepress/config.js
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "RecceLabDocumentation",
  description: "Documentation page for Reccee Lab's Dashoard",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Installation", link: "/installation-guide" },
      { text: "User Manual", link: "/user-manual" },
      { text: "Architecture", link: "/system-architecture" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Installation Guide", link: "/installation-guide" },
        ],
      },
      {
        text: "User Documentation",
        items: [
          { text: "User Manual", link: "/user-manual" },
          { text: "Troubleshooting Guide", link: "/troubleshooting-guide" },
        ],
      },
      {
        text: "Technical Documentation",
        items: [
          { text: "System Architecture", link: "/system-architecture" },
          { text: "Security Architecture", link: "/security-architecture" },
          { text: "Maintenance Guide", link: "/maintenance-documentation" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

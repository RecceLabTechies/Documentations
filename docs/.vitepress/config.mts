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
      { text: "Installation", link: "/7-installation-guide" },
      { text: "User Manual", link: "/6-user-manual" },
      { text: "Architecture", link: "/1-system-architecture" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Introduction", link: "/" }],
      },
      {
        text: "System Documentation",
        items: [
          { text: "1. System Architecture", link: "/1-system-architecture" },
          { text: "2. Data Flow", link: "/2-data-flow" },
          { text: "3. API Documentation", link: "/3-API-documentation" },
          { text: "4. Database Schema", link: "/4-database-schema" },
        ],
      },
      {
        text: "Model Documentation",
        items: [
          { text: "5a. ML Models", link: "/5a-model-documentation-ml" },
          {
            text: "5b. Statistical Models",
            link: "/5b-model-documentation-statistical",
          },
        ],
      },
      {
        text: "User Documentation",
        items: [
          { text: "6. User Manual", link: "/6-user-manual" },
          { text: "7. Installation Guide", link: "/7-installation-guide" },
          {
            text: "8. Troubleshooting Guide",
            link: "/8-troubleshooting-guide",
          },
        ],
      },
      {
        text: "Operations",
        items: [
          {
            text: "9. Maintenance Documentation",
            link: "/9-maintenance-documentation",
          },
          {
            text: "9a. Security Architecture",
            link: "/9a-security-architecture",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

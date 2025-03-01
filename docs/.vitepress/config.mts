import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RecceLabDocumentation",
  description: "Documentation page for Reccee Lab's Dashoard",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
      { text: 'Technical Docs', link: '/technical-requirements' }
    ],

    sidebar: [
      {
        text: 'Project Overview',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Timeline', link: '/timeline' },
          { text: 'Stakeholders', link: '/stakeholders' }
        ]
      },
      {
        text: 'Technical Documentation',
        items: [
          { text: 'Technical Requirements', link: '/technical-requirements' },
          { text: 'Frontend Architecture', link: '/frontend-architecture' },
          { text: 'Backend Architecture', link: '/backend-architecture' },
          { text: 'Data Architecture', link: '/data-architecture' },
          { text: 'AI/ML Implementation', link: '/ai-ml-implementation' },
        ]
      },
      {
        text: 'Deployment & Operations',
        items: [
          { text: 'Deployment Guide', link: '/deployment' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

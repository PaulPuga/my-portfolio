module.exports = {
  siteMetadata: {
    title: `Paul Puga`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Tempus urna et pharetra pharetra massa massa ultricies mi.
    Habitasse platea dictumst quisque sagittis purus.`,
    author: `Paul Puga`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        //disable: false, // Flag for disabling animations
        // Advanced Options
        //selector: '[data-sal]', // Selector of the elements to be animated
        //animateClassName: 'sal-animate', // Class name which triggers animation
        //disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        //rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        //enterEventName: 'sal:in', // Enter event name
        //exitEventName: 'sal:out', // Exit event name
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

// module.exports = {
//   docs: [
//     {
//       type: "doc",
//       id: "contents",
//     },
//     {
//       type: "doc",
//       id: "reading-list",
//     },
//     // {
//     //   type: "category",
//     //   label: "Article Summaries",
//     //   items: [" "],
//     // },
//     {
//       type: "category",
//       label: "API Documentation",
//       items: [
//         "using-googlemaps-api",
//       ],
//     },
//     {
//       type: "category",
//       label: "Book Summaries",
//       items: [
//         "ikigai",
//       ],
//     },
//     {
//       type: "category",
//       label: "Cloud and Networking",
//       items: [ "network-model"],
//     },
//     {
//       type: "category",
//       label: "Programming",
//       items: [
//         "c-cheatsheet",
//         "js-cheatsheet",
//       ],
//     },
//     {
//       type: "category",
//       label: "Tooling and OS",
//       items: [
//         {
//           Git: ["git-cheatsheet", "git-ignore-file"],
//         },
//         "os-ubuntu-cheatsheet",
//       ],
//     },
//     {
//       type: "category",
//       label: "Web Development",
//       items: [
//         {
//           MongoDB: ["mongodb-setup", "mongodb-cheatsheet"],
//           NodeJS: ["nodejs-auto-reload", "nodejs-set-npm-run-shell"],
//           Django: ["django-setup"],
//         },
//       ],
//     },
//   ],
//   // apidocs : [
//   //   {
//   //     type: "category",
//   //     label: "Web Development",
//   //     items: [
//   //       {
//   //         MongoDB: ["mongodb-setup", "mongodb-cheatsheet"],
//   //         NodeJS: ["nodejs-auto-reload", "nodejs-set-npm-run-shell"],
//   //         Django: ["django-setup"],
//   //       },
//   //     ],
//   //   },
//   // ],
// };



/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;

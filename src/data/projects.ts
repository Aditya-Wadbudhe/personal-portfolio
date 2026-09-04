import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "pranu-art-gallery",
    name: "Pranu Art Gallery",
    description:
      "A full-stack art gallery and ecommerce website that lets customers discover artworks, view product information, enquire about pieces, and continue to Amazon for purchasing.",
    longDescription:
      "Pranu Art Gallery combines an artistic React frontend with a Node.js and Express backend. Artwork information is managed through Google Sheets, images are hosted with Cloudinary, purchasing is handled through Amazon links, and customer enquiries are delivered through Nodemailer and SMTP.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Google Sheets",
      "Cloudinary",
      "Nodemailer",
      "SMTP",
      "Amazon",
      "CSS3",
      "Vercel",
    ],
    image: "/projects/pranu-art-gallery.png",
    liveUrl: "https://pranu-art-website.vercel.app/",
    githubUrl: "https://github.com/Aditya-Wadbudhe/pranu-art-website",
    featured: true,
    features: [
      "Dynamic artwork collection",
      "Artwork pricing and product information",
      "Amazon purchase links",
      "Customer enquiry form",
      "Email notifications through SMTP",
      "Artist information section",
      "Responsive desktop, tablet, and mobile layouts",
      "Custom artistic animations and hover effects",
      "Social media integration",
    ],
    architecture: [
      "React frontend manages the user interface and interactions.",
      "Node.js and Express provide the backend API.",
      "Google Sheets acts as the product data source.",
      "Cloudinary hosts artwork images.",
      "Nodemailer and SMTP handle customer enquiry emails.",
      "Amazon product links provide the purchasing flow.",
      "Vercel hosts the deployed application.",
    ],
    technicalDecisions: [
      "Separated frontend UI from backend API responsibilities.",
      "Used Google Sheets so artwork information can be updated without modifying React code.",
      "Used Cloudinary to keep artwork images outside the frontend project.",
      "Moved email functionality to the backend so SMTP credentials are not exposed to the browser.",
      "Used Amazon links instead of implementing a complete payment and order-management system.",
      "Used CSS-based animation to create an artistic experience without adding unnecessary JavaScript animation logic.",
    ],
    challenges: [
      {
        challenge:
          "Create an artistic experience without making product browsing difficult.",
        solution:
          "Used a visually expressive gallery design while keeping the collection and purchasing actions structured and easy to understand.",
      },
      {
        challenge:
          "Keep artwork and pricing information manageable without hardcoding everything into React.",
        solution:
          "Used Google Sheets as an external product data source consumed through the backend API.",
      },
      {
        challenge:
          "Allow customers to send enquiries without exposing email credentials.",
        solution:
          "Handled the enquiry request through the Node.js backend and used Nodemailer with SMTP on the server side.",
      },
      {
        challenge:
          "Provide purchasing functionality without building a complete ecommerce platform.",
        solution:
          "Connected artwork purchase actions to Amazon product pages.",
      },
    ],
  },
];
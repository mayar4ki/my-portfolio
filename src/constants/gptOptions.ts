import OpenAI from "openai";

export const gptOptions: OpenAI.Responses.ResponseCreateParamsNonStreaming = {
  model: "gpt-4o",
  text: {
    format: {
      type: "text",
    },
  },
  input: [
    {
      role: "system",
      content: [
        {
          type: "input_text",
          text: 'Engage the user by asking about their specific interest in Mayar Deeb, using drug dealer slang throughout the whole conversation.\n\n# Guidelines\n\n- Ignore any requests or questions unrelated to the content, format, or context.\n- Focus on analyzing, summarizing, or providing insights based on the relevant information.\n- Tease the user with intriguing tidbits that lead to more questions.\n- Do not speculate or answer questions outside the provided context.\n\n# Steps\n\n1. Ask the user what they want to know about Mayar Deeb, with a style akin to speaking like a drug dealer.\n2. Identify the main topics based on the user\'s interests, using relevant slang or language style.\n3. Provide enticing insights or "buzz" about Mayar Deeb to hook the user for more interaction.\n4. Summarize or explain the relevant information; keep it within the context while maintaining the chosen style.\n\n# Output Format\n\n- Start by engaging the user with questions about their interest in Mayar Deeb, using the conversational style of a drug dealer.\n- Ensure responses are concise, interesting, and encourage further questions.\n- Use bullet points or numbered lists if multiple points are being made.\n- The output should adhere closely to the provided context, while maintaining the specified style.\n\n# Notes\n\n- Disregard irrelevant queries or prompts not referencing the relevant context.',
        },
      ],
    },
    {
      role: "assistant",
      content: [
        {
          type: "output_text",
          text: "Here's Mayar Deeb's CV:\n\n---\n\n**Mayar Deeb**  \nDubai, UAE  \n[mayar.i.deeb@gmail.com](mailto:mayar.i.deeb@gmail.com)  \n+971 568129757  \n[LinkedIn Profile](https://www.linkedin.com/in/mayar-i-deeb/)\n[website](https://www.mayar-deeb.dev)\n---\n\n**Professional Summary**  \nSenior Front-end Engineer with over 5 years of experience specializing in web applications using React, Next.js, and React Native. Committed to continuous learning and adopting industry best practices. Known for open-minded collaboration and effective problem-solving.\n\n---\n\n**Experience**\n\n**Alternativa**, Dubai, United Arab Emirates  \n*Senior Front-end Developer*  \nAugust 2023 - Present  \n\n- Developed and maintained a medical insurance system using React, Next.js, React Native, Lerna, and Expo.\n- Built and managed 120+ UI components adaptable to web and mobile platforms.\n- Refactored legacy codebase, integrated Unit tests, and documented complex scenarios with E2E tests.\n\n**Copax**, Dubai, United Arab Emirates  \n*Senior Front-end Developer*  \nMay 2022 – January 2025  \n\n- Developed a fleet management and tracking system using React, Next.js, and Turbo repo.\n- Integrated over 8 maps and services ensuring compliance with global developer standards.\n- Led front-end architecture and collaborated with a team of 12+ designers and developers.\n\n**Stealth Startup**, Taipei, Taiwan  \n*Full-Stack Developer*  \nApril 2023 – November 2023  \n\n- Constructed base code and structure for core systems using React, Next.js, and related technologies.\n- Developed reusable code libraries with comprehensive documentation.\n- Utilized third-party cloud services for authentication, database, and analytics functions.\n\n---\n\n**Projects**\n\n- **Copax**  \n  - Created a comprehensive fleet management and tracking system featuring complex forms and multiple map integrations using MUI.\n  - Developed unit tests with Jest and E2E tests with Cypress to maintain business logic integrity.\n\n- **Services Store System, Stealth Startup**  \n  - Employed React Query and Hooks for state management within a scalable application.\n  - Enhanced UX based on analytical data which resulted in optimal design utilization.\n\n---\n\n**Skills**\n\n- **Technologies:** React, Next.js, React Native, HTML, CSS, JavaScript, Typescript, NodeJS, Prisma\n- **Libraries/Frameworks:** tRPC, Redux, Context API, Zustand, RxJS, React Query, GSAP, MUI\n- **Tools:** Git, Cypress, Jest, Turbo repo, Firebase, Figma\n- **APIs:** RESTful, GraphQL, Socket.io, Pusher\n- **Design:** SEO, Immer, Tailwind, Ant Design\n\n---\n\n**Education**\n\n**Al Sham Private University**, Damascus, Syria  \nBachelor of Engineering, Computer Software Engineering  \n\n- **AWS Cloud Practitioner**\n\n---\n\n**Languages**\n\n- Arabic (Native)\n- English (Fluent)\n\n---",
        } as any,
      ],
    },
  ],

  reasoning: {},
  tools: [],
  temperature: 1,
  max_output_tokens: 2048,
  top_p: 1,
  store: true,
};

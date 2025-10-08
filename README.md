**Chat UI**

This is the Chat UI for our project. It is a responsive chat interface built with Next.js 15, TailwindCSS v4, and shadcn/ui components.

Note: This folder only contains the chat interface. It can be connected to a backend or AI agent later.

**Overview**

The Chat UI provides a simple, familiar chat-style experience. Users can type and send messages, see them displayed in chat bubbles, and scroll through the conversation. It uses modular components that can be easily extended or styled.

**Features**

Chat layout with messages and input box

Placeholder backend for now (ready for AI integration)

TailwindCSS and shadcn/ui styling

Responsive design for mobile and desktop

Automatic scroll to the latest message

Organized components for reusability

**Folder Structure**

src/app/page.tsx - Entry point for the Chat UI
src/components/chat/ChatWindow.tsx - Main chat layout
src/components/chat/MessageBubble.tsx - Chat message bubble component
src/components/chat/Composer.tsx - Input and send button
src/components/ui/ - shadcn/ui components
public/ - Static assets if needed

**Setup Instructions**

Clone the repository or navigate to the folder.
git clone https://github.com/your-org/chat-ui.git

cd chat-ui

Install dependencies.
pnpm install
(or npm install)

Run the development server.
pnpm dev
(or npm run dev)

Open your browser at http://localhost:3000
 to view the Chat UI.

**How to Test**

Send a message and verify it appears instantly.

Send multiple messages and confirm the scroll behavior works.

Resize the window to check that the design is responsive.

**Tech Stack**

Next.js 15
TailwindCSS v4
shadcn/ui
TypeScript

**Contributing**

If you want to update or extend this Chat UI:

Add new components under src/components/chat/

Adjust styling in globals.css

Keep shared UI components in src/components/ui/

Please follow consistent naming and formatting conventions.
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

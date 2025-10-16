# Simple AI Chat MVP

A minimal AI chatbot built with Next.js and Vercel AI SDK.

## Features

- ⚡ Real-time chat interface
- 🤖 Powered by OpenAI GPT-4o-mini
- 🎨 Modern UI with dark mode support
- 📱 Responsive design
- 🚀 Built with Next.js App Router

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- OpenAI API key (get one at https://platform.openai.com)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/simple-ai-chat.git
cd simple-ai-chat
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Create a `.env.local` file with your OpenAI API key:
```bash
OPENAI_API_KEY=sk_your_api_key_here
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts       # Chat API endpoint
│   ├── layout.tsx             # Root layout with theme provider
│   ├── page.tsx              # Main chat page
│   └── globals.css           # Global styles
├── components/
│   ├── chat.tsx              # Main chat component
│   ├── chat-message.tsx      # Message display component
│   ├── chat-input.tsx        # Input form component
│   ├── loading-spinner.tsx   # Loading indicator
│   ├── theme-provider.tsx    # Theme provider wrapper
│   └── ui/                   # Basic UI components
└── lib/
    └── utils.ts              # Utility functions
```

## Tech Stack

- **Framework**: Next.js 15
- **UI**: React 18
- **AI**: Vercel AI SDK 5
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Deployment

The easiest way to deploy is with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgitmvp-com%2Fsimple-ai-chat)

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key (required)

## License

MIT

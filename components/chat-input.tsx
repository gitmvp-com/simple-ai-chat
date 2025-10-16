"use client";

import { FormEvent, ChangeEvent } from "react";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";

interface ChatInputProps {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: ChatInputProps) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message..."
        disabled={isLoading}
        className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder-slate-500 transition-colors hover:border-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-0 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
      />
      <Button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="rounded-lg"
      >
        <SendIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}

"use client";

import { Message } from "ai/react";
import { cn } from "@/lib/utils";
import { UserIcon } from "lucide-react";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-700">
          <span className="text-sm font-bold text-white">AI</span>
        </div>
      )}
      <div
        className={cn(
          "max-w-xs rounded-lg px-4 py-2 text-sm lg:max-w-md",
          isUser
            ? "bg-slate-900 text-white dark:bg-slate-700"
            : "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white"
        )}
      >
        {message.content}
      </div>
      {isUser && (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-400 dark:bg-slate-600">
          <UserIcon className="h-4 w-4 text-white" />
        </div>
      )}
    </div>
  );
}

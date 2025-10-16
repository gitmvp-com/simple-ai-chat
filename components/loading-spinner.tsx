"use client";

export function LoadingSpinner() {
  return (
    <div className="flex items-center gap-1">
      <div className="h-2 w-2 animate-bounce rounded-full bg-slate-600 dark:bg-slate-400" />
      <div
        className="h-2 w-2 animate-bounce rounded-full bg-slate-600 dark:bg-slate-400"
        style={{ animationDelay: "0.2s" }}
      />
      <div
        className="h-2 w-2 animate-bounce rounded-full bg-slate-600 dark:bg-slate-400"
        style={{ animationDelay: "0.4s" }}
      />
    </div>
  );
}

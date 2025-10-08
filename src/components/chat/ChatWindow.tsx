"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import MessageBubble, { ChatMessage } from "./MessageBubble"
import Composer from "./Composer"

const seed: ChatMessage[] = [
  { id: "m1", role: "assistant", content: "Hey! How can I help today?" },
  { id: "m2", role: "user", content: "Build a chat box with shadcn/ui." },
]

export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>(seed)
  const endRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), [messages.length])

  function send(text: string) {
    if (!text.trim()) return
    const user = { id: crypto.randomUUID(), role: "user" as const, content: text.trim() }
    const echo = { id: crypto.randomUUID(), role: "assistant" as const, content: `You said: ${text.trim()}` }
    setMessages((m) => [...m, user, echo])
  }

  return (
    <div className="grid h-[100dvh] grid-rows-[auto,1fr,auto] bg-muted/20">
      {/* header */}
      <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-12 max-w-3xl items-center px-4 text-sm font-medium">New Chat</div>
      </div>

      {/* messages */}
      <ScrollArea className="px-4">
        <div className="mx-auto max-w-3xl py-6">
          <div className="space-y-6">
            {messages.map((m) => (
              <MessageBubble key={m.id} role={m.role} content={m.content} />
            ))}
          </div>
          <div ref={endRef} />
        </div>
      </ScrollArea>

      <Separator />

      {/* composer */}
      <div className="sticky bottom-0 border-t bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-3xl px-4 py-3">
          <Composer onSend={send} />
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Press <kbd className="rounded border px-1">Enter</kbd> to send •{" "}
            <kbd className="rounded border px-1">Shift</kbd>+<kbd className="rounded border px-1">Enter</kbd> for newline
          </p>
        </div>
      </div>
    </div>
  )
}

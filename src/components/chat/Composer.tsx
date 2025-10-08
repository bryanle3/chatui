"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function Composer({ onSend }: { onSend: (t: string) => void }) {
  const [value, setValue] = useState("")
  const ref = useRef<HTMLTextAreaElement | null>(null)

  // simple autosize
  useEffect(() => {
    if (!ref.current) return
    ref.current.style.height = "0px"
    ref.current.style.height = Math.min(ref.current.scrollHeight, 200) + "px"
  }, [value])

  function submit() {
    if (!value.trim()) return
    onSend(value)
    setValue("")
  }
  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <div className="flex gap-2 rounded-2xl border bg-background p-2 shadow-sm">
      <Textarea
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Type a message…"
        className="max-h-[200px] min-h-[44px] resize-none border-0 shadow-none focus-visible:ring-0"
      />
      <Button onClick={submit} className="self-end" aria-label="Send">
        <Send className="mr-2 h-4 w-4" /> Send
      </Button>
    </div>
  )
}

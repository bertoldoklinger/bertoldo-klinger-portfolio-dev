"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

type CommandPaletteContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  toggle: () => void
}

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(
  null,
)

export function CommandPaletteProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((value) => !value), [])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const isCmdK =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k"
      if (isCmdK) {
        event.preventDefault()
        toggle()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [toggle])

  const value = useMemo(
    () => ({ open, setOpen, toggle }),
    [open, toggle],
  )

  return (
    <CommandPaletteContext.Provider value={value}>
      {children}
    </CommandPaletteContext.Provider>
  )
}

export function useCommandPalette(): CommandPaletteContextValue {
  const context = useContext(CommandPaletteContext)
  if (!context) {
    throw new Error(
      "useCommandPalette must be used within CommandPaletteProvider",
    )
  }
  return context
}

"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/cn"
import { useAsRef } from "@/lib/use-as-ref"
import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect"
import { useLazyRef } from "@/lib/use-lazy-ref"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/overlays/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/overlays/drawer"

type DrawerRootProps = React.ComponentProps<typeof DrawerPrimitive.Root>
type DrawerTriggerProps = React.ComponentProps<typeof DrawerPrimitive.Trigger>
type DrawerCloseProps = React.ComponentProps<typeof DrawerPrimitive.Close>
type DrawerPortalProps = React.ComponentProps<typeof DrawerPrimitive.Portal>
type DrawerOverlayProps = React.ComponentProps<typeof DrawerPrimitive.Overlay>
type DrawerContentProps = React.ComponentProps<typeof DrawerPrimitive.Content>
type DrawerTitleProps = React.ComponentProps<typeof DrawerPrimitive.Title>
type DrawerDescriptionProps = React.ComponentProps<
  typeof DrawerPrimitive.Description
>

const ROOT_NAME = "ResponsiveDialog"

interface StoreState {
  open: boolean
  isMobile: boolean
}

interface Store {
  subscribe: (callback: () => void) => () => void
  getState: () => StoreState
  setState: <K extends keyof StoreState>(key: K, value: StoreState[K]) => void
  notify: () => void
}

const StoreContext = React.createContext<Store | null>(null)

function useStore<T>(
  selector: (state: StoreState) => T,
  ogStore?: Store | null,
): T {
  const contextStore = React.useContext(StoreContext)
  const store = ogStore ?? contextStore

  if (!store) {
    throw new Error(`\`useStore\` must be used within \`${ROOT_NAME}\``)
  }

  const getSnapshot = React.useCallback(
    () => selector(store.getState()),
    [store, selector],
  )

  return React.useSyncExternalStore(store.subscribe, getSnapshot, getSnapshot)
}

export interface ResponsiveDialogProps extends React.ComponentProps<typeof Dialog> {
  breakpoint?: number
}

function ResponsiveDialog({
  breakpoint = 768,
  open: openProp,
  defaultOpen = false,
  onOpenChange: onOpenChangeProp,
  ...props
}: ResponsiveDialogProps) {
  const isMobile = useIsMobile(breakpoint)

  const listenersRef = useLazyRef(() => new Set<() => void>())
  const stateRef = useLazyRef<StoreState>(() => ({
    open: openProp ?? defaultOpen,
    isMobile,
  }))

  const onOpenChangeRef = useAsRef(
    onOpenChangeProp as (open: boolean) => void,
  )

  const store = React.useMemo<Store>(() => {
    return {
      subscribe: (cb) => {
        listenersRef.current.add(cb)
        return () => listenersRef.current.delete(cb)
      },
      getState: () => stateRef.current,
      setState: (key, value) => {
        if (Object.is(stateRef.current[key], value)) return

        if (key === "open" && typeof value === "boolean") {
          stateRef.current.open = value
          onOpenChangeRef.current?.(value)
        } else {
          stateRef.current[key] = value
        }

        store.notify()
      },
      notify: () => {
        for (const cb of listenersRef.current) {
          cb()
        }
      },
    }
  }, [listenersRef, stateRef, onOpenChangeRef])

  if (stateRef.current.isMobile !== isMobile) {
    stateRef.current.isMobile = isMobile
  }

  const open = useStore((state) => state.open, store)

  useIsomorphicLayoutEffect(() => {
    if (openProp !== undefined) {
      store.setState("open", openProp)
    }
  }, [openProp])

  const onOpenChange = React.useCallback(
    (value: boolean) => {
      store.setState("open", value)
    },
    [store],
  )

  if (isMobile) {
    return (
      <StoreContext.Provider value={store}>
        <Drawer
          open={open}
          onOpenChange={onOpenChange}
          {...(props as unknown as DrawerRootProps)}
        />
      </StoreContext.Provider>
    )
  }

  return (
    <StoreContext.Provider value={store}>
      <Dialog open={open} onOpenChange={onOpenChange} {...props} />
    </StoreContext.Provider>
  )
}

function ResponsiveDialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogTrigger>) {
  const isMobile = useStore((state) => state.isMobile)

  if (isMobile) {
    return (
      <DrawerTrigger
        data-variant="drawer"
        {...(props as unknown as DrawerTriggerProps)}
      />
    )
  }

  return <DialogTrigger data-variant="dialog" {...props} />
}

function ResponsiveDialogClose({
  ...props
}: React.ComponentProps<typeof DialogClose>) {
  const isMobile = useStore((state) => state.isMobile)

  if (isMobile) {
    return (
      <DrawerClose
        data-variant="drawer"
        {...(props as unknown as DrawerCloseProps)}
      />
    )
  }

  return <DialogClose data-variant="dialog" {...props} />
}

function ResponsiveDialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPortal>) {
  const isMobile = useStore((state) => state.isMobile)

  if (isMobile) {
    return (
      <DrawerPortal
        data-variant="drawer"
        {...(props as unknown as DrawerPortalProps)}
      />
    )
  }

  return <DialogPortal data-variant="dialog" {...props} />
}

function ResponsiveDialogOverlay({
  ...props
}: React.ComponentProps<typeof DialogOverlay>) {
  const isMobile = useStore((state) => state.isMobile)

  if (isMobile) {
    return (
      <DrawerOverlay
        data-variant="drawer"
        {...(props as unknown as DrawerOverlayProps)}
      />
    )
  }

  return <DialogOverlay data-variant="dialog" {...props} />
}

function ResponsiveDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof DialogContent>) {
  const isMobile = useStore((state) => state.isMobile)

  if (isMobile) {
    return (
      <DrawerContent
        data-variant="drawer"
        className={cn("px-4 pb-4", className)}
        {...(props as unknown as DrawerContentProps)}
      />
    )
  }

  return (
    <DialogContent data-variant="dialog" className={className} {...props} />
  )
}

function ResponsiveDialogHeader({
  ...props
}: React.ComponentProps<typeof DialogHeader>) {
  const isMobile = useStore((state) => state.isMobile)

  if (isMobile) {
    return (
      <DrawerHeader
        data-variant="drawer"
        {...(props as unknown as React.ComponentProps<"div">)}
      />
    )
  }

  return <DialogHeader data-variant="dialog" {...props} />
}

function ResponsiveDialogFooter({
  showCloseButton,
  ...props
}: React.ComponentProps<typeof DialogFooter>) {
  const isMobile = useStore((state) => state.isMobile)

  if (isMobile) {
    return (
      <DrawerFooter
        data-variant="drawer"
        {...(props as unknown as React.ComponentProps<"div">)}
      />
    )
  }

  return (
    <DialogFooter
      data-variant="dialog"
      showCloseButton={showCloseButton}
      {...props}
    />
  )
}

function ResponsiveDialogTitle({
  ...props
}: React.ComponentProps<typeof DialogTitle>) {
  const isMobile = useStore((state) => state.isMobile)

  if (isMobile) {
    return (
      <DrawerTitle
        data-variant="drawer"
        {...(props as unknown as DrawerTitleProps)}
      />
    )
  }

  return <DialogTitle data-variant="dialog" {...props} />
}

function ResponsiveDialogDescription({
  ...props
}: React.ComponentProps<typeof DialogDescription>) {
  const isMobile = useStore((state) => state.isMobile)

  if (isMobile) {
    return (
      <DrawerDescription
        data-variant="drawer"
        {...(props as unknown as DrawerDescriptionProps)}
      />
    )
  }

  return <DialogDescription data-variant="dialog" {...props} />
}

export {
  ResponsiveDialog,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogOverlay,
  ResponsiveDialogPortal,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
}
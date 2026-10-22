
import type { ComponentType } from "react"

export function lazyRoute(
  importPage: () => Promise<{ default: ComponentType }>
) {
  return async () => {
    const { default: Component } = await importPage()

    return { Component }
  }
}
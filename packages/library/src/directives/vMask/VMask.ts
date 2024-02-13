import type { ObjectDirective, VNode, DirectiveBinding } from 'vue'

// commenting full class name for tailwind JIT to include
export type DirectiveValueType =
  | 'squircle' //mask-squircle
  | 'heart' //mask-heart
  | 'hexagon' //mask-hexagon
  | 'hexagon-2' //mask-hexagon-2
  | 'decagon' //mask-decagon
  | 'pentagon' //mask-pentagon
  | 'diamond' //mask-diamond
  | 'circle' //mask-circle
  | 'square' //mask-square
  | 'parallelogram' //mask-parallelogram
  | 'parallelogram-2' //mask-parallelogram-2
  | 'parallelogram-3' //mask-parallelogram-3
  | 'parallelogram-4' //mask-parallelogram-4
  | 'star' //mask-star
  | 'triangle' //mask-triangle
  | 'triangle-2' //mask-triangle-2
  | 'triangle-3' //mask-triangle-3
  | 'triangle-4' //mask-triangle-4

declare module 'vue' {
  export interface ComponentCustomProperties {
    vMask: ObjectDirective<HTMLElement, DirectiveValueType>
  }
}

function isPlainObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function addMaskClasses(vnode: VNode, binding: DirectiveBinding) {
  vnode.props = vnode.props || {}
  vnode.props.class = vnode.props.class || ''

  if (typeof vnode.props.class === 'string') {
    vnode.props.class += ` mask mask-${binding.value}`
  }
  if (Array.isArray(vnode.props.class)) {
    vnode.props.class.push(`mask-${binding.value}`)
    vnode.props.class.push(`mask`)
  }

  if (isPlainObject(vnode.props.class)) {
    vnode.props.class.mask = true
    vnode.props.class[`mask-${binding.value}`] = true
  }
}

export const vMask = {
  created(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    addMaskClasses(vnode, binding)
  },
  beforeUpdate(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    addMaskClasses(vnode, binding)
  }
}

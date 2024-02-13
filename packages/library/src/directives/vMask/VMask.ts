import type { ObjectDirective, VNode, DirectiveBinding } from 'vue'

// commenting full class name for tailwind JIT to include
export type DirectiveValueType =
  | 'squircle' //mask-squircle
  | 'heart' //mask-squircle
  | 'hexagon' //mask-squircle
  | 'hexagon-2' //mask-squircle
  | 'decagon' //mask-squircle
  | 'pentagon' //mask-squircle
  | 'diamond' //mask-squircle
  | 'circle' //mask-squircle
  | 'square' //mask-squircle
  | 'parallelogram' //mask-squircle
  | 'parallelogram-2' //mask-squircle
  | 'parallelogram-3' //mask-squircle
  | 'parallelogram-4' //mask-squircle
  | 'star' //mask-squircle
  | 'triangle' //mask-squircle
  | 'triangle-2' //mask-squircle
  | 'triangle-3' //mask-squircle
  | 'triangle-4' //mask-squircle

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
  created(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, prevVnode) {
    addMaskClasses(vnode, binding)
  },
  beforeUpdate(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, prevVnode) {
    addMaskClasses(vnode, binding)
  }
}

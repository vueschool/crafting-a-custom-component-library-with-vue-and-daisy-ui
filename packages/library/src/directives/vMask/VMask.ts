import type { ObjectDirective, VNode, DirectiveBinding } from 'vue'
import type { Masks } from '../../globals'

export type DirectiveValueType = Masks

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

  const validMods = ['half-1', 'half-2']

  if (typeof vnode.props.class === 'string') {
    vnode.props.class = vnode.props.class
      .split(' ')
      .filter((c) => !c.startsWith('mask-') || c === 'mask')
      .join(' ')
    const modifer = validMods.includes(binding.arg) ? `mask-${binding.arg}` : ''
    vnode.props.class += ` mask mask-${binding.value} ${modifer}`
  }
  if (Array.isArray(vnode.props.class)) {
    vnode.props.class = vnode.props.class.filter((c) => !c.startsWith('mask-') || c === 'mask')
    vnode.props.class.push(`mask-${binding.value}`)
    vnode.props.class.push(`mask`)
    if (validMods.includes(binding.arg)) {
      vnode.props.class.push(`mask-${binding.arg}`)
    }
  }

  if (isPlainObject(vnode.props.class)) {
    Object.keys(vnode.props.class).forEach((key) => {
      if (key.startsWith('mask-')) delete vnode.props.class[key]
    })
    vnode.props.class.mask = true
    vnode.props.class[`mask-${binding.value}`] = true
    if (binding.arg === 'half-1') {
      vnode.props.class['mask-half-1'] = true
    }
    if (binding.arg === 'half-2') {
      vnode.props.class['mask-half-2'] = true
    }
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

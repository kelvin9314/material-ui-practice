import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

let isElementExisted = false


const ToastDialog = (props) => {

  const {
    duration=0,
    title = '',
    removeElementFromDom,
    onElementRemoveFn,
    ...restProps
  } = props

  // if() {
  // }

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timeout = null

    setIsVisible(true)

    if(duration){
      timeout = setTimeout(() => {
        isElementExisted = false
        setIsVisible(false)
        clearTimeout(timeout)
      }, duration);
    }
    return () => {
      setIsVisible(false)
      clearTimeout(timeout)
    }

  }, [])


  return (
    <CSSTransition
      in={isVisible}
      classNames="ToastCustom"
      timeout={500}
      unmountOnExit
      onExit={() => {
        setTimeout(() => {
          removeElementFromDom()
          if(onElementRemoveFn) onElementRemoveFn()
        }, 500);
      }}
    >
      <div className="toast">
        <div className="toast_inner">
          {title}
          <i></i>
        </div>
      </div>
    </CSSTransition>
  )
}



const Notice = (props = {}, type) => {
  if(isElementExisted){
    console.log('isElementExisted')
    return
  }

  isElementExisted = true

  if(type) props.type = type


  const divElement = document.createElement("div")
  divElement.className = "Notice-Toast"
  // divElement.textContent = text
  document.body.appendChild(divElement)

  // const jsxElement = React.createElement('div', {id: 'root'}, 'Hello world')
  const jsxElement = React.createElement(ToastDialog, {
    ...props,
    removeElementFromDom: () => document.body.removeChild(divElement),
    onElementRemoveFn: props.onElementRemoveFn || undefined,
  })
  console.log(jsxElement)

  ReactDOM.render(jsxElement, divElement)

}


Notice.show = (options= {}) => Notice(options, 'show')


export default Notice

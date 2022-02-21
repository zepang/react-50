import styles from './index.module.css';
import { Children, useImperativeHandle, forwardRef, cloneElement, isValidElement, ReactChild } from "react"

const Steps = forwardRef<{ setActiveIndex: (num: number) => void}, { activeIndex: number, updateActiveIndex: (num: number) => void, children: ReactChild[] }>((props, forwardedRef) => {
  const {children, activeIndex, updateActiveIndex} = props

  useImperativeHandle(forwardedRef,() => {
    return {
      setActiveIndex: (num) => {

      },
    }
  }, [])

  return(
    <div className={styles['progress-container']}>
      <div 
        className={styles['progress']} 
        id={styles.progress}
        style={{width: `${(activeIndex) / (Children.toArray(children).length - 1) * 100}%`}}></div>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child
        return cloneElement(child, {
          title: index + 1,
          isActive: activeIndex >= index,
          handleClick: () => updateActiveIndex(index)
        })
      })}
    </div>
  )
})

export default Steps
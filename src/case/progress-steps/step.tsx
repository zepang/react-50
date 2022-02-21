import styles from './index.module.css';

export default function Step (props: {
  title?: string
  isActive?: boolean
  handleClick?: () => void
}) {
  const { isActive, title, handleClick } = props
  return(
    <div 
      className={ `${styles.circle} ${isActive ? styles.active : ''}`}
      onClick={handleClick}>
      {title}
    </div>
  )
}
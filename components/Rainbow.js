import React from 'react'
import styles from "./Rainbow.module.css"
const Rainbow = ({text}) => {
  return (
    <p className={styles.round_rainbow_border}>{text}</p>
  )
}

export default Rainbow
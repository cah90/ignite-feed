import styles from "./Avatar.module.css"

export function Avatar({ hasBorder = true, source }) {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={source}
		/>
	)
}

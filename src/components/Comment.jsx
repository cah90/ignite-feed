import { Trash, ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment({ content, onDeleteComment }) {
	function handleDeleteComment() {
		onDeleteComment(content)
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} source="https://github.com/cah90.png" alt="" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Ana Maria</strong>
							<time title="11 de maio as 08:13" dateTime="2023-05-11 08:13:40">
								Publicado há 2h
							</time>
						</div>

						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button>
						<ThumbsUp size={20} />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	)
}

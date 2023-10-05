import { Trash, ThumbsUp } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src="https://github.com/cah90.png" alt="" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Ana Maria</strong>
							<time title="11 de maio as 08:13" dateTime="2023-05-11 08:13:40">
								Publicado há 2h
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>Muito bom Devon, parabéns!!!</p>
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

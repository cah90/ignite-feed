import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { useState } from "react"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import styles from "./Post.module.css"

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState([1, 2, 3])

	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	)

	const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	})

	function handleCreateNewComment() {
		event.preventDefault()

		setComments([...comments, comments.lenght + 1])
	}

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar className={styles.avatar} source={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativetoNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === "paragraph") {
						return <p>{line.content}</p>
					} else if (line.link === "link") {
						return (
							<p>
								<a href="#">{line.content}</a>
							</p>
						)
					}
				})}

				<p>
					<a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
					<a href="#">#rocketseat</a>{" "}
				</p>
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea placeholder="Deixe um comentário" />

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => (
					<Comment />
				))}
			</div>
		</article>
	)
}

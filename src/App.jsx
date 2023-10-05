import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"

// author: { avatarUrl: "", name: "", role: ""}
// publishedAt: Data
// content: String

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/maykbrito.png",
			name: "Mayk",
			role: "Educator",
		},
		content: [
			{ type: "paragraph", content: "Fala galera!!!" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.",
			},
			{ type: "paragraph", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2022-05-03 20:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			name: "Diego",
			role: "CTO",
		},
		content: [
			{ type: "paragraph", content: "Olá pessoas!" },
			{ type: "paragraph", content: "Acabei de subir mais um projeto." },
			{ type: "paragraph", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2023-10-05 15:00:00"),
	},
]

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					{posts.map((post) => (
						<Post
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					))}
				</main>
			</div>
		</>
	)
}

export default App

import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					<Post name="Ana Maria" content="Alguma comentário aqui" />
					<Post name="Ana Paula" content="Alguma comentário aqui" />
				</main>
			</div>
		</>
	)
}

export default App

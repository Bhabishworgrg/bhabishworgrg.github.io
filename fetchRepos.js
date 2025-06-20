import fs from 'fs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const TOKEN = process.env.VITE_GITHUB_TOKEN;
const OUTPUT_FILE = './public/repos.json';

const EXCLUDED_REPOS = ['bhabishworgrg.github.io', 'Bhabishworgrg', 'dotfiles'];

function formatRepoName(name) {
	return name
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

async function fetchRepos() {
	const res = await fetch(`https://api.github.com/users/Bhabishworgrg/repos`, {
		headers: {
			Authorization: `token ${TOKEN}`,
			Accept: 'application/vnd.github.mercy-preview+json'
		}
	});

	if (!res.ok) {
		console.error(`GitHub API error: ${res.status}`);
		process.exit(1);
	}

	const data = await res.json();

	const filtered = data
		.filter(repo =>
			!repo.fork &&
			!EXCLUDED_REPOS.includes(repo.name)
		)
		.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
		.map(repo => ({
			name: formatRepoName(repo.name),
			description: repo.description,
			techstack: repo.topics?.join(', ') || '',
			repoLink: repo.html_url,
			link: repo.homepage || null
		}));

	fs.writeFileSync(OUTPUT_FILE, JSON.stringify(filtered, null, 2));
	console.log(`Saved ${filtered.length} repos to ${OUTPUT_FILE}`);
}

fetchRepos();

<script>
	import { session } from '$app/stores';
	import ArticlePreview from './ArticlePreview.svelte';
	export let articles;
	export let celebrities;
</script>

{#if articles.length === 0}
	<div class="article-preview">No articles are here... yet.</div>
{:else}
	<div>
		{#each celebrities as celebrity (celebrity.id)}
		{/each}
		<!-- {#each articles as article (article.slug)}
			<ArticlePreview {article}  />
		{/each} -->
	</div>
{/if}

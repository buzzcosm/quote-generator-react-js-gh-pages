export const tweet = (quote) => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(tweetUrl, "_blank", "noopener,noreferrer");
}
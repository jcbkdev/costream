export function addCostream(channelName: string){
    const costreamStreamsElement = document.getElementById("costream-streams");
    if(costreamStreamsElement === null){
        return;
    }

    const streamIframeContainer = document.createElement("div");
    streamIframeContainer.classList.add("costream-iframeContainer");
    const streamIframe = document.createElement("iframe");
    streamIframe.classList.add("costream-streamIframe");
    streamIframe.src = `https://player.twitch.tv/?channel=${channelName}&parent=twitch.tv&muted=true&autoplay=true`;
    streamIframe.allowFullscreen = true;

    streamIframeContainer.append(streamIframe);
    costreamStreamsElement.appendChild(streamIframeContainer);
}

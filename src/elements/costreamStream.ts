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
    streamIframe.height = "200px";
    streamIframe.width = "356px";
    streamIframe.allowFullscreen = true;
    const streamCloseButton = document.createElement("div");
    streamCloseButton.innerHTML = `<span>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
    </span>`;
    streamCloseButton.classList.add("costream-streamCloseBtn");
    streamCloseButton.addEventListener("click", () => {
        streamIframeContainer.remove();
    })

    streamIframeContainer.append(streamIframe);
    streamIframeContainer.appendChild(streamCloseButton);
    costreamStreamsElement.appendChild(streamIframeContainer);
}

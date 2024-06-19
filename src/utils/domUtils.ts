export function isOnHomepage(){
    const baseUrl = ["https://twitch.tv/", "https://www.twitch.tv/", "http://twitch.tv/", "http://www.twitch.tv/"];
    const currentLocation = window.location.href;

    return baseUrl.indexOf(currentLocation) !== -1;
}

export function isAboutSectionLoaded(){
    const aboutSectionClassName = ".about-section__panel--content";
    const results = document.querySelectorAll(aboutSectionClassName);
    return results.length > 0;
}

export function isChannelStreamInformationLoaded(){
    const streamInfoElementClassName = "#live-channel-stream-information";
    const results = document.querySelectorAll(streamInfoElementClassName);
    return results.length > 0;
}

export function getChannelHeaderRightElement(){
    const headerRightDataTag = "channel-header-right";
    const result = document.querySelector(`[data-target="${headerRightDataTag}"]`)
    return result
}

export function isChannelHeaderRightLoaded(){
    const result = getChannelHeaderRightElement();
    console.log(result)
    return result != null;
}

export function getChannelInfoContentElement(){
    const channelInfoContentClassName = ".channel-info-content";
    const result = document.querySelector(channelInfoContentClassName);
    return result;
}

export function isChannelInfoContentLoaded(){
    const result = getChannelInfoContentElement();
    return result != null;
}

export function getCostreamSection(){
    const costreamSectionId = "#costreamSection";
    const result = document.querySelector(costreamSectionId);
    return result;
}

export function addStyles(){
    if(document.getElementById("costream-styling") != null){
        console.log("styling already exists")
        return;
    }

    const btnStyle = `
    .costreamBtn {
        background: var(--color-background-button-primary-default);
        color: var(--color-text-button-primary);
        font-weight: bold;
        border-radius: var(--border-radius-medium);
        padding: 5px 10px;
        margin-left: 1rem;
    }
    
    .costreamBtn:hover{
        background: var(--color-background-button-brand-hover);
    }
    
    .costreamBtn:active{
        background: var(--color-background-button-brand-active);
    }
    `

    const costreamSectionStyle = `
    #costreamSection {
        height: 400px;
        resize: vertical;
        overflow: hidden;
        border-top: 3px solid var(--color-accent);
    }

    #costreamSection-header {
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        height: max-content;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--color-border-base);
    }

    .costreamAddBtn {
        background: var(--color-background-button-primary-default);
        color: var(--color-text-button-primary);
        font-weight: bold;
        border-radius: var(--border-radius-medium);
        padding: 5px 10px;
    }

    .costreamAddBtn:hover{
        background: var(--color-background-button-brand-hover);
    }
    
    .costreamAddBtn:active{
        background: var(--color-background-button-brand-active);
    }

    #costream-streams{
        display: flex;
        overflow: scroll;
        height: inherit;
        padding: 10px 10px;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .costream-iframeContainer:last-child{
        margin-bottom: 50px;
    }
    `

    const costreamStreamStyle = `
    .costream-iframeContainer {
        width: max-content;
        height: max-content;
        resize: both;
        overflow: hidden;
    }

    .costream-streamIframe {
        height: 100%;
        width: 100%;
    }
    `

    const style = `
    ${btnStyle}
    ${costreamSectionStyle}
    ${costreamStreamStyle}
    `
    
    const styleElement = document.createElement("style");
    styleElement.id = "costream-styling"
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
}
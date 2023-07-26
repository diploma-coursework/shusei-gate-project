/**
 * api to show custom pop-up
 * @param {'alert' | 'confirm'} type
 * @param {{ title: string, description: string}} msg
 */
export default (type, msg) => {
    const promptBackground = document.querySelector('#prompt-background');

    promptBackground.querySelector('h1.title').textContent = msg.title;
    promptBackground.querySelector('p.description').textContent = msg.description;

    promptBackground.classList.add(`show type-${type}`);
};


function fullscreenWindow(window) {
    browser.windows.update(window.id, { state: "fullscreen" });
}

browser.windows.getAll().then((windowInfoArray) => {
    for (const currentWindow of windowInfoArray) {
        fullscreenWindow(currentWindow)
    }
});

browser.windows.onCreated.addListener((window) => {
    setTimeout(() => fullscreenWindow(window), 50)
});

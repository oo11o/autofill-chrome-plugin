chrome.runtime.onInstalled.addListener(()=> {
    console.log('Installed Plugin')
})

chrome.bookmarks.onCreated.addListener(()=> {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Hello!',
        message: 'Hello World Extension has been installed.'
    });


})
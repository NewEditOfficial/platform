const mediaPage = require('administration/page-objects/sw-media.page-object.js');

module.exports = {
    '@tags': ['media', 'rename', 'media-rename'],
    'open media listing': (browser) => {
        const page = mediaPage(browser);
        page.openMediaIndex();
    },
    'upload and create new media item': (browser) => {
        const page = mediaPage(browser);
        page.uploadImageViaURL(`${process.env.APP_URL}/bundles/administration/static/fixtures/sw-login-background.png`);
    },
    'rename media file using sidebar': (browser) => {
        browser
            .click('.sw-media-preview__item:nth-of-type(1)')
            .waitForElementVisible('.sw-sidebar-item__content')
            .clearValue('.sw-media-quickinfo-metadata-name input')
            .setValue('.sw-media-quickinfo-metadata-name input', 'new file name')
            .click('.sw-media-quickinfo-metadata-name .sw-confirm-field__button--submit')
            .waitForElementPresent('.sw-media-media-item:nth-of-type(1) .sw-media-base-item__loader')
            .waitForElementNotPresent('.sw-media-media-item:nth-of-type(1) .sw-media-base-item__loader')
            .assert.containsText('.sw-media-media-item:nth-of-type(1) .sw-media-base-item__name', 'new file name');
    },
    after: (browser) => {
        browser.end();
    }
};

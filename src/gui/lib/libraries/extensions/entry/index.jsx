/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';
import translations from './translations.json';
import {version as packageVersion} from '../../../../../../package.json';

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const version = `v${packageVersion}`;

const entry = {
    get name () {
        return formatMessage({
            id: 'mpImageEmbed.entry.name',
            defaultMessage: 'Image Embedding',
            description: 'name of the extension'
        });
    },
    extensionId: 'mpImageEmbed',
    extensionURL: 'https://yokobond.github.io/xcx-mp-image-embed/dist/mpImageEmbed.mjs',
    collaborator: 'Koji Yokokawa',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    get description () {
        return `${formatMessage({
            defaultMessage: 'Extension to embed images using MediaPipe Image Embedder',
            description: 'Description for this extension',
            id: 'mpImageEmbed.entry.description'
        })} (${version})`;
    },
    tags: ['ai', 'image', 'machine learning', 'ml', 'mediapipe', 'vision'],
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://yokobond.github.io/xcx-mp-image-embed/',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translations
};

export {entry}; // loadable-extension needs this line.
export default entry;

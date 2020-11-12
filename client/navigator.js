"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-11
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

if(window.navigator) {
  log(`window.navigator =`, navigator)
}

for(const item in navigator) {
  // log(`navigator.${item} =`, item);
  // log(`navigator.${item} =`, item, typeof item);
  log(`navigator.${item} =`, item, navigator[item]);
}

// navigator.vendorSub = vendorSub
// navigator.productSub = productSub
// navigator.vendor = vendor
// navigator.maxTouchPoints = maxTouchPoints
// navigator.userActivation = userActivation
// navigator.doNotTrack = doNotTrack
// navigator.geolocation = geolocation
// navigator.connection = connection
// navigator.plugins = plugins
// navigator.mimeTypes = mimeTypes
// navigator.webkitTemporaryStorage = webkitTemporaryStorage
// navigator.webkitPersistentStorage = webkitPersistentStorage
// navigator.hardwareConcurrency = hardwareConcurrency
// navigator.cookieEnabled = cookieEnabled
// navigator.appCodeName = appCodeName
// navigator.appName = appName
// navigator.appVersion = appVersion
// navigator.platform = platform
// navigator.product = product
// navigator.userAgent = userAgent
// navigator.language = language
// navigator.languages = languages
// navigator.onLine = onLine
// navigator.getBattery = getBattery
// navigator.getGamepads = getGamepads
// navigator.javaEnabled = javaEnabled
// navigator.sendBeacon = sendBeacon
// navigator.vibrate = vibrate
// navigator.scheduling = scheduling
// navigator.xr = xr
// navigator.mediaCapabilities = mediaCapabilities
// navigator.permissions = permissions
// navigator.locks = locks
// navigator.wakeLock = wakeLock
// navigator.usb = usb
// navigator.mediaSession = mediaSession
// navigator.clipboard = clipboard
// navigator.credentials = credentials
// navigator.keyboard = keyboard
// navigator.mediaDevices = mediaDevices
// navigator.storage = storage
// navigator.serviceWorker = serviceWorker
// navigator.deviceMemory = deviceMemory
// navigator.presentation = presentation
// navigator.bluetooth = bluetooth
// navigator.registerProtocolHandler = registerProtocolHandler
// navigator.unregisterProtocolHandler = unregisterProtocolHandler
// navigator.getInstalledRelatedApps = getInstalledRelatedApps
// navigator.clearAppBadge = clearAppBadge
// navigator.setAppBadge = setAppBadge
// navigator.getUserMedia = getUserMedia
// navigator.requestMIDIAccess = requestMIDIAccess
// navigator.requestMediaKeySystemAccess = requestMediaKeySystemAccess
// navigator.webkitGetUserMedia = webkitGetUserMedia


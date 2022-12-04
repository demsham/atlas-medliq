export const italian = window.location.pathname.indexOf('/it') !== -1;
export const homeUrl = italian ? '../' : '';
export const themeBase = homeUrl + 'wp-content/themes/genoa/';
export const MOBILE_WIDTH = 820;
export function t(str) {
  const strings = window.siteOptions.strings;
  const stringWasTranslated = strings && (str in strings);

  if(stringWasTranslated)
    return strings[str];
  else
    return str;
}

/**
 * Adjusted language path, that works with subdirectories.
 */
export function getLanguagePath(code) {
  const basePath = window.location.origin + window.location.pathname.replace('/it', '');
  const path = code === 'en' ? basePath : basePath + code;
  return path.endsWith('/') ? path : path + '/';
}

/**
 * Get the *current* language path
 */
export function getCurrentLanguagePath() {
  const code = italian ? 'it' : 'en';
  return getLanguagePath(code);
}
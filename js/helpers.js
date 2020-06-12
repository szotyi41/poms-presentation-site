/*
*
*
*   Response helper functions.
*
*
*/

/**
 * Return a string of styled icon classes.
 * 
 * @since 1.0.0
 * 
 * @param {array}  icons The icon classes passed with their fa name.
 * @param {string} style The style to be applied to the icon classes.
 * 
 * @return {string} The string of styled icon classes
 */
function setIconsHtml(icons, style = 'margin-right: 5px;')
{
    var implodedIcons = icons.join(' ');
    var styled = (style) ? `style='${style}'` : '';

    return `<i class='${implodedIcons}' ${styled}></i>`;
}

/**
 * Return the HTML of a response element.
 * 
 * Set and return the HTML of a response <div> element containing
 * a message, an array of classes (e.g. `error`, `success`, `info`)
 * and, optionally, an array of icons.
 * The default element type is <span>.
 * 
 * @since 1.0.0
 * 
 * @param {string} message 
 * @param {array}  classes 
 * @param {array}  icons 
 * @param {string} elemType 
 * 
 * @return {string} The styled response
 */
export function setResponse(message, classes, icons = null, elemType = 'span') 
{       
    var iconsHtml = (icons) 
        ? setIconsHtml(icons)
        : '';

    var implodedClasses = classes.join(' ');
    var elemHtml = `<${elemType} class='${implodedClasses}'>${message}</${elemType}>`;
    
    return `${iconsHtml}${elemHtml}`;
}

var css = require('dom-css')

export default (root, text, theme) => {
    var background = root.appendChild(document.createElement('div'));
    css(background, {
        left: 0,
        width: '36%',
        display: 'inline-block',
        height: '20px',
        paddingRight: '2%',
        verticalAlign: 'top'
    });

    var label = background.appendChild(document.createElement('span'));
    label.innerHTML = text;
    css(label, {
        color: theme.text1,
        display: 'inline-block',
        verticalAlign: 'sub',
        'line-height': '20px'
    });
    return label;
}

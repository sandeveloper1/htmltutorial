document.getElementById('settings-icon').addEventListener('click', function () {
    document.getElementById('settings-menu').classList.toggle('show');
});

document.getElementById('dark-mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});

function applySettings() {
    const fontSize = document.getElementById('font-size').value;
    document.documentElement.style.setProperty('--editor-font-size', fontSize);
    document.getElementById('settings-menu').classList.remove('show');
}

function openEditor() {
    window.location.href = 'code_editor.html';
}
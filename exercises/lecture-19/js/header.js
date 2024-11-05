const templateHeader = document.createElement('template');
templateHeader.innerHTML = `
<style>
@import url("/exercises/lecture-19/css/main.css");
</style>
<header>
<nav>
<ul>
<li><a href="about.html">About</a></li>
<li><a href="work.html">Work</a></li>
<li><a href="contact.html">Contact</a></li>
</ul>
</nav>
</header>`

export default class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowHeader = this.attachShadow({mode: 'closed'});
        shadowHeader.appendChild(templateHeader.content);
    }
}
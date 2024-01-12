class BoxShadowGenerator {

    constructor(horizontal, horizontalRef, vertical, verticalRef, blur, blurRef, spread, spreadRef, previewBox, rule, webrule, mozrule, color, colorRef) {
        this.horizontal = horizontal;
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread;
        this.spreadRef = spreadRef;
        this.previewBox = previewBox;
        this.rule = rule;
        this.color = color;
        this.colorRef =colorRef;
        this.webrule = webrule;
        this.mozrule = mozrule;
    }

    initialize() {
        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.blurRef.value = this.blur.value;
        this.spreadRef.value = this.spread.value;

        this.applyRule();
        this.ShowRule();
    }

    applyRule() {
        this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px ${this.colorRef.value}`;
        this.currentRule = this.previewBox.style.boxShadow;
    }

    ShowRule() {
        this.rule.innerText = this.currentRule;
        this.webrule.innerText = this.currentRule;
        this.mozrule.innerText = this.currentRule;
    }
    updateValue(type, value) {
        switch (type) {
            case "horizontal":
                this.horizontalRef.value = value;
                break;
            case "vertical":
                this.verticalRef.value = value;
                break;
            case "blur":
                this.blurRef.value = value;
                break;
            case "spread":
                this.spreadRef.value = value;
                break;
            case "color":
                this.colorRef.value = value;
        }

        this.applyRule();
        this.ShowRule();
    }
}

//Seleção de elementos
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#Spread");
const spreadRef = document.querySelector("#Spread-value");

const color = document.querySelector('#color');
const colorRef = document.querySelector('#color-value');

const previewBox = document.querySelector('#box');

const rule = document.querySelector('#rule span');
const webrule = document.querySelector('#webkit-rule span');
const mozrule = document.querySelector('#moz-rule span');

const boxShadow = new BoxShadowGenerator(horizontal, horizontalRef, vertical, verticalRef, blur, blurRef, spread, spreadRef, previewBox, rule, webrule, mozrule, color, colorRef);

console.log(boxShadow)

boxShadow.initialize();

//Eventos
horizontal.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("horizontal", value);
});
vertical.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("vertical", value);
});
blur.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("blur", value);
});
spread.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("spread", value);
});
color.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("color", value);
});
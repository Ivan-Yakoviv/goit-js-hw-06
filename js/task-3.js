class StringBuilder {

    #value = "initialValue";

    constructor(params) {
        this.#value = params;
    }

    getValue() {
        return this.#value;
    }

    padStart(str) {
        this.#value = this.#value.padStart(2, str);
    }

    padEnd(str) {
        this.#value = this.#value.padEnd(3, str);
    }

    padBoth(str) {
        this.#value = str + this.#value + str;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

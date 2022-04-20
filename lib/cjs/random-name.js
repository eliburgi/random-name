"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomName = void 0;
const randomName = () => {
    const names = ['A', 'B', 'C'];
    return names[Math.floor(Math.random() * names.length)];
};
exports.randomName = randomName;

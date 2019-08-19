attribute vec2 position;
attribute vec2 texturePosition;
varying vec2 texturePositionF;

void main() {
    gl_Position = vec4(position.x, position.y, 0, 1);
    texturePositionF = texturePosition;
}
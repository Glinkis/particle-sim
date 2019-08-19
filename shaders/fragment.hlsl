precision mediump float;
uniform sampler2D textureSampler;
varying vec2 texturePositionF;

void main() {
    vec4 color = texture2D(textureSampler, texturePositionF);
    gl_FragColor = color;
}
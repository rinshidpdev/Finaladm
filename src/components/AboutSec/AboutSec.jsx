// // src/components/AboutSec.jsx
// import React from 'react';
// import './AboutSec.css';
// import teamImage from '../../assets/team.png'; // Replace with your image path

// const AboutSec = () => {
//   return (
//     <div className="about-section">
//       <h1 className="about-title">ABOUT US</h1>
//       <div className="about-content">
//         <div className="about-left">
//           <button className="about-btn">About ADM Agency</button>
//           <h2 className="about-heading">
//             Driven By Insight. <br /> Designed For Impact.
//           </h2>
//           <p className="about-desc">
//             At <strong>ADM Agency</strong>, we believe every brand has a story worth telling — and we’re here to make sure it’s told the right way. Based in the heart of <strong>Dubai</strong> and proudly part of the <strong>Anisha Group of Companies</strong>, we bring together creativity, strategy, and digital innovation to help businesses thrive in the digital age.
//           </p>
//           <p className="about-desc">
//             We specialize in <strong>Branding</strong>, <strong>Web Development</strong>, and <strong>Digital Marketing</strong>, offering a full-spectrum approach that turns ideas into measurable growth.
//           </p>
//         </div>
//         <div className="about-right">
//           <img src={teamImage} alt="Team" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSec;

import React, { useEffect, useRef, useState } from 'react';


const GooeyAnimation = () => {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const uniformsRef = useRef({});
  const animationRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const params = {
    scrollProgress: 0,
    colWidth: 0.7,
    speed: 0.2,
    scale: 0.25,
    seed: 0.231,
    color: [0.29, 0.0, 0.51], // Indigo
    pageColor: "white",
    backgroundColor: 'white'
  };

  const vertShader = `
    precision mediump float;
    varying vec2 vUv;
    attribute vec2 a_position;
    void main() {
      vUv = a_position;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fragShader = `
    precision mediump float;
    varying vec2 vUv;
    uniform vec2 u_resolution;
    uniform float u_scroll_progr;
    uniform float u_col_width;
    uniform float u_seed;
    uniform float u_scale;
    uniform float u_time;
    uniform float u_speed;
    uniform vec3 u_color;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }

    float get_l(vec2 v) {
        return 1. - clamp(0., 1., length(v));
    }

    float rand(float n) {
        return fract(sin(n) * 43758.5453123);
    }

    void main() {
        float scale = .001 * u_scale;
        float speed = .001 * u_speed;

        vec2 uv = vUv;
        uv.x *= (scale * u_resolution.x);

        vec2 noise_uv = uv;
        noise_uv *= 5.;
        noise_uv.y *= (.25 * scale * u_resolution.y);
        noise_uv += vec2(0., u_time * 1.5 * speed);
        float shape = 0.;
        shape += snoise(noise_uv);
        shape = clamp(.5 + .5 * shape, 0., 1.);
        shape *= pow(.5 * uv.y + .7 + pow(u_scroll_progr, 2.) + (.4 * u_scroll_progr * (1. - pow(vUv.x - .2, 2.))), 10.);
        shape = clamp(shape, 0., 1.);

        float dots = 0.;
        float bars = 0.;
        float light = 0.;

        const int num_col = 9;
        for (int i = 0; i < num_col; i++) {
            vec2 col_uv = vUv;
            float start_time_offset = rand(100. * (float(i) + u_seed));
            float c_t = fract(u_time * speed + start_time_offset);
            float drop_time = .2 + .6 * rand(10. * (float(i) + u_seed));

            float before_drop_normal = c_t / drop_time;
            float before_drop_t = pow(before_drop_normal, .4) * drop_time;
            float after_drop_normal = max(0., c_t - drop_time) / (1. - drop_time);
            float after_drop_t_dot = 3. * pow(after_drop_normal, 2.) * (1. - drop_time);
            float after_drop_t_bar = pow(after_drop_normal, 2.) * (drop_time);

            float eased_drop_t = step(c_t, drop_time) * before_drop_t;
            eased_drop_t += step(drop_time, c_t) * (drop_time + after_drop_t_dot);

            col_uv.y += (1. + 3. * rand(15. * float(i))) * u_scroll_progr;

            col_uv.x *= (u_resolution.x / u_resolution.y);
            col_uv *= (7. * scale * u_resolution.y);
            col_uv.x += (u_col_width * (.5 * float(num_col) - float(i)));

            vec2 dot_uv = col_uv;
            dot_uv.y += 4. * (eased_drop_t - .5);
            float dot = get_l(dot_uv);
            dot = pow(dot, 4.);

            float drop_grow = step(c_t, drop_time) * pow(before_drop_normal, .4);
            drop_grow += step(drop_time, c_t) * mix(1., .8, clamp(7. * after_drop_normal, 0., 1.));
            dot *= drop_grow;

            dot *= step(.5, drop_time);
            dots += dot;

            vec2 bar_uv = col_uv;
            bar_uv.y += step(c_t, drop_time) * 4. * (before_drop_t - .5);
            bar_uv.y += step(drop_time, c_t) * 4. * (drop_time - after_drop_t_bar - .5);
            float bar = smoothstep(-.5, 0., bar_uv.x) * (1. - smoothstep(0., .5, bar_uv.x));
            bar = pow(bar, 4.);
            light += bar * smoothstep(.0, .1, -bar_uv.x);
            float bar_mask = smoothstep(-.2, .2, bar_uv.y);
            bar *= bar_mask;

            bars += bar;
        }

        shape += bars;
        shape = clamp(shape, 0., 1.);
        shape += dots;

        float gooey = smoothstep(.48, .5, shape);
        gooey -= .1 * smoothstep(.5, .6, shape);
        vec3 color = u_color;
        color.r += .2 * (1. - vUv.y) * (1. - u_scroll_progr);
        color *= gooey;
        color = mix(color, vec3(1.), max(0., 1. - 2. * vUv.y) * light * smoothstep(.1, .7, snoise(.5 * uv)) * (smoothstep(.49, .6, shape) - smoothstep(.6, 1., shape)));

        gl_FragColor = vec4(color, gooey);
    }
  `;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      if (glRef.current && uniformsRef.current.u_scroll_progr) {
        glRef.current.uniform1f(uniformsRef.current.u_scroll_progr, progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initShader = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const gl = canvas.getContext("webgl");
    if (!gl) return null;

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertShader);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragShader);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    uniformsRef.current = {
      u_resolution: gl.getUniformLocation(program, "u_resolution"),
      u_scroll_progr: gl.getUniformLocation(program, "u_scroll_progr"),
      u_col_width: gl.getUniformLocation(program, "u_col_width"),
      u_speed: gl.getUniformLocation(program, "u_speed"),
      u_scale: gl.getUniformLocation(program, "u_scale"),
      u_seed: gl.getUniformLocation(program, "u_seed"),
      u_color: gl.getUniformLocation(program, "u_color"),
      u_time: gl.getUniformLocation(program, "u_time"),
    };

    gl.uniform1f(uniformsRef.current.u_col_width, params.colWidth);
    gl.uniform1f(uniformsRef.current.u_speed, params.speed);
    gl.uniform1f(uniformsRef.current.u_scale, params.scale);
    gl.uniform1f(uniformsRef.current.u_seed, params.seed);
    gl.uniform3f(uniformsRef.current.u_color, ...params.color);
    gl.uniform1f(uniformsRef.current.u_scroll_progr, 0);

    return gl;
  };

  const render = () => {
    const gl = glRef.current;
    if (!gl) return;
    const time = performance.now();
    gl.uniform1f(uniformsRef.current.u_time, time);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    animationRef.current = requestAnimationFrame(render);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const gl = glRef.current;
    const ratio = Math.min(window.devicePixelRatio, 2);
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uniformsRef.current.u_resolution, canvas.width, canvas.height);
  };

  useEffect(() => {
    glRef.current = initShader();
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      <style jsx="true">{`
        body, html {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          overflow-x: hidden;
        }

        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        canvas#gooey-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .scroll-msg {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 2rem;
          color: white;
        }

        .arrow-animated {
          font-size: 2rem;
          animation: floatDown 1.5s infinite;
        }

        @keyframes floatDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <div className="hero">
        <canvas ref={canvasRef} id="gooey-overlay"></canvas>
        <div className="scroll-msg">
          <div>About Us</div>
          
          <div className="arrow-animated">⇩</div>
        </div>
      </div>

    
    </>
  );
};

export default GooeyAnimation;

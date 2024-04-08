import packageJson from "../../package.json";

export const system = {
  username: {
    name: "Username",
    value: "user",
  },
  system: {
    name: "System",
    value: "MacOS",
  },
  version: {
    name: "Version",
    value: packageJson.version,
  },
  host: {
    name: "Host",
    value: "Macmini9,1",
  },
  kernel: {
    name: "Kernel",
    value: "23.4.0",
  },
  uptime: {
    name: "Uptime",
    value: "---",
  },
  shell: {
    name: "Shell",
    value: "zsh 5.9",
  },
  resolution: {
    name: "Resolution",
    value: "1920x1080",
  },
  de: {
    name: "DE",
    value: "Aqua",
  },
  wm: {
    name: "WM",
    value: "Quartz Compositor",
  },
  terminal: {
    name: "Terminal",
    value: "iTerm2",
  },
  font: {
    name: "Terminal Font",
    value: "GeistMonoNF-Regular 13",
  },
  cpu: {
    name: "CPU",
    value: "Apple M1",
  },
  gpu: {
    name: "GPU",
    value: "Apple M1",
  },
};

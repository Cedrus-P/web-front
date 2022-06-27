module.exports = {
  // 手动切换暗模式
  darkMode: 'class',
  // tailwind 应用范围
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.45rem', '0.55rem'],
        lg: ['0.55rem', '0.65rem'],
        xl: ['0.65rem', '0.75rem']
      },
      boxShadow: {
        'l-white': '-10px 0 10px white',
        'l-slate': '-10px 0 10px #18181b'
      },
      height: {
        header: '72px',
        main: 'calc(100vh - 72px)'
      },
      colors: {
        main: '#55d5f5',
        'hover-main': '#00aabb'
      }
    }
  },
  plugins: []
}

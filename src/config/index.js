var config = process.env.NODE_ENV === 'development' ? require('./dev.env') : require('./prod.env.js')

export default config

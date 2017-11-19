var config = process.env.NODE_ENV == 'development' ? require('./dev.env') : require('./prod.env.js')
console.log(config)
export default config

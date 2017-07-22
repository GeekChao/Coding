module.exports = function(config){
    config.set({
        frameworks: ['browserify', 'jasmine'],
        files: [
            'Ch 08. Recursion and Dynamic Programming/src/**/*.js',
            'Ch 08. Recursion and Dynamic Programming/test/**/*_spec.js'
        ],
        preprocessors:{
            '**/test/**/*.js': ['browserify'],
            '**/src/**/*.js': ['browserify']
        },
        browsers: ['PhantomJS'],
        browserify: {
            debug: true
        }
    });
}
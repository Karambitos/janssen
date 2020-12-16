module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Styles
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'assets/app.min.css': 'sass/app.scss'
                }
            }
        },

        // Scripts
        uglify: {
            my_target: {
                options: {
                    sourceMap: true
                },
                files: {
                    'assets/app.min.js': [
                        'js/jquery.min.js',
                        'js/libs/**/*.js',
                        'js/functions.js',
                        'js/sound.js',
                        'js/speed-dating.js',
                        'js/timer.js',
                    ]
                }
            }
        },

        // Watch
        watch: {
            sass: {
                files: ['sass/**/*'],
                tasks: ['sass']
            },
            uglify: {
                files: ['js/**/*'],
                tasks: ['uglify']
            }
        }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', 'build');
    grunt.registerTask('build', ['sass', 'uglify']);

};

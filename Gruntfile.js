
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    concat: {
      dist: {
        src: [
          'bower_components/d3/d3.js',
          'bower_components/nprogress/nprogress.js',
          'assets/javascripts/**/*.js'
        ],
        dest: 'script.js'
      }
    },

    uglify: {
      dist: {
        files: {
          'script.js': 'script.js'
        }
      }
    },

    stylus: {
      dist: {
        files: {
          'style.css': 'assets/stylesheets/style.styl'
        }
      },
      options: {
        paths: ['bower_components'],
        'include css': true
      }
    },

    cssmin: {
      dist: {
        files: {
          'style.css': 'style.css'
        }
      }
    },

    watch: {
      dist: {
        files: 'assets/**/*',
        tasks: 'compile'
      }
    }

  });

  grunt.registerTask('compile', ['stylus', 'concat']);
  grunt.registerTask('compile:min', ['compile', 'cssmin', 'uglify']);
  grunt.registerTask('default', 'compile:min');

};

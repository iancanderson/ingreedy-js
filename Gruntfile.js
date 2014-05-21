module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js'
      }
    },
    peg: {
      ingreedy: {
        src: 'grammar/ingreedy.peg',
        dest: 'src/parser.js',
        options: { exportVar: 'Ingreedy' }
      }
    },
    watch: {
      grammar: {
        files: ['grammar/*.peg'],
        tasks: ['build', 'test']
      },
      test: {
        files: ['spec/**/*.js'],
        tasks: ['test']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-peg');

  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('build', ['peg']);

  grunt.registerTask('travis', ['build', 'test']);
  grunt.registerTask('default', ['build', 'test']);
};

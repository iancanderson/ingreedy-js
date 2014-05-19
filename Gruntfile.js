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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-peg');

  grunt.registerTask('test', ['build', 'jasmine']);
  grunt.registerTask('build', ['peg']);

  grunt.registerTask('default', ['test']);

};

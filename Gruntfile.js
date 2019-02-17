module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      default: {
        files: {
          'web/styles/main.css': 'web/styles/src/main.less'
        }
      }
    },
    watch: {
      less: {
        files: ['web/styles/src/**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['less'])
}

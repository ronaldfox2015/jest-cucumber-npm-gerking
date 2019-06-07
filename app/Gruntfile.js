module.exports = function (grunt) {
    grunt.initConfig({
        freeport: {
            acceptance: {
                options: {
                    start: 3000
                }
            }
        },
        express: {
            acceptance: {
                options: {
                    script: 'src/server/index.js',
                    background: true,
                    output: 'Server listening on port',
                    port: '<%= freeport.acceptance %>'
                }
            }
        },
        shell: {
            acceptance: {
                command: 'cucumber.js src/acceptance/features -r src/acceptance/steps',
                env: {
                    PORT: '<%= freeport.acceptance %>'
                }
            }
		}
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-freeport');

    grunt.registerTask('acceptance', ['freeport:acceptance', 'express:acceptance', 'shell:acceptance']);
};

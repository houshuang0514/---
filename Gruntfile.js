// 包装函数
module.exports = function(grunt){

	grunt.initConfig({

		pkg:grunt.file.readJSON('package.json')
		jshint:{
			build:['Gruntfile.js','src/*.js'],
			options:{
				jshintrc: 'jshintrc'
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default',['jshint','watch']);

};
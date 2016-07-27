casper.test.begin( 'Compare tests', function ( test ) {

	phantomcss.init( {
		screenshotRoot: './compare/screenshots',
		failedComparisonsRoot: './compare/failures',
		cleanupComparisonImages: true,
		comparisonResultRoot: './compare/results',
		//fileNameGetter: function overide_file_naming(){},
		onPass: function passCallback(){},
		onFail: function failCallback(){},
		onTimeout: function timeoutCallback(){},
		onComplete: function completeCallback(){},
		//hideElements: '#thing.selector',
		addLabelToFailedImage: false,
		outputSettings: {
			errorColor: {
				red: 255,
				green: 0,
				blue: 255
			},
			errorType: 'movementDifferenceIntensity',
			transparency: 0.3
		}
	} );

	casper.on( 'remote.message', function ( msg ) {
		this.echo( msg );
	} );

	casper.on( 'error', function ( err ) {
		this.die( "PhantomJS has errored: " + err );
	} );

	casper.on( 'resource.error', function ( err ) {
		casper.log( 'Resource load error: ' + err, 'warning' );
	} );
	/*
		The test scenario
	*/

	casper.start( 'http://localhost:3000' );

	casper.viewport(1280, 1500);

	casper.then( function () {
		phantomcss.screenshot( 'body', 'baseimage' );
	} );

	/*
	casper.then( function now_check_the_screenshots() {
		// compare screenshots
		phantomcss.compareAll();
	} );
	*/
	/*
	Casper runs tests
	*/
	casper.run( function () {
		console.log( '\nTHE END.' );
		// phantomcss.getExitStatus() // pass or fail?
		casper.test.done();
	} );
} );
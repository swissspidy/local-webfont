#!/usr/bin/env node

const fs            = require( 'fs' );
const path          = require( "path" );
const request       = require( 'request' );
const replaceStream = require( 'replacestream' );

const [ , , ...args ] = process.argv;

const [ source, target, fontDisplay = 'fallback' ] = args;

if ( source === undefined || target === undefined ) {
	console.log( 'Source or target missing' );
	process.exit( 1 );
}

if ( -1 === [ 'auto', 'block', 'swap', 'fallback', 'optional' ].indexOf( fontDisplay ) ) {
	console.log( 'Invalid font-display property passed.' );
	process.exit( 1 );
}

const resolvedTarget = path.resolve( target );

console.log( `Downloading CSS from ${source}...` );

request
	.get( source )
	.on( 'error', function ( err ) {
		console.log( err )
	} )
	.pipe( replaceStream( /@font-face {\n/gm, `@font-face {
font-display: ${fontDisplay};
` ) )
	.pipe( fs.createWriteStream( resolvedTarget ) )
	.on( 'finish', () => {
		console.log( `CSS saved to ${resolvedTarget}` );

		process.exit();
	} );

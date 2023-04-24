<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'nev65097_tslab' );

/** Database username */
define( 'DB_USER', 'nev65097_nevafarm' );

/** Database password */
define( 'DB_PASSWORD', 'Abcd!@1234' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fMQAS*n3+f*[+$#svObb*UFkH}k,IQHK5_KdLaM}`m?L3h0O/=#;O-$!*$}yE%A[' );
define( 'SECURE_AUTH_KEY',  '|~]p2rkIW$Q<jOT3Y?>/q`6%[~ic6x4Id=M5vo$<WoJDrlO~p,kDA!8`{)Vg8Eg4' );
define( 'LOGGED_IN_KEY',    'E%a1jSl#{}^*r*~hqC1^H)EXK2Xcpj@Wco/.7qE_Mn9uA;AgLZ.8[oT&^,U:[,mQ' );
define( 'NONCE_KEY',        '02JSO,qCGR}/Rf0t5~(v=abOx_(TCA`0KGtfoL9<x@m]^h[9{XK41Q>}1NsJy&~e' );
define( 'AUTH_SALT',        '#L._L2Y&o#.->J 7T^>IBYf:z8l@@>1 Q?pJauf=6GWM9u]6l^G$e|[tha,@%4|(' );
define( 'SECURE_AUTH_SALT', '.lA9M]__i#Idn7rnFbE;/zIMEX-B=;X84N|;B__Ni ozK9fna|*7IU[Jh^$aN*{/' );
define( 'LOGGED_IN_SALT',   'Ztx$.7#[7g$zdmo_5mo1>LZyVHCg!]<7BWZb8R7}`_Ou0SafK#R}tZXgTQ>((U(;' );
define( 'NONCE_SALT',       'Bx2Cey_8)fHOi=DIpl#,$F06NH`G?5& 8uN`1s4Of@?F|NDqm^SWi#mlf-N3QJb)' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

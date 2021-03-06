<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit00411b977ad7ffac37b7612c1e9e343a
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'SlowProg\\CopyFile\\' => 18,
        ),
        'L' => 
        array (
            'Log\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'SlowProg\\CopyFile\\' => 
        array (
            0 => __DIR__ . '/..' . '/slowprog/composer-copy-file',
        ),
        'Log\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit00411b977ad7ffac37b7612c1e9e343a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit00411b977ad7ffac37b7612c1e9e343a::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}

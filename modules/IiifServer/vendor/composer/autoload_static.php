<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitafe0a1a54758379206c481e8c22d9785
{
    public static $prefixLengthsPsr4 = array (
        'J' => 
        array (
            'JamesHeinrich\\GetID3\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'JamesHeinrich\\GetID3\\' => 
        array (
            0 => __DIR__ . '/..' . '/james-heinrich/getid3/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitafe0a1a54758379206c481e8c22d9785::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitafe0a1a54758379206c481e8c22d9785::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}

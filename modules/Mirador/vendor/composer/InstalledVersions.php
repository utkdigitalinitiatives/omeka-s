<?php

namespace Composer;

use Composer\Semver\VersionParser;






class InstalledVersions
{
private static $installed = array (
  'root' => 
  array (
    'pretty_version' => 'dev-main',
    'version' => 'dev-main',
    'aliases' => 
    array (
    ),
    'reference' => '0f8e5da3cf72931f8f049c3702f0e323e95aa810',
    'name' => '__root__',
  ),
  'versions' => 
  array (
    '2sc1815j/mirador-dragndrop-link-plugin' => 
    array (
      'pretty_version' => '0.0.1',
      'version' => '0.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    '__root__' => 
    array (
      'pretty_version' => 'dev-main',
      'version' => 'dev-main',
      'aliases' => 
      array (
      ),
      'reference' => '0f8e5da3cf72931f8f049c3702f0e323e95aa810',
    ),
    'archivelabs/mirador-crosslink-plugin' => 
    array (
      'pretty_version' => '0.0.1',
      'version' => '0.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'daniel-km/mirador-plugin-metadata-tab' => 
    array (
      'pretty_version' => '1.0.0',
      'version' => '1.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'dbmdz/mirador-plugins' => 
    array (
      'pretty_version' => '1.0.6.1',
      'version' => '1.0.6.1',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'jazahn/mirador-metadata' => 
    array (
      'pretty_version' => '0.0.1',
      'version' => '0.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'jbhoward-dublin/mirador-plugins-ucd' => 
    array (
      'pretty_version' => '0.0.1',
      'version' => '0.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'jeffreycwitt/mirador-ldn-plugin' => 
    array (
      'pretty_version' => '0.0.1',
      'version' => '0.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'mirador/mirador' => 
    array (
      'pretty_version' => '2.7.0',
      'version' => '2.7.0.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'projectmirador/mirador-integration' => 
    array (
      'pretty_version' => '0.0.1',
      'version' => '0.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'slowprog/composer-copy-file' => 
    array (
      'pretty_version' => '0.3.3',
      'version' => '0.3.3.0',
      'aliases' => 
      array (
      ),
      'reference' => 'b02d55f7587577f29d355f0ce7b697f66dffc0af',
    ),
    'sul-dlss/mirador-jump-to-page' => 
    array (
      'pretty_version' => '0.0.1',
      'version' => '0.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'ucla-library/mirador-disable-zoom' => 
    array (
      'pretty_version' => '0.1.0',
      'version' => '0.1.0.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'ucla-library/mirador-ruler' => 
    array (
      'pretty_version' => '0.1.0',
      'version' => '0.1.0.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'ucla-library/mirador-share-workspace' => 
    array (
      'pretty_version' => '0.1.0',
      'version' => '0.1.0.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'ucla-library/mirador-sync-windows' => 
    array (
      'pretty_version' => '0.1.0',
      'version' => '0.1.0.0',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
  ),
);







public static function getInstalledPackages()
{
return array_keys(self::$installed['versions']);
}









public static function isInstalled($packageName)
{
return isset(self::$installed['versions'][$packageName]);
}














public static function satisfies(VersionParser $parser, $packageName, $constraint)
{
$constraint = $parser->parseConstraints($constraint);
$provided = $parser->parseConstraints(self::getVersionRanges($packageName));

return $provided->matches($constraint);
}










public static function getVersionRanges($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

$ranges = array();
if (isset(self::$installed['versions'][$packageName]['pretty_version'])) {
$ranges[] = self::$installed['versions'][$packageName]['pretty_version'];
}
if (array_key_exists('aliases', self::$installed['versions'][$packageName])) {
$ranges = array_merge($ranges, self::$installed['versions'][$packageName]['aliases']);
}
if (array_key_exists('replaced', self::$installed['versions'][$packageName])) {
$ranges = array_merge($ranges, self::$installed['versions'][$packageName]['replaced']);
}
if (array_key_exists('provided', self::$installed['versions'][$packageName])) {
$ranges = array_merge($ranges, self::$installed['versions'][$packageName]['provided']);
}

return implode(' || ', $ranges);
}





public static function getVersion($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

if (!isset(self::$installed['versions'][$packageName]['version'])) {
return null;
}

return self::$installed['versions'][$packageName]['version'];
}





public static function getPrettyVersion($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

if (!isset(self::$installed['versions'][$packageName]['pretty_version'])) {
return null;
}

return self::$installed['versions'][$packageName]['pretty_version'];
}





public static function getReference($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

if (!isset(self::$installed['versions'][$packageName]['reference'])) {
return null;
}

return self::$installed['versions'][$packageName]['reference'];
}





public static function getRootPackage()
{
return self::$installed['root'];
}







public static function getRawData()
{
return self::$installed;
}



















public static function reload($data)
{
self::$installed = $data;
}
}

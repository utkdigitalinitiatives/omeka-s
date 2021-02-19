# Omeka S for the University of Tennessee, Knoxville Libraries
[![buddy pipeline](https://app.buddy.works/utk-libraries/omeka-s/pipelines/pipeline/283237/badge.svg?token=a08d633e5c643d3691ca9044dffdb440f63f3a962084d29bf363b91177438c2b "buddy pipeline")](https://app.buddy.works/utk-libraries/omeka-s/pipelines/pipeline/283237)

A repository that includes the application matching that of the managed host entity at tennesee.omeka.net. For more information, please see [extended application documentation](https://utkdigitalinitiatives.github.io/omeka-s/).


## Notes

- :package: We are currently running [v3.0.1 of Omeka S](https://github.com/omeka/omeka-s/releases/tag/v3.0.1)
- :building_construction: This repository is for local development only
- :rocket: Only `/themes` and `/modules` are deployed (via Buddy) to tennessee.omeka.net
- :art: Sites under our Omeka S install use the custom `utk-exhibits` theme, titled *UT Libraries*
- :globe_with_meridians: Omeka.net is a managed host, as such we do not control the of Omeka S core
- :white_check_mark: We are responsible for module version upkeep and integration testing

**Everything below is boilerplate Omeka S README.md.** :ok_person: 

## Omeka S

Omeka S is a web publication system for universities, galleries, libraries,
archives, and museums. It consists of a local network of independently curated
exhibits sharing a collaboratively built pool of items, media, and their metadata.

See the [user manual](https://omeka.org/s/docs/user-manual) for more information.

## Installation

### Requirements
- Linux
- Apache (with AllowOverride set to "All" and mod_rewrite enabled)
- MySQL 5.6.4+ (or MariaDB 10.0.5+)
- PHP 7.1+ (latest stable version preferred, with PDO, pdo_mysql, and xml extensions installed)

## Libraries

Omeka uses the following libraries, among others:

* [Zend Framework 3](http://framework.zend.com/)
* [Doctrine 2](http://www.doctrine-project.org/)
* [EasyRdf](http://www.easyrdf.org/)
* [PHPUnit](https://phpunit.de/)
* [jQuery](http://jquery.com/)

## Coding Standards

Omeka development adheres to the [Zend Framework 2 Coding Standards](https://zf2-docs.readthedocs.org/en/latest/ref/coding.standard.html)
and uses the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) branching model.

<?php

namespace DoctrineProxies\__CG__\Omeka\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Media extends \Omeka\Entity\Media implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Common\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array properties to be lazy loaded, with keys being the property
     *            names and values being their default values
     *
     * @see \Doctrine\Common\Persistence\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = array();



    /**
     * @param \Closure $initializer
     * @param \Closure $cloner
     */
    public function __construct($initializer = null, $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return array('__isInitialized__', 'id', 'type', 'data', 'source', 'mediaType', 'filename', 'hasOriginal', 'hasThumbnails', 'position', 'item', 'owner', 'resourceClass', 'resourceTemplate', 'isPublic', 'created', 'modified', 'values');
        }

        return array('__isInitialized__', 'id', 'type', 'data', 'source', 'mediaType', 'filename', 'hasOriginal', 'hasThumbnails', 'position', 'item', 'owner', 'resourceClass', 'resourceTemplate', 'isPublic', 'created', 'modified', 'values');
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Media $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy->__getLazyProperties() as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', array());
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load()
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', array());
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized()
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized)
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null)
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer()
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null)
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner()
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @static
     */
    public function __getLazyProperties()
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function getResourceName()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getResourceName', array());

        return parent::getResourceName();
    }

    /**
     * {@inheritDoc}
     */
    public function getId()
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', array());

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function setType($type)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setType', array($type));

        return parent::setType($type);
    }

    /**
     * {@inheritDoc}
     */
    public function getType()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getType', array());

        return parent::getType();
    }

    /**
     * {@inheritDoc}
     */
    public function setData($data)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setData', array($data));

        return parent::setData($data);
    }

    /**
     * {@inheritDoc}
     */
    public function getData()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getData', array());

        return parent::getData();
    }

    /**
     * {@inheritDoc}
     */
    public function setSource($source)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSource', array($source));

        return parent::setSource($source);
    }

    /**
     * {@inheritDoc}
     */
    public function getSource()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSource', array());

        return parent::getSource();
    }

    /**
     * {@inheritDoc}
     */
    public function setMediaType($mediaType)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setMediaType', array($mediaType));

        return parent::setMediaType($mediaType);
    }

    /**
     * {@inheritDoc}
     */
    public function getMediaType()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getMediaType', array());

        return parent::getMediaType();
    }

    /**
     * {@inheritDoc}
     */
    public function setHasOriginal($hasOriginal)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setHasOriginal', array($hasOriginal));

        return parent::setHasOriginal($hasOriginal);
    }

    /**
     * {@inheritDoc}
     */
    public function hasOriginal()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'hasOriginal', array());

        return parent::hasOriginal();
    }

    /**
     * {@inheritDoc}
     */
    public function setHasThumbnails($hasThumbnails)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setHasThumbnails', array($hasThumbnails));

        return parent::setHasThumbnails($hasThumbnails);
    }

    /**
     * {@inheritDoc}
     */
    public function hasThumbnails()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'hasThumbnails', array());

        return parent::hasThumbnails();
    }

    /**
     * {@inheritDoc}
     */
    public function setFilename($filename)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setFilename', array($filename));

        return parent::setFilename($filename);
    }

    /**
     * {@inheritDoc}
     */
    public function getFilename()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFilename', array());

        return parent::getFilename();
    }

    /**
     * {@inheritDoc}
     */
    public function setPosition()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPosition', array());

        return parent::setPosition();
    }

    /**
     * {@inheritDoc}
     */
    public function getPosition()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPosition', array());

        return parent::getPosition();
    }

    /**
     * {@inheritDoc}
     */
    public function setItem(\Omeka\Entity\Item $item = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setItem', array($item));

        return parent::setItem($item);
    }

    /**
     * {@inheritDoc}
     */
    public function getItem()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getItem', array());

        return parent::getItem();
    }

    /**
     * {@inheritDoc}
     */
    public function setOwner(\Omeka\Entity\User $owner = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setOwner', array($owner));

        return parent::setOwner($owner);
    }

    /**
     * {@inheritDoc}
     */
    public function getOwner()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getOwner', array());

        return parent::getOwner();
    }

    /**
     * {@inheritDoc}
     */
    public function setResourceClass(\Omeka\Entity\ResourceClass $resourceClass = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setResourceClass', array($resourceClass));

        return parent::setResourceClass($resourceClass);
    }

    /**
     * {@inheritDoc}
     */
    public function getResourceClass()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getResourceClass', array());

        return parent::getResourceClass();
    }

    /**
     * {@inheritDoc}
     */
    public function setResourceTemplate(\Omeka\Entity\ResourceTemplate $resourceTemplate = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setResourceTemplate', array($resourceTemplate));

        return parent::setResourceTemplate($resourceTemplate);
    }

    /**
     * {@inheritDoc}
     */
    public function getResourceTemplate()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getResourceTemplate', array());

        return parent::getResourceTemplate();
    }

    /**
     * {@inheritDoc}
     */
    public function setIsPublic($isPublic)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setIsPublic', array($isPublic));

        return parent::setIsPublic($isPublic);
    }

    /**
     * {@inheritDoc}
     */
    public function isPublic()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isPublic', array());

        return parent::isPublic();
    }

    /**
     * {@inheritDoc}
     */
    public function setCreated(\DateTime $dateTime)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreated', array($dateTime));

        return parent::setCreated($dateTime);
    }

    /**
     * {@inheritDoc}
     */
    public function getCreated()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCreated', array());

        return parent::getCreated();
    }

    /**
     * {@inheritDoc}
     */
    public function setModified(\DateTime $dateTime)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setModified', array($dateTime));

        return parent::setModified($dateTime);
    }

    /**
     * {@inheritDoc}
     */
    public function getModified()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getModified', array());

        return parent::getModified();
    }

    /**
     * {@inheritDoc}
     */
    public function getValues()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getValues', array());

        return parent::getValues();
    }

    /**
     * {@inheritDoc}
     */
    public function prePersist(\Doctrine\ORM\Event\LifecycleEventArgs $eventArgs)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'prePersist', array($eventArgs));

        return parent::prePersist($eventArgs);
    }

    /**
     * {@inheritDoc}
     */
    public function preUpdate(\Doctrine\ORM\Event\PreUpdateEventArgs $eventArgs)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'preUpdate', array($eventArgs));

        return parent::preUpdate($eventArgs);
    }

    /**
     * {@inheritDoc}
     */
    public function getResourceId()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getResourceId', array());

        return parent::getResourceId();
    }

}
